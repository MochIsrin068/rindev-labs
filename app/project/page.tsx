import ProjectItem from "../components/Project/ProjectItem";
import SectioHeader from "../components/SectionHeader";
import DividerWave from "../components/DividerWave";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DownloadButton from "./_components/DownloadButton";

export default async function Project() {
  const supabase = createServerComponentClient({ cookies });
  const { data: projects }: any = await supabase
    .from("project")
    .select("*")
    .order("id", { ascending: false });

  return (
    <>
      <div className="mb-10 lg:mb-40 lg:pt-0 pt-10">
        <div className="flex items-center flex-col gap-3">
          <SectioHeader
            title="My Projects"
            subtitle="In below all about my project I have since I'm learning and until now as professional, that project It can be said my portofolio
            actually, my project from my company and side project."
          />
          <div className="flex items-center -mt-8 md:-mt-12 md:pb-10">
            <DownloadButton />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1">
          {projects &&
            projects?.map((item: any) => (
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
        <DividerWave />
      </div>
    </>
  );
}
