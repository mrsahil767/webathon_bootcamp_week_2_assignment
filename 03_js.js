// 3.	Find the Largest Number in an Array.

function largestnum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("array must contain some element");
    }
    
    return Math.max(...numbers);
}

const numArray = [10, 250, 374, 428, 58];
console.log("Largest Number:", largestnum(numArray));