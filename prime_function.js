function prime(number){
    let flag = true;
    for(let i=2; i<number/2; i++){
        if(number%2 == 0){
            flag = false;
        }
    }
    if(flag == true){
        console.log("Number is prime");
    }else{
        console.log("Number is not prime");
    }
}
prime(30);