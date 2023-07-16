"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SnippetItem from "./SnippetItem";
import { useEffect, useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

type TPropsWrapperAnimatePresence = {
  snippets: Array<any>;
};

export default function WrapperAnimatePresence({
  snippets,
}: TPropsWrapperAnimatePresence) {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleScrollWhenHaveModal = () => {
    const browserWindow = window;

    const scrollTop =
      browserWindow.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      browserWindow.pageXOffset || document.documentElement.scrollLeft;

    browserWindow.scrollTo(0, 0);

    setTimeout(() => {
      browserWindow.onscroll = function () {
        // browserWindow.scrollTo(scrollLeft, scrollTop);
        browserWindow.scrollTo(0, 0);
      };
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedItem) {
        handleScrollWhenHaveModal();
      } else {
        window.onscroll = null;
      }
    }
  }, [selectedItem]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {snippets.map((item: any) => (
          <div key={item.id}>
            <SnippetItem data={item} setSelectedItem={setSelectedItem} />
          </div>
        ))}
        <AnimatePresence>
          {selectedItem && (
            <motion.div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#0d0e18db] z-50">
              <motion.div
                layoutId={selectedItem?.id}
                key={selectedItem?.id}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="project-item p-3 lg:p-5 border border-[#131647] max-w-[90%] lg:max-h-[700px] lg:max-w-[800px]"
                style={{
                  borderRadius: 8,
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h2 className="font-bold text-xl lg:text-2xl text-white">
                      {selectedItem.title}
                    </motion.h2>
                    <motion.h5 className="mt-3 text-sm lg:text-base">
                      {selectedItem.subtitle}
                    </motion.h5>
                  </div>
                  <motion.button
                    onClick={() => setSelectedItem(null)}
                    className="p-1 rounded-full text-[#b0f] bg-[#bb00ff1a]"
                  >
                    <Image
                      height={18}
                      width={18}
                      src="/shapes/x-line.svg"
                      alt="X"
                    />
                  </motion.button>
                </div>
                <div
                  style={{
                    fontFamily: "Fira Code",
                  }}
                  className="mt-3 lg:mt-5 h-full"
                >
                  <CopyBlock
                    text={`${selectedItem.code}`}
                    showLineNumbers
                    codeBlock
                    language={"jsx"}
                    theme={atomOneDark}
                    customStyle={{
                      height: "500px",
                      overflowY: "scroll",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
