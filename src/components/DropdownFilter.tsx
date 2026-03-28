import type { ChangeEvent } from "react";

type DropdownFilter = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  listOfOptions: string[];
  className?: string;
};
export default function DropdownFilter({
  label,
  value,
  onChange,
  listOfOptions,
  className,
}: DropdownFilter) {
  return (
    <div className="custom-select">
      <label htmlFor={`filter-${label}`} className="sr-only">
        {label.charAt(0).toUpperCase() + label.slice(1)}
        {": "}
      </label>
      <select
        id={`filter-${label}`}
        value={value}
        onChange={onChange}
        className={className}
      >
        {listOfOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <span className="custom-arrow"></span>
    </div>
  );
}
