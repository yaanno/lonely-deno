import articleData from "../data/articles.json" assert { type: "json" };

export interface Article {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  categories: string[];
  type: string;
  url: string;
  published_at: string;
  related_place_names: string[] | null;
  related_place_slugs: string[] | null;
}

export async function getLatest(order: string) {
  const articles = await articleData;
  const sortedArticles = articles.sort((a1, a2) => {
    if (order === "asc") {
      return Date.parse(a1.published_at) - Date.parse(a2.published_at);
    }
    return Date.parse(a2.published_at) - Date.parse(a1.published_at);
  });
  return sortedArticles.slice(0, 10);
}

export async function getByTag(tag: string) {
  const articles = await articleData.filter((article) => {
    const tags = article.tags?.map((tag) => tag.toLowerCase());
    return tags?.includes(tag);
  });
  return articles.slice(0, 10);
}

export async function getByPlace(place: string) {
  const articles = await articleData.filter((article) => {
    const places = article.related_place_names?.map((place) =>
      place.toLowerCase()
    );
    return places?.includes(place);
  });
  return articles.slice(0, 10);
}

const db = {
  getLatest,
  getByTag,
  getByPlace,
};

export default db;
