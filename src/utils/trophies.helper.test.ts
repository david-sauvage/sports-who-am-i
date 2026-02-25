import { describe, it, expect } from 'vitest';
import { createPlayerDiscoveryCheck } from './trophies';
import type { UserStatistics } from './statistics';

describe('createPlayerDiscoveryCheck', () => {
    const baseStats: UserStatistics = {
        gamesPlayed: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalScore: 0,
        foundPlayerIds: [],
        detailed: {
            football: { active: { correct: 0, total: 0 }, historical: { correct: 0, total: 0 } },
            basketball: { active: { correct: 0, total: 0 }, historical: { correct: 0, total: 0 } },
        },
    };

    it('should require all players by default', () => {
        const check = createPlayerDiscoveryCheck(['p1', 'p2']);

        expect(check(baseStats).unlocked).toBe(false);
        expect(check(baseStats).progress).toBe(0);
        expect(check(baseStats).goal).toBe(2);

        const stats1 = { ...baseStats, foundPlayerIds: ['p1'] };
        expect(check(stats1).unlocked).toBe(false);
        expect(check(stats1).progress).toBe(1);

        const stats2 = { ...baseStats, foundPlayerIds: ['p1', 'p2'] };
        expect(check(stats2).unlocked).toBe(true);
        expect(check(stats2).progress).toBe(2);
    });

    it('should support partial matching with minRequired', () => {
        const check = createPlayerDiscoveryCheck(['p1', 'p2', 'p3'], 2);

        expect(check(baseStats).unlocked).toBe(false);
        expect(check(baseStats).goal).toBe(3);

        const stats1 = { ...baseStats, foundPlayerIds: ['p1'] };
        expect(check(stats1).unlocked).toBe(false);
        expect(check(stats1).progress).toBe(1);

        const stats2 = { ...baseStats, foundPlayerIds: ['p1', 'p2'] };
        expect(check(stats2).unlocked).toBe(true);
        expect(check(stats2).progress).toBe(2);
        expect(check(stats2).goal).toBe(3);

        const stats3 = { ...baseStats, foundPlayerIds: ['p1', 'p2', 'p3'] };
        expect(check(stats3).unlocked).toBe(true);
        expect(check(stats3).progress).toBe(3);
    });
});
