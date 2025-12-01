const resultOfPizza = document.getElementById("resultOfPizza");


function sharePizza(slices, people){
    const slicesPerPerson = (slices / people).toFixed(2);

    const output = `Each person gets ${slicesPerPerson} slices of pizza, from a ${slices} slice pizza`;

    console.log(output);
    resultOfPizza.textContent = output;
}

console.log(sharePizza(8,2));
console.log(sharePizza(8,3));
console.log(sharePizza(21,20));
console.log(sharePizza(10,3));