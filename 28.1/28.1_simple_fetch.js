// Let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.

const btn=document.querySelector('#joke-btn');
let div=document.createElement("div");
      document.body.appendChild(div);
let div1=document.createElement("div");
      document.body.appendChild(div1);
btn.addEventListener('click',()=>{
   fetch('https://api.jokes.one/jod')
   .then((res)=>res.json())
   .then((data)=>{
      console.log(data)
      div.innerHTML=data.contents.jokes[0].joke.title;
      div1.innerHTML=data.contents.jokes[0].joke.text;
   })
}) 
