import type { ChangeEvent } from "react";

type Filter = {
  type: "tag" | "category" | "sort";
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  listOfOptions: string[];
};
export default function Filter({
  type,
  value,
  onChange,
  listOfOptions,
}: Filter) {
  return (
    <div>
      <label htmlFor={`filter-${type}`}>{type}</label>
      <select id={`filter-${type}`} value={value} onChange={onChange}>
        {listOfOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
