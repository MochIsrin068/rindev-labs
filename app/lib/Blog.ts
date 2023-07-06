export async function getDataBlog() {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?${new URLSearchParams({
      rss_url: "https://medium.com/feed/@isrin068",
    })}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return dataJson.items;
}
