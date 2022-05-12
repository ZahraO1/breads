//Dependencies
const express = require('express')  //creating a variable for express
const methodOverride = require('method-override')

//Configuration
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


//Middleware (should be added above routes in server)
app.set('views', __dirname + '/views')
//view engine are jsx files
app.set('view engine', 'jsx')
//these jsx file require react
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extende: true}))   //data coming in `urlencoded` string, need to change string inro an object
app.use(methodOverride('_method'))


//Routes
app.get('/',(req,res) =>{
     res.send("<h1>Welcome to an Awesome App about Breads</h1>")
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
//when the html has /breads, it gets the information from bradsController
app.use('/breads',breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })


  

//Listen
app.listen(PORT,()=>{
    console.log('nomming at port',PORT)
})
