import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameLogic } from '../../hooks/useGameLogic';
import { players } from '../../data/players';
import { PlayerCard } from './PlayerCard';
import { ScoreBoard } from '../UI/ScoreBoard';
import { AnswerInput } from './AnswerInput';
import SettingsScreen from './SettingsScreen';
import type { GameSettings } from '../../types';
import styles from './GameContainer.module.css';

// Helper to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const GameContainer = () => {
    const { t } = useTranslation();
    const [view, setView] = useState<'settings' | 'game'>('settings');
    const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);

    // Memoize filtered players based on settings
    const filteredPlayers = useMemo(() => {
        if (!gameSettings) return [];

        let filtered = players.filter(p =>
            gameSettings.sports.includes(p.sport) &&
            gameSettings.categories.includes(p.category)
        );

        // Shuffle and slice
        return shuffleArray(filtered).slice(0, gameSettings.questionCount);
    }, [gameSettings]);

    const {
        status,
        currentPlayer,
        score,
        totalScore,
        revealedClueCount,
        timer,
        startGame,
        submitGuess,
        giveUp,
        nextPlayer
    } = useGameLogic({ players: filteredPlayers });

    const handleStartWithSettings = (settings: GameSettings) => {
        setGameSettings(settings);
        setView('game');
        // We use a small timeout to ensure the memo has updated the players before starting
        // Actually startGame can be called in a useEffect or here if we are sure
        setTimeout(() => startGame(), 0);
    };

    if (view === 'settings') {
        return (
            <div className={styles.container}>
                <SettingsScreen onStart={handleStartWithSettings} />
            </div>
        );
    }

    // End Game View
    if (status === 'ended') {
        return (
            <div className={styles.container}>
                <div className={styles.endCard}>
                    <div className={styles.endIcon}>🎉</div>
                    <h1>{t('settings.gameOver')}</h1>
                    <div className={styles.totalScoreLabel}>
                        {t('settings.totalScore', { score: totalScore })}
                    </div>
                    <button onClick={() => setView('settings')} className={styles.primaryButton}>
                        {t('settings.playAgain')}
                    </button>
                </div>
            </div>
        );
    }

    // Handle Game View (Status playing, won, lost)
    if (!currentPlayer && status !== 'idle') return <div>{t('common.loading')}</div>;

    // If game ended (e.g. no more players), we could add an end screen here
    // But nextPlayer currently cycles. If we want a fixed number of questions:
    // ... logic for game end ...

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={() => setView('settings')} className={styles.backButton}>⚙️</button>
                <ScoreBoard score={score} totalScore={totalScore} timer={timer} />
            </div>

            <div className={styles.cardWrapper}>
                {currentPlayer && (
                    <PlayerCard
                        player={currentPlayer}
                        revealedClueCount={revealedClueCount}
                    />
                )}

                {status !== 'playing' && currentPlayer && (
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
