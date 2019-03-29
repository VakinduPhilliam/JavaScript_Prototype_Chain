/* JavaScript Prototype Method. */
/* Prototype allows a JavaScript Object to inherit new properties from another object or function. */

function Pet(name, species){

    this.name = name;

    this.species = species;
}

function view(){

    return this.name + " is a " + this.species + "!";

}

//Apply prototype

Pet.prototype.view = view;
var pet1 = new Pet('Gabriella', 'Dog');

//Display result

alert(pet1.view()); //Outputs "Gabriella is a Dog!"

//As can be seen, by using prototype when attached to the view method, 
//we have ensured that all Pet objects have access to the view method. 
