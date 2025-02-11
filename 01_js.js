// 1.	Write a function that takes an input of item prices and returns the total bill.

function totalbill(prices) {
    if (!Array.isArray(prices)) {
        throw new Error("input must be an array of numbers");
        
    }
    return prices.reduce((total, price) => {
        if(typeof price !== "number" || price < 0){
            throw new Error("all items must be only positive numbers");

        }
        return total + price;
    
    }, 0);
    
}
// lets take a example how this work

const itemPrices = [10,5,45.6,79.3];
console.log("total bill :",totalbill(itemPrices));

