interface Person1 {
    name: string;
    age: number;
    greet(phrase:string):void;
}

let user2: Person1;

user2 = {
    name: 'Max',
    age: 30,
    greet(phrase){
        console.log(phrase + ' ' + this.name)
    }
}

user2.greet('Hi There - I am');

/*
the question is, why do we need this? Wouldn't we have the exact same thing if we would 
add a custom type here and there?The difference is just that we have to add an equal sign.
And then we're saying the person type is an object, which looks like this.And indeed, if we 
saved added compilers without errors so we could replace our interface with such type and 
it works as before.
*/

type Person2 =  {
    name: string;
    age: number;
    greet(phrase:string):void;
}

let user3: Person2;

user3 = {
    name: 'Max',
    age: 30,
    greet(phrase){
        console.log(phrase + ' ' + this.name)
    }
}

user3.greet('Hi There - I am');

/*
So why do we have an interface then?
Well, an interface and a custom type are not exactly the same.Whilst often you can use them 
interchangeably and you can use the interface instead of a custom type or the other way around.
There also are some differences.

Well, one major difference is that interfaces can only be used to describe the structure 
of an object.You can use type for that as well, but instead of a custom type, you can 
also store other things like union types and so on.What we did early in the course, 
that sounds like type is therefore more flexible.But the other side of the coin is that 
interface is clearer.

When you define something as an interface, it's super clear that you want to define the 
structure of an object with that.And indeed, when it comes to defining object types, you 
more often see interfaces out there in the wild than you see custom types now and everything 
you can do with interfaces.

But you would also be able to do with custom types is you can implement an interface in a 
class.What do you mean by that?The reason why you often work with interfaces is that 
interface can be used as a contract a class can implement and a class then has to adhere to.
*/

interface Greetable {
    name: string;
    greet(phrase:string):void;
}
/*
We do this by adding the implements keyword after the class name and then the name of our 
interface readable and you can implement more than one interface.by simply separating 
them with a comma.

Now the implication of this is that we get an error here because our class incorrectly 
implements the interface. It does not have the name propertied does not have the greet method.

We're forced to implement this method correctly, to have to name property because we're implementing
this interface.And therefore, interfaces are often used to share functionality amongst 
different classes, not regarding their concrete implementation.

It's a bit like working with abstract class system for the difference being that an interface 
has no implementation details at all, whereas abstract classes can be a mixture of you have 
to overwrite this parts and I have a concrete implementation parts.
*/
class Person4 implements Greetable{
    name: string;
    age = 30;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase+ ' ' + this.name);
    }
}

let user4: Greetable;

user4 = new Person4('Max');
user4.greet('Hi There - I am');

console.log(user4);