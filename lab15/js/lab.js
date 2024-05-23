// index.js - Lab 15 AJAX experiments !!
// Author: Brooke Taylor
// Date: May 22

// API source : https://yesno.wtf/api
// Credits to GPT for answering my very long barrage of AJAX questions, and assisting me through writing my code.

// Ensures the code inside the function will run only after the entire document is fully loaded (thanks gpt, I've learned something new!)
$(document).ready(function() {

  //Event listener on the button, awaits a click
  $("#fetchButton").click(function() {

      $.ajax({
          // URL we are requesting from, for the API
          url: "https://yesno.wtf/api",
          // The data to be sent (will be converted to a query string)
              // No additional data is needed for this API
          data: {},
          // Whether this is a POST or GET request
          type: "GET",
          // The type of data we expect back
          dataType: "json",

          // If API call is successful:
          success: function(data) {
              // Logs for debugging & Displays the data on the webpage 
              console.log(data);
              displayResponse(data);
          },

          // If API call fails:
          error: function(jqXHR, textStatus, errorThrown) {
              // Logs error details into console
              console.log("Error:", textStatus, errorThrown);
          }
      });
  });

// Properly Displays the response data from the API, called if API request is successful 
  function displayResponse(data) {

    // Selects the responseContainer div in the index.html
      const responseContainer = $("#responseContainer");
      //Embeds variables and expressions inside the string
        //h3 is formatted uniquely in the CSS, to make the yes / no answer bold on the webpage 
      responseContainer.html(`
          <h3>${data.answer}</h3>
          <img src="${data.image}" alt="${data.answer}">

      `);
  }
});