import type { GameSettings } from '../types';
import { xmur3 } from './random';

// Epoch for the daily cycle (2024-01-01)
const EPOCH = new Date(2024, 0, 1);
const STORAGE_KEY = 'daily_challenge_result';

// All 9 combinations: 3 sport options × 3 category options
const SPORT_OPTIONS: ('football' | 'basketball')[][] = [
    ['football'],
    ['basketball'],
    ['football', 'basketball'],
];

const CATEGORY_OPTIONS: ('active' | 'historical')[][] = [
    ['active'],
    ['historical'],
    ['active', 'historical'],
];

// Build the 9 challenge types
const CHALLENGE_TYPES = SPORT_OPTIONS.flatMap(sports =>
    CATEGORY_OPTIONS.map(categories => ({ sports, categories }))
);

/** Number of days elapsed since the epoch */
const daysSinceEpoch = (date: Date): number => {
    const ms = date.getTime() - EPOCH.getTime();
    return Math.floor(ms / (1000 * 60 * 60 * 24));
};

/** Format a date as YYYY-MM-DD */
const formatDate = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

/** Get today's challenge type index (0-8) */
export const getDailyChallengeTypeIndex = (date: Date = new Date()): number => {
    const days = daysSinceEpoch(date);
    return ((days % CHALLENGE_TYPES.length) + CHALLENGE_TYPES.length) % CHALLENGE_TYPES.length;
};

/** Get display info for the daily challenge button */
export const getDailyChallengeInfo = (date: Date = new Date()) => {
    const type = CHALLENGE_TYPES[getDailyChallengeTypeIndex(date)];

    // Build emoji string
    const sportEmojis = type.sports.map(s => s === 'football' ? '⚽' : '🏀').join('');
    const categoryEmojis = type.categories.map(c => c === 'active' ? '🌟' : '📜').join('');

    // Build translation keys for labels
    const sportKeys = type.sports.map(s => `settings.${s}`);
    const categoryKeys = type.categories.map(c => `settings.${c}`);

    return {
        sportEmojis,
        categoryEmojis,
        sportKeys,
        categoryKeys,
    };
};

/** Generate a deterministic 4-char seed from today's date */
export const getDailyChallengeSeed = (date: Date = new Date()): string => {
    const dateStr = formatDate(date);
    const hash = xmur3(dateStr);
    const num = hash();
    return num.toString(36).substring(0, 4);
};

/** Build full GameSettings for the daily challenge */
export const getDailyChallengeSettings = (
    language: string,
    date: Date = new Date()
): GameSettings => {
    const type = CHALLENGE_TYPES[getDailyChallengeTypeIndex(date)];
    return {
        language,
        sports: type.sports,
        categories: type.categories,
        questionCount: 10,
    };
};

// ── LocalStorage persistence ──────────────────────────────────

interface DailyChallengeResult {
    date: string;
    score: number;
}

/** Save today's daily challenge result */
export const saveDailyChallengeResult = (score: number, date: Date = new Date()): void => {
    const result: DailyChallengeResult = {
        date: formatDate(date),
        score,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
};

/** Get today's daily challenge result, or null if not played */
export const getDailyChallengeResult = (date: Date = new Date()): DailyChallengeResult | null => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const result: DailyChallengeResult = JSON.parse(raw);
        if (result.date === formatDate(date)) return result;
        return null;
    } catch {
        return null;
    }
};

/** Check if today's daily challenge has already been completed */
export const isDailyChallengeCompleted = (date: Date = new Date()): boolean => {
    return getDailyChallengeResult(date) !== null;
};
