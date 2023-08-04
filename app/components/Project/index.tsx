import ProjectItem from "./ProjectItem";
import SectioHeader from "../SectionHeader";
import DividerWave from "../DividerWave";
import ButtonText from "../ButtonText";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ProjectComponent() {
  const supabase = createServerComponentClient({ cookies });
  const { data: projects }: any = await supabase
    .from("project")
    .select("*")
    .order("id", { ascending: false });

  return (
    <>
      <div className="mb-10 lg:mb-40">
        <SectioHeader
          title="My Projects"
          subtitle="I have been some project, that project It can be said my portofolio
            actually, my project from my company and side project."
        />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1">
          {projects &&
            projects
              ?.slice(0, 3)
              ?.map((item: any) => (
                <ProjectItem
                  key={item.id}
                  description={item.description}
                  image={item.image}
                  projectUrl={item.projectUrl}
                  techStacks={item.techStacks}
                  title={item.title}
                />
              ))}
        </div>

        <div className="flex items-center justify-center">
          <ButtonText label="See all my project →" link="/project" />
        </div>
        <DividerWave />
      </div>
    </>
  );
}
