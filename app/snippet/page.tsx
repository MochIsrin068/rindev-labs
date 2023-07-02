import SectioHeader from "../components/SectionHeader";
import DividerWave from "../components/DividerWave";
import WrapperAnimatePresence from "./components/WrapperAnimatePresence";
import { reconstructSnippetData } from "../utils/apiResponse";

const { CMS_URL } = process.env;
async function getData() {
  const res = await fetch(`${CMS_URL}/api/snippets?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return reconstructSnippetData(dataJson.data);
}

export default async function Snippet() {
  const snippets = await getData();
  return (
    <>
      <div className="mb-10 lg:mb-40 lg:pt-0 pt-10">
        <SectioHeader
          title="My Snippet"
          subtitle="Why have snippet page? cause sometimes I forget some code of function or logical, make me hard to remember that, and actually this snippet for copy paste that code ✌️"
        />
        <WrapperAnimatePresence snippets={snippets} />
        <DividerWave />
      </div>
    </>
  );
}
