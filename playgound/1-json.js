const fs = require('fs')

// const book = {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dateBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dateBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const dataJS = JSON.parse(dataJSON)

dataJS.name = 'Jad'
dataJS.age = 15

const changed = JSON.stringify(dataJS)

fs.writeFileSync('1-json.json', changed)