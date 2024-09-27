const fibonacciRecursivo = (n) => {
    if (n < 2) return n;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
};
