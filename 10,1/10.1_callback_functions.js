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
