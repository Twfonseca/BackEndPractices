module.exports= {
    posts:[
        {id:1,
        title:"Test", 
        description:"Test desc"}
    ],

    allPosts(){
        return this.posts
    }, 

    createId(){
        let id=0
            if( id <= this.posts.length){
                id= Number(this.posts.length) +1
            }
        for (let post of this.posts){
            if(post.id === id){
                id = id +1
            }
        }  
        console.log(id)
           return id
      },
      

    newPost(title, description){
    this.posts.push({id:this.createId(),title,description})
    },

    filterPost(title){
        let searchPost= this.posts.find(post=>post.title === title )
        console.log(searchPost)
          return searchPost
    },
    
    deletePost(id){
          let idsearch= Number(id)
          for(let post of this.posts){
          if(post.id === idsearch && idsearch != undefined){
            let searchPost = this.posts.findIndex(post=> post.id === idsearch)
            this.posts.splice(searchPost,1)  
            console.log("Post deleted")
            }
        }   
    }
}





