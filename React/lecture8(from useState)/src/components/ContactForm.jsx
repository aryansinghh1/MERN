import React, { useState } from "react";

// Requirements
// 1️⃣ Create a Contact Form with fields:
// Name input
// Email input
// Message textarea
// Submit button

// 2️⃣ Use React Events
// You must use:
// onChange
// onClick
// onKeyUp or onKeyDown

// Expected behavior:
// Typing → should update state
// Key press → should console log message
// Button click → should show alert with entered data


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();    //stops page refresh
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const message = e.target.elements[2].value;
    // setSubmittedName(name);
    alert(`Name: ${name}\nEmail ${email}\nMessage: ${message}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <br /><br />
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={() => console.log("key released")}
        onKeyDown={() => console.log("key pressed")}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={() => console.log("key pressed")}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={() => console.log("key released")}
        onKeyDown={() => console.log("key pressed")}
      ></textarea>
      <br />
      <br />
      <button type="submit" onMouseUp={() => console.log("mouse up")}>
        Submit
      </button>
      <p>Live Name (controlled): {name}</p>
      {/* <p>Submitted Name (Uncontrolled): {submittedName}</p> */}
    </form>
  );
}
