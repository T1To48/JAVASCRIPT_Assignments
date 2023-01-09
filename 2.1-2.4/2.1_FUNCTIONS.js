function countryinfo(country,population,capitalCity){
   let land=country;
   let numb=population;
   let haupt=capitalCity;
   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let x=countryinfo('Cuba','11.26','Havana');
console.log(x);
let y=countryinfo('Colombia','52.15','Bogotá');
console.log(y);
let z=countryinfo('Venezuela','28.2','Caracas');
console.log(z);