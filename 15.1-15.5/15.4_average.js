// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
function calcAverage (arr){
var sum=0 ;
for ( var i = 0 ; i < arr .length; i ++ ){
sum += arr[i];
} 
return sum/arr.length ;
}

console.log(calcAverage ([85,90,92]));

//first bug that was identified with the help of a break point at the invoking of the function  was that sum is NAN it means that we should
//specify the typeof the variable in order to add numeric value to it by typing (var=0)
//Second problem is that the function just sums the given values but doesnt divide them to get the average so we should add divide by arr.length to the return statement.