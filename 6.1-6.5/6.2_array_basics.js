
////1/////
const people = ["Greg", "Mary", "Devon", "James"];

for(let x=0;x<4;x++){
   
   console.log(people[x]);
}
////2/////
people.shift();
////3/////
people.pop();
////4/////
people.unshift('matt');
////5/////
people.push('TAUFIQ');
////6/////
for(let x=0;x<4;x++){
   
   console.log(people[x]);
   if (people[x].toLowerCase()==='mary'){break;}
   
}
////7/////
people.slice(0,1);
////8/////
console.log(people.indexOf("Mary"));
////9/////
console.log(people.indexOf("foo"));
////10////
people.shift();
people.pop();
people.unshift("Greg");
people.push("James");

people.splice(2,1,"Elizabeth","Artie");
console.log(people);
////11////
let b0b="Bob";
let leute=people.concat(b0b);
console.log(leute);
