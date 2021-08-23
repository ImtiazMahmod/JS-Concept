let myValue = [12,23,23,56,59];
let sum=0;
for(let i= 0; i<myValue.length; i++){
    sum += myValue[i];
}

//using function
function arraySum(arr){
    let sum = 0 ;
    for(let i= 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const array= [56,65,8,66,75];
const arrayTotal = arraySum(array);
console.log(arrayTotal);
