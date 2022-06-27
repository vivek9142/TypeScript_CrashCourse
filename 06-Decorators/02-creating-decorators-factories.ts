/*
Besides creating a decorator like this, we can also define a decorator factory, which 
basically returns a decorator function but allows us to configure it when we assign it as a 
decorator to something to show this, let's convert this function here into a factory.

For that, I will grab this constructor argument and remove it. And instead and here I will 
return a new anonymous function which takes that constructor argument, which then holds 
this logic which I want to execute inside of the decorator.So I move that in there.
So now we have a function that returns a new function.So now when we want to apply this 
decorator, we have to execute it as a function here so that we execute this outer function 
and we attach the return value, which is this inner function, which is our valid
decorator function as a decorator to class.
*/

/*
Therefore, why would we do that?
Because now here, for example, we could accept a lock string here, which is a string.
Any argument of your choice and as many arguments as you want and pass a value for that in 
logging person and use that instead of our decorator function.
So that here, instead of showing that standard logging text, we show our log string.
So now we can customize the values the decorator function uses when it executes with our 
factory function.
We now call our decorator here because we're not executing the decorator function, 
but we're executing a function that will return such a decorator function.

And the advantage just is that we now can pass a values which will be used by that inner 
returned decorator function.So if I now save that we see the old output but with our custom 
log string here.So using decorator factories can give us more power and more 
possibilities of configuring what the decorator then does internally.
*/

function Logger(logString: string){
    return function(constructor:Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('LOGGING - PERSON')
class Person1 {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers1= new Person1();

console.log(pers1);

/*
O/P

LOGGING - PERSON
class Person1 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
}
Creating person object...
Person1 {name: 'Max'}
*/