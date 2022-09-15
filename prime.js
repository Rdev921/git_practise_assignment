let num = 13;
let isprime = true;

for(let i=2; i<=num/i; i++){
    if(num%2 == 0){
        isprime = false;
    }

    if(isprime == false){
        console.log("number is prime");
    }else{
        console.log("number is not prime");
    }
}