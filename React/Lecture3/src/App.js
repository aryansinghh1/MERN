import React from "react";
import { Header, Footer } from "./components/Layout";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Header />
      <h1>React App using Parcel</h1>
      <Card title="React" />
      <Card title="Parcel Bundler" />
      <Footer />
    </div>
  );
}
