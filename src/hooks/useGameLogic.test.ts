import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useGameLogic } from './useGameLogic';
import type { Player } from '../types';

const mockPlayers: Player[] = [
    {
        id: '1',
        name: 'Zinedine Zidane',
        birthDate: '1972-06-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'AS Cannes', years: '1989-1992' },
            { name: 'Bordeaux', years: '1992-1996' },
            { name: 'Juventus', years: '1996-2001' },
            { name: 'Real Madrid', years: '2001-2006' }
        ]
    },
    {
        id: '2',
        name: 'Tony Parker',
        birthDate: '1982-05-17',
        sport: 'basketball',
        category: 'historical',
        clubs: [
            { name: 'Paris Racing', years: '1999-2001' },
            { name: 'San Antonio Spurs', years: '2001-2018' }
        ]
    }
];

describe('useGameLogic', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('initializes in idle state', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));
        expect(result.current.status).toBe('idle');
        expect(result.current.score).toBe(1000);
    });

    it('starts game correctly', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        expect(result.current.status).toBe('playing');
        expect(result.current.currentPlayer).toEqual(mockPlayers[0]);
    });

    it('decreases score over time', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Score starts at 1000, -10 per second
        expect(result.current.score).toBe(990);
    });

    it('reveals clues over time (with faster first clue and shorter interval)', () => {
        const { result } = renderHook(() => useGameLogic({
            players: mockPlayers,
            clueRevealInterval: 5000,
            initialClueDelay: 3000
        }));

        act(() => {
            result.current.startGame();
        });

        expect(result.current.revealedClueCount).toBe(0);

        // Advance 3 seconds -> 1st clue
        act(() => {
            vi.advanceTimersByTime(3000);
        });
        expect(result.current.revealedClueCount).toBe(1);

        // Advance another 2 seconds (total 5s) -> still 1 clue (only 2s passed since 1st)
        act(() => {
            vi.advanceTimersByTime(2000);
        });
        expect(result.current.revealedClueCount).toBe(1);

        // Advance another 3 seconds (total 8s) -> 2nd clue (initial 3s + 5s interval)
        act(() => {
            vi.advanceTimersByTime(3000);
        });
        expect(result.current.revealedClueCount).toBe(2);
    });

    it('handles correct guess', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        const correctAnswer = mockPlayers[0].name;
        let success = false;
        act(() => {
            success = result.current.submitGuess(correctAnswer);
        });

        expect(success).toBe(true);
        expect(result.current.status).toBe('won');
    });

    it('handles incorrect guess', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

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

    it('accepts close typos', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        // mockPlayers[0] is "Zinedine Zidane" (15 chars) -> 2 errors allowed
        let success = false;
        act(() => {
            // "Zinedin Zidane" (1 missing e) -> 1 distance
            success = result.current.submitGuess("Zinedin Zidane");
        });
        expect(success).toBe(true);
        expect(result.current.status).toBe('won');
    });

    it('rejects too many typos', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        let success = false;
        act(() => {
            // "Zin Zidane" -> many missing
            success = result.current.submitGuess("Zin Zidane");
        });
        expect(success).toBe(false);
        expect(result.current.status).toBe('playing');
    });

    it('handles give up', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            result.current.giveUp();
        });

        expect(result.current.status).toBe('lost');
    });

    it('handles score reaching zero', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers, maxScore: 10 }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // 10 score - 10 per sec = 0
        expect(result.current.score).toBe(0);
        expect(result.current.status).toBe('lost');
    });

    it('auto-advances to next player after winning', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            result.current.submitGuess(mockPlayers[0].name);
        });

        expect(result.current.status).toBe('won');
        expect(result.current.currentPlayer).toEqual(mockPlayers[0]);

        // Advance 1.5s
        act(() => {
            vi.advanceTimersByTime(1500);
        });

        expect(result.current.currentPlayer).toEqual(mockPlayers[1]);
        expect(result.current.status).toBe('playing');
    });

    it('ends game after last player', () => {
        const { result } = renderHook(() => useGameLogic({ players: [mockPlayers[0]] }));

        act(() => {
            result.current.startGame();
        });

        act(() => {
            result.current.submitGuess(mockPlayers[0].name);
        });

        // Advance 1.5s
        act(() => {
            vi.advanceTimersByTime(1500);
        });

        expect(result.current.status).toBe('ended');
    });

    it('accepts just the last name', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        // Current player is "Zinedine Zidane"
        let success = false;
        act(() => {
            success = result.current.submitGuess("Zidane");
        });
        expect(success).toBe(true);
    });

    it('is accent-insensitive', () => {
        const pWithAccent: Player = {
            id: '3',
            name: 'Pelé',
            birthDate: '1940-10-23',
            sport: 'football',
            category: 'historical',
            clubs: [{ name: 'Santos', years: '1956-1974' }]
        };
        const { result } = renderHook(() => useGameLogic({ players: [pWithAccent] }));

        act(() => {
            result.current.startGame();
        });

        let success = false;
        act(() => {
            // Typing "pele" for "Pelé"
            success = result.current.submitGuess("pele");
        });
        expect(success).toBe(true);
    });

    it('rejects irrelevant parts or just the first name', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        // Current player is "Zinedine Zidane"
        let success = false;
        act(() => {
            // "Zinedine" is the first name, should be rejected as partial match
            success = result.current.submitGuess("Zinedine");
        });
        expect(success).toBe(false);

        act(() => {
            // "Zin" is too short
            success = result.current.submitGuess("Zin");
        });
        expect(success).toBe(false);
    });

    it('still accepts full name even if it includes the first name', () => {
        const { result } = renderHook(() => useGameLogic({ players: mockPlayers }));

        act(() => {
            result.current.startGame();
        });

        let success = false;
        act(() => {
            success = result.current.submitGuess("Zinedine Zidane");
        });
        expect(success).toBe(true);
    });
});
