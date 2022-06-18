//---------------------------------------------//
// Function Types & Callbacks
//---------------------------------------------//

/*
Let's say we have a new function up there.Add and handle, let's say, there we expect to get.
Two numbers.And then I also want to get a callback function here, so a function which is 
passed in as an argument that should do something with the result, then here we could 
generate the result, of course, but now I'm not returning it.
But instead I want to call the callback function and pass in result.Now, for that, I want 
to be really clear that callback should be a function.So again, I'm using that function 
type definition that maybe does not return anything, but that does take a number as an 
argument because we're passing at a number here.So the callback function, 
the function we're passing into this function as a parameter should accept a number.

And now down there we could call, add and handle pass and 10 and 20 and then 
pass in a function, for example, an anonymous function here.
*/
function addAndHandle(n1:number,n2:number,cb:(num:number)=> void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20,(result)=> {
    console.log(result)
})

/*
we would expect a second argument here into callback, we'd get an error because
we know well the callback we expect in our ad and handle function only should have one argument.
*/

// addAndHandle(10,20,(result,b)=> { //will give error in Ts
//     console.log(result)
// })

/*
The only thing TypeScript does not pick up is if we return something here.
If a return result, then the callback does return something, even though 
we made it clear that it shouldn't return anything.This, however, is not a mistake or a 
bug in typescript.It actually happens on purpose by specifying void here on our 
callback type, we're essentially saying will ignore any result you might be returning here.
So we're basically saying in add and handle where we get that callback function 
will not do anything with a return type.

But, you know, because it's clearly defined here on the callback type that the callback will 
not do anything with the value you might return here. So did add and handle inside of the 
function will not do anything with that value.You might be returning.
And that's of course, a useful piece of information.

*/










//---------------------------------------------//
// The "unknown" Type
//---------------------------------------------//

/*Let's say we have a new variable user input, and this is of type unknown, 
it's not a type any which would be the default, but unknown, which is a different type 
introduced by typescript.
It might be unknown because we don't know yet what the user will eventually enter.
If it's a number.If it's a string, we don't know.
Now, the interesting thing about the unknown type is we can store any value in there 
without getting errors.So this is all allowed.
*/

// let userInput: unknown;

// userInput = 5;
// userInput = 'Max'; //this works

/*
But we'll run into issues if I have another variable, let's say user name, which should 
be a string and that's on initialized here.But then here I want to set username 
equal to user input.
Now you see we're getting an error.The type unknown is not assignable to type string.
So username once a string and of course unknown is not guaranteed to be a string here.
*/

// let userInput: unknown;
let userInput:any;
let userName:string;

userInput = 5;
userInput = 'Max'; //this works
userName = userInput;

/*I assigned one, but that's just a case in this line.User input technically could hold 
any value because it's unknown.Now, the interesting thing is if I switch unknown to any, 
this error goes away because any is the most flexible type and type script and 
it basically disables all type checking.
And TypeScript just says, I give up, do whatever you want, unknown's a bit more 
restrictive than any with unknown.

We have to, first of all, check the type that's currently stored in user input before 
we can assign it to, for example, a variable that wants a string.
So since a string is wanted here, we could check if type of user input is equal to 
string and TypeScript will detect this check and understand that in here.
What a store and user name, because it's inside of this if statement where I check 
for a user input being of type string user input is guaranteed to be a string 
and therefore I can safely assign to username.So I need such an extra type check 
here with unknown to be able to assign an unknown value to a value
with a fixed type and therefore unknown is the better choice over any.
*/
if(typeof userInput === 'string') userName = userInput;
/*
you have at least some type checking.Of course, if you have a chance of knowing 
in advance that user input is always a string or always a string or a number, well, 
then you should use string or a such a union type instead of unknown.
So unknowns still is a type you shouldn't use all the time, but it is better than 
any for the reasons described.
*/







//---------------------------------------------//
//  The "never" Type
//---------------------------------------------//

/*Now we saw a function that returned wide so that never returns anything, never is another 
type,Functions can return.
Let's say we have a function generate error.Here, I expect to get a message which is a 
string and maybe some error code, which might be a number now inside of this function, 
let's say we throw an error. So this should essentially be a utility function 
that generates error objects and throws them.
*/

function generateError(message:string,code:number){
    throw {
        message: message, 
        errorCode:code
    };
}

generateError('An Error Occured',500);

/*
Now, the interesting thing about this function is it does not just return void.I actually 
can specify that it returns wide because of course it returns nothing.But actually it 
does not just return nothing.
If we're honest, this function returns never.this function never produces a return value.
If I would try to restore the return value here and I console log result.And then.
Compile my code and this executes we see there is no undefined being locked here 
because since an erroris thrown, this essentially crashes our script.

And hence the return type of dysfunction actually is not just white, but also never.

Now, the interesting thing is, if you hover over it without assigning, never, you see 
the inferred type is void also because never is a newer type.It's been around for some 
time now, but it wasn't built into the first versions of TypeScript and therefore
why it is typically assumed and it's not horrible to leave it at that.
But you can be very clear and explicitly set never to return type to make it really 
clear that this never returns anything.

And no function that would never return, by the way, would be a function with an 
infinite loop.So if we have, while true in there, that creates an infinite loop 
and that therefore calls would be a function that never returns the error function 
here or the function that generates and fro is an error probably is the more common 
use case though.
*/