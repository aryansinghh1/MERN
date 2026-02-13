import React from "react";

export default function Card({ title }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>{title}</p>
    </div>
  );
}
