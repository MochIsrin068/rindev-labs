import SectioHeader from "../components/SectionHeader";
import DividerWave from "../components/DividerWave";
import WrapperAnimatePresence from "./components/WrapperAnimatePresence";
import { reconstructSnippetData } from "../utils/apiResponse";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Snippet() {
  const supabase = createServerComponentClient({ cookies });
  const { data: snippets }: any = await supabase.from("snippet").select("*");

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
