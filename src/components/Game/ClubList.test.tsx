import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ClubList } from './ClubList';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

// Mock scrollTo
Element.prototype.scrollTo = vi.fn();

describe('ClubList', () => {
    const mockClubs = [
        { name: 'RSCA', years: '2000-2005' },
        { name: 'Real Madrid', years: '2005-2010' }
    ];

    it('renders clubs correctly', () => {
        render(<ClubList clubs={mockClubs} revealedCount={1} />);
        expect(screen.getByText('RSCA')).toBeInTheDocument();
        expect(screen.getByText('Real Madrid')).toBeInTheDocument();
    });

    it('shows noMoreClues message when all revealed', () => {
        render(<ClubList clubs={mockClubs} revealedCount={2} />);
        expect(screen.getByText('game.noMoreClues')).toBeInTheDocument();
    });
});
