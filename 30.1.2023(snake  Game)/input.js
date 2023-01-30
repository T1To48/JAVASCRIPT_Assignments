let inputRichtung={x:0,y:0};
let letzteInputRichtung={x:0,y:0};
window.addEventListener("keydown",e=>{
   switch(e.key){
      case 'ArrowUp':
         if(letzteInputRichtung.y !==0)break;
         inputRichtung={x:0,y:-1};
         break;
      case 'ArrowDown':
         if(letzteInputRichtung.y !==0)break;
         inputRichtung={x:0,y:1};
         break;
      case 'ArrowLeft':
         if(letzteInputRichtung.x !==0)break;
         inputRichtung={x:-1,y:0};
         break;
      case 'ArrowRight':
         if(letzteInputRichtung.x !==0)break;
         inputRichtung={x:1,y:0};
         break;
   }
})
export function getInputRichtung(){
   letzteInputRichtung=inputRichtung;
   return inputRichtung;
}