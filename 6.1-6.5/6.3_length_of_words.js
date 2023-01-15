function arryLength(arry){
   let count=[];
   for(let i=0;i<(arry.length) ;i++){
      count.push(arry[i].length);
   }
   console.log(count);
}
let exmpl=["boo", "doooo", "hoo","ro"];
console.log(arryLength(exmpl));