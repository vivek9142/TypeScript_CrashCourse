/*
Now interfaces can also be used to define the structure of a function.So basically as a 
replacement for the function types you already learned about, just as a quick refresher,
we can to find a type of a function, for example, with a custom type, with the type keyword.
*/
//using Type syntax
// type AddFn = (a: number, b:number) => number;

/*
So in the end, like you would define a method as we're doing it here with Greet, with the 
exception that we're now not adding a method name.So we have an anonymous function, if you 
want to call it like this in the ad.
If an interface and typescript understands this special syntax of this anonymous function 
in your interface and understands that you want to use this interface as a function type 
and this is how your function should look like.
*/

//using interface syntax
interface AddFn {
    (a:number,b:number): number;
} 

let add1: AddFn;

add1 = (n1:number, n2:number) => {
    return n1+n2;
}

interface Named {
    readonly name:string;
}

interface Greetable extends Named{
    readonly name: string;
    greet(phrase:string):void;
}

class Person6 implements Greetable{
    name: string;
    age = 30;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase+ ' ' + this.name);
    }
}

let user6: Greetable;

user6 = new Person6('Max');
user6.greet('Hi There - I am');

console.log(user6);