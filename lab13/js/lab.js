// index.js - Function for Lab 13 !
// Author: Brooke Taylor
// Date: May 22 2024

// **Credits to Wes' code in their own Art101 site, referencing theirs helped me exponentially in getting this lab to function!**
    // And another shoutout to GPT, which I prodded with a very extensive list of questions on loops


// Functions & JS 


// needed for obtFactorObj function to work
let maxFactors = 4;

// searches the HTML document and returns the first element it finds with the id attribute matching the output string. assigns this result to outputEl.
outputEl = document.getElementById("output");


// This function obtains the values given in the webpage, and writes them into an object.
function obtFactorObj() {


  var factorObj = {};
  //loops through 0 to 4 (maxFactors)
    for (var factor=0; factor<maxFactors; factor++) {

    //constructs ID of input elements 
      numId = "num" + factor;
      textId = "text" + factor;
      //retrives values from input elements with the new IDs
      numValue = document.getElementById(numId).value;
      textValue = document.getElementById(textId).value;
      //logs the current factor number and retrived values 
      console.log(factor + ") num:", numValue, "text:", textValue)
      // checks to see if numValue & text Value are non-empty
       if (numValue && textValue) {
        // if both values are non-empty, add them to factorObj
           factorObj[numValue] = textValue;
       }
     
    }
    return factorObj;
}


// creates a new paragraph element to add onto the webpage 
function outputToPage(str) {
  newEl = document.createElement("p");
  // whatever string passes into the function becomes the content of this new paragraph 
  newEl.innerHTML = str;
  // appends paragraph 
  outputEl.appendChild(newEl);
}


// loops over numbers & objects to reformat the output on the page
   // ie: 0 | (text) !!
function fizzBuzzBoom(maxNums, factorObj) {
  // loops through all numbers
  for (var num=0; num<maxNums; num++) {


      debugger;
      // resets output string
      var outputStr = "";
      // iterate over the factors we got from the html
      for (var factor in factorObj) {
          // check to see if this num is a multiple of factor
          if (num % factor == 0) {
              // if yes, than add the text to output string
              outputStr += factorObj[factor];
          }
         
      }
      // formats words in outputStr to look like : " | text !!"
      if (outputStr) {
          outputStr = " | " + outputStr + "  !!";
      }
      outputToPage(num.toString() + outputStr)


  }
}

// adds a click event listener to the "submit" button in index.html
document.getElementById("submit").addEventListener("click", function() {
// retrieves value from input element & assigns to max variable
  var max = document.getElementById("max").value;
  console.log("max:", max)

// calls obtFactorObj function & assigns to factorObj   
  var factorObj = obtFactorObj();
  console.log("factorObj:", factorObj);

//clears inner HTML of the 'outputEL' element
  outputEl.innerHTML = "";
// calls fizzBuzzBoom function
  fizzBuzzBoom(max, factorObj);
// Adds the column styling to the document!
  outputEl.classList.add("columns");
})


