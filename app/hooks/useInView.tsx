import { useRef } from "react";
import { useInView as useInViewBrowser } from "framer-motion";

export default function useInView() {
  const ref = useRef(null);
  const isInView = useInViewBrowser(ref, { once: true });
  return {
    ref,
    isInView,
  };
}
