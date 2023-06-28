import { reconstructProjectData } from "../utils/apiResponse";

const { CMS_URL } = process.env;
export async function getDataProject() {
  const res = await fetch(`${CMS_URL}/api/projects?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return reconstructProjectData(dataJson.data);
}
