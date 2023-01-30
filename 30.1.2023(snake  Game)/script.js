//code along from youtube video URL:
//-   https://www.youtube.com/watch?v=QTcIXok9wNY&t=2s -\\



///we create a game-loop and put everything inside so the game repeats and constant update
//our calculations and functions
import {update as updateGame , draw as drawGame , schlange_geschwindigkeit , getSchlangeKopf,schlangeSelbst} from './snake.js';

import{update as updateFutter, draw as drawFutter} from './food.js'

import { aussenGrid } from './grid.js';
let letzteRenderZeit=0;

let gameOver=false;

const playGround=document.querySelector('#play-ground')
function master(actualTime){ 
   if (gameOver){
      if(confirm('you lost click ok to try again!')){
         window.location='./index.html';
      }
      return alert('L000000005ER');
   }


   window.requestAnimationFrame(master);

   const sekundeSeitLetzteRender= (actualTime - letzteRenderZeit)/1000;

  if(sekundeSeitLetzteRender<1/schlange_geschwindigkeit) return;//if the seconds from the last render is less than (how much moves does snake move in one second),then do nothing
   letzteRenderZeit=actualTime;/// if the seonds from the last render are more than the snakes moves then update the last render time.
   console.log('render');
   update();// updates what ever happens in the game , snake eat food, movement direction,or won/loose BUT NOT VIEW THEM ON GAME PAGE
   draw();//it views what ever gets updated on the game screen
}
window.requestAnimationFrame(master);
// ! The window.requestAnimationFrame() method tells the browser that you wish to perform an animation
// and requests that the browser calls a specified function to update an animation before the next repaint.

function update(){
   updateGame();
   updateFutter();
   prufTot();
};
function draw(){
   playGround.innerHTML='';
   drawGame(playGround);
   drawFutter(playGround);
};
function prufTot(){
   gameOver= aussenGrid(getSchlangeKopf())|| schlangeSelbst()
};



