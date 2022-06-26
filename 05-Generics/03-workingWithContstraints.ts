// function merge<T,U>(objA: T , objB: U){
//     return Object.assign(objA,objB);
// }
/*
Now, in this case here, however, we would have a problem if I pass in, let's say just a 
number 30 here in 2nd param in calling merged functon. Of course, TypeScript now found an 
error because it tried to access t h, but accessing the name would work nonetheless.

If we save that, it compiles without errors. And if I print the overall merge object 
we see what I get back is just Hobbes a name in my object. Which makes sense because 
30 is a number and when we pass that as a second argument to object assign,which we in the 
end are doing here, well then this just fails silently.JavaScript doesn't throw an error, 
it doesn't complain, but of course it also doesn't merge. Throw into the newly created 
object.

*/
// const mergedObj1= merge({name:'Max',hobbies:['Sports']},30);
// mergedObj.name; // no error

/*
We don't care about the exact structure of the object you're providing here for you and t.
But what we do care about is that both parameters, both types T and you should be any kind of object,
but they should be an object at all times.
And currently we're not saying that currently we're just saying they should be of any type.
You want to restrict the types of T and you here so of your generic types.And you can do 
that with type constraints.
*/

/*
For generic types, you can set certain constraints regarding the types your generic 
types can be based on.And you do this with the extents keyword here in the angle brackets 
after the type which you want to constrain.So here we could say extends object.And with that 
I'm saying the type can be any object with any structure, but it has to be an object.
*/

function merge2<T extends object,U extends object>(objA: T , objB: U){
    return Object.assign(objA,objB);
}

// const mergedObj4= merge2({name:'Max',hobbies:['Sports']},30); //give error
// mergedObj4.name; // no error


const mergedObj5= merge2({name:'Max',hobbies:['Sports']},{gge:30}); //no-error
mergedObj5.name; 

/*
You could use your own type if you had it and also use union types here if you want to.
You're really flexible there. and you can set any constraints you want and of course 
you don't have to constrain all generic types.
*/