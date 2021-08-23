/* const products = [
    {name: 'monitor',price:10000},
    {name: 'phone',price:13000},
    {name: 'shirt',price:800}
];
let total=0;
for(let i=0; i<products.length; i++){
    
    total += products[i].price;
}
console.log(total); */


// mutliple products
const products = [
    {name: 'monitor',price:10000,quantity: 2},
    {name: 'phone',price:13000, quantity: 3},
    {name: 'shirt',price:800, quantity: 7}
];

let total = 0;
for(let product of products){
    total += product.price * product.quantity 
}
console.log(total);