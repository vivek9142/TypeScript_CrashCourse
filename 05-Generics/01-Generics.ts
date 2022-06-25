/* PREDEFINED GENERICS
it's easiest to understand generics if we have a look at a default type which is built 
into TypeScript with which we actually worked a lot, which turns out to be a generic and 
that would be an array.
*/

// const names = ['Max', 'Manuel'];
/*
Now actually, we could think of this as two types being combined, just as you can have an 
object with different properties where in every property you might be storing a different 
type.
An array also is just a thing with different data in it, in this case with strings in it.
So we actually have the array type just in array. And if I would remove the names here 
in custom, you would see that TypeScript would infer it is to be an array of type any 
so with any data in there.

Indeed TypeScript knows the array type. So we could say this here should be an array.
But as you see, if I specify like this, we get an error, even though I can tell you that 
this array type written like this exists in TypeScript, but we see that it's a generic 
type and that it requires one type argument.

Now this strange notation here (Array<T>), whenever you see something like this in 
TypeScript,you're dealing with a generic type

Defination - A generic type is a type which is kind of connected with some other type and 
is really flexible regarding which exact type that our type is.
*/

// const names:Array = []; //generates err

/*
The array type really doesn't care, but it does care about getting at least some information, 
even if you are telling it. I don't know.
By setting this to type any array, it's better than not specifying anything.Now this is one 
way of defining an array type, the type of data which is stored in there and would be to use 
that array thing and then these angle brackets.
And now between these angle brackets, you specify the type of data which should go into the 
array,for example, a string.And of course here you could also use a union type to say this 
array is stores, strings or numbers,

So this is a generic type, a generic type built into TypeScript, a type which is connected 
to another type where we want to know which our type of data is.
*/

const names:Array<string> = []; // string[]

//promise generics
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//         resolve('this is done');
//     },2000);
// })

/*
it says Unknown because TypeScript is not fully able to understand that we actually will 
resolve to a string here.
But therefore we could say this is a promise which eventually will yield a string, and 
we do so by again using our generic type.The main type is promise, but a promise just 
like an array kind of works together with other types and array used other types because 
it's stored data in it data of certain types. And the promise works together with other 
types because eventually it kind of returns some data of some type.
*/

const promise:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve('this is done');
    },2000);
})

promise.then(data => {
    data.split(' ');
})

/*
We can tell TypeScript that this promise will eventually yield a string or in this case, 
a number. And then TypeScript can warn us here, if I try to save this, it will give us an 
error because it knows,So you're really flexible regarding what you do with that generic 
type information and array knows which data.
It stores a promise, knows which data it returns.
*/