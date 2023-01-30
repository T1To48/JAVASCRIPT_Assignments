import { aufSchlange, schlangeVerlangern } from "./snake.js";
import {randomGridPosition} from "./grid.js"

let futter=randomGridPosition();

const verlangernTempo=1;

export function update(){
   if(aufSchlange(futter)){//if the position matches procced with enlarging the snake
      schlangeVerlangern(verlangernTempo);
      futter=randomGridPosition();
   }
};
export function draw(playGround){
      const futterElement=document.createElement('div');///create a div
      futterElement.style.gridRowStart=futter.y;///where in the grid should the div start. row(axis X)
      futterElement.style.gridColumnStart=futter.x;///where in the grid should the div start. column(axis Y)
      futterElement.classList.add('futter');//add the class schlange in the div we made, (the style for this class is written in syle.css)
      playGround.appendChild(futterElement);//add the dive to its container/parent element
};

function getRandomFutterPosition(){
   let newFutterPosition
   while(newFutterPosition==null || aufSchlange(newFutterPosition)){
      newFutterPosition=randomGridPosition();
   }
   return newFutterPosition;
}