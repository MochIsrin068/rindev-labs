import SectioHeader from "../SectionHeader";
import ContactItem from "./ContactItem";
import DividerWave from "../DividerWave";
import { reconstructContactData } from "@/app/utils/apiResponse";

const { CMS_URL } = process.env;
async function getData() {
  const res = await fetch(`${CMS_URL}/api/contacts?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return reconstructContactData(dataJson.data);
}

export default async function ContactComponent() {
  const contacts = await getData();
  return (
    <>
      <div className="mb-10 lg:mb-40" id="contact">
        <SectioHeader
          title="Let's Connect"
          subtitle="I am so glad to be connected with you all, so let's connect with each other by saying hello, we can talk about work and share experiences with each other ✌️"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {contacts?.map((item) => (
            <ContactItem
              key={item?.id}
              imageUrl={item?.imageUrl}
              link={item?.link}
              name={item?.name}
            />
          ))}
        </div>
        <DividerWave />
      </div>
    </>
  );
}
