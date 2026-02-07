import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { Club } from '../../types';
import styles from './ClubList.module.css';

interface ClubListProps {
    clubs: Club[];
    revealedCount: number;
}

export const ClubList = ({ clubs, revealedCount }: ClubListProps) => {
    const { t } = useTranslation();
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: listRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [revealedCount]);

    const allRevealed = revealedCount >= clubs.length;

    return (
        <ul ref={listRef} className={styles.list}>
            {clubs.map((club, index) => (
                <li
                    key={`${club.name}-${index}`}
                    className={`${styles.item} ${index < revealedCount ? styles.visible : ''}`}
                >
                    <div className={styles.clubInfo}>
                        <span className={styles.clubName}>{club.name}</span>
                        {club.years && <span className={styles.clubYears}>{club.years}</span>}
                    </div>
                </li>
            ))}
            {allRevealed && (
                <li className={styles.noMoreClues}>
                    {t('game.noMoreClues')}
                </li>
            )}
        </ul>
    );
};
