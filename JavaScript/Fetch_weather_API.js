import fetch from "node-fetch";

// const character = document.querySelector('#character');

let doWork = async () => {
    const resp = await fetch('https://fourtonfish.com/hellosalut/?lang=fr');

    const data = await resp.json();

    console.log(data);
}

doWork()