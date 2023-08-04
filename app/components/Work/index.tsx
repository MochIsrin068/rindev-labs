import WorkItem from "./WorkItem";
import SectioHeader from "../SectionHeader";
import DividerWave from "../DividerWave";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Work() {
  const supabase = createServerComponentClient({ cookies });
  const { data: works }: any = await supabase
    .from("work")
    .select("*, responsibilities:responsibilities(*)")
    .order("id", { ascending: false });

  return (
    <>
      <div className="mb-10 lg:mb-40" id="work">
        <SectioHeader
          title="Work Experience"
          subtitle=" Previously worked on freelance and project base web and mobile
            application development as a Fullstack Developer, and currently a
            full-time job as a Frontend Engineer."
        />

        <div>
          {works &&
            works?.map((item: any) => (
              <WorkItem
                id={item?.id}
                key={item?.id}
                company={{
                  name: item?.company_name,
                  picture: item?.company_picture,
                }}
                description={item?.description}
                position={item?.position}
                workDate={item?.work_date}
                responsibilities={item?.responsibilities}
              />
            ))}
        </div>
        <DividerWave />
      </div>
    </>
  );
}
