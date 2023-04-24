// Loop through the array with map and console log the values.

let array1 = [1, 2, 3, 4, 5];
let array2 = array1.map(item => {
    return item * 3
})

console.log(array2)

// Given an array
// Create a function
// Call the function


// Find the sum of the arrays values using reduce.

let array = [1, 2, 3,4,5];

let sum = array.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum)

// Given an array
// Set the initial value to '0'
// Return sum of accumulated value and the current number


// Find the even numbers from the array using filter

function getEvenNumbers() {
        let array = [1,2,3,4,5];
    	
        let evens = array.filter(number => number % 2 == 0);
        console.log('Even Numbers :' + evens);
    }
    
    getEvenNumbers();

// Create a function
// Given an array
// Call the function

