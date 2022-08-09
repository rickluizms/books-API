const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let books = [
    { "1": { Name: "Book1", Price: 24, Quantity: 1, Category: "action", Img: "img1" }},
    { "2": { Name: "Book2", Price: 50, Quantity: 1, Category: "action", Img: "img2" }},
    { "3": { Name: "Book3", Price: 20, Quantity: 2, Category: "action", Img: "img3" }},
    { "4": { Name: "Book4", Price: 10, Quantity: 1, Category: "action", Img: "img4" }},
    { "5": { Name: "Book5", Price: 15, Quantity: 5, Category: "action", Img: "img5" }}
]

app.get('/', (req, res) => {
    return res.json(books)
})

app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})
