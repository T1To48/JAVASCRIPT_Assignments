// Create a webpage that has an input field for the user’s age and
//  a button. If the user enters a number above 18, make the text
//  “you can drink appear”. If the user enters a number below 18,
//  make the text “you’re too young” appear.
const givenAge=document.querySelector("#age-field");
const button=document.querySelector("form");
button.addEventListener('submit',function(){
   if(givenAge.value>=18){
      alert("you can drink")
   }
   if(givenAge.value<18){alert("you are too young")}
})
