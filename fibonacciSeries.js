//fibonacci series
//0,1,1,2,3,5,8,13,21,34,55....
// nth = (n-1)th + (n-2)th
/* const fibo = [0,1];
for(let i=2; i<10; i++){
     fibo[i]= fibo[i-1] + fibo [i-2];
    
} */
//using function 
/* function fibonacci(n){
    const fibo = [0,1];
    if(typeof n != 'number'){ //number type
        return 'Enter any number';
    }
    if(n<2){
        return 'Enter any number greater than 2';
    }
    for(let i=2;i<n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacci(5);
console.log(fiboSeries); */

//using recursive function
// fibonacci series using recursive function
// not understand////

function fiboRecuresive(n){
       if(n<=1){
           return 1;
       }
        
        return fiboRecuresive(n-1)+ fiboRecuresive(n-2);
        }
const fibo = fiboRecuresive(2);
console.log(fibo);