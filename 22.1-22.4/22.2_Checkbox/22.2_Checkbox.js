const form=document.querySelector("#form");
const checkbox=document.querySelector("#check-box");
 const pic=document.createElement('img');
      pic.setAttribute("src","./check-pic.jpg");
const add=()=>document.body.append(pic);
const remove=()=>pic.remove();

 checkbox.addEventListener("input",function(e){
   e.target.checked===true?add():remove();
 });

