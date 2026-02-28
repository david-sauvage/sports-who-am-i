

// Simple mulberry32 seeded random number generator
// Returns a function that generates numbers between 0 and 1
const mulberry32 = (a: number) => {
    return () => {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

// Hash a string into a number for the seed
export const xmur3 = (str: string) => {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }
    return () => {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
};

export const createRandomGenerator = (seed: string) => {
    const seedFunc = xmur3(seed);
    return mulberry32(seedFunc());
};

// Shuffle array using a seeded random generator
export const seededShuffle = <T,>(array: T[], seed: string): T[] => {
    const random = createRandomGenerator(seed);
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Generate a random seed string (4 characters, alphanumeric)
export const generateSeed = (): string => {
    return Math.random().toString(36).substring(2, 6);
};
