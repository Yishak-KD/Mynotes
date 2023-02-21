import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login() {
    const { username, setUsername } = useContext(AppContext)
    return (
        <div>
            <h1>{username}</h1>
            <button onClick={() => {
                setUsername("You clicked me!")
            }}>Click here</button>
        </div>
    )
}

export default Login