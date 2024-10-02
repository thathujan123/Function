
function sum(a, b) {
    return a + b;
}
console.log("Sum:", sum(5, 10));

function isEven(number) {
    return number % 2 === 0;
}
console.log("Is Even:", isEven(4)); 
console.log("Is Even:", isEven(5));

function toFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
console.log("Fahrenheit:", toFahrenheit(30)); 

function max(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Largest:", max(10, 20, 5)); 

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is Prime:", isPrime(7));

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String:", reverseString("hello")); 

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of Array:", sumArray([1, 2, 3, 4])); 

function longestWord(str) {
    let words = str.split(' ');
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log("Longest Word:", longestWord("The quick brown fox jumped over the lazy dog")); 

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("Is Palindrome:", isPalindrome("madam"));

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci:", fibonacci(6));

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log("Vowel Count:", countVowels("hello world"));

function uniqueElements(arr) {
    return [...new Set(arr)];
}
console.log("Unique Elements:", uniqueElements([1, 2, 2, 3, 4, 4])); 

function power(base, exponent) {
    return base ** exponent;
}
console.log("Power:", power(2, 3));

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("Sorted Array:", sortArray([3, 1, 4, 2])); 

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}
console.log("Median:", findMedian([1, 2, 3, 4, 5])); 

function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log("Capitalized:", capitalizeFirstLetter("hello world")); 

function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log("Flattened Array:", flattenArray([1, [2, [3, [4]]]])); 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Number:", randomNumber(1, 100)); 

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log("Occurrences of 2:", countOccurrences([1, 2, 2, 3, 2], 2)); 
