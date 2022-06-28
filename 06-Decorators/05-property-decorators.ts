
function Log(target: any , propertyName: string | Symbol){
    console.log('Property decorator');
    console.log(target, propertyName);
    /*
    o/p -
    Property decorator
    {constructor: ƒ, getPriceWithText: ƒ} 'title'
    */
}

/*
Now to all these things, we can add decorators and let's start with a good old friend, a log 
decorator here, I'll name it log to not clash with logger up there because this log 
decorator will not be added to a class and therefore it will get different arguments.
It will get arguments though.Now here I don't have a decorator factory.

Actually, I just have to decorate a function like this.
But still, which arguments this decorator function gets depends on where we use it.
For example, we can add a decorator to a property here.I can add log like this.
And if you add a decorator to a property, the decorator receives two arguments.The first 
argument is the target of the property.
And for an instance, property like this one, which we call on an instance, 
if you work with it,this will be the prototype of the object that was created.
If we had a static property here, Target would refer to the constructor function
The second argument we get is the property name.Simply that could be a string here.
Could, of course, also be a symbol.Now, when exactly does this logger execute, though?
Well, as you can tell, since I never instantiate any product, it executes basically when 
your class definition is registered by JavaScript.
*/
class Product {
    @Log
    title : string;
    private _price: number;

    set price(val:number){
        if(val > 0)
        this._price = val
        else throw new Error('Invalid price - should be positive!');
    }
    constructor(t:string){
        this.title = t;
    }

    getPriceWithText(tax:number){
        return this.price * (1 + tax)
    }
}