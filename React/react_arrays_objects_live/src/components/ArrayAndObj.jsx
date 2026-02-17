import React, { useState } from "react";

//objects

// export default function ArrayAndObject() {
//   const [user, setUser] = useState({
//     name: "aryan",
//     age: 20,
//     address: {
//       city: "Phagwara",
//       country: "India",
//     },
//   });

//   function updateUser() {
//     setUser({
//       ...user, // spread top-level user
//       name: "somnath",
//       age: 21,
//       address: {
//         ...user.address, // spread nested object
//         city: "Delhi", // update only city
//         country: "bangladesh",
//       },
//       //if we have used shallow copy then it would
//       //only change top level not nested level.
//     });
//   }

//   return (
//     <div>
//       <h1>User list</h1>
//       <p>name: {user.name}</p>
//       <p>age: {user.age}</p>
//       <p>city: {user.address.city}</p>
//       <p>country: {user.address.country}</p>
//       <button onClick={updateUser}>Click to update</button>
//     </div>
//   );
// }

// export default function ArrayAndObject() {
//   const [user, setUser] = useState({
//     name: "Aryan",
//     age: 20,
//     familyMember: {
//       father: "Papa",
//       mother: "mummy",
//       brother: "ritik",

//     },
//   });

//   function shallowCopy() {
//     setUser({
//       ...user, // spread top-level user
//       name: "Aryan Singh",
//       age: 21
//     });
//   }

//   function deepCopy(){
//     setUser({...user,familyMember:{...user.familyMember,father:"father's name",mother:"mother's name"}})
//   }
//   return (
//     <div>
//       <h1>User list</h1>
//       <p>name: {user.name}</p>
//       <p>age: {user.age}</p>
//       <p>Father: {user.familyMember.father}</p>
//       <p>Mother: {user.familyMember.mother}</p>
//       <p>Brother: {user.familyMember.brother}</p>
//       <button onClick={shallowCopy}>Click for shallow copy</button>
//       <button onClick={deepCopy}>Click for deep copy</button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function ArrayAndObject() {
//   const [users, setUsers] = useState([
//     { name: "aryan", age: 20 },
//     { name: "ankit", age: 30 },
//   ]);

//   function updateUser() {
//     // Example: update the first user
//     const updatedUsers = [...users];
//     updatedUsers[0] = { ...updatedUsers[0], name: "somnath", age: 21 };
//     setUsers(updatedUsers);
//   }

//   return (
//     <div>
//       <h1>User list</h1>
//       {users.map((user, index) => (
//         <div key={index}>
//           <p>name: {user.name}</p>
//           <p>age: {user.age}</p>
//         </div>
//       ))}
//       <button onClick={updateUser}>click to update first user</button>
//     </div>
//   );
// }




//array


export default function ArrayAndObject() {
  const [name, setName] = useState(["React", "Node"]);

  const addItem = () => {
    setName([...name, "MongoDB","ExpressJs","Node"]); // like push
  };

  const removeLast = () => {
    setName(name.slice(0, name.length - 1));
  };

  const removeNode = () => {
    setName(name.filter((item) => item !== "Node"));
  };

  return (
    <div>
      <button onClick={removeLast}>Pop</button>
      <button onClick={removeNode}>Filter Node</button>
      <button onClick={addItem}>Add</button>
      <h1>Subject list</h1>
      <ul>
        {name.map((name, index) => (
          <li key={index}> {name} </li>
        ))}
      </ul>
    </div>
  );
}
