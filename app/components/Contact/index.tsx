import SectioHeader from "../SectionHeader";
import ContactItem from "./ContactItem";
import DividerWave from "../DividerWave";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ContactComponent() {
  const supabase = createServerComponentClient({ cookies });
  const { data: contacts }: any = await supabase
    .from("contact")
    .select("*")

  return (
    <>
      <div className="mb-10 lg:mb-40" id="contact">
        <SectioHeader
          title="Let's Connect"
          subtitle="I am so glad to be connected with you all, so let's connect with each other by saying hello, we can talk about work and share experiences with each other ✌️"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {contacts && contacts?.map((item: any) => (
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
