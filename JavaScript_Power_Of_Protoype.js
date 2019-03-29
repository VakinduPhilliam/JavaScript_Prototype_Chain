/* JavaScript Prototype Method. */
/* You can use the prototype method to create powerful JavaScript effects. */
/* For example, let’s say we want to have a Dog object. */
/* The Dog object should inherit each of the methods and properties utilized in the Pet object */
/* and we also want a special function that only our Dog objects have access to. */
/* Prototype makes this possible. */

function Pet(name, species){

    this.name = name;
    this.species = species;

}

function view(){

    return this.name + " is a " + this.species + "!";

}

Pet.prototype.view = view;

   function Dog(name){

    Pet.call(this, name, "dog");

 }

Dog.prototype = new Pet();
Dog.prototype.bark = function(){

  alert("Woof!");

}

//Testing the output

var pet1 = new Pet('Trudy', 'Bird');
var pet2 = new Dog('Gabriella');

alert(pet2.view()); // Outputs "Gabriella is a Dog!"
pet2.bark(); // Outputs "Woof!"
pet1.bark(); // Error


// As you can see, the Dog object has inherited the view method from the Pet object, and 
// it has a custom bark method that only Dog objects have access to. 
// Since pet1 is just a Pet, not a Dog, it doesn’t have a bark method and 
// when we try to call it we get an error.


