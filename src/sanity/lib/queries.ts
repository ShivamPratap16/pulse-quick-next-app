import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  featuredImage,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",

  "authorName": author->name
}`);


export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  featuredImage,
  youtubeVideo,
  content,
  category,
  city,
  tags,
  "metaTitle": metaTitle,
  "metaDescription": metaDescription,
  "canonicalUrl": canonicalUrl
}`);
