const gridGrosse=21;

export function randomGridPosition(){
   return{
      x:Math.floor(Math.random()*gridGrosse)+1,
      y:Math.floor(Math.random()*gridGrosse)+1
   }
}

export function aussenGrid(position){
   return(
      position.x<1 || position.x>gridGrosse||
      position.y<1 || position.y>gridGrosse
   )
}