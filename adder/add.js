

console.log(5);

let addbtn=document.getElementById("add");
let reset=document.getElementById("reset");
let one=document.getElementById("one");
let two=document.getElementById("two");
let child = document.getElementById("anstxt");
let par = document.getElementById("answer");

addbtn.addEventListener("click",sum);
reset.addEventListener("click",reset_btn);

//document.body.addEventListener("click",eval);
function sum (e)
{
  event.preventDefault();
  let val1 = parseInt(one.value,10);
  console.log(val1);
  let val2 = parseInt(two.value,10);
  console.log(val2);
  sum= val1 + val2;
  console.log(sum);
  let ans = document.createElement("p");
  ans.innerText=sum;
  par.replaceChild(ans,child);
  one.value="";
  two.value="";
}
function reset_btn()
{
  one.value="";
  two.value="";
  
}