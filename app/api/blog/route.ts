import Parser from "rss-parser";
import cheerio from 'cheerio';

export const dynamic = 'force-dynamic' 
export async function GET(request: Request) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://medium.com/feed/@isrin068');
    const items = feed?.items || []
    
    // Extract thumbnails
    const itemsWithThumbnails = items.map(item => {
      const $ = cheerio.load(item['content:encoded']);
      const img = $('img').first().attr('src');
      return {
        ...item,
        thumbnail: img || "https://cdn-images-1.medium.com/v2/resize:fit:1024/0*PG-oKUKcf5jDwHlW", 
      };
    });

    return new Response(JSON.stringify(itemsWithThumbnails), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  }
}
