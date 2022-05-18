const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if (req.url === '/api/users') {
    //     fs.readFile(path.join(__dirName, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err
    //         fs.read.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    const users = [
        { name: 'Bob Smith', age: 40 },
        { name: 'John Smith', age: 41 }
    ]
    fs.read.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))

    //build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    //extension of file
    let extname = path.extname(filePath);

    //initial content type
    let contentType = 'text/html'

    //check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/JavaScript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {   
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content=Type': contentType })
                    res.end(content, 'utf8')
                })
            } else {
                //some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            //success
            res.writeHead(200, { 'Content=Type': 'text/html' })
        }
    })

    // console.log(filePath)
    // res.end()
})


const PORT = process.env.PORT || 5000 //will run on whatever host decided (environment variable)

server.listen(PORT, () => console.log(`server running on port : ${PORT}`))

