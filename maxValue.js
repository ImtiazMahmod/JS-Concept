let x=52;
let y= 56;
let z = 66;

//using if else 
function maxValue(x,y,z){
    if (x>y && x>z){
        return x;
    }
    else if (y>x && y>z){
        return y;
    }
    else{
        return z;
    }
    
}

const getmaxValue = maxValue(x,y,z);
console.log('maxValue is: ',getmaxValue);

//using math function
let max  = Math.max(x,y,z);
console.log(max);