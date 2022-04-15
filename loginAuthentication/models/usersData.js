module.exports={
    users:[
        {email:"professional@test.com",
        passWord:"professionalt123456",
        hierarchy:"professional",
        name:"Tester123",
        age:"25",
        cpf:78523674120},
        {email:"student@test.com",
        passWord:"test123456",
        class:"student",
        name:"Tester321",
        age:"33",
        cpf:12478998765}
        ],

        getallUsers(){
            return this.users
        },

        createUser(email,passWord,hierarchy,name,age,cpf){
          this.users.push({email,passWord,hierarchy,name,age,cpf})
        },

        deleteUser(email){
            for(let user of this.users){
                if(user.email===email){
                let searchElement= this.users.indexOf(email)
                this.users.splice(searchElement,1) 
                }
            }
        }
}
