/*
So we can return something on method decorators and that something should be a descriptor which allows

us to change the method or change the configuration of the method.

And this is something I want to do here now.For that, I will first of all go to the index HTML file and there let's add a button, click me 
I now want to make sure that when we click this button, we execute a method on an object.

And for that I will simply add a new class here.*/


/*
Now this here will be my decorator already. And in there we get a couple of arguments.
We get the target as you learn. And that is any it is ever the prototype of the 
object we're working with or it's the constructor function if we would be adding 
this to a static method, but here it will be the prototype because we will add it to an 
instance method.

Then we have the method name or the property name.But since we add it to a method we can 
call, this method name makes more sense if this is a string or a symbol. Or it could also 
be a number, of course.But here we know we will typically work with strings, so we can 
also just go with string here depending on where you plan on adding this decorator and 
how generic it should be.

And last but not least, we get the descriptor here which will be of type property 
descriptor as you learned. So now we get these free arguments which we all used on log three, 
which was our method decorator before.

Now in auto bind.And I want to make sure that we always set this keyword to the object 
this method belongs to in the end.


Now, how can we achieve this?
First of all, I have to get access to the method which should be called, and this will be 
possible with the help of our descriptor. Because if you reload the app and you have a 
look at such a method descriptor down there, you see we get the value property in the 
descriptor at that points at the function because the value of this property is a function.

In this case a method is just a property with a function as a value. So the value key 
holds the original function. Therefore here we can extract the original method if we 
want to call it like this by accessing descriptor value.

This will give us access to the well original method. Next, I will set up a new adjusted 
descriptor. This will, in the end be what we return later. Now, this will be an object 
and it will be off type property descriptor. Now, in this object here, we can add all the 
things we can add to a property descriptor.

For example, you can set this to configurable true set enumerable to false so that this 
does not show up in four in loops. And now add a getter here that's new. I add a getter here.
Which is a method or a property that holds a function which is the same. So that we can 
execute some extra logic when users try to access this property so that we don't just
directly execute the value of this property so the function, but that we can step in and 
do some extra work before we execute the function. That's the idea here.

So I don't add a value property to this descriptor here. I just have a getter.
And again, the getter basically is like having a value property with extra logic that runs 
before the value is returned.Now in here, I want to have my bound function where 
I can use the original method we extracted up here and we call bind and bind this.
Now the getter method will be triggered by the concrete object to which it belongs.

So this insert of the getter method will always refer to the object on which we define 
together.This will not be overwritten by an event listener because the getter is like an 
extra layer between our function that's being executed and the object to which it belongs 
and the event listener.So down for this and here we'll refer to the object on which we 
originally defined the method so we can safely bind this for the original method and 
ensure that now this inside of the original method will all refer to the exact same object.

Now I will return the bound function here and thereafter, outside of this 
adjusted descriptor, returned the adjusted descriptor. So that's our decorator function, 
returning a new descriptor object. And therefore this descriptor object will override 
the all descriptor.That is what TypeScript will do with it.TypeScript will then replace 
the old methods descriptor. So the old methods configuration with this new configuration 
here which added this extra getter layer. Now.

I'm not interested in target and method name here, of course. So to avoid errors, 
I will name this underscore and this year underscore to.Again, just to tell TypeScript 
that I'm not interested in these values, but I need to accept them.And now let's add 
auto bind to show message here. So here I will add et auto bind.
And make sure that you remove the point down there in the event listener and save this.
*/
// function Autobind(target:any , methodName: string , descriptor: PropertyDescriptor){
function Autobind(_:any , _2: string , descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable: true,
        enumerable:false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


class Printer {
    message = 'This works!';

    /*
    So here I will add et auto bind. And make sure that you remove the point down 
    there in the event listener and save this.
    */
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();

const button2 = document.querySelector('button')!;
button2.addEventListener('click',p.showMessage);    // o/p - undefined

/*
We get undefined here, though we don't get our message being shown. And the reason for 
that is that with an event listener, if we point at a function, it should be executed.
The this key word inside of that function will not have the same context or reference 
as it has if we call just p.show message. In this case, this would refer to the printer.No.

In the scenario here where we use an event listener, this will refer to the target of the 
event because add event listener in the end binds this in the function which is to be 
executed to the target of the event.

Now a common workaround here would be to use the bind method and bind show message to P or 
bind this in show message to P so that when this executes, this is not referring to what 
our event listener wants it to refer to, but instead this instead of show message, will 
refer to this p to this object here again.And therefore now if I reload here and 
I clear this again, now we see this works.
*/
// button2.addEventListener('click',p.showMessage.bind(p)); //o/p - This works!