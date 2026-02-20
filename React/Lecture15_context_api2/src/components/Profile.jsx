import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Profile() {
  const { user, setUser,} = useAppContext();
  const [name, setName] = useState(user);

  const handleUpdate = () => {
      setUser(name);
  };

  return (
    <div style={{marginTop:"10px"}}>
      <input
        type="text"
        value={name}
        placeholder="Enter new name"
        onChange={(e) => setName(e.target.value)}

      />

      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
}