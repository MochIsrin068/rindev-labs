"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type TPropsContactItem = {
  imageUrl: string;
  name: string;
  link: string;
};

export default function ContactItem({
  imageUrl,
  name,
  link,
}: TPropsContactItem) {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.8 }}
        initial={{ scale: 0.9 }}
        className="cursor-pointer p-6 flex items-center justify-center rounded-xl flex-col relative contact-card h-44"
      >
        <Link href={link} target="__blank">
          <motion.div className="border-inherit absolute flex flex-col items-center justify-center inset-[1px] bg-[#0d0e1f] hover:bg-[#121427] p-4 rounded-2xl">
            <motion.div
              whileHover={{ scale: 1.1, borderRadius: 8, opacity: "80%" }}
              transition={{ duration: 0.2 }}
              animate={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 0.5 },
              }}
            >
              <Image
                src={imageUrl}
                alt={name}
                width={48}
                height={48}
                className="lg:w-[48px] w-[28px] lg:h-[48px] h-[28px]"
              />
            </motion.div>
            <motion.p className="font-extrabold mt-4 text-xs lg:text-base">
              {name}
            </motion.p>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}
