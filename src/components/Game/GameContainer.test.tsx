import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GameContainer } from './GameContainer';
import * as gameLogic from '../../hooks/useGameLogic';
import type { Player } from '../../types';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: unknown) => options ? `${key} ${JSON.stringify(options)}` : key,
        i18n: {
            language: 'en',
            changeLanguage: vi.fn(),
        },
    }),
}));

// Mock useGameLogic
vi.mock('../../hooks/useGameLogic', () => ({
    useGameLogic: vi.fn(),
}));

// Mock useTrophies
vi.mock('../../context/TrophyContext', () => ({
    useTrophies: vi.fn(() => ({ checkNewTrophies: vi.fn() })),
}));

// Mock scrollTo
Element.prototype.scrollTo = vi.fn();

describe('GameContainer', () => {
    const mockUseGameLogic = vi.mocked(gameLogic.useGameLogic);

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders SettingsScreen initially', () => {
        mockUseGameLogic.mockReturnValue({
            status: 'idle',
            currentPlayer: null as unknown as Player,
            score: 0,
            totalScore: 0,
            revealedClueCount: 0,
            feedback: null,
            startGame: vi.fn(),
            submitGuess: vi.fn(),
            giveUp: vi.fn(),
            nextPlayer: vi.fn(),
            timer: 0,
            history: [],
            currentPlayerIndex: 0
        });

        render(<GameContainer />);
        expect(screen.getByText('settings.title')).toBeInTheDocument();
    });

    it('shows Game screen after starting', async () => {
        const startGame = vi.fn();
        mockUseGameLogic.mockReturnValue({
            status: 'playing',
            currentPlayer: {
                id: '1',
                name: 'Zidane',
                birthDate: '1972',
                sport: 'football',
                category: 'historical',
                clubs: []
            },
            score: 1000,
            totalScore: 0,
            revealedClueCount: 0,
            feedback: null,
            startGame,
            submitGuess: vi.fn(),
            giveUp: vi.fn(),
            nextPlayer: vi.fn(),
            timer: 0,
            history: [],
            currentPlayerIndex: 0
        });

        render(<GameContainer />);

        // Start game from settings
        const startButton = screen.getByText('settings.start');
        fireEvent.click(startButton);

        // Check game elements
        expect(screen.getByPlaceholderText('game.enterGuess')).toBeInTheDocument();
        expect(screen.getByText('common.submit')).toBeInTheDocument();
    });

    it('shows Game Over screen when status is ended', () => {
        mockUseGameLogic.mockReturnValue({
            status: 'ended',
            currentPlayer: null as unknown as Player,
            score: 0,
            totalScore: 5000,
            revealedClueCount: 0,
            feedback: null,
            startGame: vi.fn(),
            submitGuess: vi.fn(),
            giveUp: vi.fn(),
            nextPlayer: vi.fn(),
            timer: 0,
            history: [],
            currentPlayerIndex: 0
        });

        render(<GameContainer />);

        // We must transition from settings to game view for status to matter (or mock view state if we could)
        // Actually, GameContainer.tsx: if (view === 'settings') return <SettingsScreen />
        // So we click start.
        fireEvent.click(screen.getByText('settings.start'));

        expect(screen.getByText('settings.gameOver')).toBeInTheDocument();
        expect(screen.getByText(/5000/)).toBeInTheDocument();
    });
});
