module.exports={
    users:[
            {
              name:"test1", 
              age:"18", 
              cpf:"14527854785", 
              email:"test1@testers.com", 
              passWord:"123456789", 
              hierarchy:"professor",
              code:"1457"
            },
            {
              name:"test2", 
              age:"25", 
              cpf:"47412522589", 
              email:"test2@testers.com", 
              passWord:"321654987", 
              hierarchy:"student"
            }
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


