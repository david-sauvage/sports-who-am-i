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
        feedback,
        timer,
        startGame,
        submitGuess,
        giveUp
    } = useGameLogic({ players: filteredPlayers });

    const handleStartWithSettings = (settings: GameSettings) => {
        setGameSettings(settings);
        setView('game');
        // We use a small timeout to ensure the memo has updated the players before starting
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

    const containerClasses = `${styles.container} ${feedback ? styles[feedback] : ''}`;

    return (
        <div className={containerClasses}>
            <div className={styles.header}>
                <button onClick={() => setView('settings')} className={styles.backButton}>⚙️</button>
                <ScoreBoard score={score} totalScore={totalScore} />
            </div>

            <div className={styles.cardWrapper}>
                {currentPlayer && (
                    <PlayerCard
                        player={currentPlayer}
                        revealedClueCount={revealedClueCount}
                        showName={status === 'won' || status === 'lost'}
                    />
                )}
            </div>

            <div className={styles.controls}>
                {status === 'playing' ? (
                    <AnswerInput onSubmit={submitGuess} onGiveUp={giveUp} />
                ) : null}
            </div>
        </div>
    );
};
