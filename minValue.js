//minValue using if else
let x = 56;
let y = 55;
let z = 59;

function minValue(x,y,z){
   if(x<y && x<z){
       return x;
   }
   else if(y<x && y<z){
       return y;
   }
   else{ 
       return z;
   }

}
let getMinValue = minValue(x,y,z);
console.log('Min value is: ',getMinValue);

//using math function
let min  = Math.min(x,y,z);
console.log(min);