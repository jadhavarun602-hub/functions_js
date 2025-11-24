// Write a function to check if a number is prime.

function PrimeNum(num){
    if (num <= 1) {
       console.log("this is not prime number"); 
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
        }
        
    }

    if (isPrime) {
        console.log(num+" is a prime number");
        
    }else{
        console.log(num+" is not a prime number");
        
    }
}

PrimeNum(7);