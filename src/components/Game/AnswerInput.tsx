import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AnswerInput.module.css';

interface AnswerInputProps {
    onSubmit: (guess: string) => boolean;
    disabled?: boolean;
}

export const AnswerInput = ({ onSubmit, disabled }: AnswerInputProps) => {
    const { t } = useTranslation();
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!guess.trim()) return;

        const correct = onSubmit(guess);
        if (correct) {
            setFeedback('success');
            setGuess('');
        } else {
            setFeedback('error');
            // Clear error after a moment or keep it?
            setTimeout(() => setFeedback('none'), 1000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder={t('game.enterGuess')}
                className={`${styles.input} ${styles[feedback]}`}
                disabled={disabled || feedback === 'success'}
            />
            <button
                type="submit"
                className={styles.button}
                disabled={disabled || !guess.trim()}
            >
                {t('common.submit')}
            </button>
        </form>
    );
};
