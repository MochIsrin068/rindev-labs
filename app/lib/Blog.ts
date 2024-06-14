export async function getDataBlog() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataJson = await res.json();
  return dataJson;
}
