export interface Club {
    name: string;
    logo?: string;
    years?: string; // e.g. "2010-2014"
}

export interface Player {
    id: string;
    name: string;
    birthDate: string; // ISO string YYYY-MM-DD or localised date string? Let's use ISO for storing
    sport: 'football' | 'basketball';
    clubs: Club[];
}

export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

export interface GameState {
    status: GameStatus;
    currentPlayer: Player | null;
    score: number;
    revealedClueCount: number; // Index of the last revealed clue (club)
    timer: number; // Seconds elapsed since start of round
}
