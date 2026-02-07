import { useTranslation } from 'react-i18next';
import type { Player } from '../../types';
import { ClubList } from './ClubList';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
    player: Player;
    revealedClueCount: number;
    showName?: boolean;
}

export const PlayerCard = ({ player, revealedClueCount, showName = false }: PlayerCardProps) => {
    const { t } = useTranslation();

    const sportEmojis: Record<string, string> = {
        football: '⚽',
        basketball: '🏀'
    };

    // Format date based on locale? using native Intl for now or simple string
    const formattedDate = new Date(player.birthDate).toLocaleDateString();

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.sportTag}>
                    {sportEmojis[player.sport] || '🏆'} {player.sport}
                </span>
                <h2 className={styles.playerName}>
                    {showName ? player.name : '???'}
                </h2>
                <div className={styles.birthDate}>
                    {t('game.birthDate', { date: formattedDate })}
                </div>
            </div>

            <div className={styles.clubsSection}>
                <h3>{t('game.clubs')}</h3>
                <ClubList clubs={player.clubs} revealedCount={revealedClueCount} />
            </div>
        </div>
    );
};
