// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const capitalize = (arr) => {
  let newArr = [];
  
  return new Promise((resolve, reject) => {
    let notStrng = arr.some((current) =>
      typeof current != "string" ? true : false
    );
    if (notStrng) {
      reject({ err: "Error 404 Cannot procced" });
    } else {
      arr.forEach(current=>{
         newArr.push(current.toUpperCase())
      })
      newArr.sort()
      resolve({arr: `capitalized A to Z sorted array: ${newArr}`});
      
    }
  });
};




capitalize(["taufiq",  "lion",'z', "mars",  "rick&morty",'a','v','b','h'])
  .then((obj) => {
    console.log(obj.arr);
    
  })
  .catch((obj) => {
    console.log(obj.err);
  });


  
capitalize(["taufiq",  "lion",'z', "mars",  "rick&morty",'a','v',5,'b','h'])
  .then((obj) => {
    console.log(obj.arr);
    
  })
  .catch((obj) => {
    console.log(obj.err);
  });

