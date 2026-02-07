import { useTranslation } from 'react-i18next';
import type { Player } from '../../types';
import { ClubList } from './ClubList';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
    player: Player;
    revealedClueCount: number;
}

export const PlayerCard = ({ player, revealedClueCount }: PlayerCardProps) => {
    const { t } = useTranslation();

    // Format date based on locale? using native Intl for now or simple string
    const formattedDate = new Date(player.birthDate).toLocaleDateString();

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.sportTag}>{player.sport}</span>
                <h2>{t('game.birthDate', { date: formattedDate })}</h2>
            </div>

            <div className={styles.clubsSection}>
                <h3>{t('game.clubs')}</h3>
                <ClubList clubs={player.clubs} revealedCount={revealedClueCount} />
            </div>
        </div>
    );
};
