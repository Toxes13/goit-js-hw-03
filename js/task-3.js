// function filterArray(numbers, value) {
    
//     const number = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (value < numbers[i]) {
//         number.push(numbers[i]);
//     }  
// }
//     return number;
// }

function filterArray(numbers, value) {

  let correct = [];

  for (const number of numbers) {
      if (number > value) {
          correct.push(number);
    }
  }
    return correct;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

