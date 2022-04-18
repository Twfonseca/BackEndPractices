const express = require('express')
const bParse= require('body-parser')
const usersData= require('../models/usersData')
const routs= express.Router()

routs.get('/all',(req, resp)=>{
    resp.json(JSON.stringify(usersData.getallUsers()))
})

routs.post('/new',bParse.json(),(req, resp)=>{
    let name= req.body.name
    let age= req.body.age
    let cpf= Number(req.body.cpf)
    let email= req.body.email
    let passWord= req.body.passWord
    let hierarchy= req.body.hierarchy
    usersData.createUser(name, age, cpf, email, passWord, hierarchy)
    resp.send("User created")
   console.log(usersData.getallUsers()) 
}) 

routs.delete('/delete', bParse.json(),(req, resp)=>{
    let cpf = req.body.cpf
    usersData.deleteUser(cpf)
    resp.send("User deleted")
    console.log(usersData.getallUsers()) 
})


module.exports= routs