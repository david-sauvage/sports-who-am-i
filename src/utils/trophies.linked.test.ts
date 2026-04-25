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
        const stats = { ...baseStats, foundPlayerIds: ['b-31'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if only Thompson is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-59'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both Curry and Thompson are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-31', 'b-59'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if both are found among others', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'b-31', 'b-1', 'b-59'] };
        const result = splashBrothersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Cleveland This is for you Trophy', () => {
    const clevelandTrophy = TROPHIES.find(t => t.id === 'cleveland_this_is_for_you');

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
        expect(clevelandTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = clevelandTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only LeBron is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28'] };
        const result = clevelandTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28', 'b-60'] };
        const result = clevelandTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if LeBron, Kyrie and Love are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28', 'b-60', 'b-61'] };
        const result = clevelandTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all three are found among others', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'b-28', 'b-1', 'b-60', 'b-61'] };
        const result = clevelandTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Los Tres Amigos Trophy', () => {
    const losTresAmigosTrophy = TROPHIES.find(t => t.id === 'los_tres_amigos');

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
        expect(losTresAmigosTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = losTresAmigosTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only LeBron is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28'] };
        const result = losTresAmigosTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28', 'b-62'] };
        const result = losTresAmigosTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if LeBron, Wade and Bosh are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-28', 'b-62', 'b-63'] };
        const result = losTresAmigosTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all three are found among others', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'b-28', 'b-1', 'b-62', 'b-63'] };
        const result = losTresAmigosTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Dream Team Trophy', () => {
    const dreamTeamTrophy = TROPHIES.find(t => t.id === 'dream_team');

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
        expect(dreamTeamTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = dreamTeamTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only Jordan is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14'] };
        const result = dreamTeamTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14', 'b-15'] };
        const result = dreamTeamTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if Jordan, Magic and Bird are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14', 'b-15', 'b-16'] };
        const result = dreamTeamTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all three are found among others', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'b-14', 'b-1', 'b-15', 'b-16'] };
        const result = dreamTeamTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('11 vs 100 Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === '11_vs_100');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-3'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-3', 'b-4'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Lob City Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'lob_city');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-67'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-68', 'b-69'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-67', 'b-68', 'b-69'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Gregg Popovich Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'gregg_popovich');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-23'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-23', 'b-64'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-23', 'b-64', 'b-65'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('The Process Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'the_process');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-36'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-36', 'b-66'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Eleven Rings Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'eleven_rings');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-70'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-70', 'b-16'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-70', 'b-16', 'b-27'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('The Last Dance Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'the_last_dance');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(4);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-16'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-70', 'b-16', 'b-71'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all four are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-70', 'b-16', 'b-71', 'b-42'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(4);
    });
});

describe('The Original Big 3 Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'the_original_big_3');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14', 'b-72'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-14', 'b-72', 'b-73'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Bad Boys Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'bad_boys');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-42'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-42', 'b-74'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-42', 'b-74', 'b-75'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Showtime Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'showtime');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(4);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-8'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-8', 'b-15', 'b-41'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all four are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-8', 'b-15', 'b-41', 'b-76'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(4);
    });
});

describe('Grit and Grind Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'grit_and_grind');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-51'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-51', 'b-99'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-51', 'b-99', 'b-100'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('7 Seconds or Less Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'seven_seconds_or_less');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-25'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-25', 'b-101'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-25', 'b-101', 'b-103'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Open Mic Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'open_mic');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-17'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-17', 'b-21'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-17', 'b-21', 'b-94'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Clipboard Masterminds Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'clipboard_masterminds');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-121'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-121', 'b-115'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-121', 'b-115', 'b-70'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('We The North Trophy', () => {
    const trophy = TROPHIES.find(t => t.id === 'we_the_north');

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
        expect(trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if only one is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-102'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if two are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-102', 'b-53'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all three are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-102', 'b-51', 'b-53'] };
        const result = trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
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
        const stats = { ...baseStats, foundPlayerIds: ['f-1'] };
        const result = eternalRivalsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should show progress if only Ronaldo is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-2'] };
        const result = eternalRivalsTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if both Messi and Ronaldo are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-2'] };
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

describe('MVP Trophy', () => {
    const mvpTrophy = TROPHIES.find(t => t.id === 'mvp');

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
        expect(mvpTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = mvpTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(10);
    });

    it('should show progress if 4 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-1', 'b-2', 'b-3', 'b-4'] };
        const result = mvpTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(4);
    });

    it('should be unlocked if 10 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: Array.from({ length: 10 }, (_, i) => `b-${i + 1}`) };
        const result = mvpTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(10);
    });

    it('should compute properly even if players from other boundaries or sports are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-1', 'b-2', 'b-38', 'f-1'] };
        const result = mvpTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });
});

describe('DPOY Trophy', () => {
    const dpoyTrophy = TROPHIES.find(t => t.id === 'dpoy');

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
        expect(dpoyTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = dpoyTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(10);
    });

    it('should show progress if 4 DPOY players are found (mixed default and specific IDs)', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-38', 'b-39', 'b-16', 'b-24'] }; // 2 from b-38..58, 2 from explicit ones
        const result = dpoyTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(4);
    });

    it('should be unlocked if 10 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-38', 'b-39', 'b-40', 'b-41', 'b-42', 'b-43', 'b-44', 'b-45', 'b-16', 'b-24'] };
        const result = dpoyTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(10);
    });

    it('should compute properly even if players from other categories or sports are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-38', 'b-24', 'b-1', 'f-1'] };
        const result = dpoyTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });
});

describe('Sang et Or Trophy', () => {
    const sangEtOrTrophy = TROPHIES.find(t => t.id === 'sang_et_or');

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
        expect(sangEtOrTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = sangEtOrTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 1 is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-48'] };
        const result = sangEtOrTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-48', 'f-49', 'f-50'] };
        const result = sangEtOrTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Le Périple Rouge Trophy', () => {
    const peripleRougeTrophy = TROPHIES.find(t => t.id === 'periple_rouge');

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
        expect(peripleRougeTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = peripleRougeTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(4);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-51', 'f-52'] };
        const result = peripleRougeTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 4 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-51', 'f-52', 'f-53', 'f-54'] };
        const result = peripleRougeTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(4);
    });
});

describe('Gones Trophy', () => {
    const gonesTrophy = TROPHIES.find(t => t.id === 'gones');

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
        expect(gonesTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = gonesTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-55', 'f-57'] };
        const result = gonesTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-56', 'f-58', 'f-59'] };
        const result = gonesTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });

    it('should have progress 5 but goal 3 when 5 players are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-55', 'f-56', 'f-57', 'f-58', 'f-59'] };
        const result = gonesTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
        expect(result.goal).toBe(3);
    });
});

describe('Le Miracle d\'Istanbul Trophy', () => {
    const istanbulTrophy = TROPHIES.find(t => t.id === 'miracle_istanbul');

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
        expect(istanbulTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = istanbulTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-60', 'f-61'] };
        const result = istanbulTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-60', 'f-61', 'f-62'] };
        const result = istanbulTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('A jamais les premiers Trophy', () => {
    const aJamaisLesPremiersTrophy = TROPHIES.find(t => t.id === 'a_jamais_les_premiers');

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
        expect(aJamaisLesPremiersTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = aJamaisLesPremiersTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-63', 'f-64'] };
        const result = aJamaisLesPremiersTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-63', 'f-64', 'f-65'] };
        const result = aJamaisLesPremiersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });

    it('should have progress 5 but goal 3 when 5 players are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-63', 'f-64', 'f-65', 'f-66', 'f-67'] };
        const result = aJamaisLesPremiersTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
        expect(result.goal).toBe(3);
    });
});

describe('Fergie Time Trophy', () => {
    const fergieTimeTrophy = TROPHIES.find(t => t.id === 'fergie_time');

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
        expect(fergieTimeTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = fergieTimeTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if 1 is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-68'] };
        const result = fergieTimeTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-68', 'f-69'] };
        const result = fergieTimeTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Galactiques Trophy', () => {
    const galactiquesTrophy = TROPHIES.find(t => t.id === 'galactiques');

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

    it('should be defined', () => {
        expect(galactiquesTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = galactiquesTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(4);
    });

    it('should be unlocked if 4 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-12', 'f-14', 'f-16', 'f-70'] };
        const result = galactiquesTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(4);
    });
});

describe('Mourir Tranquille Trophy', () => {
    const mourirTranquilleTrophy = TROPHIES.find(t => t.id === 'mourir_tranquille');

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

    it('should be defined', () => {
        expect(mourirTranquilleTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = mourirTranquilleTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(5);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-16', 'f-63'] };
        const result = mourirTranquilleTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all 5 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-16', 'f-63', 'f-66', 'f-71', 'f-72'] };
        const result = mourirTranquilleTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
    });
});

describe('Seconde Etoile Trophy', () => {
    const secondeEtoileTrophy = TROPHIES.find(t => t.id === 'seconde_etoile');

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

    it('should be defined', () => {
        expect(secondeEtoileTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = secondeEtoileTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(5);
    });

    it('should show progress if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-73', 'f-74', 'f-75'] };
        const result = secondeEtoileTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if all 5 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-73', 'f-74', 'f-75', 'f-76', 'f-77'] };
        const result = secondeEtoileTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
    });
});

describe('Amunt Valencia Trophy', () => {
    const amuntValenciaTrophy = TROPHIES.find(t => t.id === 'amunt_valencia');

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

    it('should be defined', () => {
        expect(amuntValenciaTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = amuntValenciaTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-78', 'f-79'] };
        const result = amuntValenciaTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if all 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-78', 'f-79', 'f-80'] };
        const result = amuntValenciaTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Hala Madrid Trophy', () => {
    const halaMadridTrophy = TROPHIES.find(t => t.id === 'hala_madrid');

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

    it('should be defined', () => {
        expect(halaMadridTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = halaMadridTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(5);
    });

    it('should show progress if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-2', 'f-16', 'f-45'] };
        const result = halaMadridTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if 5 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-2', 'f-16', 'f-45', 'f-81', 'f-82'] };
        const result = halaMadridTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
    });

    it('should show progress 8 but goal 5 when all 8 players are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-2', 'f-4', 'f-16', 'f-45', 'f-81', 'f-82', 'f-83', 'f-84'] };
        const result = halaMadridTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(8);
        expect(result.goal).toBe(5);
    });
});

describe('Visca Barça Trophy', () => {
    const viscaBarcaTrophy = TROPHIES.find(t => t.id === 'visca_barca');

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

    it('should be defined', () => {
        expect(viscaBarcaTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = viscaBarcaTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(5);
    });

    it('should show progress if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-89', 'f-85'] };
        const result = viscaBarcaTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(3);
    });

    it('should be unlocked if 5 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-7', 'f-85', 'f-86', 'f-87'] };
        const result = viscaBarcaTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
    });

    it('should show progress 9 but goal 5 when all 9 players are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-1', 'f-7', 'f-15', 'f-33', 'f-85', 'f-86', 'f-87', 'f-88', 'f-89'] };
        const result = viscaBarcaTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(9);
        expect(result.goal).toBe(5);
    });
});

describe('9 Juillet Trophy', () => {
    const neufJuilletTrophy = TROPHIES.find(t => t.id === '9_juillet');

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

    it('should be defined', () => {
        expect(neufJuilletTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = neufJuilletTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if 1 is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-16'] };
        const result = neufJuilletTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-16', 'f-90'] };
        const result = neufJuilletTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('La Main de Dieu Trophy', () => {
    const mainDeDieuTrophy = TROPHIES.find(t => t.id === 'main_de_dieu');

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

    it('should be defined', () => {
        expect(mainDeDieuTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = mainDeDieuTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if 1 is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-92'] };
        const result = mainDeDieuTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-91', 'f-92'] };
        const result = mainDeDieuTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Scapulaire Trophy', () => {
    const scapulaireTrophy = TROPHIES.find(t => t.id === 'scapulaire');

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

    it('should be defined', () => {
        expect(scapulaireTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = scapulaireTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-93', 'f-94'] };
        const result = scapulaireTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-93', 'f-94', 'f-95'] };
        const result = scapulaireTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Siempre con nosotros Trophy', () => {
    const siempreConNosotrosTrophy = TROPHIES.find(t => t.id === 'siempre_con_nosotros');

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

    it('should be defined', () => {
        expect(siempreConNosotrosTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = siempreConNosotrosTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-85', 'f-96'] };
        const result = siempreConNosotrosTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found (Iniesta, Villa, Casillas)', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-85', 'f-96', 'f-82'] };
        const result = siempreConNosotrosTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Class of 92 Trophy', () => {
    const classOf92Trophy = TROPHIES.find(t => t.id === 'class_of_92');

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

    it('should be defined', () => {
        expect(classOf92Trophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = classOf92Trophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-70', 'f-99'] };
        const result = classOf92Trophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found (Beckham, Giggs, Scholes)', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-70', 'f-99', 'f-100'] };
        const result = classOf92Trophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Aranycsapat Trophy', () => {
    const aranycsapatTrophy = TROPHIES.find(t => t.id === 'aranycsapat');

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

    it('should be defined', () => {
        expect(aranycsapatTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = aranycsapatTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-101', 'f-102'] };
        const result = aranycsapatTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found (Hidegkuti, Grosics, Puskás)', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-101', 'f-102', 'f-103'] };
        const result = aranycsapatTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Dogues Trophy', () => {
    const doguesTrophy = TROPHIES.find(t => t.id === 'dogues');

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

    it('should be defined', () => {
        expect(doguesTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = doguesTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(3);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-106', 'f-107'] };
        const result = doguesTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 3 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-106', 'f-107', 'f-108'] };
        const result = doguesTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(3);
    });
});

describe('Football Total Trophy', () => {
    const footballTotalTrophy = TROPHIES.find(t => t.id === 'football_total');

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

    it('should be defined', () => {
        expect(footballTotalTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = footballTotalTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(2);
    });

    it('should show progress if 1 is found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-33'] };
        const result = footballTotalTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(1);
    });

    it('should be unlocked if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-33', 'f-109'] };
        const result = footballTotalTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(2);
    });
});

describe('Carré Magique Trophy', () => {
    const carreMagiqueTrophy = TROPHIES.find(t => t.id === 'carre_magique');

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

    it('should be defined', () => {
        expect(carreMagiqueTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = carreMagiqueTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(4);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-26', 'f-110'] };
        const result = carreMagiqueTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 4 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['f-26', 'f-110', 'f-111', 'f-112'] };
        const result = carreMagiqueTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(4);
    });
});

describe('Bleu Blanc Rouge Trophy', () => {
    const bleuBlancRougeTrophy = TROPHIES.find(t => t.id === 'bleu_blanc_rouge');

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

    it('should be defined', () => {
        expect(bleuBlancRougeTrophy).toBeDefined();
    });

    it('should not be unlocked if no players are found', () => {
        const result = bleuBlancRougeTrophy!.check(baseStats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(0);
        expect(result.goal).toBe(5);
    });

    it('should show progress if 2 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-64', 'b-55'] };
        const result = bleuBlancRougeTrophy!.check(stats);
        expect(result.unlocked).toBe(false);
        expect(result.progress).toBe(2);
    });

    it('should be unlocked if 5 are found', () => {
        const stats = { ...baseStats, foundPlayerIds: ['b-64', 'b-55', 'b-122', 'b-147', 'b-148'] };
        const result = bleuBlancRougeTrophy!.check(stats);
        expect(result.unlocked).toBe(true);
        expect(result.progress).toBe(5);
    });
});
