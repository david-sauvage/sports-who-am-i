import { describe, it, expect } from 'vitest';
import { seededShuffle, generateSeed, createRandomGenerator } from './random';

describe('random utils', () => {
    it('generateSeed should return a 4-char alphanumeric string', () => {
        const seed = generateSeed();
        expect(seed).toBeDefined();
        expect(typeof seed).toBe('string');
        expect(seed.length).toBe(4);
    });

    it('createRandomGenerator should be deterministic with same seed', () => {
        const seed = 'test-seed';
        const rng1 = createRandomGenerator(seed);
        const rng2 = createRandomGenerator(seed);

        for (let i = 0; i < 5; i++) {
            expect(rng1()).toBe(rng2());
        }
    });

    it('createRandomGenerator should be different with different seeds', () => {
        const rng1 = createRandomGenerator('seed1');
        const rng2 = createRandomGenerator('seed2');

        const val1 = rng1();
        const val2 = rng2();
        expect(val1).not.toBe(val2);
    });

    it('seededShuffle should be deterministic with same seed', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const seed = 'test-shuffle-seed';

        const shuffled1 = seededShuffle(array, seed);
        const shuffled2 = seededShuffle(array, seed);

        expect(shuffled1).toEqual(shuffled2);
    });

    it('seededShuffle should shuffle the array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const seed = 'shuffle-seed';
        const shuffled = seededShuffle(array, seed);

        expect(shuffled).not.toEqual(array);
        expect(shuffled.length).toBe(array.length);
        expect(shuffled.sort((a, b) => a - b)).toEqual(array.sort((a, b) => a - b));
    });
});
