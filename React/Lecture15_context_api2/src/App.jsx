import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function App() {

  return (
    <AppProvider>
      <Header/>
      <Profile/>
    </AppProvider>
  );
}
