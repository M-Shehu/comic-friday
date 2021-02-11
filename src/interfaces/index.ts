export interface ComicBundleType {
  id: string;
  comics: ComicType[];
  date: string;
  slug: string;
}

export type ComicType = {
  imgSrc: ImgSrcType[];
  artist: string;
  artistLink: string;
};

export type ImgSrcType = {
  id: number;
  formats: {
    thumbnail: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
  };
};
