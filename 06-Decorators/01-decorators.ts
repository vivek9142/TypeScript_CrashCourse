/*
I want to start with a decorator.We can add to a class.Now, decorators in general are all 
about classes, but this is a decorator which we will add to the class as a whole.
*/

/*
Let's add a decorator and a decorator, and that's really important to understand.
Isn't the end just a function of function?You apply to something, for example, to a class 
in a certain way.

You don't have to use a capital starting character.You can use a lowercase one as well.
You just see a lot of decorators out there in libraries which you might use that use 
uppercase starting characters, and therefore I'll do the same here.

*/

function Logger(constructor: Function){
    /*
    let's add a consultation here, logging so that we can see when this function runs, 
    because I will not call it directly.
    */
    console.log('Logging ...');
    console.log(constructor)
}

/*
Instead, I want to add it as a decorator to disclose, and we do so by adding a at symbol here in front of the class and then our 
function here just like this.

The symbol here is a special identifier typescript sees or recognizes.And then the thing 
directly after the symbol should point at a function, not execute it, but point
at it, which should be your decorator.
Now, here you see that logger then accepts to few arguments to be used as a decorator here.
So the good thing is TypeScript understands that I want to use it as a decorator here.
The bad thing is we don't pass enough arguments and indeed decorators receive arguments.

How many arguments?Depends on where you use the decorator here.
For a decorator, we add to a class, we get one argument and that's the target of this 
decorator,so to say, which is our constructor function.
We could also name it constructor, because in the end, we will get our constructor function of this

class or whichever class we add the decorator to as an argument, lets all the console it so that we

can get some insight into this constructor argument here.
*/
@Logger
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
//before - 
//Creating person object...
//Person {name: 'Max'}

//after - 
// Logging ...
// class Person {
//     constructor() {
//         this.name = 'Max';
//         console.log('Creating person object...');
//     }
// }
// Creating person object...
// Person {name: 'Max'}

/*
Log here is printed first before we see creating personal object and our person object 
because indeed decorator's and that's really important.
Decorator's execute when your class is defined, not when it is Instantiated.

You don't need to instantiate your class at all.We could remove that code for instantiating 
the class and we would still get death decorator output.So the decorator runs when 
JavaScript finds your class definition, your constructor function definition,not when you 
use that constructor function to instantiate an object.
That's really important to understand.

So this is our first decorator.
It's not the only way of how we can create a decorator, though.
*/