function additionT(a) {
    return new Promise((resolve, reject) => {
        if (a == 'Amazon') {
            resolve("The sum is Successful")
        } else {
            reject("The sum is not the Successful")
        }
    }).then(() => console.log("Resolved")).catch(() => console.log("Failed"))
}


additionT('Google')
additionT('Amazon')