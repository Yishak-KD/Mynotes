import React, { useContext } from 'react'
import { AppContext } from '../App'

function UseContext() {
    const { value, setValue } = useContext(AppContext)
    return (
        <>
            <h1>{value}</h1>
            <button onClick={() => {
                setValue("Thanks for subscribing!")
            }}>Click me</button>
        </>
    )
}

export default UseContext;