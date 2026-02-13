import React from "react";
import Hero from "./components/Hero.jsx";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
