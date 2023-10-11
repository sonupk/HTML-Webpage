//Section 2: JavaScript


// Que no.1 Create an array of numbers and find the sum of all even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Using the reduce() method to calculate the sum of even numbers
const sumOfEvens = numbers.reduce((accumulator, currentNumber) => {
    if (currentNumber %2 ===0) {//=== Checking both value and type
        return accumulator +currentNumber; //2. Add even numbers to the accumulator
    }
    return accumulator; // 3.Ignore odd numbers
}, 0); // 4.Initialize the accumulator with 0

console.log("Sum of even numbers:", sumOfEvens);//Output=> 30

//Que no.2 Create a function that checks if a given string is a palindrome.

function isPalindrome(str) {
    // 1.Remove spaces and convert to lowercase
    const cleanStr = str.replace(/ /g, '').toLowerCase();
    // 2.Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
     // 3. Compare the original and reversed strings
    return cleanStr ===reversedStr;
}
// Example to check:
const testString = "racecar";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString)); // Output=> true







 






  
