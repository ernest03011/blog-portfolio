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
  const [sortByTitle, setSortByTitle] = useState("Newest First");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const handleSortingByTitle = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortByTitle(event.target.value);
  };

  const filteredPosts
    = filterBy === "All"
      ? allPosts
      : allPosts.filter(post => post.category === filterBy);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const sortOption = sortByTitle.trim().toLocaleLowerCase();

    if (sortOption === "newest first")
      return new Date(b.pubDate) - new Date(a.pubDate);
    if (sortOption === "oldest first")
      return new Date(a.pubDate) - new Date(b.pubDate);

    return 0;
  });

  return (
    <section className="text-content">
      <FilterSection filterBy={filterBy} handleChange={handleChange} sortByTitle={sortByTitle} handleSortingByTitle={handleSortingByTitle} />

      {sortedPosts.length <= 0
        ? <EmptyList />
        : sortedPosts.map(post => (
            <PostPreviewCard key={post.slug} post={post} variant="moderate" />
          ))}
    </section>
  );
}
