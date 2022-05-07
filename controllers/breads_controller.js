const express = require('express')
const breads = express.Router()
//importing bread.js
const Bread = require('../models/bread.js')

//Index
breads.get('/',(req,res)=>{
    res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  
module.exports = breads