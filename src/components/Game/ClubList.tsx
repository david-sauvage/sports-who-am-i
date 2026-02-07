import type { Club } from '../../types';
import styles from './ClubList.module.css';

interface ClubListProps {
    clubs: Club[];
    revealedCount: number;
}

export const ClubList = ({ clubs, revealedCount }: ClubListProps) => {
    return (
        <ul className={styles.list}>
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
        </ul>
    );
};
