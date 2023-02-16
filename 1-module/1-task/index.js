function factorial(n) {

    var sum = 1;

    for (i = 0; i < n; i++){
        sum = sum * (n - i);
    }

    return sum

}


factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120