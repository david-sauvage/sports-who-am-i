import { useTranslation } from 'react-i18next';
import styles from './ScoreBoard.module.css';

interface ScoreBoardProps {
    score: number;
    totalScore: number;
    maxScore?: number;
}

export const ScoreBoard = ({ score, totalScore, maxScore = 1000 }: ScoreBoardProps) => {
    const { t } = useTranslation();

    const progressPercentage = Math.max(0, Math.min(100, (score / maxScore) * 100));

    return (
        <div className={styles.boardContainer}>
            <div className={styles.board}>
                <div className={styles.scoreGroup}>
                    <div className={styles.scoreItem}>
                        <span className={styles.label}>{t('settings.totalScore', { score: '' }).split(':')[0]}</span>
                        <span className={`${styles.value} ${styles.total}`}>{totalScore}</span>
                    </div>
                    <div className={`${styles.scoreItem} ${styles.right}`}>
                        <span className={styles.label}>{t('common.score')}</span>
                        <span className={styles.value}>{score}</span>
                    </div>
                </div>
            </div>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
        </div>
    );
};
