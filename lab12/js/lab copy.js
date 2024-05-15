// index.js - Lab 12 Functions, returns one of four listed items
// Author: Brooke Taylor
// Date: May 14 2024

// Functions, Arrays, Oh My

  // Overall shoutout to Wes' code and their linked sources, which helped greatly in constructing / writing mine!

//Array for every possible house outcome
housesArray = [
  {
    title: "Gryffindor",
    text: "Congrats - you're in the house of 90% of the relevant characters in the series!"
},{
    title: "Hufflepuff",
    text: "Congrats - you're in the house with one of the strongest stigmas surrounding it! Don't worry though - I'm pretty sure Rowling is one herself..."
},{
    title: "Ravenclaw",
    text: "Congrats - you're governmentally assigned to be smart. I hope the gifted kid burnout doesn't hit you too hard!"
},{
    title: "Slytherin",
    text: "Congrats - you're governmentally assigned to be a villan! Despite the stigma, there's some pretty cool characters from this house."
},{title: "Grufflepuff (Gryffindor + Hufflepuff)",
    text: "Congrats - you've hit the intersection of two unique houses! A mix of braveness and kindness - you've certainly got a good head on your shoulders."
},{
    title: "Ravendor (Ravenclaw & Gryffindor)",
    text: "Congrats - you've hit the intersection of two unique houses! Probably the two least frowned upon houses - you've certainly won the hypothetical jackpot!"
},{
    title: "Slyffindor (Slytherin & Gryffindor)",
    text: "Congrats - you've hit the intersection of two unique houses! How're those conflicting personaly traits treating you?"
},{
    title: "Ravenpuff (Ravenclaw & Hufflepuff)",
    text: "Congrats - you've hit the intersection of two unique houses! Despite what people may say, intellect and kindness is a lovely combination indeed."
},{
    title: "Raverin (Ravenclaw & Slytherin)",
    text: "Congrats - you've hit the intersection of two unique houses! Cunning with a sharp mind... I hope you use your powers for good."
},{
    title: "Slytherpuff (Hufflepuff & Slytherin)",
    text: "Congrats - you've hit the intersection of two unique houses! Is... is this really possible? The.. the houses are entirely different... well - ahem! Best of luck to you!"
 }
]

//assorted HTML lines for the final text output
drumrollHTML = '</br> drumroll... </br>'
introHTML = '<div class="stage-direction">The Sorting Hat continues, in all his wisdom:</div>'
endingHTML = '<div class="credits">All the best on your journey!</div>';

// takes a string, returns a hashed checksum of the string
// credits to wes & : https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
  return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
  c = s.charCodeAt( i );
  hash = ((hash << 5) - hash) + c;
  hash = hash & hash; // Converts to 32bit integer
  }
return hash;
};

// javascript functions to manipulate classes
// credits to wes & : https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
  function hasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  //
  function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
  }
  //
  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
  }

// returns a house from the given array
  function sortingHatHash(str) {
    checksumValue = checksum(str);
    mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the above array
  }

// button event listener
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {

    // obtain value from input field
    var name = document.getElementById("input").value;

    // Reads user input to generate house from sorting hat function
    var houseObj = sortingHatHash(name);

    // Outputs results to the output div, with additional text around the results. Credits to Wes' Code for helping the formatting!
    newText = drumrollHTML + "<h2>" + houseObj.title + "!</h2>" + introHTML + "<p>\"" + houseObj.text + "\"</p>" + endingHTML;
    var outputArea = document.getElementById("output");
    outputArea.innerHTML = newText;
    removeClass(outputArea, "hidden");
    removeClass(document.getElementById("tail-box"), "hidden");

})