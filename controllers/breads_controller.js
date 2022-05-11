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
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })
  
  
  
module.exports = breads