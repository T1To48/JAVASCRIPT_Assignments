function tellFortune(jobTitle,location,partnerName,numberOfChildren){
   let arbeit=['Programmer','welder','doctor','Police Officer'];
   let ort=['Manhatten','Pheonix arizona','Copenhagen','Berlin'];
   let part=['Cloey','Hannah','Layla','Sara']
   let kind=['2 children','3 children','5 children','no children'];
   jobTitle = arbeit[Math.floor(Math.random()*4)];
   location = ort[Math.floor(Math.random()*4)];
   partnerName = part[Math.floor(Math.random()*4)];
   numberOfChildren = kind[Math.floor(Math.random()*4)];
   return `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren}.`
}

console.log(tellFortune());