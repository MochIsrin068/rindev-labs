import ProjectItem from "../components/Project/ProjectItem";
import SectioHeader from "../components/SectionHeader";
import DividerWave from "../components/DividerWave";
import { getDataProject } from "../lib/Project";

export default async function Project() {
  const projects = await getDataProject();
  return (
    <>
      <div className="mb-10 lg:mb-40 lg:pt-0 pt-10">
        <SectioHeader
          title="My Projects"
          subtitle="In below all about my project I have since I'm learning and until now as professional, that project It can be said my portofolio
            actually, my project from my company and side project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1">
          {projects?.map((item) => (
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
