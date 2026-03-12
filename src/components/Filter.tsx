import type { ChangeEvent } from "react";

type Filter = {
  type: "tag" | "category" | "sort";
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  listOfOptions: string[];
  className?: string;
};
export default function Filter({
  type,
  value,
  onChange,
  listOfOptions,
  className,
}: Filter) {
  return (
    <div className={className}>
      <label htmlFor={`filter-${type}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
        {": "}
      </label>
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
