// index.js - Lab 9 js content!

  //includes a simple js / jQuery script that uses buttons to modify page elements. 
  // jQuery must be loaded for the script to work! 

// Author: Brooke Taylor
// Date: May 12

// DEBUGGED 5/22 ** Shoutout to Wes' Lab 9 website code and the sample Canvas code, they greatly aided in me getting my own lab to work! **

//jQuery Button Appending - Challenge, Problems, and Results sections

// appends buttons to all "minor section"s within the index.html.
$(".minor-section").append("<button class='toggle-button'>! push to highlight !</button>");


// Test each button
$(".toggle-button").click(function(){

  //"this" refers to the clicked button, and then toggles the class.
    $(this).parent().toggleClass("special");

})
