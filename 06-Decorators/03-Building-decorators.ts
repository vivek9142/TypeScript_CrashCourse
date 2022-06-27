/*
We could create a new decorator factory with a template, for example.And er, I expect to get 
a template, which should be some string and hook ID, which should all to
be a string, and then here I return my anonymous function, which is the actual decorator, 
as you learned, because again, I have a decorator factory and in there I want to render 
some template which should be some HTML code into some place in the DOM where I find this ID.

So now we can go to it next to Mel and add such a place so that we can see that this works, 
can add a div here with an idea of maybe. And then in APTs, instead of Logger, I add with 
template.

Let's pass an empty string as a first argument for now and app as a second argument.So this 
idea I assigned to the div here.And now inside of that inner function.So our actual decorator 
inside of this decorator function, I want to reach out to the element, to the hook.
*/

function Logger(logString: string){
    return function(constructor:Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template :string, hookId: string){
    /*
    So with this underscore, I tell you that I'm aware of it, but that I won't use it because all 
    I want to do for now is I want to render this DECIR.So now when we add with template 
    here, here, we could add an H1 tech, my person object like this,
    */
    // return function(_: Function){
    //     const hookEl = document.getElementById(hookId);
    //     if(hookEl){
    //         hookEl.innerHTML = template;
    //     }
    // }

    //we can also display name var of class here
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const p  = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name; //max displayed in h1 dom
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>','app')
class Person8 {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers2= new Person8();

console.log(pers2);

/*
Consider Angular a very popular framework that uses TypeScript.They use decorators like this 
component decorator to allow you to pass in an object where you specify things like the 
template for this component and the selector and dom where this template should be rendered.
This is relatively close to what we define here, a template and then a place where it should 
be rendered.

Now, needless to say, the angular decorators are, of course, way more advanced and elaborate 
than our basic decorator here.
*/


/*
So that's one of the things you can do with decorators or specifically here with decorator 
factories, because that allows us to pass in that extra cornflake, which we need here.
And that's also what I meant with metaprogramming.We're creating things.

We're creating decorator functions, which you might say have some impact on the end user.In 
the end, we do render something on the screen here, but we do that with a tool which we 
expose to our developers because this decorator is such a tool which our developers have 
to use by adding it to a class and an example.
Otherwise this would do nothing.
So we provide extra utilities to developers, which Java developers can use to, for example, 
conveniently render something on the screen for a given class.
*/