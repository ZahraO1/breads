const express = require('express')
const breads = express.Router()
//importing bread.js
const Bread = require('../models/bread.js')

//Index
breads.get('/',(req,res)=>{
    //refers to the index.jsx file
    res.render('index',
        {
            //Bread here is coming from bread.js which has the data on breads
            breads:Bread
        }
    )
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    //if there is content in that index of Bread, display it's content
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        //bread and index are the parameters inside the Show function
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
      })
    }
    //if there is not content in that index, render the 404 view
    else {
      res.send('404')
    }
  })

// CREATE
// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  

  // NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

//Delete
breads.delete('/:indexArray',(req,res)=>{
    //Bread ==> accessing data from models/bread.js
    Bread.splice(req.param.indexArray,1)
    res.status(303).redirect('/breads')
})
  
  
  
module.exports = breads