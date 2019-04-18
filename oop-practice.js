/*eslint-env browser*/

// EXERCISE 01 - Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.


// Using Constructor Syntax - Creating two classes

 //Cat`s class using named declaration


/*

 function Cat() {
    "use strict";
 }
 
*/


// Dog`s anonymous declaration

/*

var Dog = function () {
    "use strict";
};

*/


// EXERCISE 02 - Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

// Using the Instantiation process

/*

var cat, dog;
cat = new Cat();
dog = new Dog();

*/

// EXERCISE 03 - Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 



/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}
var ani = new Animal();
window.console.log(ani.constructor);

*/

// EXERCISE 04 - Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.


/*
function Animal(name) {
    "use strict";
    this.name = name;
    this.display = function () {
        window.console.log(this.name);
    };
}
    var animal = new Animal("The Animal has been created");
    animal.display();

*/

// EXERCISE 05 - Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 

/*
function Car(make, model) {
    this.make = make;
    this.model = model;
    window.console.log(this.make + " " + this.model);
}
var myCar = new Car("Chevy", "Camaro");

*/

/*

function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log(this.type + " " + this.breed + " " + this.color + " " + this.height + " " + this.length);
}
var myAnimal = new Animal("ferocious", "pitbull", "gray", "60 inches tall", "45 inches long");                       
*/

// EXERCISE 06 - Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.


/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    
}
    
    var animal, i;
    animal = new Animal("ferocious", "Pitbull", "gray", 60, 45);
    for (i in animal) {
    if (animal.hasOwnProperty(i)) {
        window.console.log(i + " = " + animal[i]);
    }
}   


*/

// EXERCISE 07 - Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.


/*


function Cat() {
   "use strict";
}

var Dog = function () {
    "use strict";
};

function Animal(type, breed, color, height, length) {
    "use strict";   
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

Animal.prototype.speak = function () {
    "use strict";
    if (this.type instanceof Dog) {
        return "The " + this.color + " dog is barking!";
    } else if (this.type instanceof Cat) {
        return "The " + this.color + " cat is meowing!";
    }
};

var animal;

animal = new Animal(new Dog(), "Pitbull", "gray", 60, 45);
window.console.log(animal.speak());

animal = new Animal(new Cat(), "Persian", "white", 12, 15);
window.console.log(animal.speak());

*/


// EXERCISE 08 - Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”



/*

function Cat() {
    "use strict";
}

var Dog = function () {
    "use strict";
};

function Animal(type, breed, color, height, length) {
    "use strict";
   var _type, _breed, _color, _height, _length;
   _type = type;
    _breed = breed;
   _color = color;
   _height = height;
   _length = length;
  
   function checkType() {
       if (_type instanceof Dog) {
           return "dog";
        } else {
           return "cat";
       }
    }   
    Animal.prototype.speak = function () {
       return checkType();
   };
}

var animal;

animal = new Animal(new Dog(), "Pitbull", "gray", 60, 45);
window.console.log("The " + animal.speak() + " has made a noise!");

animal = new Animal(new Cat(), "Persian", "white", 12, 15);
window.console.log("The " + animal.speak() + " has made a noise!");

*/


// EXERCISE 09 - Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.


/*
String.prototype.findWords = function (word) {
   "use strict";
    var search, words, output;
    search = new RegExp(word, 'g', 'i');
    words = this.match(search);
    window.console.log(words);
   
    output = "text:\n" + this + "\n\n'" + word + "' was ";
    if (words === null) {
        output += "not found.";
    } else {
        output += "found " + words.length + " time";
        output += (words.length === 1) ? "." : "s.";
    }
    window.alert(output);
};

var text, word;
text = window.prompt("Enter a paragraph of text");
word = window.prompt("Enter a search word");
text.findWords(word);

*/


























