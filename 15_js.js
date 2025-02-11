
// 15.	Write a function that checks if a given number is a perfect square.

function isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Example usage:
console.log("Is Perfect Square:", isPerfectSquare(25));

