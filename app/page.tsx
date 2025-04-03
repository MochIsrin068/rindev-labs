
import Intro from "./components/Intro";
import Work from "./components/Work";
import BlogComponent from "./components/Blog";
import ContactComponent from "./components/Contact";
import ProjectComponent from "./components/Project";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("./components/Lanyard"), {
  ssr: false,
})

export default async function Home() {
  return (
    <>
      {/* Lanyard */}
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />

      {/* Content */}
      <Intro />
      <Work />
      <ProjectComponent />
      <BlogComponent />
      <ContactComponent />
    </>
  );
}
