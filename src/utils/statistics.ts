export interface CategoryStats {
    correct: number;
    total: number;
}

export interface UserStatistics {
    gamesPlayed: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    totalScore: number;
    // Nesting: sport -> category -> stats
    detailed: Record<string, Record<string, CategoryStats>>;
}

const STORAGE_KEY = 'sports-who-am-i-stats';

const INITIAL_STATS: UserStatistics = {
    gamesPlayed: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalScore: 0,
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

export const getStatistics = (): UserStatistics => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        return INITIAL_STATS;
    }
    try {
        const parsed = JSON.parse(stored);

        // Migration from old flat format if it exists
        if (parsed.bySport && !parsed.detailed) {
            const migrated = { ...INITIAL_STATS, ...parsed };
            // Note: We can't perfectly migrate old flat stats into grouped ones
            // so we just start the detailed ones from what we have where possible or zero.
            return migrated;
        }

        return {
            ...INITIAL_STATS,
            ...parsed,
            detailed: {
                football: { ...INITIAL_STATS.detailed.football, ...(parsed.detailed?.football || {}) },
                basketball: { ...INITIAL_STATS.detailed.basketball, ...(parsed.detailed?.basketball || {}) },
            }
        };
    } catch (e) {
        console.error('Failed to parse statistics', e);
        return INITIAL_STATS;
    }
};

export const saveStatistics = (stats: UserStatistics) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const resetStatistics = () => {
    saveStatistics(INITIAL_STATS);
};

export const recordAnswer = (isCorrect: boolean, sport: string, category: string, score: number = 0) => {
    const stats = getStatistics();

    stats.totalQuestions += 1;

    if (!stats.detailed[sport]) {
        stats.detailed[sport] = {
            active: { correct: 0, total: 0 },
            historical: { correct: 0, total: 0 },
        };
    }
    if (!stats.detailed[sport][category]) {
        stats.detailed[sport][category] = { correct: 0, total: 0 };
    }

    stats.detailed[sport][category].total += 1;

    if (isCorrect) {
        stats.correctAnswers += 1;
        stats.totalScore += score;
        stats.detailed[sport][category].correct += 1;
    } else {
        stats.incorrectAnswers += 1;
    }
    saveStatistics(stats);
};

export const recordGameEnd = () => {
    const stats = getStatistics();
    stats.gamesPlayed += 1;
    saveStatistics(stats);
};
