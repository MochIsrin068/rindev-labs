"use client";
import { motion } from "framer-motion";

type TPropsLine = {
  customClass?: string;
};

export default function Line({ customClass }: TPropsLine) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={customClass}
      >
        <motion.div
          className={`rounded w-28 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
        />
      </motion.div>
    </>
  );
}
