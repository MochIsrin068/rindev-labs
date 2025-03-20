"use client";

import { motion } from "framer-motion";

export default function DownloadButton() {
  const { PORTOFOLIO_URL } = process.env;

  return (
    <motion.button
      onClick={() => window.open(`${PORTOFOLIO_URL || "https://drive.google.com/file/d/1M6B7yeK2BKYQAwyMpyp2aV4s1eygPnOX/view?usp=drive_link"}`, "__blank")}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded shadow-md text-xs lg:text-sm"
    >
      Download Portfolio (pdf) 
    </motion.button>
  );
}
