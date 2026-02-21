import { useTranslation } from 'react-i18next';
import type { Player } from '../../types';
import { ClubList } from './ClubList';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
    player: Player;
    revealedClueCount: number;
    showName?: boolean;
    won?: boolean;
    questionScore?: number;
    onNext?: () => void;
    nextLabel?: string;
}

export const PlayerCard = ({ player, revealedClueCount, showName = false, won = false, questionScore, onNext, nextLabel }: PlayerCardProps) => {
    const { t } = useTranslation();


    const formattedDate = new Date(player.birthDate).toLocaleDateString();

    if (showName) {
        // Result screen: show player identity + full club list with years
        return (
            <div className={styles.resultCard}>
                {/* Result icon */}
                <div className={styles.resultIconWrap}>
                    {won ? (
                        <div className={styles.resultIconSuccess}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                    ) : (
                        <div className={styles.resultIconFailure}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Player name */}
                <h2 className={styles.revealName}>{player.name}</h2>

                {/* Score */}
                {questionScore !== undefined && (
                    <div className={`${styles.questionScore} ${won ? styles.scorePositive : styles.scoreZero}`}>
                        {won ? `+${questionScore} pts` : `0 pts`}
                    </div>
                )}

                {/* Birth date */}
                <div className={styles.revealMeta}>
                    <span className={styles.revealMetaIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </span>
                    <span>{t('game.birthDate', { date: formattedDate })}</span>
                </div>

                {/* Full clubs with years */}
                <div className={styles.revealClubs}>
                    <div className={styles.revealClubsLabel}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        {t('game.clubs')}
                    </div>
                    <ul className={styles.revealClubList}>
                        {player.clubs.map((club, i) => (
                            <li key={`${club.name}-${i}`} className={styles.revealClubItem}>
                                <span className={styles.revealClubName}>{club.name}</span>
                                {club.years && <span className={styles.revealClubYears}>{club.years}</span>}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Next button */}
                {onNext && (
                    <button className={styles.nextButton} onClick={onNext}>
                        {nextLabel || t('common.next')}
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <polygon points="5,3 19,12 5,21" />
                            <line x1="19" y1="3" x2="19" y2="21" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                )}
            </div>
        );
    }

    // During game: no name shown, no ???
    return (
        <div className={styles.card}>
            <div className={styles.dateRow}>
                <span className={styles.dateIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </span>
                <div className={styles.dateInfo}>
                    <div className={styles.dateLabel}>{t('game.birthDate', { date: '' }).split(':')[0].trim()}</div>
                    <div className={styles.dateValue}>{formattedDate}</div>
                </div>
                <span className={styles.sportEmoji}>
                    {player.sport === 'football' ? '⚽' : '🏀'}
                </span>
            </div>

            <div className={styles.clubsSection}>
                <div className={styles.clubsSectionHeader}>
                    <svg className={styles.clubsIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{t('game.clubs').toUpperCase()}</span>
                </div>
                <ClubList clubs={player.clubs} revealedCount={revealedClueCount} />
            </div>
        </div>
    );
};
