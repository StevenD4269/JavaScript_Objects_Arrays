console.log("Hello World!:\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// the first example
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(nums) {
  let sum = 0;
  // the "easy" way
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
}

// hard way
// const numbers = [2, 22, 12, 17, 18, 39, 129];
// function arraySum(numbers) {
//   let sum = 0;
//   numbers.forEach((number, index) => {
//     sum += number;
//   });
//   return sum;
// }
// console.log(arraySum(numbers));

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
// creates an object with an empty bucket
const book = {};
// Now we are using dot notation to place items in the empty bucket
book.title = "Mistborn";
book.numPages = 647;
book.readCount = 3;

book.info = function () {
  // use "this." to specifically access a specific property in an object
  return `${this.title} by Brandon Sanderson, ${this.numPages}, read ${this.readCount} times.`;
};
console.log(book.info());

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// We are reversing the LETTERS of the word NOT the sentence
let sentence = "The quick brown fox jumps over the lazy dog";

// Step 2: Convert into an array: use the split command and a space between " " will target the spaces and split them into an array
let arrayOfWords = sentence.split(" ");

// Step 3: Iterate over each word: so turn it into a for loop to iterate (repeat a process) over it, start at i until it reaches the length of the variable
// Let i=0 the zero INDEX
for (let i = 0; i < arrayOfWords.length; i++) {
  // Step 4: Convert each WORD to an array: the split command will split the CHARACTERS of the words and convert into an array of characters

  const arrayChar = arrayOfWords[i].split("");
  // we do arrayOfWords[i] will target and start at i which is the first index, so the word "the" is now ['T','h','e']
  // Step 5: create a new variable and assign it to your split variable and reverse  it with the .reverse
  let reversedArray = arrayChar.reverse();
  // Step 6: this will basically put the array of words back together
  arrayOfWords[i] = reversedArray.join("");
}
// convert back to a string
let reversedSentence = arrayOfWords.join(" ");
console.log(reversedSentence);

// // Exercise 4
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

// Step 2: use the split command to separate each string into its own row or index. NOTE*** name, age is ONE STRING, same as Frodo,50 etc
let turnLinesToRows = csvData.split("\n");
// will now look like ['name,age', 'Frodo,50', 'Sam,38', 'Merry,36', 'Pippin,26'], so 5 strings/indexes

// Step 3: create new variable that takes your new rows and separates them into its own header, 0 is the first index aka "name,age"  that it accesses
// turnlinestorows[0] accesses the first index
// the split(",") command is really taking ["name,age"] and turning it into ["name", "age"], so substrings of the strings, so one string becomes two
let firstRowSplitIntoArray = turnLinesToRows[0].split(",");

// // Step 4: create a for loop to iterate over each array
for (let i = 0; i < turnLinesToRows.length; i++) {
  //
  let splitTheData = csvData.slice(firstRowSplitIntoArray);
  console.log(splitTheData);
}

// console.log(splitTheData);
