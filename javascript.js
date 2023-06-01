// 1.Find duplicate and same values in two arrays:

var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = fullWordList.filter((value)=> {
  return wordsToRemove.indexOf(value) !== -1;
});

console.log("Duplicates:", duplicates); // 1,2,3

var sameValues = fullWordList.filter((value)=> {
  return wordsToRemove.indexOf(value) === -1;
});

console.log("Same Values:", sameValues); //4,5

// 2.Longest chain of letters in a word:
const word = '00000111110101001111100001001';

function longestChainOfLetters(word) {
  let longestChain = 0;
  let currentChain = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === '1') {
      currentChain++;
    } else {
      if (currentChain > longestChain) {
        longestChain = currentChain;
      }
      currentChain = 0;
    }
  }

  return longestChain;
}

console.log("Longest Chain of Letters:", longestChainOfLetters(word)); // 5

// 3.Object reference and modification:

let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";

console.log(obj1); //Bye
console.log(obj2); //Bye

// 4.Comparison operations:

console.log("7" > 7);      // false 
console.log("2" > "21");  // true 
console.log("KL" > "S");  // false 

//5.Calculation error in average function:

function average(a, b) {
    return (a + b) / 2;
  }
  
  console.log(average(2, 1));  // 1.5 
  