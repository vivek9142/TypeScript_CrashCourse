/*
You can build generic classes and functions also show both.And here I'll start with a 
function. Now, let's say we want to have a function which basically merges two objects 
and returns a new object.
So here we could name it, merge, and we want to get object and object B as an input.
*/

// function merge(objA: object , objB: object){
//     return Object.assign(objA,objB);
// }

// console.log(merge({name:'Max'},{age:30})); //{name: 'Max', age: 30}

// const mergedObj= merge({name:'Max'},{age:30});
// mergedObj.name; //give error

/*
The problem we have with that is if we Try to store this merge.
I can't name,age on the result on this merged object, even though we know that both will 
exist because TypeScript doesn't know this typescript can't know this because we are just 
telling it, you getting an object and in the end type infers that we return an object, 
which is correct, but which doesn't carry all the information we could use here.

Now, of course, we can always do typecasting.We can tell, TypeScript, that what we get back 
is an object where we have a name Key, and but we have age key.*/

// const mergedObj= merge({name:'Max'},{age:30}) as {name:string,age:number};

/*
But that's really cumbersome if we have to do that.So here generics can help us.We turned 
it into a generic function by adding these angled brackets after the function name and then
we define two identifiers.
Typically you start with T for a type, but you could use any identifier here.Doesn't have to 
be a single character, but the conventions use a single character.And typically, if you only 
have one generic type you named as T, and then you say, well, this generic type here, this 
is now available in sort of this function.So we could say what we get here is of type T.

So I will accept a second generic type here simply by adding a comma and the angle brackets.
And then we just continued the alphabet.And therefore, the second generic parameter or type 
you might be using in a function typically is named U.

this function returns the intersection of T and you and we could, of course, also set this 
explicitly like this.But we don't even need to do that because object assigned returns an 
intersection. And therefore, since we returned, a result of object design types could 
automatically understands
that this function returns to intersection.What we're telling, TypeScript, is that these two 
parameters can and often will be of different types.And Dhafer code is able to understand 
that we're not just working with some random object type, but that we will get different type data here.
And this function overall will return the intersection of debt data and danford typescript 
is able to understand that what we store in here in merged object is such intersect 
that data of these two inputs,
*/

function merge<T,U>(objA: T , objB: U){
    return Object.assign(objA,objB);
}

const mergedObj= merge({name:'Max',hobbies:['Sports']},{age:30});
mergedObj.name; // no error

/*
Now, specifically, the magic here is not just that we tell TypeScript that we got two 
different types here, but that these types are not set in stone when we define this 
function.But they are set dynamically when we call the function.
So here we are calling the function and typescript infers the types for two arguments.
For T, it basically fills in an object type with an object with a name property which 
holds a string and always property which holds an array of strings.

And for a U fills in a type of type object with H property where H is of type no.Now 
when we call this function again in another line and we pass in different objects and 
a store does in a new constant with a new name, then of course different types are 
filled in for T and you for a this function call.
*/

// const mergedObj2= merge<string,number>({name:'Max',hobbies:['Sports']},{age:30});
//it gives err ""Argument of type '{ name: string; hobbies: string[]; }' is not 
//assignable to parameter of type 'string'.

/*
You can also specifically tell types of the which types that should fill in by adding angle 
brackets after the function name when you call it, and then you would fill in your own 
types for T and you we could tell typescript at T should be of type string for this function 
call and you should be of type.No, but then of course TypeScript would complain about the 
concrete values for passing in here because this clearly is not a string.
*/
const mergedObj2= merge<{name:string,hobbies:string[]},{age:number}>
                        ({name:'Max',hobbies:['Sports']},{age:30});
/*
But this is redundant.You can absolutely do that.
It is important to understand that this is the end, what generics are all about, 
that you can fill in different concrete types for different functions, calls.
But we don't need to do that here because typescript simply infers the types of the values 
we're passing as arguments here.
And then Place in the inferred types for T and U for this function call.
That's how generics work behind the scenes in the end.
*/

