import React, { useState } from "react";

export default function ContactForm() {
  let tempName = "";

  const [name, setName] = useState("");
  //name will store the current name typed in the input
  //setName() -> function used to update name -> when state update component

  // const [message, setMessage] = useState("");

  function handleKeyUp(e) {
    console.log("Key up: ", e.target.value);
    //e.target.value => current key inside the input
  }

  function handleSubmit() {
    alert(`Name: ${name}/nMessage: ${message}`);
    // alert(`Name: ${name}`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          tempName = e.target.value;
          setName(e.target.value);
        }}
        onKeyUp={handleKeyUp}
        onKeyDown={()=>console.log("key Down")}
        onMouseDown={()=>console.log("mouse down")}
        onMouseUp={()=>console.log("mouse up")}
        onMouseOver={()=>console.log("mouse over")}
      />

      <br />
      <br />

      {/* <textarea
        name=""
        id=""
        placeholder="Enter message"
        onChange={(e) => setmessage(e.target.value)}
      ></textarea> */}

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}
