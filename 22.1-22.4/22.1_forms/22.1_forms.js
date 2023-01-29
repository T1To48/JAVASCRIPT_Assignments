// Instructions:
// Create a webpage that has a form (asks the user for its name,
// age, and email address) and when the user clicks submit, open
// a text window that writes all the information and asks for his
// confirmation. If he clicks on the confirm button, tell him
// “congratulations you successfully sent this form” if he clicks on
// change information, give him the possibility to change the
// information, and ask again for his confirmation.

const form=document.querySelector("#f0rm");
const name=document.querySelector('#name');
const age=document.querySelector('#age');
const email=document.querySelector('#email');
const text=document.querySelector('.txt-window');
const h1=document.querySelector('h1');
const editForm=document.querySelector("#change");
const confForm=document.querySelector("#conf11");
const editBtn=document.querySelector("#edit");
const confirm=document.querySelector("#confirm");


let message=`congratulations you successfully sent this form`;
form.addEventListener('submit',function(e){
  form.style.display="none";
  text.style.display="flex";
    h1.innerHTML=`name:${name.value}, AGE:${age.value}, Email:${email.value} `;
     
   e.preventDefault();
});


editForm.addEventListener('submit',function(e){
   form.style.display='initial';
   text.style.display="none";
   e.preventDefault();
})

confForm.addEventListener('submit',function(e){
   alert(`${message}`)
})