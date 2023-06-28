"use client";
import { useEffect } from "react";

export default function SnippetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return <>{children}</>;
}
