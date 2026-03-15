import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameLogic } from '../../hooks/useGameLogic';
import { players } from '../../data/players';
import { PlayerCard } from './PlayerCard';
import { ScoreBoard } from '../UI/ScoreBoard';
import { AnswerInput } from './AnswerInput';
import SettingsScreen from './SettingsScreen';
import type { GameSettings } from '../../types';
import { seededShuffle, generateSeed } from '../../utils/random';

import { saveDailyChallengeResult } from '../../utils/dailyChallenge';
import { useTrophies } from '../../context/TrophyContext';
import styles from './GameContainer.module.css';

export const GameContainer = () => {
    const { t } = useTranslation();
    const { checkNewTrophies } = useTrophies();
    const [view, setView] = useState<'settings' | 'game'>('settings');
    const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);
    const [gameSeed, setGameSeed] = useState<string>('');

    const [isDailyChallenge, setIsDailyChallenge] = useState(false);

    // Memoize filtered players based on settings and seed
    const filteredPlayers = useMemo(() => {
        if (!gameSettings || !gameSeed) return [];

        const filtered = players.filter(p =>
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
        giveUp,
        nextPlayer,
        history,
        currentPlayerIndex,
    } = useGameLogic({ players: filteredPlayers });

    // Check for trophies whenever the round or game status changes
    useEffect(() => {
        if (status === 'won' || status === 'lost' || status === 'ended') {
            checkNewTrophies();
        }
        // Save daily challenge result when the game ends
        if (status === 'ended' && isDailyChallenge) {
            saveDailyChallengeResult(totalScore);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDailyChallenge(false);
        }
    }, [status, checkNewTrophies, isDailyChallenge, totalScore]);

    const handleStartWithSettings = (settings: GameSettings, seed?: string, isDaily?: boolean) => {
        setGameSettings(settings);
        setGameSeed(seed || generateSeed());
        setIsDailyChallenge(!!isDaily);
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

                    {history.length > 0 && (
                        <div className={styles.historySection}>
                            <h3 className={styles.historyTitle}>{t('settings.historyTitle')}</h3>
                            <div className={styles.historyList}>
                                {history.map((item, index) => (
                                    <div key={`${item.player.id}-${index}`} className={styles.historyItem}>
                                        <div className={styles.historyPlayerInfo}>
                                            <span className={styles.historyIcon}>
                                                {item.won ? '✅' : '❌'}
                                            </span>
                                            <span className={styles.historyPlayerName}>
                                                {item.player.name}
                                            </span>
                                        </div>
                                        <div className={`${styles.historyScore} ${item.won ? styles.historyScorePos : styles.historyScoreZero}`}>
                                            {item.won ? `+${item.score}` : '0'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


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
                <button onClick={() => setView('settings')} className={styles.backButton} title="Paramètres">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </button>



                <ScoreBoard 
                    score={score} 
                    totalScore={totalScore} 
                    currentQuestion={currentPlayerIndex + 1}
                    totalQuestions={gameSettings?.questionCount || 10}
                />
            </div>

            <div key={currentPlayer.id} className={styles.cardWrapper}>
                {currentPlayer && (
                    <PlayerCard
                        player={currentPlayer}
                        revealedClueCount={revealedClueCount}
                        showName={status === 'won' || status === 'lost'}
                        won={status === 'won'}
                        questionScore={score}
                        onNext={status === 'won' || status === 'lost' ? nextPlayer : undefined}
                        nextLabel={t('common.next')}
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
