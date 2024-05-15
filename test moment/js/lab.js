
// snatches user input and changes title, outputs on new line
function getName() {

  //prompts user for name
    var name= prompt("Please Input your Name:");

  //alters title text
    $('#title').html('Hello, '+name);
    
  //outputs a greeting on a new line
    $("#output").html('<div class="text"><p><b>' + "It's nice to meet you,  " + name + ' !' + '</b></p></div>');
   
}
