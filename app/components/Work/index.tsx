import WorkItem from "./WorkItem";
import SectioHeader from "../SectionHeader";
import DividerWave from "../DividerWave";
import { dateToMonthYear } from "@/app/utils/date";
import { reconstructWorkData } from "@/app/utils/apiResponse";

const { CMS_URL } = process.env;
async function getData() {
  const res = await fetch(`${CMS_URL}/api/works?sort=id:DESC&populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return reconstructWorkData(dataJson.data);
}

export default async function Work() {
  const works = await getData();
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
                key={item?.id}
                company={item?.company}
                description={item?.description}
                responsibilities={item?.responsibilities}
                position={item?.position}
                workDate={`${dateToMonthYear(`${item?.startDate}`)} - ${
                  item?.isPresent
                    ? "Present"
                    : dateToMonthYear(`${item?.finishDate}`)
                }`}
              />
            ))}
        </div>
        <DividerWave />
      </div>
    </>
  );
}
