"use client";

interface SelectSortOrderProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SelectSortOrder({
  value,
  onChange,
}: SelectSortOrderProps) {
  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleSortOrderChange}
      className="px-4 py-2 rounded-md border"
    >
      <option value="최신순">최신순</option>
      <option value="오래된순">오래된순</option>
    </select>
  );
}
