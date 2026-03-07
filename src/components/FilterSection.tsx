import type { ChangeEvent } from "react";
import Filter from "./Filter";

type Props = {
  filterBy: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default function FilterSection({ filterBy, handleChange }: Props) {
  const listOfCategories = [
    "All",
    "Tutorials and Guides",
    "Problem and solution",
    "Projects and Case Studies",
    "Learning and Growth",
    "Insights and Best practices",
    "Resource Tools",
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
      </div>
    </div>
  );
}
