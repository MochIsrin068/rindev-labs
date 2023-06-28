"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type TPropsWorkItem = {
  position: string;
  company: {
    name: string;
    picture: string;
  };
  description: string;
  responsibilities: Array<string>;
  workDate: string;
};

export default function WorkItem({
  company,
  description,
  responsibilities,
  position,
  workDate,
}: TPropsWorkItem) {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        ref={ref}
        className="w-full mt-6"
      >
        <motion.div className="shadow-md w-full rounded-xl p-4 lg:p-10 border-dashed hover:border-solid border hover:rounded-sm border-[#0284c7] item-card">
          <motion.div className="lg:flex lg:justify-between items-start">
            <motion.div>
              <Image
                src={company.picture}
                alt={company.name}
                width={120}
                height={120}
                className="lg:w-auto lg:h-auto w-[60px]"
              />
              <motion.h3 className="font-bold text-white text-lg lg:text-3xl title-section z-20 inline-block mt-4">
                {company.name}
              </motion.h3>
            </motion.div>
            <motion.div>
              <motion.p className="mt-2 lg:mt-0 font-bold text-sm lg:text-2xl text-white">
                {position}
              </motion.p>
              <motion.svg
                width="140"
                height="80"
                className="lg:w-[140] lg:h-[80px] h-[60px]"
              >
                <motion.path
                  d="M0 30 C 15 42, 30 18, 45 30 S 60 42, 75 30 S 90 18, 105 30 S 120 42, 135 30"
                  fill="none"
                  stroke="#2465da"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
          <motion.div className="mt-3 lg:mt-6 lg:w-2/3">
            <motion.h3 className="font-bold text-white lg:text-2xl">
              {workDate}
            </motion.h3>
            <motion.p className="mt-2 text-sm lg:text-xl">
              {description}
            </motion.p>
          </motion.div>

          <motion.div className="mt-4 lg:mt-8">
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1, borderRadius: 8, opacity: "80%" }}
              transition={{ duration: 0.2 }}
              animate={{
                y: [0, -3, 0],
                transition: { repeat: Infinity, duration: 0.5 },
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded shadow-md text-[10px] lg:text-sm"
            >
              {isExpanded ? "Show Less" : "Show Responsibility"}
              {isExpanded ? (
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  ↑
                </motion.span>
              ) : (
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  ↓
                </motion.span>
              )}
            </motion.button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 lg:mt-8 bg-[#0a0913] p-4 rounded-2xl border border-[#1a1730]"
              >
                <motion.ul className="list-disc ml-7">
                  {responsibilities.map((item: string, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 text-xs lg:text-lg"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
