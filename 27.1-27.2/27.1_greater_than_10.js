// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

const number = (num) => {
   return new Promise((resolve, reject) => {
     if (num > 10) {
       resolve({num});
     } else if (num < 10) {
       reject({num});
     }
   });
 };
 
 number(00)
 .then((obj)=>{console.log(`yes number: '${obj.num}' is bigger than 10`)})
 .catch((obj)=>{console.log(`NO! the number: '${obj.num}' is smaller than 10`)})