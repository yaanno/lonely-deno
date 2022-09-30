import articleData from "../data/articles.json" assert { type: "json" };

export interface Article {
  title: string;
  excerpt: string;
  tags: Tag[] | null;
  slug: string;
  categories: string[] | null;
  type: string;
  url: string;
  published_at: string;
  related_place_names: Place[] | null;
  related_place_slugs: string[] | null;
}

export type Tag = string;
export type Place = string;

/**
 * Sort the collection in `asc` or `desc` order
 * @param articles `Article[]`
 * @param order `string`, default: `desc`
 * @returns Sorted article list
 */
function sortBy(articles: Article[], order = "desc") {
  return articles.sort((a1, a2) => {
    if (order === "asc") {
      return Date.parse(a1.published_at) - Date.parse(a2.published_at);
    }
    return Date.parse(a2.published_at) - Date.parse(a1.published_at);
  });
}

/**
 * Remove duplications from the collection
 * @param collection
 * @returns
 */
function dedupe(collection: Place[] | Tag[] | null) {
  if (!collection?.length) return [];
  const itemSet = new Set<string>();
  for (const item of collection) {
    if (!item.match(/-/)) {
      itemSet.add(item.toLowerCase());
    }
  }
  return Array.from(itemSet);
}

/**
 * Fetch and preprocess `Article` items from the json store
 * @param order sort order, default: `desc`
 * @param max number of items, default: `20`
 * @returns `Article[]`
 */
export async function getLatest(order = "desc", max = 20) {
  const articles = await articleData.map((article) => {
    article.tags = dedupe(article.tags);
    article.related_place_names = dedupe(article.related_place_names);
    return article;
  });
  const sortedArticles = sortBy(articles, order);
  return sortedArticles.slice(0, max);
}

export async function getLatestByMulti(place: Place, tag: Tag) {
  return await articleData.filter((article) => {
    return (
      article.tags?.includes(tag.toLowerCase()) &&
      article.related_place_names?.includes(place.toLowerCase())
    );
  });
}

/**
 * Fetch and preprocess `Articles` from the json store by `Tag` name
 * @param tag `Tag`
 * @returns
 */
export async function getByTag(tag: Tag) {
  const articles = await articleData.filter((article) => {
    const tags = dedupe(article.tags);
    return tags?.includes(tag.toLowerCase());
  });
  return sortBy(articles);
}

/**
 * Fetch and preprocess `Articles` from the json store by `Place` name
 * @param place `Place`
 * @returns `Articles[]`
 */
export async function getByPlace(place: Place) {
  const articles = await articleData.filter((article) => {
    const places = dedupe(article.related_place_names);
    return places?.includes(place.toLowerCase());
  });
  return sortBy(articles);
}

/**
 * Fetch and preprocess `Tags` from the json store
 * @returns List of tags
 */
export async function getAllTags(): Promise<Tag[]> {
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

/**
 * Fetch and preprocess `Places` from the json store
 * @returns List of places
 */
export async function getAllPlaces(): Promise<Place[]> {
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

/**
 * Simulated database :)
 */
const db = {
  getLatest,
  getByTag,
  getByPlace,
  getAllTags,
  getAllPlaces,
  getLatestByMulti,
};

export default db;
