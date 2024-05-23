
// index.js - Lab 16 AJAX & JSON experiments !!
// Author: Brooke Taylor
// Date: May 23

// API source : https://xkcd.com/info.0.json
// Once again, big shoutout to the provided template on Canvas, as well as GPT for assisting in aspects of the code and answering many of my API questions (trust me, there were a LOT...)

// Using the core $.ajax() method...
$.ajax({
  // URL for our API request
  url: "https://xkcd.com/info.0.json",
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we are expecting back
  dataType: "json",

    // When the API request is successful:
      success: function(data) {
        // Storing the returned data in a new variable, "comicObj"
        let comicObj = data;
        // Creating a new section for the comic
        let comicSection = $('<section></section>');

        // Creating & appending the section title
        let title = $('<h1></h1>').text(comicObj.title);
        comicSection.append(title);

        // Creating & appending the image tag
        let comicImage = $('<img>')
        .attr('src', comicObj.img)
        .attr('alt', comicObj.alt)
        .attr('title', comicObj.alt);
        comicSection.append(comicImage);

        // Append the section to the results (specified by ID) on our document
        $('#results').append(comicSection);

        // Remove the loading message if needed
        $('#loading').remove();
      },


    // When the API request is NOT successful:
      error: function(jqXHR, textStatus, errorThrown) {
        // Logging the error to the console
          console.log("Uh oh, something went wrong. Heres the details of your error:", textStatus, errorThrown);

          // Appending an error to the results of our html document 
          $('#results').append('<p><h3>Oh no! There was an error loading the comic, please try again later.</h3></p>');

          // Remove the loading message
          $('#loading').remove();
        }
            });