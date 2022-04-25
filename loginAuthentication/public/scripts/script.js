
function loginUser(){
  fetch("http://localhost:5000/api/all").then(resp=>{
    return resp.json()
  }).then(json=>{
    let inptLogin=document.querySelector("#loginInpt").value
    let inptPass=document.querySelector("#passInpt").value
    let userHierarchy= document.querySelector("#hierarchy").value
    let fixedLogin= inptLogin.trim()
    let fixedPass = inptPass.trim()
    let users= JSON.parse(json)
    let findedElement= users.find(user=> user.email === fixedLogin)
     if(findedElement != undefined){ 
          if(findedElement.email === fixedLogin && findedElement.passWord === fixedPass&& findedElement.hierarchy === userHierarchy){
           console.log(`Welcome ${findedElement.name}`)
           }else{
             window.alert("User not founded! please check the informations")
           }
      }else{(window.alert("User not found in the registers please call S.A.M suport"))}
  })
}

function changeRegisterWindow(){
  let regstWindow=document.querySelector(".registerWindow");
  let logWindow=document.querySelector(".logWindow");
  let registerBtn= document.querySelector("#registerBtn");
       registerBtn.innerText= "Register";
       logWindow.style="Display:none;";
       regstWindow.style="Display:initial";
}

function backLoginWindow(){
  regstWindow=document.querySelector(".registerWindow")
  logWindow=document.querySelector(".logWindow")
  logWindow.style="Display:initial;"
  regstWindow.style="Display:none;"
}


function checkData(){
  let userName=document.querySelector("#userName").value;
  let userAge=document.querySelector("#userAge").value;
  let userCpf= document.querySelector("#useCpf").value
  let userEmail=document.querySelector("#userEmail").value;
  let confirmEmail=document.querySelector("#emailConfirm").value
  let userPass=document.querySelector("#passWord").value;
  let confirmPass=document.querySelector("#confirPass").value
  let userHierarchy= document.querySelector("#hierarchyRegister").value  
  userName.trim()
  userAge.trim()
  userCpf.trim()
  userEmail.trim()
  confirmEmail.trim()
  userPass.trim()
  confirmPass.trim()
  if(userName === "" || userName === undefined){
    return window.alert( "Invalid user name please try again");
  }else{
    console.log(`User name ok`);
  }

  if(userAge === "" || userAge === undefined){
    return window.alert( "Invalid user age please try again");
  }else{
    console.log(`User age ok`);
  }

  if(userCpf === "" || userCpf === undefined){
    return window.alert( "Invalid user Cpf please try again");
  }else{
    console.log(`User Cpf ok`);
  }

  if(userEmail === "" ||userEmail === undefined){
    return window.alert( "Invalid user email please try again");
  }else{
    console.log(`User email ok`);
  }

  if(userCpf.length+"" < 11){
    return window.alert( "Total of numbers are incomplete, please try again")
  }

  if(userEmail != confirmEmail){
    return window.alert( "Invalid email or not match with de confirmation email. Try again")
  }

  if(userPass != confirmPass){
    return window.alert( "Invalid password or not match with de confirmation password. Try again")
  }

  if(userPass.length+"" < 8 || confirmPass.length+""< 8){
   return window.alert( "Invalid password or password and confirmation don't match or try another with more than 8 digits")
  }   

   fetch("http://localhost:5000/api/all").then(resp=>{
    return resp.json()
  }).then(json=>{
   let allUser= JSON.parse(json)
   let findCpf= allUser.find(user=> user.cpf === userCpf)
   let findEmail= allUser.find(user=> user.email === userEmail)
   let checkItens= 0
   if(findCpf === undefined ){
     checkItens= checkItens + 1
   } 
   if(findEmail === undefined ){
    checkItens= checkItens + 1
  }
  if(checkItens === 2){
      registerUser(userName, userAge, userCpf, userEmail, userPass, userHierarchy)
    }else{
      window.alert("This cpf or email is already being used")
    }
  })
}

function registerUser(name, age, cpf, email, passWord, hierarchy){
  let userPrfsr={}
  let userStudn={}
  let postUser= {}

  if(hierarchy === "professor"){ 
     userPrfsr={name:name, age:age, cpf:cpf, email:email, passWord:passWord, hierarchy:hierarchy,code:code}
     postUser=userPrfsr
   }else{ 
      userStudn={name:name, age:age, cpf:cpf, email:email, passWord:passWord, hierarchy:hierarchy}
      postUser=userStudn
 }

 console.log(postUser)

  const options={
    method:"POST",
    headers: new Headers({'content-type':'application/json'}),
    body: JSON.stringify(postUser) 
  }
  fetch("http://localhost:5000/api/new", options).then(res=> console.log(res));
}

