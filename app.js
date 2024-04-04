console.log("Hello World!:\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number, index) => {
    sum += number;
  });
  return sum;
}
console.log(arraySum(numbers));
