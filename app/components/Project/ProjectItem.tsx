"use client";
import useInView from "@/app/hooks/useInView";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type TPropsProjectItem = {
  title: string;
  description: string;
  projectUrl: string;
  image: string;
  techStacks: Array<{
    id: string;
    name: string;
    image: string;
  }>;
};

export default function ProjectItem({
  description,
  projectUrl,
  techStacks,
  title,
  image,
}: TPropsProjectItem) {
  const defaultImageProps = {
    width: 30,
    height: 30,
  };

  const { ref, isInView } = useInView();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        <motion.div
          whileHover={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-2xl border border-[#141650] project-item"
        >
          <motion.div className="w-full lg:w-1/2 p-5 flex flex-col justify-center">
            <motion.h3 className="font-bold text-xl lg:text-3xl text-white">
              {title}
            </motion.h3>
            <motion.p className="lg:text-lg mt-3 line-clamp-3">
              {description}
            </motion.p>
            <motion.div className="mt-5">
              <motion.p className="font-bold text-white lg:text-xl">
                Featured technologies used
              </motion.p>
              <motion.div className="mt-3 flex">
                {techStacks?.map((stack) => (
                  <Image
                    key={stack.id}
                    src={stack.image}
                    alt={stack.name}
                    {...defaultImageProps}
                    className="lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] mr-1 lg:mr-3"
                  />
                ))}
              </motion.div>
              <motion.button
                className="text-button mt-5"
                whileHover={{ color: "white" }}
                animate={{ x: 10 }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={projectUrl} target="__blank">
                  <span className="text-sm lg:text-base">Visit Project →</span>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div>
            <Image
              src={image}
              alt={title}
              width={552}
              height={310}
              className="rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-none rounded-tl-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
