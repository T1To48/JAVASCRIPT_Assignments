// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
//[1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
function getSumOfEven(arr){
return arr[1] + arr[3] + arr[5] + arr[7] +
arr[9];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));


//problem was in line 9 the index number of the arr elements is different from the value also the first cell in an array is 0 not 1.