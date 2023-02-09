// Hooks Introduction

import React, { useState } from 'react'

function ReactHooks() {
    const [Count, setCount] = useState(2)
    return (
        <div>
            <button onClick={() => setCount(Count + 2)}>Counter {Count}</button>
        </div>
    )
}

export default ReactHooks;