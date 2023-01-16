//////////////***1***///////////////
function cllbck(){
   console.log(x)
}
function isString(str){
   if(typeof str ==="string"){
      return cllbck();
   }
}
let x='1dfgdfgdfgdgdfg';
isString(x);
//////////////***2***///////////////
function callbck(string){
let editedStr=string.toString();
let finalStr=editedStr.replace(/,/g,"-");
console.log(finalStr);
}
function toUpperCase(str){
let arr=str.split(" ");
let firstWordCapital=arr[0].toUpperCase();
arr.shift();
arr.unshift(firstWordCapital);
return callbck(arr);


}

toUpperCase("my name is tawfiq im 24 years old");
//////////////***3***///////////////
function callbck(string){

let finalStr=string.replace(/,/g,"$$");
console.log(finalStr);
}
function toUpperCase(str){
let arr=str.split(" ");
let firstWordCapital=arr[0].toUpperCase();
arr.shift();
arr.unshift(firstWordCapital);
let editedStr=arr.toString();
return callbck(editedStr);


}

toUpperCase("my name is tawfiq im 24 years old");
//////////////***4***///////////////
// a function that finds all the 't' 
//letters in a string and console log how much if finds
function cllbckfunc(show){
   console.log(show);
}
function tFinder(strng){
   let arr=strng.split(" ");
   for(let x=0;x<arr.length;x++){
      let aot=arr[x].split('');
      for(let i=0;i<arr.length;i++){
         let letter=aot[i].toLowerCase()
         if(letter==="t"){
            return cllbckfunc(arr[x][i])
         }
      }
      
   }
}
tFinder("my name is the tawfiq")

