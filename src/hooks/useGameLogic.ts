import { useState, useEffect, useCallback, useRef } from 'react';
import type { Player, GameStatus } from '../types';

interface UseGameLogicProps {
    players: Player[];
    clueRevealInterval?: number; // ms
    initialClueDelay?: number; // ms
    maxScore?: number;
}

// Basic Levenshtein distance for fuzzy matching
const getLevenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = Array.from({ length: a.length + 1 }, () =>
        new Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[a.length][b.length];
};

export const useGameLogic = ({
    players,
    clueRevealInterval = 5000,
    initialClueDelay = 3000,
    maxScore = 1000,
}: UseGameLogicProps) => {
    const [status, setStatus] = useState<GameStatus>('idle');
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [score, setScore] = useState(maxScore);
    const [totalScore, setTotalScore] = useState(0);
    const [revealedClueCount, setRevealedClueCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const currentPlayer = players[currentPlayerIndex] || null;

    const startGame = useCallback(() => {
        setStatus('playing');
        setScore(maxScore);
        setRevealedClueCount(0);
        setTimer(0);
        setCurrentPlayerIndex(0);
        setTotalScore(0);
        setFeedback(null);
    }, [maxScore]);

    const startNextRound = useCallback(() => {
        setStatus('playing');
        setScore(maxScore);
        setRevealedClueCount(0);
        setTimer(0);
        setFeedback(null);
    }, [maxScore]);

    const nextPlayer = useCallback(() => {
        const nextIndex = currentPlayerIndex + 1;
        if (nextIndex >= players.length) {
            setStatus('ended');
            return;
        }
        setCurrentPlayerIndex(nextIndex);
        startNextRound();
    }, [currentPlayerIndex, players.length, startNextRound]);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const submitGuess = useCallback(
        (guess: string) => {
            if (!currentPlayer || status !== 'playing') return false;

            const normalizedGuess = guess.trim().toLowerCase();
            const normalizedName = currentPlayer.name.toLowerCase();

            // Fuzzy match logic
            const distance = getLevenshteinDistance(normalizedName, normalizedGuess);
            // Allow 2 errors for 5+ chars, 0 for short words
            const tolerance = normalizedName.length < 5 ? 0 : 2;

            if (distance <= tolerance) {
                setStatus('won');
                setFeedback('correct');
                setTotalScore(prev => prev + score);
                stopTimer();
                return true;
            }

            // Wrong guess visual feedback
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 500);

            return false;
        },
        [currentPlayer, status, score, stopTimer]
    );

    const giveUp = useCallback(() => {
        if (status !== 'playing') return;
        setStatus('lost');
        stopTimer();
    }, [status, stopTimer]);

    // Timer & Score Effect
    useEffect(() => {
        // Accumulator to track ms for 1-second timer updates
        let secondAccumulator = 0;

        if (status === 'playing') {
            timerRef.current = setInterval(() => {
                // Decay score continuously: 1 point per 100ms (10 points / sec)
                setScore((prev) => {
                    const newScore = Math.max(0, prev - 1);
                    if (newScore === 0) {
                        setStatus('lost');
                    }
                    return newScore;
                });

                secondAccumulator += 100;
                if (secondAccumulator >= 1000) {
                    setTimer((t) => t + 1);
                    secondAccumulator -= 1000;
                }
            }, 100);
        } else {
            stopTimer();
        }

        return () => stopTimer();
    }, [status, stopTimer]);

    // Clue Reveal Effect
    useEffect(() => {
        if (status !== 'playing' || !currentPlayer) return;

        const timeElapsedMs = timer * 1000;
        let cluesToShow = 0;

        if (timeElapsedMs >= initialClueDelay) {
            cluesToShow = 1 + Math.floor((timeElapsedMs - initialClueDelay) / clueRevealInterval);
        }

        // Cap at max clubs
        if (cluesToShow > revealedClueCount && revealedClueCount < currentPlayer.clubs.length) {
            setRevealedClueCount(Math.min(cluesToShow, currentPlayer.clubs.length));
        }
    }, [timer, clueRevealInterval, initialClueDelay, revealedClueCount, currentPlayer, status]);

    return {
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
        timer
    };
};
