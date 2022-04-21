
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
  let professorCodeConfirm= document.querySelector("#professorCode")

  if(userHierarchy === "professor"){
    professorCodeConfirm.style="display: initial"
  }else{professorCodeConfirm.style="display: none"}
  
  userName.trim()
  userAge.trim()
  userCpf.trim()
  userEmail.trim()
  confirmEmail.trim()
  userPass.trim()
  confirmPass.trim()
  professorCodeConfirm.value.trim()

  switch(userName){
    case "":window.alert( "Invalid user name please try again");
    break
    case undefined: window.alert( "Invalid user name please try again");
    break
    case null:window.alert( "Invalid user name please try again");
    break
    default:console.log(`User name ok`);
  }

  switch(userAge){
    case "":window.alert( "Invalid user age please try agian");
    break
    case undefined: window.alert( "Invalid user age please try agian");
    break
    case null:window.alert( "Invalid user age please try agian");
    break
    default:console.log(`User age ok`);
  }

  switch(userCpf){
    case "":window.alert( "Invalid user Cpf please try again");
    break
    case undefined: window.alert( "Invalid user Cpf please try again");
    break
    case null:window.alert( "Invalid user Cpf please try again");
    break; 
  }

  switch(userEmail){
    case "":window.alert( "Invalid Email please try again");
    break
    case undefined: window.alert( "Invalid Email please try again");
    break
    case null:window.alert( "Invalid Email please try again");
    break
  }

  switch(userPass){
    case "":window.alert( "Invalid password please try again");
    break
    case undefined: window.alert( "Invalid password please try again");
    break
    case null:window.alert( "Invalid password please try again");
    break
    default:console.log(`User pass ok`);
  }

   if(userCpf.length+"" < 11){
    window.alert( "Total of numbers are incomplete, please try again")
  }

  if(userEmail != confirmEmail){
    window.alert( "Invalid email or not match with de confirmation email. Try again")
  }

  if(userPass != confirmPass){
    window.alert( "Invalid password or not match with de confirmation password. Try again")
  }

  if(userPass.length+"" < 8 || confirmPass.length+""< 8){
    window.alert( "Invalid password or password and confirmation don't match or try another with more than 8 digits")
  }   
  
  if(userHierarchy === "professor" && professorCodeConfirm.value ===""){
    window.alert("Please insert professor's code")
  }

  /*if(userHierarchy === "professor"){
     let professorObj={
    name:userName,
    age:userAge,
    cpf:userCpf,
    email:userEmail,
    passWord:userPass,
    hierarchy:userHierarchy,
    code:professorCodeConfirm.value} 
    console.log(professorObj)
    return  professorObj
   }else{   let studentObj= { 
    name:userName,
    age:userAge,
    cpf:userCpf,
    email:userEmail,
    passWord:userPass,
    hierarchy:userHierarchy}
    console.log(studentObj)
    return  studentObj
 }*/

}

function registerUser(){


}
