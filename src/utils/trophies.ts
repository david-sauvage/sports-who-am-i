import type { UserStatistics } from './statistics';

export type TrophyCategory = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface Trophy {
    id: string;
    icon: string;
    category: TrophyCategory;
    sport?: 'football' | 'basketball';
    isPlayerDiscovery?: boolean;
    check: (stats: UserStatistics) => { unlocked: boolean; progress: number; goal: number };
}

/**
 * Creates a check function for player discovery trophies.
 * @param playerIds List of player IDs to find
 * @param minRequired Minimum number of players from the list to unlock the trophy (defaults to all)
 */
export const createPlayerDiscoveryCheck = (playerIds: string[], minRequired?: number) => (stats: UserStatistics) => {
    const foundCount = playerIds.filter(id => stats.foundPlayerIds?.includes(id)).length;
    const threshold = minRequired ?? playerIds.length;
    return {
        unlocked: foundCount >= threshold,
        progress: foundCount,
        goal: threshold,
    };
};

export const TROPHIES: Trophy[] = [
    {
        id: 'first_step',
        icon: '👟',
        category: 'bronze',
        check: (stats) => ({
            unlocked: stats.gamesPlayed >= 1,
            progress: Math.min(stats.gamesPlayed, 1),
            goal: 1,
        }),
    },
    {
        id: 'veteran',
        icon: '🎖️',
        category: 'silver',
        check: (stats) => ({
            unlocked: stats.gamesPlayed >= 10,
            progress: Math.min(stats.gamesPlayed, 10),
            goal: 10,
        }),
    },
    {
        id: 'legend',
        icon: '🏆',
        category: 'gold',
        check: (stats) => ({
            unlocked: stats.gamesPlayed >= 50,
            progress: Math.min(stats.gamesPlayed, 50),
            goal: 50,
        }),
    },
    {
        id: 'football_fan',
        icon: '⚽',
        category: 'bronze',
        sport: 'football',
        check: (stats) => {
            const footballCorrect = Object.values(stats.detailed.football || {}).reduce((acc, curr) => acc + curr.correct, 0);
            return {
                unlocked: footballCorrect >= 50,
                progress: Math.min(footballCorrect, 50),
                goal: 50,
            };
        },
    },
    {
        id: 'basketball_fan',
        icon: '🏀',
        category: 'bronze',
        sport: 'basketball',
        check: (stats) => {
            const basketballCorrect = Object.values(stats.detailed.basketball || {}).reduce((acc, curr) => acc + curr.correct, 0);
            return {
                unlocked: basketballCorrect >= 50,
                progress: Math.min(basketballCorrect, 50),
                goal: 50,
            };
        },
    },
    {
        id: 'splash_brothers',
        icon: '💦',
        category: 'silver',
        sport: 'basketball',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['b-13', 'b-60']), // Stephen Curry and Klay Thompson
    },
    {
        id: 'eternal_rivals',
        icon: '🐐',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-1', 'f-2']), // Lionel Messi and Cristiano Ronaldo
    },
    {
        id: 'golden_balls',
        icon: '🥇',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(Array.from({ length: 47 }, (_, i) => `f-${i + 1}`), 10), // Ballon d'Or winners
    },
    {
        id: 'sang_et_or',
        icon: '⛏️',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-48', 'f-49', 'f-50']), // Lens 1998 champions
    },
    {
        id: 'periple_rouge',
        icon: '🔴',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-51', 'f-52', 'f-53', 'f-54']), // AS Monaco 2004
    },
    {
        id: 'gones',
        icon: '🦁',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-55', 'f-56', 'f-57', 'f-58', 'f-59'], 3), // Olympique Lyonnais
    },
    {
        id: 'miracle_istanbul',
        icon: '🇹🇷',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-60', 'f-61', 'f-62']), // Liverpool 2005
    },
    {
        id: 'a_jamais_les_premiers',
        icon: '⭐',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-63', 'f-64', 'f-65', 'f-66', 'f-67'], 3),
    },
    {
        id: 'fergie_time',
        icon: '⏱️',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-68', 'f-69']), // Manchester United 1999
    },
    {
        id: 'galactiques',
        icon: '✨',
        category: 'gold',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-12', 'f-14', 'f-16', 'f-70']), // Real Madrid early 2000s
    },
    {
        id: 'mourir_tranquille',
        icon: '🐓',
        category: 'platinum',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-16', 'f-63', 'f-66', 'f-71', 'f-72']), // France 1998
    },
    {
        id: 'seconde_etoile',
        icon: '⭐⭐',
        category: 'platinum',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-73', 'f-74', 'f-75', 'f-76', 'f-77']), // France 2018
    },
    {
        id: 'amunt_valencia',
        icon: '🦇',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-78', 'f-79', 'f-80']), // Valencia CF early 2000s
    },
    {
        id: 'hala_madrid',
        icon: '👑',
        category: 'gold',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-2', 'f-4', 'f-16', 'f-45', 'f-81', 'f-82', 'f-83', 'f-84'], 5), // Real Madrid legends
    },
    {
        id: 'visca_barca',
        icon: '🔵🔴',
        category: 'gold',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-1', 'f-7', 'f-15', 'f-33', 'f-85', 'f-86', 'f-87', 'f-88', 'f-89'], 5), // FC Barcelona legends
    },
    {
        id: '9_juillet',
        icon: '💥',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-16', 'f-90']), // Zidane & Materazzi
    },
    {
        id: 'main_de_dieu',
        icon: '🤚',
        category: 'silver',
        sport: 'football',
        isPlayerDiscovery: true,
        check: createPlayerDiscoveryCheck(['f-91', 'f-92']), // Shilton & Maradona
    },
];
