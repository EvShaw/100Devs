const fs = require('fs')
const path = require('path')

//create folder: (on system)

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//     console.log('foldercreated...')
// }) //takes in folder I want to create

// //create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')


//     //append file - 
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
//         if (err) throw err
//         console.log('file written to...')
//     })



// })

//read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', err data) => {
//     if (err) throw err
//     console.log(data)
// }

//Rename a file: 

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
//     if (err) throw err
//     console.log('file renamed...')
// })


