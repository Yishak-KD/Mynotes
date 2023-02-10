import React, { useState, useEffect } from 'react'

function EffectHooks() {
    const [count, setCount] = useState(0)

    const addItem = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        document.title = `Current count is ${count}`
    })

    return (
        <div>
            <button onClick={addItem}>Count: {count}</button>
        </div>
    )
}

export default EffectHooks