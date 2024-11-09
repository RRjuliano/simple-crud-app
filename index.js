const express = require('express')
const mongoose = require('mongoose')
const ProductRoute = require('./routes/product.route.js')
const app = express()
require('dotenv').config()

//midlleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products/", ProductRoute)

app.get('/', (req, res) => {
    res.send('Hello from Node API update')
})

//database
mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log('Connected to database') })
    .catch(() => { console.log("Connection Failed!") })

//server
app.listen(3000, () => {
    console.log('Server is running : http://localhost:3000')
})