/*
In order to do more advanced things with decorator's, you have to know that some decorator's, 
for example, class decorator's, but all the method decorator's, for example, actually are 
also capable of returning something.Now, I'm not returning anything in any decorator.

I'm not talking about the decorator function which gets returned and the decorator factory.
I really mean a return value inside of the decorator function.And we don't have any such 
value anywhere.
*/

function Logger(logString: string){
    return function(constructor:Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template :string, hookId: string){

    //we can also display name var of class here
    return function<T extends {new(...args:any[]):{name:string}}>(originalConstructor: T){
        // console.log('rendering template');
        // const hookEl = document.getElementById(hookId);
        // const p  = new originalConstructor();
        // if(hookEl){
        //     hookEl.innerHTML = template;
        //     hookEl.querySelector('h1')!.textContent = p.name;
        // }

        /*
        you can return a new constructor function, which will replace the old one.
        So which will replace the class to which you added the decorator, you could say so.
        Here we can return a new function, a new constructor function, or simply return a 
        new class in the end, because a class, the class keyword allows us to use this 
        syntactic sugar to create such a constructor function.And the class I create here 
        doesn't need to have a name.But we can and we should extend the constructor we're 
        getting here.which is based on the original constructor function so that I keep 
        all the properties of my original class, of my original constructor function.
        We don't necessarily have to do that, but I don't want to lose my properties here


        I can add a new constructor function in there and to avoid confusion, I'll rename 
        the constructor I'm getting here.So the class on which I added this decorator all 
        named this here original constructor.And.Copy that all over here and now instead 
        of this constructor function here, I have to call super to call this original 
        constructor function from inside of it, because if you add a constructor function
        in a class that extends another class, which is in the end what we're doing here, 
        then you have to call super.

        And now in here you can run any logic you want. And for example, here we could 
        move this template rendering logic here. Out of our decorator function into 
        this new constructor function, we're returning here.


        And therefore now the template should actually only be rendered to DOM.
        If I really instantiate my object here and not all the time when to set decorator 
        function is executed, which, as you learned, happens as soon as we define the class.
        */

        return class extends originalConstructor{
            /*
            Now, I get an error here when I tried to compile this, because I'm not using our 
            here, we can change this to an underscore to tell typescript that we know we 
            don't use it and that we want to ignore this.This is a valid parameter name.
            */
            // constructor(...args:any[]){
                constructor(..._:any[]){
                super();
                console.log('rendering template');
                const hookEl = document.getElementById(hookId);
                const p  = new originalConstructor();
                if(hookEl){
                    hookEl.innerHTML = template;
                    /*
                    I don't call my original constructor in here anymore.Instead, we can just 
                    access this dot name to get the name property value of the instance 
                    we are creating.
                    */
                    // hookEl.querySelector('h1')!.textContent = p.name;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

/*
Now, we got a little complaint down there regarding the types not being correct.To fix that, 
though, we can turn our decorator function into a generic function where we get a type
and set this as the type of original constructor.And now make clear that this will 
actually be basically a constructor function, and we can make that clear by assigning a 
special type, an object type where we set a new property.

This is a reserved name, of course, but it tells TypeScript that in the end, this 
will be an object which can be nude.So that will be a constructor function, a 
function we can call with the new keyword to generate a new object.
And there's new function, this new method, which the object T is based on will have, 
will get any amount of arguments, some using rest parameters here to accept as 
many arguments as you want so that
we're really flexible regarding the arguments that can be passed to the 
constructor of the class we're trying to change.

And the new function will then in the end, return an object here.
Now, I should also just copy that definition of the rest parameter to my constructor 
here so that this constructor is also capable of accepting all the arguments we 
might be getting so we can basically instantiate a person with any arguments 
you want to pass and you're with any arguments we might also need here in
the original constructor function.

And with that, the only problem will face is that we don't know that such a 
name property exists and correctly so.We don't know to which class will 
add this with template decorator.So we don't know if there will be a 
name property on the class we add it to. But we can fix this by simply 
telling typescript that the object is based on.
So our original constructor function will not just produce any object, 
but actually will produce an
object with a name property which will be of type string.
And that is correct
*/

@Logger('Logging ...')
@WithTemplate('<h1>My Person Object</h1>','app')
class Person10 {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}
/*
The interesting thing, justice, if we now remove that code where we instantiate person, 
if I comment this out, so did I just to find a person class.But I never instantiated anywhere.

You see, as it reloads.We don't see Max on the screen.All the decorators still execute, 
but we don't render anything to the screen anymore.
And the reason for that is that we now enhanced our decorator here even more by 
taking advantage of its feature where we can return a new value or in this case, 
a new constructor function.In the case of the class decorator.
This is a new constructor function or a new class, which, as I explained, is just 
syntactic sugar for the constructor function.

And this constructor function therefore replaces our original class, our original 
constructor function. Now, since I call super in here, we saved your original function, 
we saved your original class, so everything we initialize here basically still happens 
because I do that in my replacing constructor as well, and I extend the original class 
so we save everything that was in the original class.You don't have to do that, 
but I am doing it here because I don't want to lose that original data.

But behind the scenes, I replaced a class with my new custom class here and that 
allows us to add extra logic that should run when the class is instantiated.
And now all of a sudden we are able to add logic that does not run when the class 
is defined, but when the class is instantiated.
And this, Stampfer, should be a great first example of the full power you can 
unleash with decorator's if you really understand what you can do with them.
*/
// const pers5= new Person10();

// console.log(pers5);
