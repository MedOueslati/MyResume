import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth", // use "smooth" if you want
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
