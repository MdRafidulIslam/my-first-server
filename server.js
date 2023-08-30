var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>This is Home Page</h1>')
        res.end();

    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }
    else if (req.url == '/file-write') {
        fs.writeFile('demo.txt', 'Hello world', function (error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write("File write fail")
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write("File write success")
                res.end();
            }
        })
    }
})

server.listen(3000)
console.log("server run successfully");