// index.js - A simple JavaScript/jQuery script which takes a value from a input field and outputs a modified version!
    // Requirements - jQuery must be loaded for the script to work.
// Author: Brooke Taylor
// Date: May 14 2024 

// Functions


// Sorts the characters of a string in alphabetical order;
function sortString(inputString) {
    // Converts string to an array, then back again to sort it
    return inputString.split('').sort().join('');
}


//Sorts string into an anagram
    // **Another shoutout to ChatGPT** - this is a modified version of my anagram function from Lab 7, which GPT assisted me in creating.
function generateAnagram(inputString) {
  // Converts input string into an array
  let characters = inputString.split('');

  // Randomly shuffles characters
  characters.sort(() => Math.random() - 0.5);

  // Joins the shuffled characters into a string
  let shuffledString = characters.join('');

  // Capitalize the first letter of each word in the shuffled string
  let capitalizedAnagram = shuffledString.replace(/\b\w/g, (char) => char.toUpperCase());

  return capitalizedAnagram;

}

// click listener for sort button
$("#submit").click(function(){

  // get value of input field
    const userName = $("#user").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p><b>' + userNameSorted + '</b></p></div>');

});

// click listener for anagram button
$("#anaSubmit").click(function(){

  const userName = $("#anagram").val();
  userNameSorted = generateAnagram(userName);
  $("#anaOutput").html('<div class="text"><p><b>' + userNameSorted + '</b></p></div>');

});



// click listener and simple function for Glitch button!
$('#glitchButton').click(function(){


  // toggles the section class, so that the site "glitches"
    $("#special").toggleClass("minor-section");

  
  //outputs text in the results section
    $("#glitchOutput").html('<div class="text"><p><b>' + "oh..." + '</b></p></div>');
 
  
});

// toggles the css style of the challenge section to glitch out the website
//Thank you ChatGPT for assisting in writing this code !!
function toggleStyle() {
  var element = document.getElementById('styled-element');

  // Check current class name
  if (element.className === 'minor-section') {
      // Switch to alternate style
      element.className = 'glitchy';
  } else {
      // Switch back to default style
      element.className = 'minor-section';
  }
  $("#glitchOutput").html('<div class="text"><p><b>' + "don't look up-!" + '</b></p></div>');
}


