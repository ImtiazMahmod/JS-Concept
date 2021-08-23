/* let array= [12,13,14,15,16,17];
function evenArray(n){
    let arr=[];
    for(let i= 0; i<n; i++){
        if( array[i]%2==0){
             arr.push(array[i]);           
        }
              
     }return arr; 
}
const getEven = evenArray(array.length);
console.log('even from array',getEven); */

//seperate odd from array
function oddArray(n){
    let arr = [];
    for(let i=0; i<n; i++){
            if(array[i]%2 == 1){
                arr.push(array[i]);
            }
    }
    return arr;
}
let array = [56,98,63,48,34,73,99,67];
const getOdd = oddArray(array.length);
console.log('seperate odd from array',getOdd);
