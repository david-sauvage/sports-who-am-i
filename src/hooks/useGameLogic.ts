import { useState, useEffect, useCallback, useRef } from 'react';
import type { Player, GameStatus } from '../types';

interface UseGameLogicProps {
    players: Player[];
    clueRevealInterval?: number; // ms
    maxScore?: number;
}

export const useGameLogic = ({
    players,
    clueRevealInterval = 5000,
    maxScore = 1000,
}: UseGameLogicProps) => {
    const [status, setStatus] = useState<GameStatus>('idle');
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [score, setScore] = useState(maxScore);
    const [revealedClueCount, setRevealedClueCount] = useState(0); // 0 = birthdate only? Or 0 clubs.
    const [timer, setTimer] = useState(0);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const currentPlayer = players[currentPlayerIndex] || null;

    const startGame = useCallback(() => {
        setStatus('playing');
        setScore(maxScore);
        setRevealedClueCount(0);
        setTimer(0);
    }, [maxScore]);

    const nextPlayer = useCallback(() => {
        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
        startGame();
    }, [players.length, startGame]);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const submitGuess = useCallback(
        (guess: string) => {
            if (!currentPlayer) return false;

            const normalizedGuess = guess.trim().toLowerCase();
            const normalizedName = currentPlayer.name.toLowerCase();

            // Simple inclusion check or exact match? Name usually requires exact or close.
            // Let's go with exact (case-insensitive) for now.
            if (normalizedName === normalizedGuess) {
                setStatus('won');
                stopTimer();
                return true;
            }
            return false;
        },
        [currentPlayer, stopTimer]
    );

    const giveUp = useCallback(() => {
        setStatus('lost');
        stopTimer();
    }, [stopTimer]);

    // Timer & Score Effect
    // Timer & Score Effect
    useEffect(() => {
        // Accumulator to track ms for 1-second timer updates
        let secondAccumulator = 0;

        if (status === 'playing') {
            timerRef.current = setInterval(() => {
                // Update roughly every 100ms

                // Accumulate time for seconds timer (10 ticks of 100ms = 1000ms)
                secondAccumulator += 100;
                if (secondAccumulator >= 1000) {
                    setTimer((t) => t + 1);
                    secondAccumulator -= 1000;
                }

                // Decay score continuously: 1 point per 100ms (10 points / sec)
                setScore((prev) => {
                    const newScore = Math.max(0, prev - 1);
                    if (newScore === 0) {
                        setStatus('lost');
                    }
                    return newScore;
                });
            }, 100);
        } else {
            stopTimer();
        }

        return () => stopTimer();
    }, [status, stopTimer]);

    // Clue Reveal Effect
    useEffect(() => {
        if (status !== 'playing' || !currentPlayer) return;

        // Check if we need to reveal a new clue based on time
        // We can also just use the timer state.
        // E.g. every 5 seconds.
        const cluesToShow = Math.floor(timer / (clueRevealInterval / 1000));

        // Cap at max clubs
        if (cluesToShow > revealedClueCount && revealedClueCount < currentPlayer.clubs.length) {
            setRevealedClueCount(Math.min(cluesToShow, currentPlayer.clubs.length));
            // user said "score reduces LINEARLY". So no extra penalty for clues.
            // setScore((prev) => Math.max(0, prev - 50));
        }
    }, [timer, clueRevealInterval, revealedClueCount, currentPlayer, status]);

    return {
        status,
        currentPlayer,
        score,
        revealedClueCount,
        startGame,
        submitGuess,
        giveUp,
        nextPlayer,
        timer
    };
};
