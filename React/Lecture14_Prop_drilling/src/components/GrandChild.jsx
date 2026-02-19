import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function GrandChild() {
    const { user, setUser } = useContext(UserContext);

    function changeName(){
        setUser("Sona");
    }

    return (
        <>
            <h1>Grand Child</h1>
            <h2>Hello {user}</h2>

            <button onClick={changeName}>
                Change User
            </button>
        </>
    );
}
