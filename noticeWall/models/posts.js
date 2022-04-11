module.exports= {
    posts:[
        {id:1,
        title:"Javascript free lessons", 
        description:"We are offering free javascript lessons every sunday"}
    ],

    allPosts(){
        return this.posts
    }, 

    createId(){
        id=0
            if( id <= this.posts.length){
                id= Number(this.posts.length) +1
            }
          return id
      },
      

    newPost(title, description){
    this.posts.push({id:this.createId(),title,description})
    },

    filterPost(title){
    searchPost= this.posts.find(element=>{
            element.title === title
        })
        return searchPost
    },
    
    deletePost(id){
        for(let i=0 ; i< this.posts.length; i++){
            if(this.posts[i].id === id){
                 var item = this.posts[i]
                 var target = this.posts.indexOf(item)
                 this.posts.splice(target,1)
                console.log(`Post deleted`)
            }
           }
    }
}





