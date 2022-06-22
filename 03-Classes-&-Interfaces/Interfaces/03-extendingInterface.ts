/*
You can also implement inheritance and interfaces, let's say we have another interface named 
and this is the interface which actually makes sure that we have a name property.
So now here in person, we could implement writable and named to be forced to have both 
agreed method and a name that is something we could do.

Or if we know that gradable things, gradable objects always need to have a name, we could 
make sure that this readable interface actually extends the named interface so that together 
they form a new interface which forces every object based on readable to have a great 
method, but also to have a name.
And to do that we can add extends here on the interface as well.And we extend named now.
Therefore, as I said, this forms a new interface, which is in the end interface that forces 
us to have a great effort, but not just get it all to force us to have everything the named 
interface defines,in this case, a name property.

We could merge and naver interface if we had it simply separated with a comma.
Remember that for a class this this was not possible.When you use clauses and inheritance, 
you can only inherit from one class you can't inherit from multiple classes for interfaces.
*/
interface Named {
    readonly name:string;
}

interface Greetable extends Named{
    readonly name: string;
    greet(phrase:string):void;
}

class Person5 implements Greetable{
    name: string;
    age = 30;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase+ ' ' + this.name);
    }
}

let user5: Greetable;

user5 = new Person5('Max');
user5.greet('Hi There - I am');

console.log(user5);