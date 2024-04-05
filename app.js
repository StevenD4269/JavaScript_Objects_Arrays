// console.log("Hello World!:\n==========\n");
// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// const numbers = [2, 22, 12, 17, 18, 39, 129];
// function arraySum(numbers) {
//   let sum = 0;
//   numbers.forEach((number, index) => {
//     sum += number;
//   });
//   return sum;
// }
// console.log(arraySum(numbers));

// // Exercise 2
// const book = {};
// book.title = "Mistborn";
// book.numPages = 647;
// book.readCount = 3;

// book.info = function () {
//   return `${this.title} by Brandon Sanderson, ${this.numPages}, read ${this.readCount} times.`;
// };
// console.log(book.info());

// Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";

// Step 2: use the split command and a space between " " will split them into an array
let arrayOfWords = sentence.split(" ");

// Step 3: turn it into a for loop to iterate over it, start at i until it reaches the length of the variable
for (let i = 0; i < arrayOfWords.length; i++) {
  // Step 4: the split command will split the sentence and convert into an array of characters
  let arrayChar = arrayOfWords[i].split("");
  // Step 5: create a new variable and assign it to your split variable and reverse  it with the .reverse
  let reversedArray = arrayChar.reverse();
  // Step 6: this will basically put the array of words back together
  arrayOfWords[i] = reversedArray.join("");
}
// convert back to a string
let reversedSentence = arrayOfWords.join(" ");
console.log(reversedSentence);
