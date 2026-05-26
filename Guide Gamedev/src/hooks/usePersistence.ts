import { useState, useEffect, useCallback } from 'react';

export interface UserProgress {
  unlockedModules: number[];
  completedModules: number[];
  favoriteChannels: string[];
  favoriteGames: number[];
  visitedGames: number[];
  theme: 'dark' | 'light';
  lastVisit: string;
  totalVisits: number;
}

const defaultProgress: UserProgress = {
  unlockedModules: [1],
  completedModules: [],
  favoriteChannels: [],
  favoriteGames: [],
  visitedGames: [],
  theme: 'dark',
  lastVisit: new Date().toISOString(),
  totalVisits: 1,
};

const STORAGE_KEY = 'guidegamedev_progress';

export function usePersistence() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...defaultProgress,
          ...parsed,
          totalVisits: (parsed.totalVisits || 0) + 1,
          lastVisit: new Date().toISOString(),
        };
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }, [progress]);

  const unlockModule = useCallback((moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      unlockedModules: prev.unlockedModules.includes(moduleId)
        ? prev.unlockedModules
        : [...prev.unlockedModules, moduleId],
    }));
  }, []);

  const completeModule = useCallback((moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
    }));
  }, []);

  const toggleFavoriteChannel = useCallback((channelName: string) => {
    setProgress(prev => ({
      ...prev,
      favoriteChannels: prev.favoriteChannels.includes(channelName)
        ? prev.favoriteChannels.filter(c => c !== channelName)
        : [...prev.favoriteChannels, channelName],
    }));
  }, []);

  const toggleFavoriteGame = useCallback((gameId: number) => {
    setProgress(prev => ({
      ...prev,
      favoriteGames: prev.favoriteGames.includes(gameId)
        ? prev.favoriteGames.filter(g => g !== gameId)
        : [...prev.favoriteGames, gameId],
    }));
  }, []);

  const markGameVisited = useCallback((gameId: number) => {
    setProgress(prev => ({
      ...prev,
      visitedGames: prev.visitedGames.includes(gameId)
        ? prev.visitedGames
        : [...prev.visitedGames, gameId],
    }));
  }, []);

  const setTheme = useCallback((theme: 'dark' | 'light') => {
    setProgress(prev => ({ ...prev, theme }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({
      ...defaultProgress,
      totalVisits: progress.totalVisits,
      lastVisit: new Date().toISOString(),
    });
    localStorage.removeItem(STORAGE_KEY);
  }, [progress.totalVisits]);

  return {
    progress,
    unlockModule,
    completeModule,
    toggleFavoriteChannel,
    toggleFavoriteGame,
    markGameVisited,
    setTheme,
    resetProgress,
  };
}