//--------------------------------------------------//
//--Return type & Void
//--------------------------------------------------//


/*
Now, just as with variables, it's a good idea to let time do its job regarding type 
inference. And if you have no specific reason for explicitly setting the type, 
you should therefore not set the type and instead let TypeScript infer to type.
*/
// function add(n1:number, n2:number):number {
//     return n1+n2;
// }

// function add(n1:number, n2:number):string {
//     return n1+n2; //will get a err since return type is number not string
// }

//since this func doesn't return anything so we're specifying the return type as void
// function printResult(num:number):void{
//     console.log('Result: '+num);
// }

// printResult(add(5,12));

/*
undefined actually is a type in typescript.You can have undefined as a type and for example,
a brand new variable.Some value can receive undefined as a type, and you will not 
get an error.This variable will now just be forever undefined.
How useful that might be is a different question, but undefined is a valid type.
And typescript, nonetheless, here you see you are getting an error and we are getting 
an error because a function is not allowed to return undefined.
Technically, it, of course does.But TypeScript thinks about functions a bit differently.
You should use void here if a function returns nothing and not undefined because with 
wide you make clear that this function deliberately does not have a return statement.
If you would say undefined here, then TypeScript would expect that you have a return 
statement where you just don't return a value.That's the technical difference.

If you don't have a return statement undefined, which you will rarely needs to be honest, 
can be used if you return without returning an actual value.
You would not get an error and by default you would actually also use void in this 
scenario unless you really have a function that should produce undefined and you 
want to be clear about that.But again, that will rarely be the case.
*/

// shows error
// function printResult(num:number):undefined{
//     console.log('Result: '+num);
// }

//no error
// function printResult(num:number):undefined{
//     console.log('Result: '+num);
//     return
// }

let someValue: undefined; //valid 














//--------------------------------------------------//
//--Functions as Types
//--------------------------------------------------//
/*
Let's say we have a variable combine values and this variable by default has a type of any.
Now, as you learned, any is not that useful.What I want to do eventually is I want to set 
combined values equal to add.So want to store that at function.
A pointer at this add function in combined values so that in the end we can console combined 
values and execute combined values as a function to which I pass eight and eight.*/


function add(n1:number, n2:number):number {
    return n1+n2;
}

function printResult(num:number):void{
    console.log('Result: '+num);
}

// let combineValues;

// combineValues = add;
//combineValues = 5; //no error but it will throw runtime error.
// console.log(combineValues(8,8));

/*
The problem we have with this snippet here from a typescript perspective just is that 
combined values as any.So if I set combined values to a number here thereafter, of 
course we can compiled is unfortunately
because TypeScript has no chance of detecting that Dthis is unwanted or that this 
could cause a problem.But at runtime, we would get an error because obviously we 
try to execute combined values as a function
when it actually is a number.Now we want to avoid this.

And for that we need to be clear that combined values will hold a function.
Now, a first step into that direction is that we set the type here to function.
Function is a tie provided by TypeScript in the end.And this makes it clear 
that whatever we store in here has to be a function.
*/
let combineValues:Function;
// combineValues = 5; //this will generate error now in ts since it is defined as func type
combineValues = add;


console.log(combineValues(8,8));


/*
So that's good.But it's not perfect because now we say this should be a function, 
but it could also set combined values equal to print result, for example, here.
And of course, TypeScript would not complain because print result is a function, 
but of course, it's not a function that takes two arguments.
So, again, if I compile, this typescript will not complain, but if we reload, 
we see undefined here and result eight.
*/
combineValues = printResult;
console.log(combineValues(8,8));
/*TypeScript can't inform us about this 
because all we said to TypeScript is that.We want to store a function there and 
this is clearly the case.So it would be good if we could be more precise regarding 
how the function should look like that.

We want to store it and combined values, and that's where function types come into play.
Function types are types that describe a function regarding the parameters and the 
return value of that function of function type is created with this function 
notation, you know, from JavaScript or at least close to that notation.
*/

let combineValue : (a: number , b:number)=> number ;
combineValue = add; //no error 


console.log(combineValues(8,8));

// combineValue = printResult; //error in Ts
console.log(combineValues(8,8));
/*
we're saying to TypeScript is that combined values should accept any function that takes
two parameters were each parameter is a number and where the function overall then returns 
a number.And that's why TypeScript does not complain about us storying add in combined 
values, because ADD is a function that perfectly satisfies this type definition.

But it does complain about print result because print result, as it tells us here 
is a function of type one argument, which is a number.
Nothing is returned, whereas we actually expect to get a function with two arguments 
where each argument is a number and we all return a number.So we have a mismatch here.
*/