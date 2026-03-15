import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { TROPHIES } from '../utils/trophies';
import type { Trophy } from '../utils/trophies';
import { getStatistics } from '../utils/statistics';

interface TrophyContextType {
    unlockedTrophy: Trophy | null;
    checkNewTrophies: () => void;
    dismissNotification: () => void;
    resetTrophyState: () => void;
}

const TrophyContext = createContext<TrophyContextType | undefined>(undefined);

export const TrophyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [unlockedTrophy, setUnlockedTrophy] = useState<Trophy | null>(null);
    const [queue, setQueue] = useState<Trophy[]>([]);
    const [knownUnlockedIds, setKnownUnlockedIds] = useState<Set<string>>(() => {
        const stats = getStatistics();
        const initialUnlocked = TROPHIES
            .filter(t => t.check(stats).unlocked)
            .map(t => t.id);
        return new Set(initialUnlocked);
    });

    const dismissNotification = useCallback(() => {
        if (queue.length > 0) {
            const nextTrophy = queue[0];
            setUnlockedTrophy(nextTrophy);
            setQueue(prev => prev.slice(1));
        } else {
            setUnlockedTrophy(null);
        }
    }, [queue]);

    const checkNewTrophies = useCallback(() => {
        const stats = getStatistics();
        const newlyUnlocked: Trophy[] = [];
        const newKnownIds = new Set(knownUnlockedIds);

        TROPHIES.forEach(trophy => {
            if (!knownUnlockedIds.has(trophy.id) && trophy.check(stats).unlocked) {
                newlyUnlocked.push(trophy);
                newKnownIds.add(trophy.id);
            }
        });

        if (newlyUnlocked.length > 0) {
            setKnownUnlockedIds(newKnownIds);
            if (!unlockedTrophy) {
                setUnlockedTrophy(newlyUnlocked[0]);
                setQueue(prev => [...prev, ...newlyUnlocked.slice(1)]);
            } else {
                setQueue(prev => [...prev, ...newlyUnlocked]);
            }
        }
    }, [knownUnlockedIds, unlockedTrophy]);

    const resetTrophyState = useCallback(() => {
        setUnlockedTrophy(null);
        setQueue([]);
        setKnownUnlockedIds(new Set());
    }, []);

    return (
        <TrophyContext.Provider value={{ unlockedTrophy, checkNewTrophies, dismissNotification, resetTrophyState }}>
            {children}
        </TrophyContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTrophies = () => {
    const context = useContext(TrophyContext);
    if (context === undefined) {
        throw new Error('useTrophies must be used within a TrophyProvider');
    }
    return context;
};
