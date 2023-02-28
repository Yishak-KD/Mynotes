// Hooks Introduction

import React, { useState } from 'react'

function ReactHooks() {
    const [Count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 3)}>Counter: {Count}</button>
        </div>
    )
}

export default ReactHooks;