/*eslint-env browser*/


// The Recipe Card - Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:



// First Attempt
                         
/*                         
var recipe = {
    'title': 'Guacamole',
    'servings': 4,
    'ingredients': ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]
};

window.console.log(recipe.title);
window.console.log('Servings: ' + recipe.servings);
window.console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    window.console.log(recipe.ingredients[i]);
}                         
                         
*/

/*
  function Recipe(title, servings, ingredients) {
    "use strict";
    var i;
    this.title = title;
    this.servings = servings;
    this.ingredients = [];
    for (i = 0; i < ingredients.length; i += 1) {
        this.ingredients.push(ingredients[i]);
    }
    Recipe.prototype.print = function () {
        var output;
        output  = this.title + "\n";
        output += "Serves: " + this.servings + "\n";
        output += "Ingredients:\n";
        for (i = 0; i < this.ingredients.length; i += 1) {
            output += "- " + this.ingredients[i] + "\n";
        }
        window.console.log(output);
    };
}
var recipe, title, servings, ingredients;
title = "Guacamole";
servings = 4;
ingredients = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];
recipe = new Recipe(title, servings, ingredients);
recipe.print();
       
*/       