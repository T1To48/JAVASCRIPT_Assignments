// Without running the code below, explain in your own
// words what the result of each block of code will be and why.
// Block 1

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
return b;
}
b =5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);//// will return 5 because we redeclared the value of b=5 in the local scope closure.












// Block 2
 var a = 1;
 function b2() {
     a = 10;
    return;
 function a() { }
 }
 b2();
 console.log(a);////return 1 because a=10  was later declard in a nested function which creates a new variable in
 // the local scope of the parent function which overrides the global variable a within the function 
 //,thats why when we console log the function from the GLOBAL SCOPE where the value of var a still = 1 








// // Block 3
 let i;
 for (i = 0; i < 3; i++) {
   const log = () => {
   console.log(i);
 }
 setTimeout(log, 100);
 }///because the variable let i is in the global scope , in other words in the function's closure.