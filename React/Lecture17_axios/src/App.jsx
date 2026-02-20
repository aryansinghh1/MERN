import useUser from "./hooks/useUser";
import { Toaster } from "react-hot-toast";


export default function App() {
  const users = useUser();
  return (
   <div style={{padding:40}}>
    <Toaster position="top-right"/>
    <h1>Axios Instance Demo</h1>
    <h3>User List:</h3>

    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
   </div>
  );
}
