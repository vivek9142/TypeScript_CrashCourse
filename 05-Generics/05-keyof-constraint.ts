/*
The idea of extractAndConvert function here is that we get an object as a first argument, 
and the second parameter is, in the end, a key.
*/
// function extractAndConvert(obj:object, key:string){
//     return obj[key];
// }
/*
I'm getting an error, though, because what we don't know here in the end is whatever the 
object we're getting here really will have that key.That's the end.
What TypeScript is telling us here with this strange error, for example, here, I could can's 
lock the result of calling this with, let's say, an empty object and then name.
*/

/*
But the main problem here is I could call it like this and it would pass in an object as a 
first parameter and then a string is a second.But correctly, TypeScript tells me that in the 
end, it's not guaranteed that this key exists in this object.
*/
// console.log(extractAndConvert({}, 'name'));

/*
Now, guarantee this, we can again use generic types here, we could say we got a type T and 
that will be our object here.We can say extends object. But we also got to type U. Our key 
here, let's say, which in the end has to be a key of our type, though, so of this object,
we want to guarantee that when we get here as a second parameter is a key, is a property 
of that first type.
And for that we can say extends key of T.

And now you see the error is gone here, and instead of got the error down there, because 
now I'm informing TypeScript here that the first parameter should be any kind of object 
and the second parameter should be any kind of key in that object.
And here, yes, we're passing in any kind of object, but we don't have a name in there.
This error will only go away as soon as I add a name. So this is also something we can use 
generic types for with this key off key word here also to tell
TypeScript that we want to ensure that we have this correct structure.
*/

function extractAndConvert<T extends object,U extends keyof T>
(obj:T, key:U)
{
    return obj[key];
}

console.log(extractAndConvert({name:'Max'}, 'name')); //err now gone since name key is added in object