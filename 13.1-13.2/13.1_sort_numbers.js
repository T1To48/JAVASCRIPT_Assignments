const numbers = [1, -5, 666, 2, 400, 11];

//////////////***1***//////////////
//ASCENDING:

const lowToHigh =numbers.sort((a,b)=>a-b);
console.log(numbers)
//////////////***2***//////////////
//DESCENDING:

const highToLow =numbers.sort((a,b)=>b-a);
console.log(numbers)
