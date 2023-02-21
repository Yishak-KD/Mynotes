import React, { createContext, useState } from 'react'
import Login from './Login';

export const AppContext = createContext()

function ContextTutorial() {
    const [username, setUsername] = useState("Becca")

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login />
        </AppContext.Provider>
    )
}

export default ContextTutorial;