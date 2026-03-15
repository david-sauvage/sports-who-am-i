import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SettingsScreen from './SettingsScreen';

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

describe('SettingsScreen', () => {
    it('renders with default settings', () => {
        render(<SettingsScreen onStart={vi.fn()} />);
        expect(screen.getByText('settings.title')).toBeInTheDocument();
    });

    it('handles starting the game with settings', () => {
        const onStart = vi.fn();
        render(<SettingsScreen onStart={onStart} />);

        const startButton = screen.getByText('settings.start');
        fireEvent.click(startButton);

        expect(onStart).toHaveBeenCalledWith(expect.objectContaining({
            language: 'en',
            sports: ['football', 'basketball'],
            categories: ['active', 'historical'],
            questionCount: 10
        }));
    });

    it('toggles sport correctly', () => {
        const onStart = vi.fn();
        render(<SettingsScreen onStart={onStart} />);

        // Basketball is active by default. Turn it off.
        const basketballButton = screen.getByText('settings.basketball').closest('button');
        if (basketballButton) {
            fireEvent.click(basketballButton);
        }

        const startButton = screen.getByText('settings.start');
        fireEvent.click(startButton);

        expect(onStart).toHaveBeenCalledWith(expect.objectContaining({
            sports: ['football']
        }));
    });

    it('toggles category correctly', () => {
        const onStart = vi.fn();
        render(<SettingsScreen onStart={onStart} />);

        // Historical is active by default. Turn it off.
        const historicalButton = screen.getByText('settings.historical').closest('button');
        if (historicalButton) {
            fireEvent.click(historicalButton);
        }

        fireEvent.click(screen.getByText('settings.start'));

        expect(onStart).toHaveBeenCalledWith(expect.objectContaining({
            categories: ['active']
        }));
    });

    it('changes question count correctly', () => {
        const onStart = vi.fn();
        render(<SettingsScreen onStart={onStart} />);

        const twentyButton = screen.getByText('20');
        fireEvent.click(twentyButton);

        fireEvent.click(screen.getByText('settings.start'));

        expect(onStart).toHaveBeenCalledWith(expect.objectContaining({
            questionCount: 20
        }));
    });
});
