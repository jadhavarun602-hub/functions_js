// Write a function to calculate factorial of a number.

function Factorial(num) {

    let fact = 1;

    for (let i = 1; i <= num; i++) 
    {
     fact = fact * i;

    }

    return fact;
}

console.log(Factorial(4));

