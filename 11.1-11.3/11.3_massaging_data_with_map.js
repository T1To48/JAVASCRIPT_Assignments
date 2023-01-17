
// We are getting this data from an API:
 const data = [
 {
 name: "John",
 birthday: "1-1-1995",
 favoriteFoods: {
 meats: ["hamburgers", "sausages"],
 fish: ["salmon", "pike"],
 },
 },
 {
 name: "Mark",
 birthday: "10-5-1980",
 favoriteFoods: {
 meats: ["hamburgers", "steak", "lamb"],
 fish: ["tuna", "salmon", "barracuda"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["ham", "chicken"],
 fish: ["pike"],
 },
 },
 {
 name: "Thomas",
 birthday: "1-10-1990",
 favoriteFoods: {
 meats: ["bird", "rooster"],
 fish: ["salmon"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
 },
 },
 ];
// We are not getting the data as we want it. We are going to need to massage the data.
// Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.
function names(arr){
   const allNames=arr.map((lookFor)=>{
      return lookFor.name;
   })
   return allNames;
}
console.log(names(data));
// 2. Create a function that returns all the objects that are born
// before 1990.
function vor1990(obj){
   let arrOfObj=[]
   obj.forEach((findobj)=>{
      if(findobj.birthday[7]+findobj.birthday[8]<90){
         return arrOfObj.push(findobj);
      }
   })
   return arrOfObj;
}
console.log(vor1990(data));
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.

function menu(obj1){
   let theObj={};
   obj1.forEach((checker)=>{
      for(let x=0;x<3;x++){
      let m=(checker.favoriteFoods).meats[x];
      let f=(checker.favoriteFoods).fish[x];
      if (!theObj[m]) theObj[m]=0;
      theObj[m]++;
      if (!theObj[f]) theObj[f]=0;
      theObj[f]++;


   }
   })
return theObj;
}
console.log(menu(data));




// function menu(obj1){
//    let theObj={};
//    obj1.forEach((checker)=>{
//       let food =checker.meats //nested array inside(we need to loop throught)
//       let food1 =checker.meats //nested array inside(we need to loop throught)

//    })
// return theObj;
// }
// console.log(menu(data));















// Example:
// {
// hamburgers: 3,
// sausages: 1,
// salmon: 3,
// pike: 2,
// steak: 1,
// lamb: 2,
// tuna: 2,
// barracuda: 1,
// ham: 1,
// chicken: 1,
// bird: 1,
// rooster: 1,
// anchovies: 1
// }