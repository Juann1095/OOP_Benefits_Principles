//-----OOP Principles: Polymorphism-----
/* Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes"
so, to understand what polymorphism is about, let´s consider some real-life objects.

-A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get
someone to show up at the door.
-Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object.
This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:
*/
const bicycle = {
    bell:function(){
        return "Ring, ring! Watch out, please!"
    }
}
const door= {
    bell: function(){
        return "Ring, ring! Come here, please!"
    }
}

//So, i can access the --bell()-- method on the bicycle object, using the following syntax:
bicycle.bell(); // Get away, please

//I can also access the --bell()-- method on the --door-- object, using this syntax:
door.bell();

/* At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for
Now, to make this code truly polymorphic, i will add another function declaration:
*/
function ringTheBell(thing) {
    console.log(thing.bell())
}

/* Now I have declared a --ringTheBell()-- function. It accepts a --thing-- parameter - which i expect to be an object, namely, either the --bicycle--
object or the --door-- object.

So now, if i call the ringTheBell() function and pass it the bicycle as its single argument, here´s the output:
*/
ringTheBell(bicycle); // Ring, ring! Watch out, please!

//However if i invoke the ringTheBell() function and pass it to the --door-- object, i´ll get the following output:
ringTheBell(door); // "Ring, ring! Come here, please"

/* You´ve now seen an example of the exact same function producing different results, --based on the context-- in which it is used.
Here´s another example, the concatenation operator, used by calling the built-in --concat()-- method.

If i use the --concat()-- method on two strings, it behaves exactly the same as if i used the -- + -- operator.
*/
"abc".concat("def");

//I can also use the --concat()-- method on two arrays. Here´s the result:
["abc"].concat(["def"]); //['abc', 'def']

//Consider using the -- + -- operator on two arrays with one member each:
["abc"] + ["def"]; //["abcdef"]

/* This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it.
To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, 
which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, 
in some other parts of the OOP structure.

Here´s an example of polymorphism using classes in JavaScript:
*/
class Bird{
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); //"Flying! Barely flapping!"
kingPenguin.useWings(); //"Diving!"

/* The Penguin and Eagle sub-classes both inherit from the Bird super-class. The Eagle sub-class inherits the useWings() method from the Bird class, 
but extends it with an additional console log. The Penguin sub-class doesn't inherit the useWings() class - instead, it has its own implementation, 
although the Penguin class itself does extend the Bird class.  

*/