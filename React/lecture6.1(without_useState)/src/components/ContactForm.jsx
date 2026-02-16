import React, { useState } from "react";

export default function ContactForm() {
    let name = "";

  return (
    <div>
      <h2>Contact Me</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          name=(e.target.value);
          console.log("Name:", e.target.value);
        }}
      />

      <button 
      onClick={()=>{
        alert("Submitted name is " + name);
      }}>
        Submit
      </button>
    </div>
  );
}