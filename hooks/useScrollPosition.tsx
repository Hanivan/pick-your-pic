import { useEffect, useState } from "react";

const useScrollPosition = () => {
  if (typeof window === "undefined") return 500;
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  const onScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;
