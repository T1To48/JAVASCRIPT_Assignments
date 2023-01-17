// Write the following functions using the reduce built-in function.
// 1. Write a function called extractOnlyValue which accepts an array of 
//objects and a key and returns a new array with the value of each object at the key
function extractOnlyValue(arrOfObjects){
const values=arrOfObjects.reduce((keys,actual)=>{
   keys.push(actual.satzteil);
   return keys;
},[])
return values;
}

let arr=[{satzteil:'I',},{satzteil:'am'},{satzteil:'TAUFIQ'},{satzteil:'ZAYYAD'}];
console.log(extractOnlyValue(arr));
/how to write it with different key-names for each one of the keys?/

// 2. Write a function called countOnlyVowels which accepts a string
// and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
function countOnlyVowels(strng){
let arr1=strng.split(' ');
const vowelsNumb=arr1.reduce((obj,aktuell)=>{
   
   for(let x=0;x<aktuell.length;x++){
   if (aktuell[x].toLowerCase().indexOf("a")!==-1){
      obj.a++;
   }
   if (aktuell[x].toLowerCase().indexOf("e")!==-1){
      obj.e++;
   }
   if (aktuell[x].toLowerCase().indexOf("i")!==-1){
      obj.i++;
   }
   if (aktuell[x].toLowerCase().indexOf("o")!==-1){
      obj.o++;
   }
   if (aktuell[x].toLowerCase().indexOf("u")!==-1){
      obj.u++;
   }
   
}
return obj;
},{a:0,e:0,i:0,o:0,u:0})
return vowelsNumb;
}

let satz="my name is taUfiq zayyad frOm nazareth";
console.log(countOnlyVowels(satz));
// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function
function addKeyAndValue(arrOfObj,key,value){
const reduse=arrOfObj.reduce((newArr,aktuell)=>{
   newArr.push(aktuell);
   aktuell[key]=value;
   return newArr
},[])
return reduse;
}
let keyExmpl='name:'
let valueExmpl="taufiq"
let multipleObj=[{},{},{},{},{}];
console.log(addKeyAndValue(multipleObj,keyExmpl,valueExmpl));
