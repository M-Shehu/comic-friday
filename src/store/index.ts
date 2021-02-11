import create from "zustand";
import { ComicBundleType } from "interfaces";

type ComicBundleStoreType = {
  numberOfPages: number;
  currentPick: string | null;
  currentPickComics: ComicBundleType;
  setCurrentPick: (currentPick: string | null) => void;
  setNumberOfPages: (numberOfPages: number) => void;
  setCurrentPickComics: (pickComics: ComicBundleType) => void;
};

export const useComicBundleStore = create<ComicBundleStoreType>(set => ({
  currentPick: null,
  numberOfPages: 0,
  currentPickComics: {} as ComicBundleType,
  setCurrentPick: currentPick => set({ currentPick }),
  setNumberOfPages: numberOfPages => set({ numberOfPages }),
  setCurrentPickComics: currentPickComics => set({ currentPickComics }),
}));
