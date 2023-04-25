const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    let path = './pages/'
    switch (req.url) {
        case '/':
            path += 'home.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break
        default:
            path += '404.html';
            res.statusCode = 404;
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