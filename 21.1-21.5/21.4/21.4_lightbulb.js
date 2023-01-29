const off=document.querySelector("#off");
const on=document.querySelector("#on");

off.addEventListener("click",function(){
   on.style.display="initial";
})
on.addEventListener("click",function(){
   on.style.display="none";
})
