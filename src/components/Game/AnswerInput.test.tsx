import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnswerInput } from './AnswerInput';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('AnswerInput', () => {
    it('renders correctly', () => {
        render(<AnswerInput onSubmit={vi.fn()} />);
        expect(screen.getByPlaceholderText('game.enterGuess')).toBeInTheDocument();
        expect(screen.getByTitle('common.submit')).toBeInTheDocument();
    });

    it('submits correctly', () => {
        const onSubmit = vi.fn().mockReturnValue(true);
        render(<AnswerInput onSubmit={onSubmit} />);

        const input = screen.getByPlaceholderText('game.enterGuess');
        fireEvent.change(input, { target: { value: 'Zidane' } });

        const submitButton = screen.getByTitle('common.submit');
        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith('Zidane');
        expect(input).toHaveValue(''); // Cleared on success
    });

    it('handles give up correctly', () => {
        const onGiveUp = vi.fn();
        render(<AnswerInput onSubmit={vi.fn()} onGiveUp={onGiveUp} />);

        const giveUpButton = screen.getByTitle('common.giveUp');
        fireEvent.click(giveUpButton);

        expect(onGiveUp).toHaveBeenCalled();
    });

    it('handles incorrect guess correctly', async () => {
        vi.useFakeTimers();
        const onSubmit = vi.fn().mockReturnValue(false);
        render(<AnswerInput onSubmit={onSubmit} />);

        const input = screen.getByPlaceholderText('game.enterGuess');
        fireEvent.change(input, { target: { value: 'Wrong' } });

        fireEvent.click(screen.getByTitle('common.submit'));

        expect(onSubmit).toHaveBeenCalledWith('Wrong');

        // Advance timers for feedback
        act(() => {
            vi.advanceTimersByTime(1000);
        });
        vi.useRealTimers();
    });

    it('does not submit empty guess', () => {
        const onSubmit = vi.fn();
        render(<AnswerInput onSubmit={onSubmit} />);

        const submitButton = screen.getByTitle('common.submit');
        fireEvent.click(submitButton);

        expect(onSubmit).not.toHaveBeenCalled();
    });
});
