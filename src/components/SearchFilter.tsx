import type { ChangeEvent } from "react";

type SearchFilterProps = {
  label: string;
  searchQuery: string;
  handleSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function SearchFilter({ label, searchQuery, handleSearchQuery, className }: SearchFilterProps) {
  const baseStyles = "border hover:border-accent px-2";

  return (
    <div>
      <span className="block">
        {label}
        :
      </span>
      <input
        type="text"
        placeholder={`Search ${label}`}
        value={searchQuery}
        onChange={e => handleSearchQuery(e)}
        className={`${baseStyles} ${className}`}
      />
    </div>
  );
}
