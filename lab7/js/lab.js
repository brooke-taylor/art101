// index.js - Lab 7 
// Author: Brooke Taylor
// Date: April 30

//Functions

//Sorts inputted name
function sortUser() {
    // Prompts user for their name
  var userName = window.prompt("Hi! Before opening the page, please input your name.");

    // Reorganizes user's inputted name & returns it
  var newUser = userName.split('').sort().join('');
    console.log("new name=", newUser);
  return newUser;
}

//Outputs sorted name with decent whitespace 
document.writeln('Enjoy your new name: ', "</br>","</br>",
sortUser(), "</br>","</br>", 
);



