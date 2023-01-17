// Write the following functions using the reduce built-in function.
const rndmNumbers=[888,666,444,222,111,99999,555]
// 1. max
const maximum=rndmNumbers.reduce((max,aktuell)=>{
   if (aktuell>max) return aktuell;
   else return max;
})
console.log(maximum);
// 2. the sum of even numbers
const durch2=rndmNumbers.reduce((sumEven,aktuell)=>{
   if (aktuell%2===0) return sumEven+aktuell;
   else return sumEven;
})
console.log(durch2);
// 3. average
function average(randomnumbers){
const sum=randomnumbers.reduce((avrg,aktuell)=>{
    return avrg+aktuell;
   
})
return sum/randomnumbers.length;

}

console.log(average([888,666,444,222,111,99999,0]));