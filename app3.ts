//--Union Types

/*
Now let's say we actually named as combine and it should work with both numbers and strings 
because it turns out we can combine both numbers and strings with this plus operator.
The only difference is that in one scenario we get back a number as a result.
In the average scenario, we get a concatenated string, as we actually already saw earlier 
in this module.
But now I want to allow this behavior because you could have an application where you want 
to have a flexible combination function that does work with numbers and strings.

If we have some place in our application, be that a parameter of a function or a constant 
or a variable,where using somewhere where we accept two different kinds of values, well, 
then a union type can help us to tell typescript that we are fine with either a number or a 
string.

Now, I get an error here that the plant's operator cannot be applied to type string or
number and string

No, that's actually not entirely correct.This should work because we can use the plus 
operator with both numbers and with strings.
But TypeScript only sees that we have a union type here and it doesn't analyze 
what's in the union type.It just says, OK, you're expecting multiple types.
Now, thankfully, we can work around that issue, though.
We can add our runtime type check here and see if input one of the type of that.
Is equal to No.And if the type of input, too, is equal to No.And then move this calculation 
in there.
*/

// function combine (input1:number | string,input2:number | string){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number')
//         result = input1 + input2;
//     else result = input1.toString() + input2.toString() 
//     return result;
// }

// const combinedAges = combine(30,26);
// console.log(combinedAges);

// const combinedNames = combine('Max','Anna');
// console.log(combinedNames);

/*This extra runtime type check will not always be required when you work with union types, 
but often will be because with union types you can be more flexible in, for example, the 
parameters you accept.
But then you might have different logic in your function based on which exact type you are 
getting so that your function is able to work with multiple types of values.
*/


//--Literal Types

/*
literal types are types where you don't just say that a certain variable or parameters 
should hold, let's say, a number or a string, but where you are very clear about the 
exact value it should hold

Let's say here in our combine function, we expect numbers are strings and we combine them 
differently based on what we get.But we also want to allow the caller of the function to 
define how the result should be returned so that we can basically force a conversion from 
number two string or the other way around.
We could do this with a third parameter and we could name that, let's say,result conversion 
And I want to describe this with a string.

1. soln - we can check the result with type retrun so to say, is performed based on the type 
we feed in which here is a string.So we concatenate it and then we just convert to result.

2. soln - The alternative logic would be to check the tie type here and do a different 
operation based on the return type we're specifying here.

I'm passing in as no and as text.And the downside of this is that right now we as a developer 
have to memorize these values.We have to make sure that we don't mistype here.
Now, we could use a enum to improve that.But if we only have two values here as text or as 
no, then maybe all in such a literal type could be an option.

We could say this shouldn't be any string, it should be as no or as text.So we use a 
union type combined with literal types.Literal types are the the types which are based on 
your core type's string numbers and so on, but you then have a specific version of the type.
So here we allow specifically these two strings, not any string, just these two strings.

if we have a typo here, we get an error only if we use as number or as text.We're allowed 
to compile this.

*/
// function combine (input1:number | string,input2:number | string , resultConversion: string){
// function combine (
//         input1:number | string,
//         input2:number | string , 
//         resultConversion: 'as-number' | 'as-text'
//         ){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number' 
//     //2nd - soln 
//     || resultConversion=== 'as-number')
//         //to convert the nums and resolve this error we needto add + in vars so its in num 
//         result = +input1 + +input2;
//     else result = input1.toString() + input2.toString();
    
//     return result;
//     //1- soln
//     // if(resultConversion === 'as-number')
//     // return +result;
//     // else return result.toString();
// }

// const combinedAges = combine(30,26,'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30','26','as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max','Anna','as-text');
// console.log(combinedNames);


//-- Type Aliases/Custom Types

/*
Now, when working with union types like this and this, it can be cumbersome to always repeat 
the union type, you might want to create a new type which again, stores this union type, 
and you can do that with another cool typescript feature, the feature of type aliases 
you create, such as Alias.
*/

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text' ; 

function combine (
    input1:Combinable,
    input2:Combinable, 
    resultConversion: ConversionDescriptor
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' 
    || resultConversion=== 'as-number')
        result = +input1 + +input2;
    
    else result = input1.toString() + input2.toString();

    return result;
}

// you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// To:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}