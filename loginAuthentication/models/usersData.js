module.exports={
    users:[

        ],

        getallUsers(){
            return this.users
        },

        createUser(name, age, cpf, email, passWord, hierarchy){
          this.users.push({name, age, cpf, email, passWord, hierarchy})
        },

        deleteUser(cpf){
            let cpfSearch= Number(cpf)
            for(let user of this.users){
            if(user.cpf ===  cpfSearch &&  cpfSearch != undefined){
              let searchPost = this.users.findIndex(user=> user.cpf===cpfSearch)
              this.users.splice(searchPost,1)  
              console.log("Post deleted")
              }
          }   
        }
}


