// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
   this.name = pokemonName;
   this.type = pokemonType;
   this.attackList = pokemonAttackList;
}

let inst1=new Pokemon('picachu','electro',['electric shock','electric wave','emp']);
let inst2=new Pokemon('charizard','fire',['roasting','burning','sky smackdown']);
let inst3=new Pokemon('Tatsugiri','water',['tsunami','flood','drowning']);

Pokemon.prototype.printChoosen=function(){
   return `i Choose you ${this.name}`;
}
Pokemon.prototype.attackType=function(number){
   let indx=number-1;
   return `${this.name} used the ATTACK METHOD:${this.attackList[indx]}`;
}
console.log(inst2.attackType(3));