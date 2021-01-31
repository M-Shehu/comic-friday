/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

export default function useComicBundleHeight() {
  const [bundleHeight, setBundleHeight] = useState(500);
  const [imageLoaded, setImageLoaded] = useState(0);
  const [firstComic, setFirstComic] = useState<HTMLInputElement>(null!);
  const [secondComic, setSecondComic] = useState<HTMLInputElement>(null!);
  const [thirdComic, setThirdComic] = useState<HTMLInputElement>(null!);
  const boxRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const highestTop = Math.min(
      firstComic?.getBoundingClientRect().top,
      secondComic?.getBoundingClientRect().top,
      thirdComic?.getBoundingClientRect().top
    );
    const lowestBottom = Math.max(
      firstComic?.getBoundingClientRect().bottom,
      secondComic?.getBoundingClientRect().bottom,
      thirdComic?.getBoundingClientRect().bottom
    );

    setBundleHeight(lowestBottom - highestTop);
  }, [firstComic, secondComic, thirdComic, imageLoaded]);

  const measuredRefFirstComic = useCallback(
    node => {
      if (node !== null) {
        setFirstComic(node);
      }
    },
    [imageLoaded]
  );
  const measuredRefSecondComic = useCallback(
    node => {
      if (node !== null) {
        setSecondComic(node);
      }
    },
    [imageLoaded]
  );
  const measuredRefThirdComic = useCallback(
    node => {
      if (node !== null) {
        setThirdComic(node);
      }
    },
    [imageLoaded]
  );

  const insertImageRef = (index: number) => {
    if (index === 0) {
      return measuredRefFirstComic;
    } else if (index === 1) {
      return measuredRefSecondComic;
    } else if (index === 2) {
      return measuredRefThirdComic;
    }
  };

  return { bundleHeight, boxRef, insertImageRef, setImageLoaded };
}
