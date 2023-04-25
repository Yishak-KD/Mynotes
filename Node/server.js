const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    let path = './pages/'
    switch (req.url) {
        case '/':
            path += 'home.html'
            break;
        case '/about':
            path += 'about.html'
            break
        default:
            path += '404.html'
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end(err)
        } else {
            res.end(data)
        }
    })
});

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})