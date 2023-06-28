"use client";
import { motion } from "framer-motion";
import Line from "./Line";
import useInView from "../hooks/useInView";

type TPropsSectionHeader = {
  title: string;
  subtitle: string;
};

export default function SectioHeader({ title, subtitle }: TPropsSectionHeader) {
  const { isInView, ref } = useInView();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="mt-10 lg:mt-48 flex flex-col items-center mb-10 lg:mb-20"
        ref={ref}
      >
        <motion.h1
          className={`text-3xl lg:text-6xl font-extrabold title-section`}
        >
          {title}
        </motion.h1>
        <Line customClass="mt-6 lg:mt-8" />
        <motion.p className="text-lg lg:text-2xl mt-8 lg:mt-12 text-center max-w-full lg:max-w-[840px]">
          {subtitle}
        </motion.p>
      </motion.div>
    </>
  );
}
