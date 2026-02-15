import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { GameSettings } from '../../types';
import { parseGameCode } from '../../utils/gameCode';
import styles from './SettingsScreen.module.css';

interface SettingsScreenProps {
    onStart: (settings: GameSettings, seed?: string) => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onStart }) => {
    const { t, i18n } = useTranslation();
    const [settings, setSettings] = useState<GameSettings>({
        language: i18n.language,
        sports: ['football', 'basketball'],
        categories: ['active', 'historical'],
        questionCount: 10,
    });
    const [gameCodeInput, setGameCodeInput] = useState('');
    const [loadedSeed, setLoadedSeed] = useState<string | null>(null);
    const [isValidCode, setIsValidCode] = useState<boolean | null>(null);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setSettings({ ...settings, language: lang });
    };

    const toggleSport = (sport: 'football' | 'basketball') => {
        const newSports = settings.sports.includes(sport)
            ? settings.sports.filter(s => s !== sport)
            : [...settings.sports, sport];
        if (newSports.length > 0) setSettings({ ...settings, sports: newSports });
    };

    const toggleCategory = (category: 'active' | 'historical') => {
        const newCategories = settings.categories.includes(category)
            ? settings.categories.filter(c => c !== category)
            : [...settings.categories, category];
        if (newCategories.length > 0) setSettings({ ...settings, categories: newCategories });
    };

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const code = e.target.value;
        setGameCodeInput(code);

        if (code.trim().length === 0) {
            setIsValidCode(null);
            setLoadedSeed(null);
            return;
        }

        const result = parseGameCode(code.trim());
        if (result) {
            setIsValidCode(true);
            setLoadedSeed(result.seed);
            setSettings(result.settings);

            // Auto-switch language if different
            if (result.settings.language !== i18n.language) {
                i18n.changeLanguage(result.settings.language);
            }
        } else {
            setIsValidCode(false);
            setLoadedSeed(null);
        }
    };

    const handleStart = () => {
        // If we have a loaded seed from a valid code, use it. Otherwise, new random game.
        onStart(settings, loadedSeed || undefined);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('settings.title')}</h1>

            <div className={styles.section}>
                <h3>{t('settings.enterCode')}</h3>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        value={gameCodeInput}
                        onChange={handleCodeChange}
                        placeholder={t('settings.codePlaceholder')}
                        className={`${styles.codeInput} ${isValidCode === true ? styles.valid : ''} ${isValidCode === false ? styles.invalid : ''}`}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <h3>{t('settings.language')}</h3>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.langButton} ${settings.language === 'fr' ? styles.active : ''}`}
                        onClick={() => handleLanguageChange('fr')}
                        title="Français"
                    >
                        🇫🇷
                    </button>
                    <button
                        className={`${styles.langButton} ${settings.language === 'en' ? styles.active : ''}`}
                        onClick={() => handleLanguageChange('en')}
                        title="English"
                    >
                        🇬🇧
                    </button>
                    <button
                        className={`${styles.langButton} ${settings.language === 'es' ? styles.active : ''}`}
                        onClick={() => handleLanguageChange('es')}
                        title="Español"
                    >
                        🇪🇸
                    </button>
                </div>
            </div>

            <div className={styles.section}>
                <h3>{t('settings.sports')}</h3>
                <div className={styles.buttonGroup}>
                    <label className={styles.sportLabel}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                            checked={settings.sports.includes('football')}
                            onChange={() => toggleSport('football')}
                        />
                        <div className={styles.emojiCard}>
                            <span className={styles.emoji}>⚽</span>
                            <span className={styles.label}>{t('settings.football')}</span>
                        </div>
                    </label>
                    <label className={styles.sportLabel}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                            checked={settings.sports.includes('basketball')}
                            onChange={() => toggleSport('basketball')}
                        />
                        <div className={styles.emojiCard}>
                            <span className={styles.emoji}>🏀</span>
                            <span className={styles.label}>{t('settings.basketball')}</span>
                        </div>
                    </label>
                </div>
            </div>

            <div className={styles.section}>
                <h3>{t('settings.categories')}</h3>
                <div className={styles.buttonGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={settings.categories.includes('historical')}
                            onChange={() => toggleCategory('historical')}
                        />
                        <span>{t('settings.historical')}</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={settings.categories.includes('active')}
                            onChange={() => toggleCategory('active')}
                        />
                        <span>{t('settings.active')}</span>
                    </label>
                </div>
            </div>

            <div className={styles.section}>
                <h3>{t('settings.questionCount')}</h3>
                <div className={styles.countGroup}>
                    {[5, 10, 20].map(count => (
                        <button
                            key={count}
                            className={settings.questionCount === count ? styles.active : ''}
                            onClick={() => setSettings({ ...settings, questionCount: count })}
                        >
                            {count}
                        </button>
                    ))}
                </div>
            </div>

            <button className={styles.startButton} onClick={handleStart}>
                {t('settings.start')}
            </button>
        </div>
    );
};

export default SettingsScreen;
