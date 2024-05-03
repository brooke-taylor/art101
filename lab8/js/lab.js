// Functions for Lab 8
// Author: Brooke Taylor
// Date: May 2

// Functions

// Takes a numerical input and squares it
function numSquare(x) {
    return x * x;
}

// Sample Function Tests!
  console.log(numSquare(2));
  console.log(numSquare(30));

// Sample Array:
  let sampArray = [5, 15, 30];
  console.log("Sample Array: ", sampArray);

// Log Results
  let results = sampArray.map(numSquare);
  // Should return 5, 15 and 30 as squared.
  console.log("Sample Array, squared with the function: ", results);

// Anonymous Function
  let result = sampArray.map(function(x) {
    let anonResult = x * 100;
    return anonResult;
  });

// Should return every number in the array multiplied by 100
console.log("Array times 100: ", result);

// Establishing results variable for jQuery
let mapResults = ("Original Array: 5, 15, 30 </br> Squared Array: 25, 225, 900 <br> Array*100: 500, 1500, 3000");
// Using jQuery to select element by ID & set HTML content
$("#output").html(mapResults);