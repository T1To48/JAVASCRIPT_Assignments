let start = performance.now();
function declaration(a,b){
   let arr=[];
   for(let x=0;x<=1000000;x++){
      arr.push(a);
      arr.push(b);
   }
   console.log(arr);
}

declaration(10,500);
let end = performance.now();

console.log(`func declaration took ${(end-start)} ms to load `)

let beginn = performance.now();
const expression=function (a,b){
   let arr=[];
   for(let x=0;x<=1000000;x++){
      arr.push(a);
      arr.push(b);
   }
   console.log(arr);
}

expression(10,500);
let ende = performance.now();
console.log(`func expression took ${(ende-beginn)} ms to load `)



/////////NORMAL VS NORMAL FUNC *********conclusion function expression performes better than function declaration.

let begin = performance.now();
 const declarationArrw=(a,b)=>{
   let arr=[];
   for(let x=0;x<=1000000;x++){
      arr.push(a);
      arr.push(b);
   }
   console.log(arr);
}

declaration(10,500);
let last = performance.now();

console.log(`arrow-func took ${(last-begin)} ms to load `)
