import type { ChangeEvent } from "react";
import Filter from "./Filter";

type Props = {
  filterBy: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  sortByTitle: string;
  handleSortingByTitle: (event: ChangeEvent<HTMLSelectElement>) => void;
  searchQuery: string;
  handleSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function FilterSection({ filterBy, handleChange, sortByTitle, handleSortingByTitle, searchQuery, handleSearchQuery }: Props) {
  const listOfCategories = [
    "All",
    "Tutorials and Guides",
    "Problem and solution",
    "Projects and Case Studies",
    "Learning and Growth",
    "Insights and Best practices",
    "Resource Tools",
  ];

  const titleSortOptions = [
    "Newest First",
    "Oldest First",
    "Title Name A-Z",
    "Title Name Z-A",
  ];

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <Filter
          type="category"
          value={filterBy}
          onChange={e => handleChange(e)}
          listOfOptions={listOfCategories}
        />

        <Filter
          type="sort"
          value={sortByTitle}
          onChange={e => handleSortingByTitle(e)}
          listOfOptions={titleSortOptions}
        />

        <div>
          <span>Tags</span>
          <input
            type="text"
            placeholder="Search Tags"
            value={searchQuery}
            onChange={e => handleSearchQuery(e)}
          />
        </div>

      </div>
    </div>
  );
}
