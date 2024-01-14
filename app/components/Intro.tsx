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
      <motion.div className="flex justify-between items-start mt-24 lg:mt-48 relative">
        <motion.div
          className="w-full lg:w-3/4
       flex flex-col items-start justify-start -mb-16 lg:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className={`text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400`}
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
              className={`text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100 mt-2`}
            >
              Yambi B.
            </motion.h1>
          </motion.div>

          <motion.div className="text-lg lg:text-xl mt-7 mb-5 leading-8 lg:leading-8">
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
            onClick={() =>
              window.open(
                `${CV_URL || "https://tinyurl.com/isrim-resume"}`,
                "__blank"
              )
            }
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
        <motion.div
          className="drop-shadow-mondewhite hover:drop-shadow-mondeblue hidden lg:block lg:absolute right-0 w-80
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <svg
            className="intro-blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image className="intro-blob-img" href="/images/author.png" />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
