console.log("Script loaded successfully");

//Array containing a recipe in each object - everything has a 'name' and 'url' property
const recipes = [
  {
      name: "Spaghetti Carbonara",
      url: "https://example.com/spaghetti-carbonara"
  },
  {
      name: "Chicken Alfredo",
      url: "https://example.com/chicken-alfredo"
  },
  {
      name: "Beef Tacos",
      url: "https://example.com/beef-tacos"
  },
  {
      name: "Vegetable Stir Fry",
      url: "https://example.com/vegetable-stir-fry"
  },
  {
      name: "Pancakes",
      url: "https://example.com/pancakes"
  }
];

function generateRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  //recipes.length returns the number of recipes in the array
  //math.random() generates a decimal between 0 and 1
  //multiplying math.random() by recipes.length thus scales the number to the range of the actual array
  //math.floor() rounds down to the nearest whole number, to ensure it calls a valid object from the list
  const recipe = recipes[randomIndex];
  // selects a random recipe 

  const recipeNameElement = document.getElementById("recipe-name");
  const recipeLinkElement = document.getElementById("recipe-link");
  //these lines get references to the html elements, where the recipe name and link are displayed. the elements are identified by their ids: recipe name & link

  recipeNameElement.textContent = recipe.name;
  //updates <h2> text content to match the selected recipe's name
  recipeLinkElement.href = recipe.url;
  // sets the href attribute of <a> to the URL of the selected recipe 
  recipeLinkElement.style.display = "block"; 
  // ensures link is visible by setting its 'display' style property to 'block'
  recipeLinkElement.textContent = "View Recipe";
  // sets the text content of <a> to "View Recipe"
}

document.getElementById("generate-btn").addEventListener("click", generateRandomRecipe);
// Line gets the button element by its ID, and adds event listener to the button, which then listens for a click event. When the button is clicked, the random recipe function is called. 
