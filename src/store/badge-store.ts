import { create } from 'zustand';

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
}

export const useBadgeStore = create<IStateProps>((set) => ({
  data: null,
  save: (badge: IBadgeStore) => set(() => ({ data: badge })),
}));
