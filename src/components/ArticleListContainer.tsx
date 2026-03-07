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
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const handleSortingByTitle = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortByTitle(event.target.value);
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterPosts = () => {
    let filtered = allPosts;

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag.trim().toLocaleLowerCase().includes(searchQuery.trim().toLocaleLowerCase())),
      );
    }

    filtered = filterBy === "All"
      ? filtered
      : filtered.filter(post => post.category === filterBy);

    return filtered;
  };

  const filteredPosts = filterPosts();

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const sortOption = sortByTitle.trim().toLocaleLowerCase();

    if (sortOption === "newest first")
      return new Date(b.pubDate) - new Date(a.pubDate);
    if (sortOption === "oldest first")
      return new Date(a.pubDate) - new Date(b.pubDate);
    if (sortOption === "title name a-z")
      return a.title.localeCompare(b.title);
    if (sortOption === "title name z-a")
      return b.title.localeCompare(a.title);

    return 0;
  });

  return (
    <section className="text-content">
      <FilterSection
        filterBy={filterBy}
        handleChange={handleChange}
        sortByTitle={sortByTitle}
        handleSortingByTitle={handleSortingByTitle}
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
      />

      {sortedPosts.length <= 0
        ? <EmptyList />
        : sortedPosts.map(post => (
            <PostPreviewCard key={post.slug} post={post} variant="moderate" />
          ))}
    </section>
  );
}
