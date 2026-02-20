import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SearchProvider } from "./context/SearchContext";

export default function App() {
  return (
    <AppProvider>
      <SearchProvider>
        <Header />
        <SearchBar />
      </SearchProvider>
    </AppProvider>
  );
}
