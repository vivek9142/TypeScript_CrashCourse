/*
after all these features where we work with the type stem cells, so to say, where we worked
on checking Tibs costing to types, let's come back to features that help us write flexible 
code, of course, still related to types.
It is typescript, after all, but not so much focused on just two types and how we can 
manage them. And for that,

I want to start with index types, a feature that allows 
us to create objects which are more flexible regarding the properties they might hold.

Let's say you're writing an application where you're validating some user input so you have 
multiple input fields and depending on what the user interests are and which field it is, 
you might want to store and eventually show different error messages.
*/

interface ErrorContainer {
    /*
    this should contain all errors of inputs but right now we're quite not sure about this.
    But for one, I want this to be a flexible container.I want to be able to use it on any 
    form I have in my Web page.And I might have different forms with different inputs, 
    with different identifiers.
    
    So I don't want to restrict myself to just where email and username errors.And in 
    addition, even if we always had just email and user name inputs and we just want to 
    store arrows for those, what do we do with just to email is invalid and not 
    the username.Then of course in this object we could store null as a value for a username, 
    but I'd like to just omit it.
    So did we have an object which only holds properties for inputs where we have an error 
    so that we can also loop through this object with a for loop to read all the errors 
    we got.

    {
        email: 'Not a valid email',
        username: 'Must start with capitals
    }
    */
    // id: string;
    [prop: string]: string
}

/*
Remember, normally we would write a property name here, but now we use square brackets then.
Any name of your choice, for example, Key or Propp, then a colon and then the value type of 
the property and then an object, you can have string's numbers or symbols as a property.
You, for example, can't use bullion here. That's not allowed, but you can use string here.
With that and simply saying that whatever object I'm constructing based on this container 
interface later must have properties which are string's.

So with that, I'm saying I don't know the exact property name.I also don't know the property 
count.I just know that every property which is added to this object, which is based on the 
arrow container,must have a property name which can be interpreted as a string.
And the value for that property also must be a string.

Now, with that, we also still can add predefined properties, however, only if they're of the 
same type as this prop.So we could add an ID which is a type string and then any object we 
build that adheres to this interface must have an ID property and can add as many other 
properties as it wants.
But we can't set it to a number here, for example, because we have an index type here.
So that is a restriction we have if we build such an object.
*/

const errorBag:ErrorContainer = {
    email: 'Not a valid email',
    username:'Must start with a capital letter'
}