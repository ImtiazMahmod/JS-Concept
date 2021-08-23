// smallest value
let valueList = [26,85,12,56];
let min= valueList[0];
function minValue(valueList){
    /// passing array as function argumnet
    for(let i = 0; i < valueList.length; i++){
        if(valueList[i] < min ){
            min = valueList[i];        
        }
        
    }
    return min;
}
/* let getMinValue = minValue(valueList);
console.log(getMinValue); */

// largest value
function maxValue(values){
    let max = values[0];
    for(let i= 0; i<values.length; i++){
        if(values[i]>max){
            max = values[i];
        }
    }
    return max;
}

const myArray = [12,545,54,98,54];
const getMaxValue = maxValue(myArray);
console.log(getMaxValue);
