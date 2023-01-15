function arryLength(arr){
   let count=[];
   let i=0;
   while(i<arr.length){
      count.push(arr[i].length);
      i++;
   }
   console.log(count);
}
let exmpl=["boo","doo55555555555555oo","hoo","ro","hoo"];
console.log(arryLength(exmpl));