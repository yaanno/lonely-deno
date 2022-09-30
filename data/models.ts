import articleData from "../data/articles.json" assert { type: "json" };

export interface Article {
  title: string;
  excerpt: string;
  tags: string[] | null;
  slug: string;
  categories: string[] | null;
  type: string;
  url: string;
  published_at: string;
  related_place_names: string[] | null;
  related_place_slugs: string[] | null;
}

export function sortBy(articles: Article[], order = "desc") {
  return articles.sort((a1, a2) => {
    if (order === "asc") {
      return Date.parse(a1.published_at) - Date.parse(a2.published_at);
    }
    return Date.parse(a2.published_at) - Date.parse(a1.published_at);
  });
}

export async function getLatest(order: string, max = 20) {
  const articles = await articleData;
  const sortedArticles = sortBy(articles, order);
  return sortedArticles.slice(0, max);
}

export async function getByTag(tag: string) {
  const articles = await articleData.filter((article) => {
    const tags = article.tags?.map((tag) => tag.toLowerCase());
    return tags?.includes(tag.toLowerCase());
  });
  return sortBy(articles);
}

export async function getByPlace(place: string) {
  const articles = await articleData.filter((article) => {
    const places = article.related_place_names?.map((place) =>
      place.toLowerCase()
    );
    return places?.includes(place.toLowerCase());
  });
  return sortBy(articles);
}

export async function getAllTags(): Promise<string[]> {
  const articles = await articleData.filter((article) => article.tags?.length);
  const tags = new Set<string>();
  for (const article of articles) {
    for (const tag of article.tags || []) {
      if (!tag.match(/-/)) {
        tags.add(tag.toLowerCase());
      }
    }
  }
  return Array.from(tags).sort();
}

export async function getAllPlaces(): Promise<string[]> {
  const articles = await articleData.filter(
    (article) => article.related_place_names?.length
  );
  const places = new Set<string>();
  for (const article of articles) {
    for (const place of article.related_place_names || []) {
      if (!place.match(/-/)) {
        places.add(place);
      }
    }
  }
  return Array.from(places).sort();
}

const db = {
  getLatest,
  getByTag,
  getByPlace,
  getAllTags,
  getAllPlaces,
};

export default db;
