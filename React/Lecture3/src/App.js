import React from "react";
import { Header, Footer } from "./components/Layout";
        //curly bracket means name import and export
        //multiple exports in same file.
        //must import using {header}
import Card from "./components/Card";
       //its default export
       //file exports only one main thing
       //import without curly braces

       //default export = single main component
       //named export = multiple utilities/component

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


//without bundler
//1-browser will not understand jsx
//2-not be able to combine the files
//3-slow reload and slow refresh

//with bundler
//1-browser will understand jsx
//2-able to combine the files
//3-fast reload and fast refresh