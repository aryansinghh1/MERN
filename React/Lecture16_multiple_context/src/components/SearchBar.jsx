import { useSearchContext } from "../context/SearchContext";

export default function SearchBar() {
  const { search, setSearch } = useSearchContext();

  console.log("SearchBar Re-rendered");

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
