import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
function RespondAnAPICall() {
    const [id, setId] = useState("")
    const [data, setdata] = useState("")

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const json_data = await response.data;
            setdata(json_data.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(id)
    }, [id])

    const handleInput = (event) => {
        setId(event.target.value)
    }
    return (
        <div className={css(styles.body)}>
            <label>Type an ID:</label>
            <br />
            <input type={'number'} onChange={handleInput} />
            <h1>Name: {data}</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    body: {
        textAlign: 'center'
    }
})

export default RespondAnAPICall