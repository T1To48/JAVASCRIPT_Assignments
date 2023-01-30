
//*******Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
// console.log(this);
// this in the browser returns window-object, which is the global scope of the browser
// this in the nodejs will return the  global-object {}, if we wawnt to return all the methods functions properties
//  in the node  we should use the (globalThis).

//  inside the (window or global)-object)  we can view all the methods functuions that applied to the page , in addition to properties.


//*******Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
//    name: "Timmy",
//    greet:() => {
//       console.log(`Hello ${this.name}`);
//    },
// };
// myObj.greet();

// ***the value of "this"  in arrow function above is undefined because this keyword in an object will refer to the global scope.
//**to fix this we should us the normal function syntax instead of the arrow function



//*******Question 3:
// In your own words what will this point to and why?
//const myFuncDec = function () {
//console.log(this);
//};
//myFuncDec()
//***this in the invokation of a normal function() in the global scope so ,it will always refer to the globalThis.



//*******Question 4:
// In your own words what will this point to and why?
//const myFuncArrow = () => {
//console.log(this);
//};
//myFuncArrow();
//this keyword will point to the globalscope/window, because it is arrow function in the global scope.
//an invokation of a function with (this) always points to the globalscope OR window in browser. 



//*******Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?


   document.querySelector(".element").addEventListener("mouseover",()=>{
   console.log(this);
   });

   //this here refers to the globalscope ,because it is an arrow function, but the adeventlistener nedds an interface parameter in order to invoke the function, thats why adding "click" or "mouseover" or... would fix the problem
   //if we want to console.log the element from html we replace the arrow func with normal func.