import type { GameSettings } from '../types';

// Format: Version(1)|Seed(4)|Lang(1)|Sports(1)|Categories(1)|QuestionCount(1)
// Total: 9 characters
// Example: 2abcd133A

const VERSION = '2';

// Mappings for compact storage
const LANG_MAP: Record<string, string> = { 'fr': 'f', 'en': 'e', 'es': 's' };
const REV_LANG_MAP: Record<string, string> = { 'f': 'fr', 'e': 'en', 's': 'es' };

const COUNT_MAP: Record<number, string> = { 5: '5', 10: 'A', 20: 'K' };
const REV_COUNT_MAP: Record<string, number> = { '5': 5, 'A': 10, 'K': 20 };

export const generateGameCode = (settings: GameSettings, seed: string): string => {
    // 1. Version
    let code = VERSION;

    // 2. Seed (take first 4 chars of seed if longer, or pad? Assuming seed is ALREADY short from random.ts)
    // We will ensure random.ts generates 4-char seeds for this version.
    // If seed is longer, we truncate/hash, but let's assume valid input for now or truncate.
    const cleanSeed = seed.length > 4 ? seed.substring(0, 4) : seed.padEnd(4, '0');
    code += cleanSeed;

    // 3. Language
    code += LANG_MAP[settings.language] || 'e';

    // 4. Sports (Bitmask: Football=1, Basketball=2)
    let sportMask = 0;
    if (settings.sports.includes('football')) sportMask += 1;
    if (settings.sports.includes('basketball')) sportMask += 2;
    code += sportMask.toString();

    // 5. Categories (Bitmask: Hist=1, Active=2)
    let catMask = 0;
    if (settings.categories.includes('historical')) catMask += 1;
    if (settings.categories.includes('active')) catMask += 2;
    code += catMask.toString();

    // 6. Question Count
    code += COUNT_MAP[settings.questionCount] || 'A';

    return code;
};

export const parseGameCode = (code: string): { settings: GameSettings, seed: string } | null => {
    try {
        if (!code || code.length !== 9) return null;
        if (code[0] !== VERSION) return null;

        const seed = code.substring(1, 5);
        const langChar = code[5];
        const sportChar = code[6];
        const catChar = code[7];
        const countChar = code[8];

        // Language
        const language = REV_LANG_MAP[langChar];
        if (!language) {
            console.log('Invalid language char', langChar);
            return null;
        }

        // Sports
        const sportMask = parseInt(sportChar, 10);
        if (isNaN(sportMask) || sportMask < 1 || sportMask > 3) {
            console.log('Invalid sport mask', sportChar);
            return null;
        }
        const sports: ('football' | 'basketball')[] = [];
        if (sportMask & 1) sports.push('football');
        if (sportMask & 2) sports.push('basketball');

        // Categories
        const catMask = parseInt(catChar, 10);
        if (isNaN(catMask) || catMask < 1 || catMask > 3) {
            console.log('Invalid cat mask', catChar);
            return null;
        }
        const categories: ('historical' | 'active')[] = [];
        if (catMask & 1) categories.push('historical');
        if (catMask & 2) categories.push('active');

        // Count
        const questionCount = REV_COUNT_MAP[countChar];
        if (!questionCount) {
            console.log('Invalid count char', countChar);
            return null;
        }

        console.log('Parsed:', {
            seed,
            settings: { language, sports, categories, questionCount }
        });

        return {
            seed,
            settings: {
                language,
                sports,
                categories,
                questionCount
            }
        };
    } catch (e) {
        console.error('Failed to parse game code', e);
        return null;
    }
};
