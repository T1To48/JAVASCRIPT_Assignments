// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
function findSmallest(a, b, c){
if (a > b > c){
return c;
} else if (a > c > b) {
return a;
} else {
return b;
}
}
findSmallest(52,66, 2);


//1.line 14 fuction name doesn't match