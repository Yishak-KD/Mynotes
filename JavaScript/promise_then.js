function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === 'Google') {
            resolve("Google says HI")
        } else {
            reject("Sorry, We can only talk to Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information + ${response}`)
    })
}

makeRequest('Google').then((response) => {  // the response argument right here is a substitute for the resolve message
    console.log("Response received")
    return processRequest(response)
}).then((processResponse) => {
    console.log(processResponse)
}).catch((err) => console.log(err))  // the err argument here is a substitute for the reject message
