import { useState } from "react";
import Parent from "./components/Parent";
import { UserContext } from "./context/AppContext";

export default function App() {
  const [user, setUser] = useState("aryan");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>Prop drilling</h1>
      <Parent />
    </UserContext.Provider>
  );
}
