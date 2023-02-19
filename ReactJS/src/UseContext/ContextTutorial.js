import React, { createContext, useState } from 'react';

const MyContext = createContext();

function ContextTutorial() {
    const [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={{ count, setCount }}>
            <div>
            </div>
        </MyContext.Provider>
    )
}

export default ContextTutorial