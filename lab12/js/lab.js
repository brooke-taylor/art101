// index.js - Lab 12 Functions, returns one of four listed items
// Author: Brooke Taylor
// Date: May 14 2024

// Functions

// Sorts user into one of four houses, depending on the length of the string
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Ravenclaw"
    }
    else if (mod == 2) {
      return "Slytherin"
    }
    else if (mod == 3) {
      return "Hufflepuff"
    }
}

// Listener function for the submit button!
var sortButton = document.getElementById("button");
sortButton.addEventListener("click", function(){

  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  outputText = "<b><p>The Sorting Hat has determined your house is... " + house + " !!!" + "</b></p>";
  document.getElementById("output").innerHTML = outputText;

})