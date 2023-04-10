// -----OOP Principles: Inheritance----- 
/* Iheritance is one of the foundations of object-oriented programming.
In essence, it´s a very simple concept. It works like this:
1.- There is a base class of a "thing".
2.- There is one or more sub-classes of "things" that inherit the properties of the base class(sometimes also refered to as the "super-class")
3.- There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.
Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting
from that sub-class.

To setup the inheritance relation between classes in JavaScript, I can use the --extends-- keyword, as in --Class B -- extends --A--
Here´s an example of an inheritance hierarchy in JavaScript:
*/
class Animal {/*... class code here */}
class Bird extends Animal {/*... class code here */}
class Eagle extends Bird {/*... class code here */}
