function friendNum (num1, num2) {
    let totalNum1 = 0;
    let totalNum2 = 0;

    for (let i = 1; i < num1; i++) {

        if (num1 % i == 0) {
            totalNum1 = totalNum1 + i;

        }

    }
    for (let i = 1; i < num2; i++) {

        if (num2 % i == 0) {
            totalNum2 = totalNum2 + i;

        }

    }
    if (num1 == totalNum2 && num2 == totalNum1) {
        console.log(num1 + " and " + num2 + " are friendly number.");
    }
    else {
        console.log(num1 + " and " + num2 + " are'nt friendly number.");
    }
}