function findPrime(...numbers) {
    for(let i=0; i < numbers.length; i++) {
        let number = numbers[i];
        if(isPrime(number)){
            console.log(`Number: ${number} is prime.`);
        } else {
            console.log(`Number: ${number} is not prime.`);
        }
    }
} 

let isPrime = function(number){
    if(number <= 1) return false;
    if(number == 2) return true;
    if(number % 2 == 0) return false;

    let numberSquare = Math.floor(Math.sqrt(number));
    
    for(let i=2; i<=numberSquare; i++) {
        if(number %i == 0){
            return false;
        }
    }
    return true;
}