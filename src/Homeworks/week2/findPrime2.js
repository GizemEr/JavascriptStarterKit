function primeNumber(number) { 
    for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    return true
}

function primeNumber2() {
    for (let i = 2; i < 1000; i++) {
        if (primeNumber(i) == true) {
            console.log(i + "is a prime number")
        }
 
    }
}
primeNumber2()