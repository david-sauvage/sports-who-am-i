import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameLogic } from '../../hooks/useGameLogic';
import { players } from '../../data/players';
import { PlayerCard } from './PlayerCard';
import { ScoreBoard } from '../UI/ScoreBoard';
import { AnswerInput } from './AnswerInput';
import SettingsScreen from './SettingsScreen';
import type { GameSettings } from '../../types';
import { seededShuffle, generateSeed } from '../../utils/random';
import { generateGameCode } from '../../utils/gameCode';
import styles from './GameContainer.module.css';

export const GameContainer = () => {
    const { t } = useTranslation();
    const [view, setView] = useState<'settings' | 'game'>('settings');
    const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);
    const [gameSeed, setGameSeed] = useState<string>('');
    const [showToast, setShowToast] = useState(false);

    // Memoize filtered players based on settings and seed
    const filteredPlayers = useMemo(() => {
        if (!gameSettings || !gameSeed) return [];

        let filtered = players.filter(p =>
            gameSettings.sports.includes(p.sport) &&
            gameSettings.categories.includes(p.category)
        );

        // Shuffle with seed and slice
        return seededShuffle(filtered, gameSeed).slice(0, gameSettings.questionCount);
    }, [gameSettings, gameSeed]);

    const {
        status,
        currentPlayer,
        score,
        totalScore,
        revealedClueCount,
        feedback,
        startGame,
        submitGuess,
        giveUp
    } = useGameLogic({ players: filteredPlayers });

    const handleStartWithSettings = (settings: GameSettings, seed?: string) => {
        setGameSettings(settings);
        setGameSeed(seed || generateSeed());
        setView('game');
        // We use a small timeout to ensure the memo has updated the players before starting
        setTimeout(() => startGame(), 0);
    };

    const handleCopyCode = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
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
        const gameCode = gameSettings && gameSeed ? generateGameCode(gameSettings, gameSeed) : '';

        return (
            <div className={styles.container}>
                <div className={styles.endCard}>
                    <div className={styles.endIcon}>🎉</div>
                    <h1>{t('settings.gameOver')}</h1>
                    <div className={styles.totalScoreLabel}>
                        {t('settings.totalScore', { score: totalScore })}
                    </div>

                    {gameCode && (
                        <div className={styles.shareSection}>
                            <p>{t('settings.shareCodeMsg')}</p>
                            <div className={styles.codeDisplay} onClick={() => handleCopyCode(gameCode)}>
                                {gameCode}
                                <span className={styles.copyIcon}>📋</span>
                            </div>
                        </div>
                    )}

                    <div className={`${styles.toast} ${showToast ? styles.show : ''}`}>
                        {t('settings.codeCopied')}
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
