import type { CollectionEntry } from "astro:content";
import FilterSection from "@components/FilterSection.tsx";
import PostPreviewCard from "@components/PostPreviewCard.tsx";

type Post = CollectionEntry<"blog">["data"] & {
  slug: CollectionEntry<"blog">["id"];
};

type Props = {
  allPosts: Post[];
};

export default function ArticleListContainer({ allPosts }: Props) {
  return (
    <section className="text-content">
      <FilterSection />
      {allPosts.map(post => (
        <PostPreviewCard key={post.slug} post={post} variant="moderate" />
      ))}
    </section>
  );
}
