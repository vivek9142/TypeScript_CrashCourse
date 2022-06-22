/*
Well, in its simplest version, an interface describes the structure of an object.
We can use it to describe how an object should look like.
It allows us to define the structure of an object.
We can use it as a type to type check for objects that must have this structure.
*/

interface Person {
    name: string;
    age: number;
    greet(phrase:string):void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase){
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('Hi There - I am');