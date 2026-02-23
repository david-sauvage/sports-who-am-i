import React from 'react';
import { useTranslation } from 'react-i18next';
import { getStatistics, resetStatistics } from '../../utils/statistics';
import { useTrophies } from '../../context/TrophyContext';
import { TROPHIES } from '../../utils/trophies';
import styles from './TrophyModal.module.css';

interface TrophyModalProps {
    onClose: () => void;
}

const TrophyModal: React.FC<TrophyModalProps> = ({ onClose }) => {
    const { t } = useTranslation();
    const { resetTrophyState } = useTrophies();
    const [stats, setStats] = React.useState(getStatistics());
    const [confirmReset, setConfirmReset] = React.useState(false);

    const handleReset = () => {
        if (confirmReset) {
            resetStatistics();
            resetTrophyState();
            setStats(getStatistics());
            setConfirmReset(false);
        } else {
            setConfirmReset(true);
            setTimeout(() => setConfirmReset(false), 3000);
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <header className={styles.header}>
                    <h2>{t('trophies.title')}</h2>
                    <div className={styles.headerActions}>
                        <button
                            className={`${styles.resetButton} ${confirmReset ? styles.dangerous : ''}`}
                            onClick={handleReset}
                            title={t('stats.reset')}
                        >
                            {confirmReset ? t('stats.resetConfirm') : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="1 4 1 10 7 10" />
                                    <polyline points="23 20 23 14 17 14" />
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                                </svg>
                            )}
                        </button>
                        <button className={styles.closeButton} onClick={onClose}>&times;</button>
                    </div>
                </header>

                <div className={styles.content}>
                    {TROPHIES.map((trophy) => {
                        const { unlocked, progress, goal } = trophy.check(stats);
                        const progressPercent = Math.round((progress / goal) * 100);

                        return (
                            <div
                                key={trophy.id}
                                className={`${styles.trophyCard} ${styles[trophy.category]} ${unlocked ? styles.unlocked : styles.locked}`}
                            >
                                <div className={styles.trophyIconContainer}>
                                    {trophy.icon}
                                </div>
                                <div className={styles.trophyInfo}>
                                    <span className={styles.trophyName}>{t(`trophies.${trophy.id}.name`)}</span>
                                    <span className={styles.trophyDesc}>{t(`trophies.${trophy.id}.description`)}</span>

                                    {!unlocked && (
                                        <div className={styles.progressContainer}>
                                            <div className={styles.progressWrapper}>
                                                <div
                                                    className={styles.progressBar}
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>
                                            <span className={styles.progressText}>
                                                {progress.toLocaleString()} / {goal.toLocaleString()}
                                            </span>
                                        </div>
                                    )}
                                    {unlocked && (
                                        <div className={styles.progressText}>
                                            {t('common.completed', 'Unlocked!')}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrophyModal;
