import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PlayerCard } from './PlayerCard';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            language: 'en',
            changeLanguage: vi.fn(),
        },
    }),
}));

// Mock scrollTo
Element.prototype.scrollTo = vi.fn();

describe('PlayerCard', () => {
    const mockPlayer = {
        id: '1',
        name: 'Zinedine Zidane',
        birthDate: '1972-06-23',
        sport: 'football' as const,
        category: 'historical' as const,
        clubs: [
            { name: 'Juventus', years: '1996-2001' }
        ]
    };

    it('renders placeholder name when showName is false', () => {
        render(<PlayerCard player={mockPlayer} revealedClueCount={0} showName={false} />);
        expect(screen.getByText('???')).toBeInTheDocument();
    });

    it('renders actual name when showName is true', () => {
        render(<PlayerCard player={mockPlayer} revealedClueCount={0} showName={true} />);
        expect(screen.getByText('Zinedine Zidane')).toBeInTheDocument();
    });

    it('renders sport info', () => {
        render(<PlayerCard player={mockPlayer} revealedClueCount={0} />);
        expect(screen.getByText('sports.football')).toBeInTheDocument();
        expect(screen.getByText('⚽')).toBeInTheDocument();
    });
});
