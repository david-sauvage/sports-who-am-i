import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTrophies } from '../../context/TrophyContext';
import styles from './TrophyNotification.module.css';

const TrophyNotification: React.FC = () => {
    const { t } = useTranslation();
    const { unlockedTrophy, dismissNotification } = useTrophies();
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (unlockedTrophy) {
            setIsExiting(false);
            const timer = setTimeout(() => {
                setIsExiting(true);
                // Wait for exit animation to finish before dismissing
                setTimeout(() => {
                    dismissNotification();
                }, 500);
            }, 5000); // Show for 5 seconds

            return () => clearTimeout(timer);
        }
    }, [unlockedTrophy, dismissNotification]);

    if (!unlockedTrophy) return null;

    return (
        <div className={styles.notificationWrapper}>
            <div className={`${styles.notification} ${isExiting ? styles.notificationExit : ''}`}>
                <div className={styles.iconContainer}>
                    {unlockedTrophy.icon}
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.title}>{t('trophies.unlocked', 'Achievement Unlocked')}</span>
                    <span className={styles.name}>{t(`trophies.${unlockedTrophy.id}.name`)}</span>
                </div>
            </div>
        </div>
    );
};

export default TrophyNotification;
