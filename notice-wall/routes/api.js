const express = require('express');
const cors= require('cors');
const posts =requeri('../models/posts.js');
const rout = express.Router();
const listOring = "http://localhost:3000";
const options={
    origin: listOring
};

rout.use(cors(options));

rout.get('/',(req, resp)=>{
  resp.json(JSON.stringify(posts.allPosts()))
});

rout.post('/new', (req, resp)=>{
  
});



