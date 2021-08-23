//n! = n* (n-1)!
function factorialRecursive(n){
    if(n==1)
    return 1;
    return n*factorialRecursive(n-1);
}
const factorial = factorialRecursive(5);
console.log(factorial);