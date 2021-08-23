/* function duplicateArray(n){
    let unique = [];
    for(let i=0; i<n; i++){
            if(unique.indexOf(array[i])==-1){
                unique.push(array[i]);
            }
            else
            {
                console.log('duplicate: ',array[i])
            }
    }
    return unique;
} */

function duplicateArray(n){
    let unique = [];
    for(const element of array){
        if(unique.indexOf(element)==-1){
                unique.push(element);
        }
        else
        console.log('duplicate:',element);
    }return unique;
}
const array = [12,336,5,12,65,98,45,65];
const getUnique = duplicateArray(array.length);
console.log('unique values',getUnique);
