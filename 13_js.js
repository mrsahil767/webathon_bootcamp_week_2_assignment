// 13.	Write a JavaScript function to check if a number is a palindrome.

function ispalindrome(number) {
    const str = number.toString();
    const reversedstr = str.split("").reverse().join("");
    return str === reversedstr;
    
}
console.log("ispalindrome:" , ispalindrome(1221));

