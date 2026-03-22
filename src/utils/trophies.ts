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
];
