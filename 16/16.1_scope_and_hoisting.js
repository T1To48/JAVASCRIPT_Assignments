
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.

//Block 1
function funcA() {
      console.log(a);
      console.log(foo());
      var a = 1;
      function foo() {
        return 2;
}
}
funcA();

//BLOCK 1 RESULTS:
//console.log(a);/ //returns undefined because the variable a  is hoisted to 
//the top of its SCope (funcA-Scope)  and in the  console-log  we have the execution but without value which means undefined.

//to solve it we should write the console.log after the declaration of the a variable and its value

//consOle-log(foo());/ //returns number two becuase functions are already hoisted at the top of their scope with their values.






// Block 2
 var fullName = 'John Doe';

 var obj = {
   fullName: 'Colin Ihrig',
   prop: {
   fullName: 'Aurelio De Rosa',
   getFullName: function () {
   return this.fullName;
 }
 }
 };
 console.log(obj.prop.getFullName());//return 'Aurelio De Rosa'
 
 var test = obj.prop.getFullName;//undefined
 console.log(test());//undefined the function inside the variable test isnt invoked correctly , 
 //so when the consoleLog take the value of test it gets the result of undefined already to FIX it we should remove the brackets from console.log and add them to the finction's name



// Block 3
  function funcB() {
      let a = b = 0;
      a++;
      return a;
  }
  funcB();
  console.log(typeof a);//undefined because let variables are function scope onlyto FIX remove the LET
  console.log(typeof b);//is number because b is a global variable without const,let or var







//Block 4
 function funcC() {
    console.log("1");
 }////this function got overwritten because we have redclared it in line 73 so it means the it has a new value 
 funcC();

 function funcC() {
    console.log("2");
 }/////////the newest deleration of a function is the actual value of it /and because we invoke the function twice it console logs the number 2 twice
 funcC();


// Block 5
 function funcD1() {
 d = 1;
 }
 funcD1();
 console.log(d);
 function funcD2() {
   e = 1;
 }
 funcD2();
 console.log(e);///// e is only defined within the scope function because of the var type variable so trying to 
 //console.log it would return UNDEFINED,to FIX this we should remove the var variable; in this way the e variable will be global scoped.

// Block 6
  function funcE() {
   console.log("1_Value of f in local scope: ", f);/// it will return : Value of f in local scope:1.because the variable f was declared and assigned   right before the invoke of the function so it is DEFINED
  }

  console.log("2_Value of f in global scope: ", f);////// f is not defined , because it wa first declared here in the console.log
  // but not assigned yet it means it is UNDEFINED to FIX this just declare and assign the value of f before reusing it.

  var f = 1;
  
  funcE();