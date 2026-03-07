import type { CollectionEntry } from "astro:content";
import type { ChangeEvent } from "react";
import EmptyList from "@components/EmptyList";
import FilterSection from "@components/FilterSection";
import PostPreviewCard from "@components/PostPreviewCard";
import { useState } from "react";

type Post = CollectionEntry<"blog">["data"] & {
  slug: CollectionEntry<"blog">["id"];
};

type Props = {
  allPosts: Post[];
};

export default function ArticleListContainer({ allPosts }: Props) {
  const [filterBy, setFilterBy] = useState("All");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const filteredPosts
    = filterBy === "All"
      ? allPosts
      : allPosts.filter(post => post.category === filterBy);

  return (
    <section className="text-content">
      <FilterSection filterBy={filterBy} handleChange={handleChange} />

      {filteredPosts.length <= 0
        ? <EmptyList />
        : filteredPosts.map(post => (
            <PostPreviewCard key={post.slug} post={post} variant="moderate" />
          ))}
    </section>
  );
}
