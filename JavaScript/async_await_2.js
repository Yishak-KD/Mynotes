// For a ReferenceError: fetch is not defined, install the node package and import fetch
// Install the node package with [npm i node-fetch]
// import fetch from 'node-fetch';
// Change the package,json type to module

import fetch from 'node-fetch'

let doWork = async id => {
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await request.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

doWork(2) // by passing an argument we can find what we are looking for from this free API