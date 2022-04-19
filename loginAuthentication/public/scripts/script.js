
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




