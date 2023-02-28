import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchApi() {
    const [data, setData] = useState(null)

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const json_data = await response.data;
            setData(json_data.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(4)
    }, [])
    return (
        <div>
            <h2>Name: {data}</h2>
        </div>
    )
}

export default FetchApi
