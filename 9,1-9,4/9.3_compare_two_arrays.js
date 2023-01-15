function compare(arr1,arr2){
   for (let i=0;i<arr1.length;i++){

      for(let x=0;x<arr2.length;x++){

         if(arr1[i].includes(arr2[x])){

            console.log(arr1[i]);
             
         }
         else{
            console.log('No MATCH!')
         }
      }
   }
   
}


const food = ["Noodle", "Pasta", "Ice-cream","Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza","Olives", "Hamburgers"];
console.log(compare(food,food1));
