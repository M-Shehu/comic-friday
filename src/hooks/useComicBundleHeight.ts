/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

const defaultDimensions = {
  top: 0,
  bottom: 500,
  height: 500,
};

export default function useComicBundleHeight() {
  const [bundleHeight, setBundleHeight] = useState(500);
  const [imageLoaded, setImageLoaded] = useState(0);
  const [firstComic, setFirstComic] = useState(defaultDimensions);
  const [secondComic, setSecondComic] = useState(defaultDimensions);
  const [thirdComic, setThirdComic] = useState(defaultDimensions);

  useEffect(() => {
    const highestTop = Math.min(
      firstComic.top,
      secondComic.top,
      thirdComic.top
    );
    const lowestBottom = Math.max(
      firstComic.bottom,
      secondComic.bottom,
      thirdComic.bottom
    );

    setBundleHeight(lowestBottom - highestTop);
  }, [firstComic, secondComic, thirdComic, imageLoaded]);

  const measuredRefFirstComic = useCallback(
    node => {
      if (node !== null) {
        setFirstComic(node.getBoundingClientRect());
      }
    },
    [imageLoaded]
  );
  const measuredRefSecondComic = useCallback(
    node => {
      if (node !== null) {
        setSecondComic(node.getBoundingClientRect());
      }
    },
    [imageLoaded]
  );
  const measuredRefThirdComic = useCallback(
    node => {
      if (node !== null) {
        setThirdComic(node.getBoundingClientRect());
      }
    },
    [imageLoaded]
  );

  const insertRef = (index: number) => {
    if (index === 0) {
      return measuredRefFirstComic;
    } else if (index === 1) {
      return measuredRefSecondComic;
    } else if (index === 2) {
      return measuredRefThirdComic;
    }
  };
  return { bundleHeight, insertRef, setImageLoaded };
}
