import { useTranslation } from 'react-i18next';
import styles from './ScoreBoard.module.css';

interface ScoreBoardProps {
    score: number;
    totalScore: number;
    maxScore?: number;
    currentQuestion?: number;
    totalQuestions?: number;
}

export const ScoreBoard = ({ score, totalScore, maxScore = 1000, currentQuestion, totalQuestions }: ScoreBoardProps) => {
    const { t } = useTranslation();

    const progressPercentage = Math.max(0, Math.min(100, (score / maxScore) * 100));

    // Dynamic color: green at 100%, yellow at 50%, red at 0%
    const getProgressColor = (percent: number) => {
        if (percent > 60) return '#22c55e'; // green-500
        if (percent > 30) return '#f59e0b'; // amber-500
        return '#ef4444'; // red-500
    };

    return (
        <div className={styles.boardContainer}>
            <div className={styles.board}>
                <div className={styles.scoreGroup}>
                    <div className={styles.scoreItem}>
                        <span className={styles.label}>{t('settings.totalScore', { score: '' }).split(':')[0]}</span>
                        <span className={`${styles.value} ${styles.total}`}>{totalScore}</span>
                    </div>
                    
                    {currentQuestion && totalQuestions && (
                        <div className={styles.progressIndicator}>
                            {t('game.questionProgress', { 
                                current: currentQuestion, 
                                total: totalQuestions
                            })}
                        </div>
                    )}

                    <div className={`${styles.scoreItem} ${styles.right}`}>
                        <span className={styles.label}>{t('common.score')}</span>
                        <span className={styles.value}>{score}</span>
                    </div>
                </div>
            </div>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ 
                        width: `${progressPercentage}%`,
                        backgroundColor: getProgressColor(progressPercentage)
                    }}
                />
            </div>
        </div>
    );
};
