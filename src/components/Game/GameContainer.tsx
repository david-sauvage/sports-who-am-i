import { useTranslation } from 'react-i18next';
import { useGameLogic } from '../../hooks/useGameLogic';
import { players } from '../../data/players';
import { PlayerCard } from './PlayerCard';
import { ScoreBoard } from '../UI/ScoreBoard';
import { AnswerInput } from './AnswerInput';
import styles from './GameContainer.module.css';

export const GameContainer = () => {
    const { t } = useTranslation();
    const {
        status,
        currentPlayer,
        score,
        revealedClueCount,
        timer,
        startGame,
        submitGuess,
        giveUp,
        nextPlayer
    } = useGameLogic({ players });

    if (status === 'idle') {
        return (
            <div className={styles.container}>
                <h1>{t('title')}</h1>
                <button onClick={startGame} className={styles.primaryButton}>
                    {t('common.submit')} {/* Reusing submit for Start? Should add Start key */}
                    Start Game
                </button>
            </div>
        );
    }

    // Handle other states or if currentPlayer is null (shouldn't happen in playing)
    if (!currentPlayer) return <div>{t('common.loading')}</div>;

    return (
        <div className={styles.container}>
            <ScoreBoard score={score} timer={timer} />

            <div className={styles.cardWrapper}>
                <PlayerCard
                    player={currentPlayer}
                    revealedClueCount={revealedClueCount}
                />

                {status !== 'playing' && (
                    <div className={styles.overlay}>
                        <div className={styles.resultCard}>
                            <h2>
                                {status === 'won'
                                    ? t('game.win', { name: currentPlayer.name })
                                    : t('game.loss', { name: currentPlayer.name })
                                }
                            </h2>
                            <button onClick={nextPlayer} className={styles.primaryButton}>
                                {t('common.next')}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.controls}>
                {status === 'playing' && (
                    <>
                        <AnswerInput onSubmit={submitGuess} />
                        <button onClick={giveUp} className={styles.secondaryButton}>
                            {t('common.giveUp')}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
