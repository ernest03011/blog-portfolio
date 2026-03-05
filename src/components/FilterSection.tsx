import type { ChangeEvent } from "react";
import Filter from "./Filter";

export default function FilterSection() {
  const sortBy = "name";

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.warn(event.target.value);
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <Filter
          type="sort"
          value={sortBy}
          onChange={handleChange}
          listOfOptions={["name", "price", "rating"]}
        />
      </div>
    </div>
  );
}
