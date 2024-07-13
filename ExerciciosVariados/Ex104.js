function S(N) {
    // Sum of all positive numbers not more than N
    return (N * (N + 1)) / 2;
}

function Z(N) {
    // Sum of all S(i) where 1 <= i <= N
    return (N * (N + 1) * (N + 2)) / 6;
}

function calculateSZ(N) {
    // Calculate S(Z(N)) and return as a number followed by 'n'
    let resultZ = Z(N);
    let resultSZ = S(resultZ);
    return resultSZ
}

// Example usage:
let N = 3;
console.log(calculateSZ(N)); // Output: 55n