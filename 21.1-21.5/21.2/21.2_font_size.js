const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const text=document.querySelector(".text");
   let actualSize=window.getComputedStyle(text,null).getPropertyValue("font-size");//return string "16px"
   let sizeValue=parseFloat(actualSize);
plus.addEventListener("click",function(){
   if(sizeValue<100){
      ++sizeValue
   }
   text.style.fontSize= `${sizeValue}px`;
})
 minus.addEventListener("click",function(){
   if(sizeValue>6){
      --sizeValue
   } 
   text.style.fontSize= `${sizeValue}px` ;
 
 })