// 2.	Convert Temperature (Celsius to Fahrenheit).

function celtofah(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("input must be a number");
}
    return(celsius * 9/5) + 32;

}

console.log("temperautre in fahrenheit: ", celtofah(35));

