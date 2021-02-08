import create from "zustand";
import { ComicBundleType } from "interfaces";

type ComicBundleStoreType = {
  currentPick: string | null;
  currentPickComics: ComicBundleType;
  setCurrentPick: (currentPick: string | null) => void;
  setCurrentPickComics: (pickComics: ComicBundleType) => void;
};

export const useComicBundleStore = create<ComicBundleStoreType>(set => ({
  currentPick: null,
  currentPickComics: {} as ComicBundleType,
  setCurrentPick: currentPick => set({ currentPick }),
  setCurrentPickComics: currentPickComics => set({ currentPickComics }),
}));
