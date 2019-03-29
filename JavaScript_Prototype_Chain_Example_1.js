/* JavaScript Prototype Chain. */
/* Since all objects inherit from the Object.prototype, pet1 and pet2 both can run the whoAmI method. */
/* In short, prototype is an immensely powerful tool you can use in your coding. */
/* Once you understand how prototype inherits, and the chain of objects it inherits from, you can */
/* start to create some really advanced and powerful object combinations. */
/* You can use prototype to create more robust objects. */

//Define Pet Object
  
function Pet(name, species){

    this.name = name;
    this.species = species;

}

function view(){

    return this.name + " is a " + this.species + "!";

}

Object.prototype.view = view;

function Dog(name){

    Pet.call(this, name, "dog");

}

Dog.prototype = new Pet();

Object.prototype.bark = function(){

    alert("Woof!");

}

//Testing the Output

var pet1 = new Pet('Tweety', 'Bird');
var pet2 = new Dog('Simba');

alert(pet2.view()); // Outputs "Gabriella is a Dog!"

pet2.bark(); // Outputs "Woof!"
pet1.bark(); // Error