//factorial
//n! = n*(n-1)(n-2)(n-3)....1


factorial(6);
function factorial(num){
    let fact=1;
    //increment 
    //for(let i=1;i<=num; i++){    
        
    //     fact *= i;  
    // }
    //decrement
    let i= num;
    while(i>=1){
        fact*=i;
        i--;
    }
    console.log(fact); 
}
