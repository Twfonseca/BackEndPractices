const express= require('express');
const posts= require('./models/posts.js')
const bParser= require('body-parser')
const app= express();
const PORT= 80

app.get('/all', (req,resp)=>{
    resp.json(JSON.stringify(posts.allPosts()))
})

app.post('/new',bParser.json(),(req, resp)=>{
    let title = req.body.title
    let description= req.body.description
    posts.newPost(title, description)
    resp.send("Post created")
    console.log(posts.allPosts())

})

app.get('/filter', bParser.json(), (req,resp)=>{
    // executar um filter posts
})

app.delete('/delete',bParser.json(),(req,resp)=>{
    let id= req.body.id
    posts.deletePost(id)
    resp.send("Post Deleted")
    console.log(posts.allPosts())
})


app.listen( PORT , ()=>{
    console.log (`Server running on port ${PORT}`)
})