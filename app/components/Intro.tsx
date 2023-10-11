"use client";
import AnimatedTextWord from "./AnimatedTextWord";
import ReactTypingEffect from "react-typing-effect";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Intro() {
  const controls = useAnimation();
  useEffect(() => {
    const animateWave = async () => {
      controls.start({ pathLength: 1, opacity: 1 });
    };

    animateWave();
  }, [controls]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        if (window.location.hash === "#contact") {
          window.location.href = "#contact";
        }
        if (window.location.hash === "#work") {
          window.location.href = "#work";
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const { CV_URL } = process.env;

  return (
    <>
      <motion.div
        className="w-full
       flex flex-col items-start justify-start mt-24 lg:mt-48 -mb-16 lg:mb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className={`text-5xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400`}
          >
            Muhammad Isrim
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.h1
            className={`text-5xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100`}
          >
            Yambi Baso
          </motion.h1>
        </motion.div>

        <motion.div className="text-lg lg:text-2xl mt-8 mb-4 leading-8 lg:leading-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            An Frontend{" "}
            <ReactTypingEffect
              text={["Web", "Mobile"]}
              className="text-white font-bold"
            />
            Engineer based in Indonesia.
          </motion.div>
          <AnimatedTextWord
            text="Have 5 years experiences as Software Engineer, 1 year Backend, 4 years Frontend, and proficient in React, Next, React Native and Flutter."
            customClass="flex-wrap w-full lg:w-3/4"
          />
        </motion.div>
        <motion.button
          onClick={() => window.open(`${CV_URL || "https://tinyurl.com/isrim-resume"}`, "__blank")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded shadow-md text-xs lg:text-sm my-1"
        >
          Download CV / Resume
        </motion.button>
        <motion.svg className="lg:w-[140px] lg:h-[80px]">
          <motion.path
            d="M0 40 C 15 52, 30 28, 45 40 S 60 52, 75 40 S 90 28, 105 40 S 120 52, 135 40"
            fill="none"
            stroke="#004ede"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M0 30 C 15 42, 30 18, 45 30 S 60 42, 75 30 S 90 18, 105 30 S 120 42, 135 30"
            fill="none"
            stroke="#2465da"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.svg>
      </motion.div>
    </>
  );
}
