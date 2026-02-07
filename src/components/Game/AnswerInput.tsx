import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AnswerInput.module.css';

interface AnswerInputProps {
    onSubmit: (guess: string) => boolean;
    onGiveUp?: () => void;
    disabled?: boolean;
}

export const AnswerInput = ({ onSubmit, onGiveUp, disabled }: AnswerInputProps) => {
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
            setTimeout(() => setFeedback('none'), 1000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder={t('game.enterGuess')}
                    className={`${styles.input} ${styles[feedback]}`}
                    disabled={disabled || feedback === 'success'}
                />
                <div className={styles.buttonGroup}>
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={disabled || !guess.trim() || feedback === 'success'}
                        title={t('common.submit')}
                    >
                        {t('common.submit')}
                    </button>
                    {onGiveUp && (
                        <button
                            type="button"
                            onClick={onGiveUp}
                            className={styles.giveUpButton}
                            disabled={disabled || feedback === 'success'}
                            title={t('common.giveUp')}
                        >
                            ❌
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};
