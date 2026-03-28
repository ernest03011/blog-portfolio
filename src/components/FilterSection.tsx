import type { ChangeEvent } from "react";
import { useState } from "react";
import DropdownFilter from "./DropdownFilter";
import SearchFilter from "./SearchFilter";

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
    <div className="bg-linear-to-r from-secondary to-surface rounded-lg shadow-lg px-4 py-4">
      <div>
        <div
          className="flex justify-between mb-3"
        >
          <DropdownFilter
            label="Category"
            value={filterBy}
            onChange={e => handleChange(e)}
            listOfOptions={listOfCategories}
            className="w-50 text-sm"
          />

          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className={`${isExpanded ? "bg-accent font-bold text-surface!" : ""} flex justify-center items-center gap-1 border border-accent hover:bg-accent hover:text-secondary hover:font-bold px-6 py-1 rounded-full`}
          >
            {
              isExpanded
                ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter-2-up">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6h16" />
                      <path d="M6 12h12" />
                      <path d="M9 18h3" />
                      <path d="M19 22v-6m0 0l3 3m-3 -3l-3 3" />
                    </svg>
                  )
                : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter-2-down">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6h16" />
                      <path d="M6 12h12" />
                      <path d="M9 18h3" />
                      <path d="M19 16v6" />
                      <path d="M19 22l3 -3" />
                      <path d="M19 22l-3 -3" />
                    </svg>
                  )
            }

            Filters
          </button>
        </div>

        {
          isExpanded
          && (
            <div
              className="flex md:justify-between md:flex-row my-8 flex-col justify-start items-start gap-2"
            >
              <DropdownFilter
                label="Sort"
                value={sortByTitle}
                onChange={e => handleSortingByTitle(e)}
                listOfOptions={titleSortOptions}
                className="w-50 text-sm"
              />

              <SearchFilter
                label="Tags"
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
              />
            </div>
          )
        }

      </div>
    </div>
  );
}
