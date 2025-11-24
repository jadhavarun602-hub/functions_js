// Write a function to calculate simple interest.

function SimpleIntrest(principal,rate,time) 
{
    let SI = (principal * rate * time)/100;
    
    SI = principal + SI;

    console.log("Principlal : "+principal);
    console.log("Rate : "+rate);
    console.log("Time : "+time);
    
    console.log("Simple Intrest is: "+SI);
    
}

SimpleIntrest(1000000,8,5);