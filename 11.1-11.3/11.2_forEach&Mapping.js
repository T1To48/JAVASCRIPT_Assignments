//////////////***1***///////////////
let arrInt=[2,56,76,89,333,2222,6546546]

const dbl=arrInt.map(function(doublin){
   return doublin*2
})
console.log(dbl);
//////////////***2***///////////////
let arrInt1=[2,56,76,89,333,2222,52]

let evenN=[];
const even=arrInt1.forEach(function(evenin){
      if(evenin%2===0){
         evenN.push(evenin);
      }
})
console.log(evenN)
//////////////***3***///////////////
let rndmArr=['peaky',345,'tesla',5636,' blinders'];
let movie=[];

const showFirstAndLast = rndmArr.forEach(function(show){
   if(rndmArr[0]===show && typeof show==="string"){
   movie.unshift(show);
}
  else if(rndmArr[rndmArr.length-1]===show && typeof show==="string"){
   movie.push(show);
}
})
console.log(movie);
//////////////***4***///////////////
let str="oh! i am very hungry Around";
let arr=str.split(" ");
let obj={
 a:0,
 e:0,
 i:0,
 o:0,
 u:0
}
 
const vowelCount=arr.forEach(function(vowel){
   if(vowel.toLowerCase().indexOf("a")!=-1){
      obj.a++;
   }
   if(vowel.toLowerCase().indexOf("e")!=-1){
      obj.e++;
   }
   if(vowel.toLowerCase().indexOf("i")!=-1){
      obj.i++;
   }
   if(vowel.toLowerCase().indexOf("o")!=-1){
      obj.o++;
   }
   if(vowel.toLowerCase().indexOf("u")!=-1){
      obj.u++;
   }
})
console.log(obj);
//////////////***5***///////////////
let satz="the sun is shining on the east side of my garden"
let trennen=satz.split(" ");
const captalize=trennen.map(function(caps){
    let x=caps.toUpperCase();
    return x;

})
const newstr=captalize.toString().replace(/,/g," ");
console.log(newstr);
//////////////***6***///////////////
let stRing="i am 25 years old";
function toNumb(num){

   for(let x=0;x<num.length;x++){
      let numeric= num.charCodeAt(x);
      let downLetter=String.fromCharCode(numeric-1);
      let e=num.replace(num[x],downLetter)
      return e;
   }
   
}
let arr1=stRing.split(" ");
let arr2=[]
const shiftLetters=arr1.forEach(function(sh1ft){
   for(let x=0;x<sh1ft.length;x++){
   if(sh1ft.charCodeAt(x)>98&&sh1ft<=122){
     sh1ft.replace(sh1ft[x],sh1ft[x].charCodeAt(x));
   }
   
   else if(sh1ft.charCodeAt(x)===97){
      sh1ft.replace(sh1ft[x],"$");
   }
}
   return sh1ft;
})

console.log(toNumb(stRing))