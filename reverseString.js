function revString(string){
    let reverse = '';
    for(let letter of string){
        reverse = letter + reverse;
    }
    return reverse;
}
const string = 'i am a good boy';
const reverseString = revString(string);
console.log(reverseString);