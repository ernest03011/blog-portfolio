import type { ChangeEvent } from "react";
import { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="bg-surface-elevated hover:bg-surface-hover border-divider rounded-lg border- border-solid shadow-lg px-4 py-4">
      <div>
        <div
          className="flex justify-between mb-8"
        >
          <Filter
            type="category"
            value={filterBy}
            onChange={e => handleChange(e)}
            listOfOptions={listOfCategories}
          />

          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className={`${isExpanded ? "bg-accent font-bold text-surface!" : ""} border border-accent hover:bg-accent hover:text-secondary hover:font-bold px-6 py-1 rounded-full`}
          >
            Filters
          </button>
        </div>

        {
          isExpanded
          && (
            <div
              className="flex justify-between my-8"
            >
              <Filter
                type="sort"
                value={sortByTitle}
                onChange={e => handleSortingByTitle(e)}
                listOfOptions={titleSortOptions}
              />

              <div>
                <span className="block">Tags:</span>
                <input
                  type="text"
                  placeholder="Search Tags"
                  value={searchQuery}
                  onChange={e => handleSearchQuery(e)}
                  className="border hover:border-accent px-2"
                />
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}
