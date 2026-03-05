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
      <label htmlFor={type}>{type}</label>
      <select id={type} value={value} onChange={onChange}>
        {listOfOptions.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
