// 4.	Write a javascript code that calculates the squares and cubes from 0 to 10 .



function sqrncube() {
    const results = [];
    for (let i = 0; i <= 10; i++) {
        results.push({ number: i, square: i ** 2, cube: i ** 3 });
    }
    return results;
}

console.log("Squares and Cubes:", sqrncube());

