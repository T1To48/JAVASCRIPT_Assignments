
// CONCLUSION in b.1+b2 and maybe others when using the a nd b with IF STATEMENT 
// the return value 1,0,-1 are index assigning for the "b" from (a,b)






// Answer the following questions:
// a. Array of words
const foods = ["falafel", "sabich", "hummus","pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending order.
const lowToHigh=foods.sort()
console.log(lowToHigh)
// a.2. Sort the array of strings from ascending to descending order.
const highToLow=foods.sort((a,b)=>{
   if(a<b){
      return 1;
   }
   if (a>b){
      return-1;
   }
   return 0;
})
console.log(highToLow)
// b. Let's sort an array of words that includes a word with an uppercase:
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];
// b.1. Sort the array of strings from descending to ascending order.
const desToAs=foodsWithUpperCase.sort((a,b)=>{
   if(a.toLowerCase()<b.toLowerCase()){
      return -1;
   }
   if (a.toLowerCase()>b.toLowerCase()){
      return 1;
   }
   return 0;
})
console.log(desToAs);
// b.2. Sort the array of strings from ascending to descending
// order.
const asToDes=foodsWithUpperCase.sort((a,b)=>{
   if(a.toLowerCase()<b.toLowerCase()){
      return 1;
   }
   if (a.toLowerCase()>b.toLowerCase()){
      return -1;
   }
   return 0;
})
console.log(asToDes);
// c. Longest word
const words = ["apple","supercalifragilisticexpialidocious","hi", "zoo" ];
// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function
const longToShort=words.sort((a,b)=>{
   if(a.length>b.length){
      return -1;
   }
   if (a.length<b.length){
      return 1;
   }
   return 0;
})
console.log(longToShort);