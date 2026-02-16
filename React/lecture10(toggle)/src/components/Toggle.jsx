import React, { useEffect, useState } from "react";

export default function Toggle() {
  // load value from localStorage
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // save whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  function handleToggle() {
    setDark((prev) => !prev);
  }

  const style = {
    padding: "20px",
    height: "100px",
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
    textAlign: "center",
  };

  return (
    <div className="container" style={style}>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
