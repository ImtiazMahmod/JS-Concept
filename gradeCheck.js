function gradeCheck(num){
    if(num<=100 && num>0){
        if(num>79 && num<=100){
            return 'A+';
        }
        else if(num>69 && num<=79){
            return 'A';
        }
        else if(num>59 && num<=69){
            return 'A-';
        }
        else if(num>49 && num<=59){
           return 'B';
        }
        else if(num>39 && num<=49){
            return 'C';
        }
        else if(num>=33 && num<=39){
            return 'D';
        }
        else{
            return 'FAIL';
        }
    }
    else{
        console.log('Invalid Number');
    }
}
const myGrade= gradeCheck(32);
console.log(myGrade);