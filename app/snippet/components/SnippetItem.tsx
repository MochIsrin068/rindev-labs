"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const defaultImageProps = {
  width: 40,
  height: 40,
  className: "mr-3",
};

type TPropsSnippetItem = {
  data: {
    id: string;
    title: string;
    subtitle: string;
    code: string;
    techStacks: Array<any>;
  };
  setSelectedItem: any;
};

export default function SnippetItem({
  data,
  setSelectedItem,
}: TPropsSnippetItem) {
  return (
    <>
      <motion.div
        layoutId={data.id}
        onClick={() => setSelectedItem(data)}
        whileHover={{ scale: 1 }}
        initial={{ scale: 0.9 }}
        className="flex flex-col justify-center items-center rounded-2xl border border-[#141650] project-item cursor-pointer p-5"
      >
        <div className="mt-3 flex">
          {data?.techStacks?.map((item) => (
            <Image
              src={item.image}
              alt={item.name}
              {...defaultImageProps}
              key={item.id}
            />
          ))}
        </div>
        <h3 className="font-bold text-xl lg:text-3xl text-white mt-4">
          {data?.title}
        </h3>
        <p className="lg:text-lg mt-3 line-clamp-3">{data.subtitle}</p>
      </motion.div>
    </>
  );
}
