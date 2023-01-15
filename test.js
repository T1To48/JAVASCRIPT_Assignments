function ageRange(min,max){
   return function(val){
      return  val>=min&&val<=max;
   }
}
const inRange= ageRange(18,100);
console.log(inRange(99));