/**
 * This hook scrolls to the top of the page either on location change or
 * changes to a dependency array passed in
 *
 * @param {Array} dependencies - Array of dependencies
 * @returns null
 */

import { RefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollHook = {
  ref?: RefObject<Element>;
  dependencies?: any[];
};
export default function ScrollToTopHook({
  dependencies = [],
  ref,
}: ScrollHook = {}) {
  const { pathname: currentPath } = useLocation();
  useEffect(() => {
    try {
      /**
       * Scroll to top using new browser API scroll
       *
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo}
       */
      if (ref && ref.current) {
        ref.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log("scrollTo is not supported on this browser...", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, ...dependencies]);
  return null;
}
