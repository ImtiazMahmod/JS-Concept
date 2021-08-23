function celsiusToFarenheit(celsius){
        let farenheit= (9/5*celsius) +32;
        return farenheit;
}
const temperature = celsiusToFarenheit(32);
console.log(temperature);
