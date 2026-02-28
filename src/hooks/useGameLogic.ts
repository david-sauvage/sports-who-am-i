import { useState, useEffect, useCallback, useRef } from 'react';
import type { Player, GameStatus } from '../types';
import { recordAnswer, recordGameEnd } from '../utils/statistics';

interface UseGameLogicProps {
    players: Player[];
    clueRevealInterval?: number; // ms
    initialClueDelay?: number; // ms
    maxScore?: number;
    guessPenalty?: number;
}

// Basic Levenshtein distance for fuzzy matching
const normalizeText = (text: string): string => {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
};

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
    guessPenalty = 100,
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
            recordGameEnd();
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

            const normalizedGuess = normalizeText(guess);
            const normalizedName = normalizeText(currentPlayer.name);
            const nameParts = normalizedName.split(/\s+/);

            // 1. Try full name match
            const fullDistance = getLevenshteinDistance(normalizedName, normalizedGuess);
            const fullTolerance = normalizedName.length < 5 ? 0 : 2;

            if (fullDistance <= fullTolerance) {
                setStatus('won');
                setFeedback('correct');
                setTotalScore(prev => prev + score);
                recordAnswer(true, currentPlayer.sport, currentPlayer.category, score, currentPlayer.id);
                stopTimer();
                return true;
            }

            // 2. Try matching any part of the name (e.g. just the last name)
            // If the name has multiple words, we skip the first word (likely the first name)
            const partsToMatch = nameParts.length > 1 ? nameParts.slice(1) : nameParts;

            for (const part of partsToMatch) {
                if (part.length < 3) continue; // Skip very short parts like "de", "di", etc.

                const partDistance = getLevenshteinDistance(part, normalizedGuess);
                const partTolerance = part.length < 5 ? 0 : 1; // Stricter for parts

                if (partDistance <= partTolerance) {
                    setStatus('won');
                    setFeedback('correct');
                    setTotalScore(prev => prev + score);
                    recordAnswer(true, currentPlayer.sport, currentPlayer.category, score, currentPlayer.id);
                    stopTimer();
                    return true;
                }
            }

            // Wrong guess visual feedback
            setFeedback('wrong');
            setScore(prev => Math.max(0, prev - guessPenalty));
            setTimeout(() => setFeedback(null), 500);

            return false;
        },
        [currentPlayer, status, score, stopTimer, guessPenalty]
    );

    const giveUp = useCallback(() => {
        if (!currentPlayer || status !== 'playing') return;
        setStatus('lost');
        recordAnswer(false, currentPlayer.sport, currentPlayer.category);
        stopTimer();
    }, [status, stopTimer, currentPlayer]);

    // Timer & Score Effect
    useEffect(() => {
        // Accumulator to track ms for 1-second timer updates
        let secondAccumulator = 0;

        if (status === 'playing') {
            timerRef.current = setInterval(() => {
                // Decay score continuously: 1 point per 100ms (10 points / sec)
                setScore((prev) => {
                    const newScore = Math.max(0, prev - 1);
                    if (newScore === 0 && currentPlayer) {
                        setStatus('lost');
                        recordAnswer(false, currentPlayer.sport, currentPlayer.category);
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

    // Auto-advance Effect
    useEffect(() => {
        if (status === 'won' || status === 'lost') {
            const timeout = setTimeout(() => {
                nextPlayer();
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [status, nextPlayer]);

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
