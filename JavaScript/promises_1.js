let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 3) {
        resolve("Success");
    } else {
        reject(Error("Failed and Error"));
    }
});

p.then(() => console.log("The problem is Successful"));

p.catch(() => console.log("Problem has failed"));
