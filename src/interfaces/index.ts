export interface ComicBundleType {
  id: string;
  comics: ComicType[];
  heading: string;
}

export type ComicType = {
  imgSrc: string;
  artist: string;
};
