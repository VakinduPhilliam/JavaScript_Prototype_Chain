/* JavaScript Prototype Chain. */
/* It is important to understand that prototype follows a chain. */
/* When we called pet2.view(), it first checked the Dog object (since that is the type of object pet2 is) */
/* to see if the Dog object has a view method. In this case it doesn’t, so it moves up a step. */
/* Dog inherits from Pet, so it next checks to see if the Pet object has a view method. */
/* It does, so that is what runs. */
/* The bottom most layer of inheritance is actually from the Object.prototype itself. */
/* Every object inherits from that. So, in theory we could do this: */

Object.prototype.whoAmI = function(){

    alert("I am an object!");

}

//Testing the output

pet1.whoAmI(); //Outputs 'I am an object!'
pet2.whoAmI(); //Outputs 'I am an object!'

// Since all objects inherit from the Object.prototype, pet1 and pet2 both can run the whoAmI method. 
// In short, prototype is an immensely powerful tool you can use in your coding. 
// Once you understand how prototype inherits, and the chain of objects it inherits from, you can 
// start to create some really advanced and powerful object combinations. 
// You can use prototype to create more robust objects.
