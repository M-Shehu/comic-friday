import create from "zustand";

type ComicBundleStoreType = {
  currentPick: string | null;
  setCurrentPick: (currentLevel: string | null) => void;
};

export const useComicBundleStore = create<ComicBundleStoreType>(set => ({
  currentPick: null,
  setCurrentPick: currentPick => set({ currentPick }),
}));
