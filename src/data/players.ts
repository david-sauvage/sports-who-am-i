import type { Player } from '../types';
import { footballPlayers } from './football';
import { basketballPlayers } from './basketball';

// Combine all players (shuffling is handled per-game by seededShuffle)
export const players: Player[] = [
    ...footballPlayers,
    ...basketballPlayers
];
