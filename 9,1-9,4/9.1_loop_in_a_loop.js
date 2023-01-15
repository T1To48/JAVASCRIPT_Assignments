const listOfNeighbours = [["Canada","Mexico"],["Spain"],["Norway","Sweden","Russia"]];

   for(let i=0 ; i<listOfNeighbours.length;i++){
      for(let x=0; x<listOfNeighbours[i].length;x++){
         console.log(`Neighbour:${listOfNeighbours[i][x]}`)
      }
   }