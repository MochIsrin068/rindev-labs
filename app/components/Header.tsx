"use client";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("work");

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

  return (
    <>
      <motion.div
        className={`flex justify-center fixed top-0 z-50 w-full ${
          isSticky
            ? "bg-opacity-100 transition-all duration-500 bg-gradient-to-t from-[#0982a300] to-[#122e57bf]"
            : "transition-all duration-500 bg-opacity-0"
        }`}
      >
        <motion.div className="flex justify-between w-full px-4 lg:px-0 lg:w-3/5 py-3 lg:py-10">
          <motion.h2
            className={`cursor-pointer text-xs lg:text-xl font-bold text-white mt-2 lg:mt-0`}
          >
            <Link href="/">
              {"<Rindev"}
              <motion.span className="opacity-50">
                .labs
                <ReactTypingEffect text="/>" />
              </motion.span>
            </Link>
          </motion.h2>

          <motion.div className={`flex items-start`}>
            {menus.map((menu) => (
              <motion.div
                className="ml-2 lg:ml-4"
                key={menu.path}
                onClick={() => setActiveHash(menu.title.toLowerCase())}
              >
                <Link
                  href={menu.path}
                  className={`text-xs lg:text-base hover:opacity-80 ${
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
