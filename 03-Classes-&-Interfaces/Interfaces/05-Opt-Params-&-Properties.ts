/*
As I will show you for Dad, you add your property name, let's say output name here can be 
whatever you want, of course. And that should be a string.But I don't want to force every 
class based on name to have that.
It should be optional.

you can specify an optional property by adding a questionmark after the property name.
This tells TypeScript that this property might exist in classes that implement this 
interface, but it doesn't have to.

therefore we get no error here in person either.Though I don't have an output name property 
because it is optional.
*/

interface AddFn {
    (a:number,b:number): number;
} 

let add2: AddFn;

add2 = (n1:number, n2:number) => {
    return n1+n2;
}

interface Named1 {
    /*
    Now I'm saying this can be optional. So here it's not optional.And here when I set this 
    equal to end, I only want to do this if N is Truthy, if it is set.So only if it's not 
    an empty string, for example, otherwise name will not be set.
    
    And that is OK because I turned it to be an optional property both here in the interface 
    but also in my class.So now a year when we construct the new object, we could do this 
    without passing in a name.To allow that, we have to go to the constructor and provide 
    a default value here or also add a question mark here.
    */

    readonly name?:string;
    //optional ? sign
    outputName?:string;
}

interface Greetable1 extends Named1{
    greet(phrase:string):void;
}

class Person7 implements Greetable1{
    name?: string;
    age = 30;

    constructor(n?:string){
        /*
        I only want to do this if N is Truthy, if it is set.So only if it's not an empty 
        string, for example, otherwise name will not be set.To allow that, we have to go to 
        the constructor and provide a default value here or also add a question mark here.
        */
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string): void {
        if(this.name)
        console.log(phrase+ ' ' + this.name);
        else console.log('Hi');
    }
}

let user8: Greetable1;

user8 = new Person7();
user8.greet('Hi There - I am');

console.log(user8);

/*
And now, just to make it really clear, again, these three things are only loosely related.
You can have an optional property in an interface and then implement it as a non 
optional property in the class.

You then just have to make sure that your logic is such that this is always initialized.
Otherwise you get an error as you just saw, or you have an optional property in an interface.
And an optional property in your class, then you don't have to assign a value in all cases 
here in class inheriting the interface..

And in addition, in all the totally unrelated here, you can have optional parameters in 
functions and therefore also in methods, including the constructor method.
Optional parameters are defined either with the questionmark, where the default value, 
if not set,is therefore undefined, or simply by assigning a default value like this.
Then as you learn, this is also optional and the default value will be assumed if you don't 
pass in a more specific value.

So this gives you more flexibility in how you structure your classes.
*/