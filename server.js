//Dependencies
const express = require('express')

//Configuration
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//Routes
app.get('/',(req,res) =>{
     res.send("<h1>Welcome to an Awesome App about Breads</h1>")
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

//Listen
app.listen(PORT,()=>{
    console.log('nomming at port',PORT)
})
