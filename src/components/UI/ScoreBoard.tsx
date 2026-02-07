import { useTranslation } from 'react-i18next';
import styles from './ScoreBoard.module.css';

interface ScoreBoardProps {
    score: number;
    timer: number;
    maxScore?: number;
}

export const ScoreBoard = ({ score, timer, maxScore = 1000 }: ScoreBoardProps) => {
    const { t } = useTranslation();

    const progressPercentage = Math.max(0, Math.min(100, (score / maxScore) * 100));

    return (
        <div className={styles.boardContainer}>
            <div className={styles.board}>
                <div className={styles.scoreItem}>
                    <span className={styles.label}>{t('common.score')}</span>
                    <span className={styles.value}>{score}</span>
                </div>
                <div className={styles.timerItem}>
                    <span className={styles.value}>{timer}s</span>
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
