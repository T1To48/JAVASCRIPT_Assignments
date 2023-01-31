
//ME
let wildCats=['lion','tiger','cheetah','jaguar','puma'];

Array.prototype.fltr=function(cb){
    let fltrdArr=[];
    for(let x=0;x<this.length;x++){
      if(cb(this[x],x,this)){
         fltrdArr.push(this[x]);
      }
    }
    return fltrdArr;
 }



arr = ['hellooooo', 'why', 'how']
console.log("ME",arr.fltr(word => arr.indexOf(word) > 0))

//ARTYOM
Array.prototype.myFilter = function (cb) { //calling this prototype method with our callback function (cb)
    let result = [] // creating an array to display our result array as intended in filter method

    this.forEach(function(element, idx, arr){ //looping through the provided array we executed the method on with the help of the word *this*
        if (cb(element, idx, arr)) { //checking if the condition we provided in our callback function is true
         result.push(element) // if it is , we push the current iteration element to the result array
        }
    })
    return result // after our loop has finished we return the result array.

}

console.log(arr.myFilter(word => arr.indexOf(word) > 0));

//****FIND */

Array.prototype.finden=function(cb){
   let fltrdArr=[];
   for(let x=0;x<this.length;x++){
     if(cb(this[x],x,this)){
        fltrdArr.push(this[x]);
     }
   }
   return fltrdArr[0];
}
const array1 = [5, 12, 8, 130, 44];
console.log(array1.find(element => element > 1000));


//**reduce */

Array.prototype.reduse=function(cb,initialVal=null){
   let collector=initialVal===null?this[0]:initialVal;
   let x=collector===initialVal?0:1;
   for(;x<this.length;x++){

     collector=cb(collector,this[x],x,this);
     }
       
   return collector;
   }
     
   


const array2= [15, 16, 17, 18,654.654, 19];
console.log(array2.reduse((accumulator, currentValue) => accumulator / currentValue,89.332))
console.log(array2.reduce((accumulator, currentValue) => accumulator / currentValue,89.332))



















