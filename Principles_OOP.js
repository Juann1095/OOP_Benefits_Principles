/* The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. 
The thing to remember about Objects is that they exist in a hierarchal structure.
Meaning that the original base or super class for everything is the Object Class, all objects derive from this class. This allows us
to utilize the Object.create() method to create or instansiate objects of our classes.
*/

class Animal { /*...class code here..*/}
var myDog = Object.create(Animal)
console.log (Animal)

/* A more common method of creating objects from classes is to use the --new-- keyword. When using a default or empty 
constructor method, JavaScript implicitly calls the Object superclass to create the instance.
*/
class Animal {/*..class code here... */}
var myDog = new Animal()
console.log(Animal)
