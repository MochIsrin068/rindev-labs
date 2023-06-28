import BlogItem from "./BlogItem";
import SectioHeader from "../SectionHeader";
import DividerWave from "../DividerWave";
import ButtonText from "../ButtonText";
import { getDataBlog } from "@/app/lib/Blog";
import { reverseAndRemoveDateMinutes } from "@/app/utils/date";

export default async function BlogComponent() {
  const mediumArticleItems = await getDataBlog();

  return (
    <>
      <div className="mb-10 lg:mb-40">
        <SectioHeader
          title="My Latest blog"
          subtitle="I have blogs or articles in medium, I decides to write because I
            want to share my knowledge, my experiences and so that make me
            unforget my previous project."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {mediumArticleItems?.slice(0, 4)?.map((item: any) => (
            <BlogItem
              key={item?.guid}
              title={item?.title}
              datePublished={reverseAndRemoveDateMinutes(item?.pubDate)}
              image={item?.thumbnail}
              link={item?.link}
              categories={item?.categories}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <ButtonText label="See all my blog →" link="/blog" />
        </div>
        <DividerWave />
      </div>
    </>
  );
}
