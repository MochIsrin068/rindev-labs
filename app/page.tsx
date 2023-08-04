import Intro from "./components/Intro";
import Work from "./components/Work";
import BlogComponent from "./components/Blog";
import ContactComponent from "./components/Contact";
import ProjectComponent from "./components/Project";

export default async function Home() {
  return (
    <>
      <Intro />
      <Work />
      <ProjectComponent />
      <BlogComponent />
      <ContactComponent />
    </>
  );
}
