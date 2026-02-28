import { describe, it, expect } from 'vitest';
import { TROPHIES } from './trophies';
import type { UserStatistics } from './statistics';

describe('Sport Fan Trophies', () => {
    const footballFanTrophy = TROPHIES.find(t => t.id === 'football_fan');
    const basketballFanTrophy = TROPHIES.find(t => t.id === 'basketball_fan');

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

    describe('Football Fan Trophy', () => {
        it('should not be unlocked if total is 50 but correct is 0', () => {
            const stats = {
                ...baseStats,
                detailed: {
                    ...baseStats.detailed,
                    football: {
                        active: { correct: 0, total: 50 },
                        historical: { correct: 0, total: 0 },
                    }
                }
            };
            const result = footballFanTrophy!.check(stats);
            expect(result.unlocked).toBe(false);
            expect(result.progress).toBe(0);
        });

        it('should be unlocked if correct is 50', () => {
            const stats = {
                ...baseStats,
                detailed: {
                    ...baseStats.detailed,
                    football: {
                        active: { correct: 25, total: 50 },
                        historical: { correct: 25, total: 50 },
                    }
                }
            };
            const result = footballFanTrophy!.check(stats);
            expect(result.unlocked).toBe(true);
            expect(result.progress).toBe(50);
        });
    });

    describe('Basketball Fan Trophy', () => {
        it('should not be unlocked if total is 50 but correct is 0', () => {
            const stats = {
                ...baseStats,
                detailed: {
                    ...baseStats.detailed,
                    basketball: {
                        active: { correct: 0, total: 50 },
                        historical: { correct: 0, total: 0 },
                    }
                }
            };
            const result = basketballFanTrophy!.check(stats);
            expect(result.unlocked).toBe(false);
            expect(result.progress).toBe(0);
        });

        it('should be unlocked if correct is 50', () => {
            const stats = {
                ...baseStats,
                detailed: {
                    ...baseStats.detailed,
                    basketball: {
                        active: { correct: 50, total: 100 },
                        historical: { correct: 0, total: 0 },
                    }
                }
            };
            const result = basketballFanTrophy!.check(stats);
            expect(result.unlocked).toBe(true);
            expect(result.progress).toBe(50);
        });
    });
});
