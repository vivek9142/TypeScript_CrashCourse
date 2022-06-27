/*
I want to conclude this very basic introduction to Decorator with another important thing .
you should know.
You can add more than one decorator to a class or anywhere else where you can use a 
decorator. Let's also add the longer decorator here, for example, like this.
If we save that, you see it compiles without errors.
*/

function Logger(logString: string){
    return function(constructor:Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template :string, hookId: string){

    //we can also display name var of class here
    return function(constructor: any){
        console.log('rendering template');
        const hookEl = document.getElementById(hookId);
        const p  = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

/*
And indeed, we see the log message here as well.This just leaves one important question.
In which order do these decorators execute?Well, for dad to find out, let's for log messages into both.
We do have a log message and a logger, obviously.
And now let's see in which order these functions are executing and in which order these 
lock statements are printed.And we see a rendering template runs first and then we get the 
logger output. Now, what this tells us, of course, is that they execute bottom up the 
bottom, most decorated first and they're often the decorators above it with template 
runs first.
*/
@Logger('Logging ...')
@WithTemplate('<h1>My Person Object</h1>','app')
class Person9 {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers3= new Person9();

console.log(pers2);

/*

*/


/*

*/