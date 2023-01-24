const startHereLi = document.getElementsByClassName("start-here");

//****1
startHereLi[0].innerText = "main title";
//****2
const subtitle=document.querySelector("body ul li ul");
subtitle.innerHTML+="<li>sub title 4</li>"
//****3
const allLi=document.querySelector('body ul ').lastElementChild;
allLi.remove();
//****4
const title=document.querySelector('title');
title.innerText='taufiq Master Of The Dom';

const changeP=document.querySelector('body div p').innerText="hope to be better";
