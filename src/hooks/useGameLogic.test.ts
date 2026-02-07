import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useGameLogic } from './useGameLogic';
import { players } from '../data/players';

describe('useGameLogic', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('initializes in idle state', () => {
        const { result } = renderHook(() => useGameLogic({ players }));
        expect(result.current.status).toBe('idle');
        expect(result.current.score).toBe(1000);
    });

    it('starts game correctly', () => {
        const { result } = renderHook(() => useGameLogic({ players }));

        act(() => {
            result.current.startGame();
        });

        expect(result.current.status).toBe('playing');
        expect(result.current.currentPlayer).toEqual(players[0]);
    });

    it('decreases score over time', () => {
        const { result } = renderHook(() => useGameLogic({ players }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Score starts at 1000, -10 per second
        expect(result.current.score).toBe(990);
    });

    it('reveals clues over time', () => {
        const { result } = renderHook(() => useGameLogic({ players, clueRevealInterval: 5000 }));

        act(() => {
            result.current.startGame();
        });

        expect(result.current.revealedClueCount).toBe(0);

        // Advance 5 seconds
        act(() => {
            vi.advanceTimersByTime(5000);
        });

        // Should reveal 1 clue. 
        // Logic: 1000 - 50 (5s) = 950. No extra penalty.
        expect(result.current.revealedClueCount).toBe(1);
        expect(result.current.score).toBe(950);
    });

    it('handles correct guess', () => {
        const { result } = renderHook(() => useGameLogic({ players }));

        act(() => {
            result.current.startGame();
        });

        const correctAnswer = players[0].name;
        let success = false;
        act(() => {
            success = result.current.submitGuess(correctAnswer);
        });

        expect(success).toBe(true);
        expect(result.current.status).toBe('won');
    });

    it('handles incorrect guess', () => {
        const { result } = renderHook(() => useGameLogic({ players }));

        act(() => {
            result.current.startGame();
        });

        let success = false;
        act(() => {
            success = result.current.submitGuess('Wrong Name');
        });

        expect(success).toBe(false);
        expect(result.current.status).toBe('playing');
    });
});
