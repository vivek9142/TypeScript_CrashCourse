
function Log(target: any , propertyName: string | Symbol){
    console.log('Property decorator');
    console.log(target, propertyName);
}

/*
Now, besides properties, you can also add decorator's to accessors, and there I will create 
a new decorator function because this will now receive three arguments.
*/
function Log2(target:any, name:string , descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    /*
    You see down there, we get the accessor decorator which executes here, we got our 
    prototype again,the same as above for the property, then we got the name of our 
    accessor price in this case, not underscore price.So not the property with which it 
    deals internally instead, really the name of the accessory itself.And we got a 
    property descriptor here where we see that a setter function is to find
    for example, a GETER function is not because for price.I only have a sweater, 
    no Geter, and we see that it's not enumerable, but that it is configurable
    so that we can change this definition here
    This all exists and this is how we can add a decorator to an accessory and what we 
    then can access inside of this decorator.
    
    o/p - 
    Accessor decorator
    Object
    price
    Object
    */
}

/*
Now, besides properties and accessories, we also got methods and we can add decorators to 
methods.So here, I'll add log three.
And add that to my method down there to get price with text and now the question, of course,
is which arguments does such a method decorator receive?
A method decorator, all the receives free arguments, the target again, which if it's an 
instance method, is the prototype of the object.
If it's a static method to constructor function justice before then.

the three arguments we get here and you see these are the same arguments as on our 
accessor.So indeed, we could also reuse this, but I will create a new one so that here 
I can print method decorator.
*/
function Log3(target: any , name:string | Symbol ,descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/*
The last decorator we can add is to a parameter. So let's do that now.
For that, I'll create one more function here. you could add one to every parameter you get.
Of course, you don't have to, but you can add them independently to any parameter you want 
to add a decorator to.
Now, what does a parameter decorator get as arguments?Well, it gets the target, same as 
before.The next argument we get is the name and not the name of the parameter, but the name 
of the method in which we use this parameter.So basically the same as in the method 
decorator thus far.But the last argument is different.
This is now not the property descriptor, but instead this is the position of this argument.
So the number of the argument here, for example, this would be the first argument.
*/
function Log4(target: any, name: string | Symbol , position: number){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);

    /*
    we see our parameter decorator up there, not the very lost output because execution 
    order is different, but we see our parameter decorator here and then here we got the 
    prototype as before we get the name of the method where we use this parameter and then 
    the index of that argument and that starts at zero.So the first argument has a number of 
    zero here, an index of zero, and that's our parameter decorator.

    o/p -
    Parameter decorator
    {constructor: ƒ, getPriceWithText: ƒ}
    getPriceWithText
    0
    */
}

class Product2 {
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

        /*
        here we get our prototype same object as before we get the name of the method here 
        and we get this descriptor of this method here.So the very same behavior as before, 
        basically just a descriptor is a little bit different since it's a method descriptor 
        and not an accessor descriptor if you got a value and a writable property here.
        
        Previously on The Accessor Descriptor.We had to get and set, but that's just a 
        JavaScript difference.Nothing typescript specific.

        o/p - 
        Method decorator
        {constructor: ƒ, getPriceWithText: ƒ}
        getPriceWithText
        {writable: true, enumerable: false, configurable: true, value: ƒ}
        */
    }
}