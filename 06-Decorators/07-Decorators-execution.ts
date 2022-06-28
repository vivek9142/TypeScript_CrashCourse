
function Log(target: any , propertyName: string | Symbol){
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(target:any, name:string , descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

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

class Product3 {
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

/*
let's understand the order in which decorators run though.And here it's important 
to understand that first of all, they're all running without us instantiating 
this product.Or in other words, if I create a product here with new product 
book for $19 and I create another product here book two for $29, this compiles 
without errors, but my decorator code here doesn't run more often.
So it's not the instantiation of this class that matters all these decorators, 
no matter if it was a property decorator, method decorator and successor 
decorator or a parameter decorator, they all executed.
*/
const p1 = new Product2('Book', 19);
const p2 = new Product2('Book 2',29);
/*
When you defined this class and that's important to understand.These are not 
decorators that run at runtime. When you call a method or when you work 
with a property, this is not what they do.Instead, these decorators allow you 
to do additional behind the scenes setup work when a class is defined
back to that meta programming concept I explained earlier.

Right, that's the idea behind Decorators or that's their core use case.
They're not event listeners.You add to something so that when you work with 
a property,you can run some code, you can make something like that, work 
with decorators actually.But by tweaking and editing something behind the 
scenes, but the decorator itself really is just a function that executes 
when your class is defined, when your method therefore is registered and so
on.

And you can then use the decorator to do some behind the scenes work to 
then set up some code that should run whatever this is called, to add 
extra metadata or restore some data about a property somewhere
else in your project or in your library, which you're creating.
*/