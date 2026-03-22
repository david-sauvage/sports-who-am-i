import { describe, it, expect } from 'vitest';
import { TROPHIES } from './trophies';
import type { UserStatistics } from './statistics';

describe('Splash Brothers Trophy', () => {
    const splashBrothersTrophy = TROPHIES.find(t => t.id === 'splash_brothers');

    const baseStats: UserStatistics = {
        gamesPlayed: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalScore: 0,
        foundPlayerIds: [],
        detailed: {
            football: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
            basketball: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
        },
    };

    it('should be defined', () => {
        expect(splashBrothersTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = splashBrothersTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if only Curry is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-13'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if only Thompson is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-60'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both Curry and Thompson are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-13', 'b-60'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if both are found among others', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'b-13', 'b-1', 'b-60'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Eternal Rivals Trophy', () => {
    const eternalRivalsTrophy = TROPHIES.find(t => t.id === 'eternal_rivals');

    const baseStats: UserStatistics = {
        gamesPlayed: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalScore: 0,
        foundPlayerIds: [],
        detailed: {
            football: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
            basketball: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
        },
    };

    it('should be defined', () => {
        expect(eternalRivalsTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = eternalRivalsTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if only Messi is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-11'] };
        const result = eternalRivalsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if only Ronaldo is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-12'] };
        const result = eternalRivalsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both Messi and Ronaldo are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-11', 'f-12'] };
        const result = eternalRivalsTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Golden Balls Trophy', () => {
    const goldenBallsTrophy = TROPHIES.find(t => t.id === 'golden_balls');

    const baseStats: UserStatistics = {
        gamesPlayed: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalScore: 0,
        foundPlayerIds: [],
        detailed: {
            football: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
            basketball: {
                active: { correct: 0, total: 0 },
                historical: { correct: 0, total: 0 },
            },
        },
    };

    it('should be defined', () => {
        expect(goldenBallsTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = goldenBallsTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(10);
    });

    it('should show progress if 4 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-2', 'f-3', 'f-4'] };
        const result = goldenBallsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(4);
    });

    it('should be unlocked if 10 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: Array.from({ length: 10 }, (_, i) => `f-${i + 1}`) };
        const result = goldenBallsTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(10);
    });

    it('should compute properly even if players from other boundaries or sports are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-2', 'f-48', 'b-1'] };
        const result = goldenBallsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });
});
