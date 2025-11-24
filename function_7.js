// Write a function to find the largest of three numbers.

function LargNumThree(num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1+" is largest number"); 
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2+" is largest number"); 
    } else {
        console.log(num3+" is largest number");
        
    }
}

LargNumThree(550,3300,77);