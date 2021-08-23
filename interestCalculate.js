function interestCal(principle,time,rate){
    let interest = (principle*time*rate)/100;
    return interest;
}

const shudkhur = interestCal(500,3,6);
console.log(shudkhur);