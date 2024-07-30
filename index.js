const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const ProductRoute = require('./routes/product.route.js')
const app = express()

//midlleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products/", ProductRoute)

app.get('/', (req, res) => {
    res.send('Hello from Node API update')
})


mongoose.connect("mongodb+srv://julianoramboribas:mongo2030@node-api.leznjwy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Node-API")
    .then(() => {
        console.log('Connected to database')
    })
    .catch(() => {
        console.log("Connection Failed!")
    })

app.listen(3000, () => {
    console.log('Server is running : http://localhost:3000')
})