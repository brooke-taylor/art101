// index.js - Simple JS/jQuery script that appends new elements to an output div.
// Author: Brooke Taylor
// Date: May 14 2024

// Functions

    // jQuery must be loaded for this script to work !


// Generates the text which appears in the conversation
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 15;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Obtian a randomized starting index that will slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-pulled text
  return text.slice(randStart, randStart + randLen);
}

// event listener for button
$("#converse").click(function(){

  // creates an additional text bubble
    const newText = generateRandomText();
    $("#output").append('<div class="conversation-text"><p>' + newText + '</p></div>');

  });

// initial speech bubble
const newText = generateRandomText();

// append a new div to our output div, for the initial speech bubble
$("#output").append('<div class="conversation-text"><p>' + newText + '</p></div>');