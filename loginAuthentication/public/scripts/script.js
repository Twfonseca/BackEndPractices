document.addEventListener('DOMContentLoaded', ()=>{
    updateWall();
});













/*function getAllusers(){
  fetch("http://localhost:5000/api/all").then(resp=>{
    return resp.json()}).then(json=>{
      let users= JSON.parse(json)
      let elementList=''
      users.forEach(user => {
       let userList= `
       <h3> user Name: ${user.name}</h3>
       <ul>
       <li>contact:${user.email}</li>
       <li>hierarchy:${user.hierarchy}</li>
       </ul>
       `
      elementList+=userList 
   });
   document.querySelector("#listUser").innerHTML= elementList
  }
 )
}*/



