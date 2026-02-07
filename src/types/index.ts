export interface Club {
    name: string;
    logo?: string;
    years?: string; // e.g. "2010-2014"
}

export interface Player {
    id: string;
    name: string;
    birthDate: string;
    sport: 'football' | 'basketball';
    category: 'historical' | 'active';
    clubs: Club[];
}

export interface GameSettings {
    language: string;
    sports: ('football' | 'basketball')[];
    categories: ('historical' | 'active')[];
    questionCount: number;
}

export type GameStatus = 'idle' | 'settings' | 'playing' | 'won' | 'lost' | 'ended';

export interface GameState {
    status: GameStatus;
    currentPlayer: Player | null;
    score: number;
    revealedClueCount: number; // Index of the last revealed clue (club)
    timer: number; // Seconds elapsed since start of round
}
