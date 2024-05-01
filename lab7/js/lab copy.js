// index.js - Lab 7 
// Author: Brooke Taylor
// Date: April 30

//Functions

//Turns second user input into an anagram
//credits to ChatGPT for being a big help in writing this!!
function generateAnagram(input) {
  // Converts input string into an array
  let characters = input.split('');

  // Randomly shuffles characters
  characters.sort(() => Math.random() - 0.5);

  // Joins the shuffled characters into a string
  let shuffledString = characters.join('');

  // Capitalize the first letter of each word in the shuffled string
  let capitalizedAnagram = shuffledString.replace(/\b\w/g, (char) => char.toUpperCase());

  return capitalizedAnagram;
}

// Output:
let userInput = prompt("Additionally, enter your full name (or a made up one is fine, too)");
if (userInput) {
  let anagram = generateAnagram(userInput);
  document.writeln(`Your new name, taken from "${userInput}" is : </br> ${anagram}`);
} else {
  document.writeln("No input provided.");
}