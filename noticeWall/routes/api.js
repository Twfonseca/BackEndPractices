const posts= require('../models/posts')
const bParser= require('body-parser')
const express= require('express')
const router= express.Router()

router.get('/all', (req,resp)=>{
    resp.json(JSON.stringify(posts.allPosts()))
})

router.post('/new',bParser.json(),(req, resp)=>{
    let title = req.body.title
    let description= req.body.description
    posts.newPost(title, description)
    resp.send("Post created")
    console.log(posts.allPosts())

})

router.get('/filter', bParser.json(), (req,resp)=>{
     let searchTitle = req.body.title
     posts.filterPost(searchTitle)
     resp.send("Post Finded")
})

router.delete('/delete',bParser.json(),(req,resp)=>{
    let id= req.body.id
    posts.deletePost(id)
    resp.send("Post Deleted")
    console.log(posts.allPosts())
})

module.exports = router