import ProjectItem from "./ProjectItem";
import SectioHeader from "../SectionHeader";
import DividerWave from "../DividerWave";
import ButtonText from "../ButtonText";
import { getDataProject } from "@/app/lib/Project";

export default async function ProjectComponent() {
  const projects = await getDataProject();
  return (
    <>
      <div className="mb-10 lg:mb-40">
        <SectioHeader
          title="My Projects"
          subtitle="I have been some project, that project It can be said my portofolio
            actually, my project from my company and side project."
        />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1">
          {projects?.slice(0, 3)?.map((item) => (
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
