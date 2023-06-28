"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type TPropsBlogItem = {
  title: string;
  categories: Array<string>;
  image: string;
  link: string;
  datePublished: string;
};

export default function BlogItem({
  datePublished,
  image,
  link,
  categories,
  title,
}: TPropsBlogItem) {
  return (
    <>
      <motion.div
        className="shadow-2xl w-full rounded-lg border border-[#141650] item-card cursor-pointer"
        whileHover={{ scale: 1 }}
        whileTap={{
          scale: 0.8,
          borderColor: "#0285c7ec",
          borderStyle: "solid",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={link}
          target="__blank"
          className="flex flex-col-reverse lg:flex-row lg:justify-between"
        >
          <motion.div className="lg:w-1/2 p-3 lg:p-5 flex flex-col justify-center">
            <motion.h3 className="lg:text-xl text-white mt-3 lg:mt-5 line-clamp-3 font-bold">
              {title}
            </motion.h3>
            <motion.p className="text-xs lg:text-sm mt-2">
              📅&nbsp;&nbsp;{datePublished}
            </motion.p>
            <motion.div className="flex mt-5">
              {categories.slice(0, 2).map((category, index: number) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-[10px] lg:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 truncate"
                >
                  {category}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              background: `url("${image}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full h-40 lg:w-1/2 lg:h-56 rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none rounded-tl-2xl"
          />
        </Link>
      </motion.div>
    </>
  );
}
