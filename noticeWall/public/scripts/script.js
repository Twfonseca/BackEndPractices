document.addEventListener('DOMContentLoaded', ()=>{
    updateWall();
});

function updateWall(){
 fetch("http://localhost:80/api/all").then(resp=>{
     return resp.json()
 }).then(json=>{
     let postElements ='';
     let posts = JSON.parse(json);
     posts.forEach((post) => {
     let postElement = `<div id= ${post.id} class="containerPost">
                           <div class="headerPost">
                             <h3 class:"postTitle">${post.title}</h3>
                           </div>
                           <div class"bodyPost">
                             <p>${post.description}</p>
                           </div>
                           <p>Post id:${post.id}</p>
                        </div>`
     postElements+= postElement
     });
    document.querySelector("#posts").innerHTML = postElements;
 })
}

function createNotice(){
   let title =document.querySelector("#title").value;
   let description= document.querySelector("#description").value;
   const post= { title, description };
   const options={
     method:"POST",
     headers: new Headers({'content-type':'application/json'}),
     body: JSON.stringify(post)
   }
   fetch("http://localhost:80/api/new", options).then(res=> console.log(res));
   updateWall()
   title= document.querySelector("#title").value= "";
    description= document.querySelector("#description").value= "";
}

function deletePost(){
  let id= document.querySelector("#delete").value;
  const post= {id};
  const options={
    method:"DELETE",
    headers: new Headers({'content-type':'application/json'}),
    body: JSON.stringify(post)
  }
    fetch("http://localhost:80/api/delete",options).then(res=> console.log(res));
    updateWall();
    title= document.querySelector("#delete").value="";
}

function searchPost(){
    let searchTitle=  document.querySelector("#search").value
    fetch("http://localhost:80/api/all").then(resp=>{return resp.json()}).then(json=>{
      let posts = JSON.parse(json);
      let postElement =''
      let searchPost= posts.find(post=>post.title === searchTitle)

      let  findedElement= ` <h2> Post finded </h2>
                             <h3> ${searchPost.title}</h3>
                             <p> ${searchPost.description}</p> `

      postElement+=findedElement
      document.querySelector("#searchArea").innerHTML =postElement
      document.querySelector("#search").value=""
    })
    
}


