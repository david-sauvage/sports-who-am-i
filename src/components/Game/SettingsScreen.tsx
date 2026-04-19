import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { GameSettings } from '../../types';

import { getDailyChallengeSettings, getDailyChallengeSeed, getDailyChallengeInfo, isDailyChallengeCompleted, getDailyChallengeResult } from '../../utils/dailyChallenge';
import styles from './SettingsScreen.module.css';
import StatsModal from '../UI/StatsModal';
import TrophyModal from '../UI/TrophyModal';

interface SettingsScreenProps {
    onStart: (settings: GameSettings, seed?: string, isDaily?: boolean) => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onStart }) => {
    const { t, i18n } = useTranslation();
    const [settings, setSettings] = useState<GameSettings>({
        language: i18n.language,
        sports: ['football', 'basketball'],
        categories: ['active', 'historical'],
        questionCount: 10,
    });

    const [showStats, setShowStats] = useState(false);
    const [showTrophies, setShowTrophies] = useState(false);

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
    const handleStart = () => {
        onStart(settings);
    };

    const dailyInfo = getDailyChallengeInfo();
    const dailyCompleted = isDailyChallengeCompleted();
    const dailyResult = getDailyChallengeResult();

    const handleDailyChallenge = () => {
        if (dailyCompleted) return;
        const dailySettings = getDailyChallengeSettings(i18n.language);
        const dailySeed = getDailyChallengeSeed();
        onStart(dailySettings, dailySeed, true);
    };

    // Build the display label for the daily challenge type
    const dailySportLabel = dailyInfo.sportKeys.map(k => t(k)).join(' · ');
    const dailyCategoryLabel = dailyInfo.categoryKeys.map(k => t(k)).join(' · ');

    const languages = [
        { code: 'fr', flag: '🇫🇷', label: 'FR' },
        { code: 'en', flag: '🇬🇧', label: 'GB' },
        { code: 'es', flag: '🇪🇸', label: 'ES' },
    ];

    return (
        <div className={styles.container}>
            {/* Top Bar with Language and Stats */}
            <nav className={styles.topBar} aria-label="Navigation">
                <button
                    className={styles.statsButton}
                    onClick={() => setShowStats(true)}
                    title={t('stats.title')}
                >
                    <svg className={styles.statsIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                </button>

                <div className={styles.langBar}>
                    {languages.map(({ code, flag, label }) => (
                        <button
                            key={code}
                            className={`${styles.langCircle} ${settings.language === code ? styles.langActive : ''}`}
                            onClick={() => handleLanguageChange(code)}
                            title={label}
                            aria-pressed={settings.language === code}
                        >
                            <span className={styles.langFlag}>{flag}</span>
                            <span className={styles.langCode}>{label}</span>
                        </button>
                    ))}
                </div>

                <button
                    className={styles.trophyButton}
                    onClick={() => setShowTrophies(true)}
                    title={t('trophies.title')}
                >
                    <svg className={styles.statsIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                </button>
            </nav>

            {showStats && <StatsModal onClose={() => setShowStats(false)} />}
            {showTrophies && <TrophyModal onClose={() => setShowTrophies(false)} />}

            {/* Title */}
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>{t('settings.title')}</h1>
                <p className={styles.subtitle}>{t('settings.subtitle')}</p>
            </div>


            {/* Sports */}
            <div className={styles.section}>
                <span className={styles.sectionLabel}>{t('settings.sports')}</span>
                <div className={styles.cardRow}>
                    <button
                        className={`${styles.sportCard} ${styles.sportFootball} ${settings.sports.includes('football') ? styles.sportActive : styles.sportInactive}`}
                        onClick={() => toggleSport('football')}
                        aria-pressed={settings.sports.includes('football')}
                    >
                        <span className={styles.cardEmoji}>⚽</span>
                        <span className={styles.cardLabel}>{t('settings.football')}</span>
                    </button>
                    <button
                        className={`${styles.sportCard} ${styles.sportBasketball} ${settings.sports.includes('basketball') ? styles.sportActive : styles.sportInactive}`}
                        onClick={() => toggleSport('basketball')}
                        aria-pressed={settings.sports.includes('basketball')}
                    >
                        <span className={styles.cardEmoji}>🏀</span>
                        <span className={styles.cardLabel}>{t('settings.basketball')}</span>
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className={styles.section}>
                <span className={styles.sectionLabel}>{t('settings.categories')}</span>
                <div className={styles.cardRow}>
                    <button
                        className={`${styles.categoryCard} ${styles.catActive} ${settings.categories.includes('active') ? styles.catActiveSelected : styles.catInactive}`}
                        onClick={() => toggleCategory('active')}
                        aria-pressed={settings.categories.includes('active')}
                    >
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M16 11l2 2 4-4" />
                        </svg>
                        <span className={styles.cardLabel}>{t('settings.active')}</span>
                    </button>
                    <button
                        className={`${styles.categoryCard} ${styles.catHistorical} ${settings.categories.includes('historical') ? styles.catHistoricalSelected : styles.catInactive}`}
                        onClick={() => toggleCategory('historical')}
                        aria-pressed={settings.categories.includes('historical')}
                    >
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3v5h5" />
                            <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
                            <path d="M12 7v5l4 2" />
                        </svg>
                        <span className={styles.cardLabel}>{t('settings.historical')}</span>
                    </button>
                </div>
            </div>

            {/* Question count */}
            <div className={styles.section}>
                <span className={styles.sectionLabel}>{t('settings.questionCount')}</span>
                <div className={styles.pillRow}>
                    {[5, 10, 20].map(count => (
                        <button
                            key={count}
                            className={`${styles.pill} ${settings.questionCount === count ? styles.pillActive : ''}`}
                            onClick={() => setSettings({ ...settings, questionCount: count })}
                            aria-pressed={settings.questionCount === count}
                        >
                            {count}
                        </button>
                    ))}
                </div>
            </div>

            {/* Daily challenge button */}
            <button
                className={`${styles.dailyChallengeButton} ${dailyCompleted ? styles.dailyChallengeCompleted : ''}`}
                onClick={handleDailyChallenge}
                disabled={dailyCompleted}
            >
                <span className={styles.dailyChallengeEmoji}>{dailyInfo.sportEmojis}{dailyInfo.categoryEmojis}</span>
                <span className={styles.dailyChallengeText}>
                    <span className={styles.dailyChallengeTitle}>{t('settings.dailyChallenge')}</span>
                    <span className={styles.dailyChallengeType}>{dailySportLabel} · {dailyCategoryLabel}</span>
                </span>
                {dailyCompleted && dailyResult && (
                    <span className={styles.dailyChallengeScore}>🏆 {dailyResult.score}</span>
                )}
            </button>

            {/* Start button */}
            <button className={styles.startButton} onClick={handleStart}>
                <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                </svg>
                {t('settings.start')}
            </button>
        </div>
    );
};

export default SettingsScreen;
