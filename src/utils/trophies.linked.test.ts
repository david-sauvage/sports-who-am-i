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
