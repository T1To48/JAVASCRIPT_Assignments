const number=document.querySelector("#number");
const button=document.querySelector("#button");
const str=document.querySelector('#smileys-repeats');
const body=document.querySelector('body')
button.addEventListener('click',function(){
   let numberOfSmileys=number.value;
   let smiley="😍";
   let repeats=smiley.repeat(numberOfSmileys);
   str.innerHTML=`${repeats}`;
})
number.addEventListener('click',function(){
   str.textContent='';
})
