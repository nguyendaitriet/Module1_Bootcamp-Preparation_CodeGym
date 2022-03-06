function isPrime(number) {
    let i = 2;
    for (; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    if (i = number) {
        return true;
    }
}
for (let i = 2; i < 10000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}