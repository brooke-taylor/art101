// index.js - Lab 9 js content!

  //includes a simple js / jQuery script that uses buttons to modify page elements. 
  // jQuery must be loaded for the script to work! 

// Author: Brooke Taylor
// Date: May 12

//jQuery Button Appending - Challenge, Problems, and Results sections
$("#challenge").append("<button id='specialButton'>click to add spice ! </button>");

$("#problems").append("<button id='specialButton'>click to add spice ! </button>");

$("#reflection").append("<button id='specialButton'>click to add spice ! </button>");


//adding a click listener to the challenge button
$('#specialButton').click(function(){
    // toggles the "special" class for this section
    $("#challenge").toggleClass("special");
    $("#problems").toggleClass("special");
    $("#reflection").toggleClass("special");
    
    $("#challenge, #problems, #reflection").toggleClass("minor-section");
});


