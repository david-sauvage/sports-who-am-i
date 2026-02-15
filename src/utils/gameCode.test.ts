import { describe, it, expect } from 'vitest';
import { generateGameCode, parseGameCode } from './gameCode';
import type { GameSettings } from '../types';

describe('gameCode utils', () => {
    const mockSettings: GameSettings = {
        language: 'fr',
        sports: ['football', 'basketball'],
        categories: ['historical', 'active'], // Order matters for strict equality if parser reconstructs it uniformly
        questionCount: 10
    };
    const mockSeed = 'test-seed-123';
    const expectedSeed = 'test'; // V2 truncates to 4 chars

    it('should generate a code string', () => {
        const code = generateGameCode(mockSettings, mockSeed);
        expect(typeof code).toBe('string');
        expect(code.length).toBe(9); // V2 fixed length
    });

    it('should parse a valid code correctly', () => {
        const code = generateGameCode(mockSettings, mockSeed);
        const parsed = parseGameCode(code);

        expect(parsed).not.toBeNull();
        if (parsed) {
            expect(parsed.seed).toBe(expectedSeed);
            expect(parsed.settings).toEqual(mockSettings);
        }
    });

    it('should return null for invalid code (garbage)', () => {
        const parsed = parseGameCode('invalid-code');
        expect(parsed).toBeNull();
    });

    it('should return null for invalid code (wrong format decoded)', () => {
        // V2 expects version char '2' at start
        const parsed = parseGameCode('1abcdefgh');
        expect(parsed).toBeNull();
    });

    it('should handle partial settings correctness', () => {
        const customSettings: GameSettings = {
            language: 'en',
            sports: ['football'],
            categories: ['active'],
            questionCount: 5
        };
        const code = generateGameCode(customSettings, 'seed2');
        // seed2 is 5 chars, will be truncated to 'seed'

        const parsed = parseGameCode(code);

        expect(parsed).not.toBeNull();
        if (parsed) {
            expect(parsed.seed).toBe('seed');
            expect(parsed.settings.sports).toEqual(['football']);
            expect(parsed.settings.categories).toEqual(['active']);
            expect(parsed.settings.questionCount).toBe(5);
        }
    });
});
