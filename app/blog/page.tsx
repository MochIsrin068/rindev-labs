import BlogItem from "../components/Blog/BlogItem";
import SectioHeader from "../components/SectionHeader";
import DividerWave from "../components/DividerWave";
import { reverseAndRemoveDateMinutes } from "../utils/date";
import { getDataBlog } from "../lib/Blog";

export default async function BlogPage() {
  const mediumArticleItems = await getDataBlog();

  return (
    <>
      <div className="lg:mb-40 mb-10 lg:pt-0 pt-10">
        <SectioHeader
          title="My blogs"
          subtitle="In below all my articles, that article randomly actually but can entertaint you if you boring with your life hahaha, actually, I decides to write because I
            want to share my knowledge and my experiences ✌️"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {mediumArticleItems?.map((item: any) => (
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
        <DividerWave />
      </div>
    </>
  );
}
