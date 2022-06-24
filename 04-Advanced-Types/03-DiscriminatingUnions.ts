/*
a special type of type guard, you could say, or something that helps you with type guards 
is the discriminated union.It's a pattern which you can use when working with union types 
that makes implementing type guards easier.
It is available when you work with object types.
*/

// interface Bird {
//     flyingSpeed: number;
// }

// interface Horse {
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

/*
now, of course we could have just named it speed, but this is just a simplified example of a 
real use case you might face where you have some interfaces or objects in general that are 
kind of related but have different properties or methods.
So here it's the speed property, which actually is different. So I can't access flying speed 
here because of course, not all animals have a flying speed. Now we can do what we learned 
before we can check if flying speed is in animal here.

And if that is the case, we can execute this code.
Now, this is an approach we can take, but the more potential animals we get there, 
the more things we have to check.

Now, we can't use instance off here because I'm working with interfaces.
As I explained, animal instance of bird will not work because that is an interface which 
is not compiled to JavaScript.So at runtime, this will not be available as a constructor 
function.
*/
// function moveAnimal(animal: Animal){
//     if('flyingSpeed' in animal)
//     console.log('Moving with speed: ' + animal.flyingSpeed )
// }

/*Now we can build a discriminated union here by giving every interface so every object 
which should be part of the union and extra property.You can use any name you want of you 
use kind or a type.Here, I'll go for type A name.

This bird now important. We're creating an interface here.So this is actually not a value 
for the type property does.Instead is a literal type as you'll learn where type must 
hold a string, which must be bird.

So this is a type assignment where we narrowed down the value that may be stored in 
type two.Exactly.This string value.And they do the same for horse just with horse 
as a literal type.
Now here in our function, we can use a switch statement and switch on animal dot type.*/

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log('Moving with speed: ' + speed );
}

moveAnimal({type: 'bird', flyingSpeed:10})

/*
Now, this is a discriminated union because we have one common property in every object that 
makes up our union, which describes that object so that we can use this property, that 
describes this object in our check to have 100 percent type safety and understand 
which properties are available for such an object and which properties are not.

So this is a not very useful pattern, which you can use when working with objects and with 
union types.And it even works with interfaces because this interface forces every object 
you built based on this interface to have this type.
So instead of checking for the existence of a given property or instead of using instance 
of we use a property, we know that exists to check which type of object we're working with.
*/