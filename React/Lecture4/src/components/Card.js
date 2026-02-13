import React from "react";

export default function Card({ title }) {
  const styleObj = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#f5f5f5"
  };

  return <div style={styleObj}>{title}</div>;
}

//inline styling with style object
// ->styles written in js object
// ->uses camel case
// -> 