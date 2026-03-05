type Filter = {
  type: "tag" | "category" | "sort";
  value: string;
  onChange: (param: string) => void;
  listOfOptions: string[];
};
export default function Filter({ type, value, onChange, listOfOptions }: Filter) {
  return (
    <div>
      <label htmlFor={type}>
        {type}
      </label>
      <select
        id={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {
          listOfOptions.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))
        }

      </select>
    </div>
  );
}
