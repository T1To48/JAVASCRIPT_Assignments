function steps(number){
   for (let x=0;x<number;x++){
      let str="";
      for(let i=0;i<number;i++){
         if(i<=x){
            str+='#';
            
         }
         else{
               str+=" ";
            }
      }
      console.log(`'${str}'`)
   }
}
console.log(steps(20));

//  function F(N){
//     let i=1;
//     while(i<=N){
//         let str="'";
//         let num=0;
//         for(let j=0; j<i; j++){
//             str+='#';
//             num=j;
//         }
//         for(let c=1; c<N-num; c++){
//             str+=" ";
//         }
//         str+="'"
//         console.log(str);
//         i++;
//     }
//  }

//  console.log(F(4));