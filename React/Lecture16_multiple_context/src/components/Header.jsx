import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { user, theme, toggleTheme } = useAppContext();

  return (
    <div
      style={{
        padding: "10px",
        background: theme === "light" ? "#f1f1f1" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Welcome {user}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}