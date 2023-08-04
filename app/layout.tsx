import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export const dynamic = "force-dynamic";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Rindev Labs",
  description: "Rindev Labs by Muhammad isrim yambi baso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className} suppressHydrationWarning={true}>
        <ProgressBar />
        <main className="flex flex-col min-h-screen items-center justify-between">
          <Header />
          <div className="px-4 lg:px-0 md:w-3/4 lg:w-3/5">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
