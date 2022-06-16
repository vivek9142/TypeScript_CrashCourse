//--demo for enum types

/*you add curly brace just like that.
No colon, no equal sign, just curly braces after the name, then a semicolon.And now in here 
you can assign your values like AdmIn.Read-Only and author and behind the scenes, 
ADMIN receives the number zero READONLY number one this AUTHOR,number two, and 
then here you can access roll dot admin like on an object.
You access your identifier and you can use that anywhere else in your code as well.
*/

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

/*
As a developer, we simply have these conveniently created numbers.If you hover over them, 
you see the number which was stored in there and you can use these numbers
here in a human readable way.

Now, for some reason, you're also not restricted to the default behavior, let's say for 
some reason you= don't want to start with zero as a starting number, 
then you can add a equals sign here after your identifier and enter any other number.
And now admin is assigned to the number five and the other identifiers after the identifier
where you assign a value pick up on that and simply increment this starting value.
To you, of course, all the can assign your own values to all these identifiers if you 
need your own numbers. You're also not restricted to numbers.
You can always go with text here or even mix it like I'm doing it here.

Anything goes there, but off the default of incrementing numbers that start at zero is what you want.
*/
// enum Role {
// ADMIN='ADMIN',
// READ_ONLY=100,
// AUTHOR='AUTHOR',
// }

// enum Role {
// ADMIN='ADMIN',
// READ_ONLY='READ_ONLY',
// AUTHOR='AUTHOR',
// }

const person = {
    name:'Vivek',
    age:24,
    hobbies:['Sports','Cooking'],
    role:Role.ADMIN
}

if(person.role === Role.ADMIN){
    console.log('is a Admin')
}

//--demo for Any types

/*
TypeScript will basically never yell at you when you use any back in our code here, 
if I would set the type of favorite activities to any would not get an error.
If I said it to any array, I at least tell typescript that favorite activities is an 
array of something. So if it would store just a single value in there, 
I would get an error.But as long as it is an array, I can store whatever I want in there.
So any is really flexible and does can sound great at first, but actually it's a big 
disadvantage and you absolutely want to avoid any whenever possible because any takes 
away basically all advantages TypeScript gives you, it gives you the same experience 
you have with vanilla JavaScript where you also have the any type on everything, 
so to say any.

Basically make sure that the typescript compiler can't check anything, because if any 
property or any variable can store any value, well, then there's not much to check.

So you can use any as a fallback if you have some value or some kind of data where you really can't
know which kind of data will be stored in there and where you then maybe are using some 
runtime check like we did here at runtime to narrow down what you want to do for certain 
values,then you could go with any.But in other cases, you really want to avoid any.

*/

let favouriteActivities:any[];
favouriteActivities = ["Sports"];