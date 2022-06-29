/*
We saw how we can build quite amazing things with decorators, decorator factories and 
then also by utilising the return values of decorators, which in the example of the class 
decorator allows us to basically replace the class we added the decorator to with a class 
that is totally different, that builds up on the existing class, like in our case, and 
that therefore might add some functionalities.
Now you can return values in our decorators too, but not all of them. Or not in all of them, 
the return value is respected.

Now decorator is where you can return something are the decorators you add to methods and 
the decorators you add to assessors.So here on the setter log two and log three 
on the method, these two decorators lock two and lock three.
These also could return something and TypeScript would use it.The decorator is on 
properties and on parameters of course also can return something, but TypeScript
will ignore it.They're or are not used to be precise.So return values are not supported.
*/


function Log(target: any , propertyName: string | Symbol){
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(target:any, name:string , descriptor: PropertyDescriptor):PropertyDescriptor{
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);

    return {enumerable}
}
/*
    Now what can you return on Log three?So on method decorators and on log two.
    So on accessory decorators though you can return a brand new property descriptor 
    log two to end log three,which are the two decorators I'm talking about.Both get the 
    descriptor of the property of the method you could say they are attached to because an
    assessor is kind of like a method.
    
    Now the property descriptor is a JavaScript thing.As you know, if we have a look at 
    this page again and we reload it, we see that, for example, for our assessor decorator, 
    the property descriptor is this object here which has the configurable and
    enumerable and get and set properties.
    
    And for the method decorator, our descriptor is this object here which also has 
    configurable enumerable value and readable, and this is vanilla JavaScript.
    You have property descriptors in vanilla JavaScript as well.
    
    So if you can change this configuration and if you can delete this property and 
    if it's enumerable,which means if it shows up when you loop through your object, 
    for example, and they are for a method,
    for example, by default this is set to false, so that if you use a four in loop on an 
    object, this method is not printed as a property for an accessory.
    We also got configurable and enumerable, but we got get and set.And there you could of 
    course also, for example, return a new descriptor which assigns a brand new
    set method or which suddenly also adds a get functionality.
    
    So here in log two and log three, you can return a new descriptor object in the end 
    and make that clear to TypeScript that you will do so by returning or by 
    setting the return type to property descriptor.And there you can therefore also set 
    the set keyword to get keyword the configurable or the enumerable
    property and change how this assessor or method is configured.
*/

function Log3(target: any , name:string | Symbol ,descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor); 
}

function Log4(target: any, name: string | Symbol , position: number){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product5 {
    @Log
    title : string;
    private _price: number;

    @Log2
    set price(val:number){
        if(val > 0)
        this._price = val
        else throw new Error('Invalid price - should be positive!');
    }
    constructor(t:string, p: number){
        this.title = t;
        this._price = p;
    }

    
    @Log3
    getPriceWithText(@Log4 tax:number){
        return this._price * (1 + tax)
    }
}

