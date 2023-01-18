// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
function countOccurrences (str, char){
let counter = 0 ;
for ( let i = 0 ; i < str .length; i ++ ){
if ( str . charAt ( i ) === char ){
counter += 1 ;
}
} return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));

//the bug is that the conditional operator if is returning each time counter +1 in other words it is 
//returning 0+1 every loop, meaning every loop return the number 1 without assiging it or even declare with a variable so we have purposeless number 1 in our function 
//while doin break point from the invoking  of the function every time the loops run no matter what, it doesnt add any value from the loop to the variable .
/instead of counter +1/ /counter +=1/