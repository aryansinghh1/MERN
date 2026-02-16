import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");



  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;

    setSubmittedName(name);
    alert(`Uncontrolled Submitted ${name} ${email}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
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
      <button type="submit" onMouseUp={() => console.log("mouse up")}>
        Submit
      </button>
      <p>Live Name (controlled): {name}</p>
      <p>Submitted Name (Uncontrolled): {submittedName}</p>
    </form>
  );
}
