import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IBadgeStore {
  id: string;
  name: string;
  email: string;
  eventTitle: string;
  checkInURL: string;
  image?: string;
}

interface IStateProps {
  data: IBadgeStore | null;
  save: (badge: IBadgeStore) => void;
  remove: () => void;
}

export const useBadgeStore = create(
  persist<IStateProps>(
    (set) => ({
      data: null,

      save: (badge: IBadgeStore) => set(() => ({ data: badge })),

      remove: () => set(() => ({ data: null })),
    }),
    {
      name: 'nlw-pass-in:badge',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
