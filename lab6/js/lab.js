
// index.js - Lab 6 - Arrays and Objects Script [Transportation]
  // Author: Brooke Taylor
  // Date: April 25


  //Declaring Variables in an Array
  let myTransport = [" Bus", " Car", " Bike"];
  
  //Defining Main Method of Transport in an Object
  let myMainRide = {
    make: "Bus",
    model: "Metro",
    color: "Varies",
    year: 2000, //an estimate, this also varies.
    ownIt: false,
    age : function() {
      return 2024 - this.year;
    }
  }

//Outputting Results
  document.writeln("Here are kinds of transportation I use: ", myTransport, "</br>");
  
  document.writeln("Here are the details of my Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


