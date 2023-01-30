import { getInputRichtung } from "./input.js";


export const schlange_geschwindigkeit=5; //calculates how mush times the snake should move every second (so the snake will move 2 times every second)

const schlangeKorper=[{x:11,y:11}];
let newSegments=0;

export function update(){
   addSegments();
   const inputRichtung=getInputRichtung();
   for (let i=schlangeKorper.length-2; i>=0;i--){
      schlangeKorper[ i + 1 ]={...schlangeKorper[i]};
   }
   ///the snake head and its behavior
   schlangeKorper[0].x+=inputRichtung.x;
   schlangeKorper[0].y+=inputRichtung.y;
};
export function draw(playGround){
   schlangeKorper.forEach((segment)=>{
      const schlangeElement=document.createElement('div');///create a div
      schlangeElement.style.gridRowStart=segment.y;///where in the grid should the div start. row(axis X)
      schlangeElement.style.gridColumnStart=segment.x;///where in the grid should the div start. column(axis Y)
      schlangeElement.classList.add('schlange');//add the class schlange in the div we made, (the style for this class is written in syle.css)
      playGround.appendChild(schlangeElement);//add the dive to its container/parent element

   })
};


export function schlangeVerlangern(menge){//enlarges the snake 
   newSegments += menge;
}

export function aufSchlange(position,{ignoreHead = false } = {}){    //check if the food and the snake are on the same position
   return schlangeKorper.some((segment,index)=>{//return true if the position(snake&food) matches 
      if(ignoreHead && index===0 )return false;
      return gleichPositions(segment,position)
   })
}

export function getSchlangeKopf(){
   return schlangeKorper[0];
}

export function schlangeSelbst(){
   return aufSchlange(schlangeKorper[0],{ignoreHead: true });
}

function gleichPositions(pos1,pos2){//return true or false if the position of food and snake collide
   return(pos1.x===pos2.x && pos1.y===pos2.y); 
}

function addSegments(){//here we take the last element of the snack body {x:11,y:11} and duplicating it at the end
   for (let i=0;i<newSegments;i++){
      schlangeKorper.push({...schlangeKorper[schlangeKorper.length-1]})
   }
   newSegments=0;
}