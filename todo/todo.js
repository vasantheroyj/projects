/*var todoin = document.getElementById("todo-in");
var ulist = document.getElementsByTagName("ul");
var list = document.createElement("li");
for(i=0; i<todoin.length;i++)
{
  ul[i].appendChild(list [i])
  
}
*/

/* works
let todoin = document.getElementById("todo-in").value;
const pa = document.getElementsByTagName("p");
const todobutton = document.getElementById("add-btn");
const todolist = document.getElementsByClassName("container");
todobutton.addEventListener("click",addtodo);
function addtodo(event)
{
  todoin= document.getElementById("todo-in").value;
  event.preventDefault();
  console.log('1');
  console.log(todoin);
  
}
*/

let todoin = document.querySelector("#todo-in");
let todoval = todoin.value;
let todobutton = document.querySelector("#add-btn");
let par = document.createElement("p");
let ulist = document.querySelector(".ulist");



todobutton.addEventListener("click",addtodo);
ulist.addEventListener("click", deletecheck);



function addtodo()
{
  //prevent refresh
  event.preventDefault();
  
  //get the input text from form
  let todoval = todoin.value;
  
  //create a div
  const tododiv = document.createElement("div");
  tododiv.classList.add('tododiv');
  
  //New Todo
  const newtodo = document.createElement("li");
  newtodo.innerText= todoval;
  tododiv.appendChild(newtodo);
  newtodo.classList.add('newtodo');
  
  //completed checkbox
  const complete = document.createElement("button");
  complete.classList.add('checksq');
  complete.innerHTML='<i class="fas fa-check"></i>';
  tododiv.appendChild(complete);
  
  //trash
   const trash = document.createElement("button");
  trash.classList.add('delete');
  trash.innerHTML='<i class="fas fa-trash"></i>';
  tododiv.appendChild(trash);
  
  //add everything under list
  ulist.appendChild(tododiv);
  
  
  todoin.value=" ";
}


function deletecheck (e)
{
  item=e.target;
  console.log(item);
  if(item.className === 'checksq')
  {
    let todoo=item.parentElement;
    console.log(todoo.className);
    todoo.classList.toggle("checked");
    console.log(todoo.className);
    
  }
  if(item.className  === 'delete')
  {
    console.log('delete');
    let todoo=item.parentElement;
    todoo.classList.add("slide");
    todoo.addEventListener("transitionend", function (){ todoo.remove();});
  }
}

/* works but new element can't be added
  todoval = todoin.value;
  console.log(todoval);
  par.innerHTML=todoval;
  document.body.appendChild(par);*/