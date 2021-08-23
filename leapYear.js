//algo
/* year%4==0 && year%100 != 0
    year%400 ==0 */

function leapYear(year){
    if(year%4==0 && year%100!=0){
    return true;
}
else if(year%400==0){
    return true;
}

else    
    return false;
}
let myYear= 1200;
let isLeapYear=leapYear(myYear);
console.log('isLeapYear: ',isLeapYear);
