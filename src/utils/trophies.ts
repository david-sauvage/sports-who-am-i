import type { UserStatistics } from './statistics';

export type TrophyCategory = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface Trophy {
    id: string;
    icon: string;
    category: TrophyCategory;
    check: (stats: UserStatistics) => { unlocked: boolean; progress: number; goal: number };
}

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
        check: (stats) => {
            const footballTotal = Object.values(stats.detailed.football || {}).reduce((acc, curr) => acc + curr.total, 0);
            return {
                unlocked: footballTotal >= 50,
                progress: Math.min(footballTotal, 50),
                goal: 50,
            };
        },
    },
    {
        id: 'basketball_fan',
        icon: '🏀',
        category: 'bronze',
        check: (stats) => {
            const basketballTotal = Object.values(stats.detailed.basketball || {}).reduce((acc, curr) => acc + curr.total, 0);
            return {
                unlocked: basketballTotal >= 50,
                progress: Math.min(basketballTotal, 50),
                goal: 50,
            };
        },
    },
];
