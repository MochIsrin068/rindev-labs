"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type TPropsButtonText = {
  link: string;
  label: string;
};

export default function ButtonText({ label, link }: TPropsButtonText) {
  return (
    <>
      <motion.button
        className="text-button mt-4"
        whileHover={{ color: "white" }}
        animate={{ y: 10 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Link href={link}>
          <motion.span className="lg:text-xl font-bold">{label}</motion.span>
        </Link>
      </motion.button>
    </>
  );
}
