"use client";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Hamburger } from "./Hamburger";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("work");
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onCheckIsMenuActive = (path: string) => {
    const hash = path.replaceAll("/#", "");
    if (pathname === "/") {
      return activeHash === hash;
    } else {
      return pathname === path;
    }
  };

  const menus = [
    { title: "Work", path: "/#work" },
    { title: "Project", path: "/project" },
    { title: "Blog", path: "/blog" },
    { title: "Snippet", path: "/snippet" },
    { title: "Contact", path: "/#contact" },
  ];

  const onClickHamburgerButton = useCallback(() => {
    setIsMenuOpened(!isMenuOpened)
  }, [isMenuOpened])

  return (
    <>
      <motion.div
        className={`flex justify-center fixed top-0 z-50 w-full ${
          isSticky
            ? "bg-opacity-100 transition-all duration-500 bg-gradient-to-t from-[#0982a300] to-[#122e57bf]"
            : "transition-all duration-500 bg-opacity-0"
        } 
          ${isMenuOpened ? '!bg-black !duration-200 !opacity-90' : ''}
        `}
      >
        <motion.div className="flex justify-between w-full px-5 lg:px-0 lg:w-3/5 py-3 lg:py-10 flex-col lg:flex-row">
          <motion.div className="flex justify-between w-full">
            <motion.h2
              className={`cursor-pointer text-md lg:text-xl font-bold text-white mt-2 lg:mt-0`}
              onClick={() => setIsMenuOpened(false)}
            >
              <Link href="/">
                {"<Rindev"}
                <motion.span className="opacity-50">
                  .labs
                  <ReactTypingEffect text="/>" />
                </motion.span>
              </Link>
            </motion.h2>

            <motion.div className="flex items-center justify-end lg:hidden">
              <Hamburger 
                onClick={onClickHamburgerButton}
                isOpen={isMenuOpened}
              />
            </motion.div>
          </motion.div> 

          <motion.div className={`lg:flex items-start ${isMenuOpened ? "flex flex-col mt-4 items-center pb-5" : "hidden"} `}>
            {menus.map((menu) => (
              <motion.div
                className="ml-2 mt-2 lg:mt-0 lg:ml-4"
                key={menu.path}
                onClick={() => {
                  setActiveHash(menu.title.toLowerCase())
                  setIsMenuOpened(false)
                }}
              >
                <Link
                  href={menu.path}
                  className={`text-md lg:text-base hover:opacity-80 ${
                    onCheckIsMenuActive(menu.path)
                      ? "text-white border-b-4 border-blue-800"
                      : "text-gray-200"
                  }`}
                >
                  {menu.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
