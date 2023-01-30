// Instructions
// Your Task: Edit the storm object. Invoke the printSuperPower
// function using the storm object as the context of the function.
// So your output should be: my superpower is flying.
// Well, Storm also controls the weather, so, whatever you
// choose!
// You cannot change the printSuperPower function

const storm = {
   superPower:'reading minds'
   }
   function printSuperPower() {
   console.log("my superpower is " +
   this.superPower);
   }

   const x=printSuperPower.bind(storm);
x();


//OR this way
// const storm = {
//    superPower:'reading minds',
   
//     printSuperPower() {
//    console.log("my superpower is " +
//    this.superPower);
//    }
// }
//storm.printSuperPower()

