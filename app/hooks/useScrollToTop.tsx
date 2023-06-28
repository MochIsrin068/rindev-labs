"use client";
import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
    // Add scroll event listener to scroll to top when the page is scrolled
    window.addEventListener("scroll", scrollToTop);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);
}

export default useScrollToTop;
