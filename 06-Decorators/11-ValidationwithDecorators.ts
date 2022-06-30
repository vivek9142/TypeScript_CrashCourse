/*
So now that we saw another nice example for how we can work with decorators, there is one 
last example which I want to dive into and that is decorators for validation.
For that at the bottom of the file, I will add yet another new class here.
*/


/*
To implement this, I will, first of all, create interface, validator, config, where I want 
to configure that storage, I have to work with my idea.There is to have a couple of 
properties.And hence I use this index type notation here.
Which are basically strings where the value is yet another object, because this year 
would be basically the class name for which you want to register some validated properties.

And then in the object, which we store, dear, we have two concrete properties of the 
class that have validators attached to them.So here we have the valid dateable property, 
if you want to call it like this, which will be a string key, and then the value for that 
should be an array of strings where basically we have something like.

Required positive ends on something like that could be added here as a list of validators.
*/

interface ValidatorConfig {
    [property:string]:{
        [validatorProp:string]:string[] //['required,'positive']
    }
}

/*
Now we can create our registered validators config here, which would be of type, validator, 
config, which initially is an empty object, because initially when the app starts, 
when our third party library gets loaded, no validators have been registered yet.
*/

const registeredValidators: ValidatorConfig = {};


/*
Now we can go to our registered validators. And there I want to add a new entry for Target 
constructor.The prototype of the instance we're working with will have a constructor key, 
which points at the constructor function that was used to create our object, 
and that therefore will basically be something like course here.

So the name of the constructor function in the end can be retrieved from the constructor 
because constructor is a function we can use to name property, which exists on any function 
in JavaScript to get the function name.
And this then will be the course name here, for example.So now we were just heard a 
class name as a key and registered validators and the value for that then
should be another object. So as that is equal to  another object here. And in that object, 
I also have a dynamically assigned property where I use my prop name. So the property for 
which I want to add a validator as a key.And now the value here is an array of strings and 
here I will add, required as a string.

Now, of course, this is a very naive validator. If we had our validators registered for this 
property already, I would now override it here. So it would be better to first retrieve 
any existing validators and then copy them into disarray and only add required to that 
existing array again, to save some time here.
*/
function Required(target:any,propName:string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.
            [propName] ?? []), 'required']
    }
}


/*
Let's now work on the positive number annotation, and of course, that's basically the same.
I copy that code, but I set this year to positive or whatever identifier you want to use.
And of course, we have to make sure we accept the right arguments.So with that alone, 
with this what we added thus far, we register these properties and they're validators
in our global config when this class is defined.
*/
function PositiveNumber(target:any,propName:string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.
            [propName] ?? []), 'positive']
    }
}

/*
Let's just need to work on the validate function. The validate function should go through all 
registered validators and then basically run different logic based on which validators it 
finds. So here, first of all, I want to retrieve the configuration for the concrete object 
we're dealing with.

For that, we need to find out which constructor function the object is based on and then get 
the validation config or the property validator mappings here, which we set up for that 
object. So you're all named as object validators or object validator, config maybe.
And we reach out to the registered validators here and access a property which should be an 
object constructor name. Same logic as before.
We access the constructor property, which exists on the prototype of the object, and 
therefore we can access it directly on the object.

So we look up any validator configuration we have for the class class.So now we're looking 
at this object. (line 61)
Basically, this is now stored in object validator config.Now, of course, we might not find 
this if we were trying to validate an object for which nothing was registered.So if we don't 
have any validated config, if we don't find anything there, I want to return. True, because 
then this certainly is valid, right?

There is nothing to validate.So the object certainly is valid.Otherwise, if we do find it, 
I want to loop through this inner object here with a four in loop. So with that I loop 
through my properties for which I registered validators with const prop in object
validator config.This gives me access to all the property names for which we then might 
have validators.So now of course I need to go through all the validators we might have 
for a property.

This all this should be an array, even if we only have one validator added so we can use a 
for all loop here now and get the concrete validator which we have for the object Veldheer 
config for does given property.So now we're getting things like positive or required which 
are stored in the validator Constanten. And then we could have a switch statement here, or, 
of course, call external functions based on which validator we find.But here I'll go with a 
built in switch statement, switch on validator, and then basically have different
cases.

this works when both i/p's are empty, when course price is empty that means it gives alert
but don't works when title is empty while price is entered
*/
function validate(obj:any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if(!objValidatorConfig){
        return true;
    }
    /*
    So we should enhance this by having is valid property here, which initially is true, is 
    very variable.I mean, and then here we set is valid.Equal to is valid and.
    This year and the same down there set equal.To this so that we don't return immediately, 
    instead we just update is valid and we break thereafter to not fall through, the result 
    of that is that in the end, after all, these loop's is valid, even still is true.

    But as soon as one of these checks here is false, thanks to our JavaScript works, 
    the overall is valid.Value will be false because true combined with false will return 
    false and then down there we should return is valid.
    So now we ensure that all properties are checked and not just a first one JavaScript has 
    a look at.This, however, will not be our only problem.We all have a problem here when 
    we have a look at how we register our validator logic, I always overwrite the registered 
    validators for a given class name with a new object.

    Instead, we should add any existing validators here so that we don't do that, 
    for example, with the spread operator like that, to take any existing key value pairs 
    for that class name on the registered validators.
    And add that first before we add our new one.
    */
    let isValid = true;
    for(const prop in objValidatorConfig){
        // console.log(prop) // only price is validated here
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    // return !!obj[prop];
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    // return obj[prop] > 0;
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
}


class Course {
    @Required
    title:string;
    @PositiveNumber
    price:number;

    constructor(t:string,p:number){
        this.title = t;
        this.price=p;
    }
}

/*
when we want to instantiate this course, we have to pass in a valid title and a valid price.
But one common scenario you might encounter in some applications is that you fetch data, 
let's say, from a web resource, and you get data where you guess you have a couple of 
courses, let's say, but you don't know for sure.

Or another possible scenario.You let users enter the data and you simply want to assign 
that data and create a new course with the user. Enter data and you assume it's right, 
but you are not guaranteed that it's right and therefore you want to validate the input.
That's the scenario I want to fake here. Let's say in our index HTML file.
We've got a simple form here 
*/

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    /*
    now I want to create a new course with that information.So here we have the created 
    course where it can call a new course and I pass in title and price.
    */

    const createdCourse = new Course(title,price);
    // console.log(createdCourse); // o/p - Course {title: 'aaaaa', price: 21}


    /*
    this seems to work now. Unfortunately, this also works though.
    If I don't enter anything, if I now click Save, we see this course as created.
    Now this technically is a valid course, but of course it's not really valid for our 
    application.We probably want to have a title which is not empty and a price which 
    is greater than zero.So we want to add validation.

    Now of course we can simply add a if check here and check if title trim length is 
    greater than zero,which means it is not empty and where we also validate the price.
    But that means that whenever we create a new course, we have to add the validation 
    logic here before we add it.

    Wouldn't it be nice if the validation logic would be included in the course class 
    with the help of decorators? Maybe. And that's exactly what I want to do here.
    */

    if(!validate(createdCourse)){
        alert('Invalid input, please try again!');
        return;
    }

    console.log(createdCourse);
})