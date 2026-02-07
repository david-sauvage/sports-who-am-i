import type { Player } from '../types';
import { footballPlayers } from './football';
import { basketballPlayers } from './basketball';

// Shuffle helper
const shuffle = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

// Combine and shuffle for the game
export const players: Player[] = shuffle([
    ...footballPlayers,
    ...basketballPlayers
]);
