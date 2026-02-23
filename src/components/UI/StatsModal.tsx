import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStatistics, resetStatistics } from '../../utils/statistics';
import { useTrophies } from '../../context/TrophyContext';
import type { CategoryStats } from '../../utils/statistics';
import styles from './StatsModal.module.css';

interface StatsModalProps {
    onClose: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({ onClose }) => {
    const { t } = useTranslation();
    const { resetTrophyState } = useTrophies();
    const [stats, setStats] = useState(getStatistics());
    const [confirmReset, setConfirmReset] = useState(false);

    const accuracy = stats.totalQuestions > 0
        ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
        : 0;

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

    const renderProgressItem = (label: string, correct: number, total: number, isSubItem = false) => {
        const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
        return (
            <div className={`${styles.progressItem} ${isSubItem ? styles.subItem : ''}`} key={label}>
                <div className={styles.progressLabelRow}>
                    <span className={styles.progressLabel}>{label}</span>
                    <div className={styles.progressTextValues}>
                        <span className={styles.progressFraction}>{correct}/{total}</span>
                        <span className={styles.progressValue}>{percent}%</span>
                    </div>
                </div>
                <div className={styles.progressBarBg}>
                    <div
                        className={`${styles.progressBarFill} ${isSubItem ? styles.subFill : ''}`}
                        style={{ width: `${percent}%` }}
                    />
                </div>
            </div>
        );
    };

    const renderSportSection = (sport: string, categories: Record<string, CategoryStats>) => {
        // Calculate sport total
        const total = Object.values(categories).reduce((acc, curr) => acc + curr.total, 0);
        const correct = Object.values(categories).reduce((acc, curr) => acc + curr.correct, 0);

        return (
            <div className={styles.sportGroup} key={sport}>
                <div className={styles.sportHeader}>
                    {renderProgressItem(t(`sports.${sport}`), correct, total)}
                </div>
                <div className={styles.categorySubGrid}>
                    {Object.entries(categories).map(([cat, data]) =>
                        renderProgressItem(t(`settings.${cat}`), data.correct, data.total, true)
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <header className={styles.header}>
                    <h2>{t('stats.title')}</h2>
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
                    <div className={styles.mainStat}>
                        <div className={styles.accuracyCircle}>
                            <span className={styles.accuracyValue}>{accuracy}%</span>
                            <span className={styles.accuracyLabel}>{t('stats.accuracy')}</span>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>{t('stats.gamesPlayed')}</span>
                            <span className={styles.statValue}>{stats.gamesPlayed}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>{t('stats.totalQuestions')}</span>
                            <span className={styles.statValue}>{stats.totalQuestions}</span>
                        </div>
                    </div>

                    <div className={styles.detailedStats}>
                        {Object.entries(stats.detailed).map(([sport, categories]) =>
                            renderSportSection(sport, categories)
                        )}
                    </div>

                    <div className={styles.totalScoreSection}>
                        <span className={styles.totalScoreLabel}>{t('stats.totalScore')}</span>
                        <span className={styles.totalScoreValue}>{stats.totalScore.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsModal;
