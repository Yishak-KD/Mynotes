import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchApi() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const json_data = await response.data;
            setData(json_data.name)
        }
        fetchData(2)
    }, [])
    return (
        <div>
            <h2>Name: {data}</h2>
        </div>
    )
}

export default FetchApi


