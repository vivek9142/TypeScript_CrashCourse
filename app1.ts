//--demo for number type

// function add (n1:number,n2:number){
    //JS typechecking (done in runtime whereas TS is done in dev time) 
    //  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1 , number2);
// console.log(result)

//--demo for boolean and string types

function add (n1:number,n2:number,showResult:boolean,phrase:string){
    const res = n1 + n2; 
    if(showResult)
    console.log(phrase + res);
    else return res;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1 , number2 , printResult , resultPhrase);
// console.log(result)

/*
colon thing after a variable or after a parameter and then number and boolean and 
string these special keywords. This is introduced by TypeScript.
The typescript compiler understands it.
The IDE supports typescript and therefore doesn't complain about these special keywords.
JavaScript does not understand the syntax.JavaScript doesn't understand this and therefore 
does is not part of the JavaScript output.
It's really just use but a types of compiler and then, well, it is a compiler 
because it converts this code to JavaScript code.

So we have our explicit type assignments here in funcs and it's only understood by 
TypeScript.Right.Why don't we have them down there.I don't have explicit type assignments 
here and by the way, also not here, when we calculate the result,
for example, because TypeScript has a built in feature, which is called type inference.
This means that typescript does its best and it does a pretty good job there to 
understand which type you have in a certain variable or a constant.
And here, for example, it understands that no one will always be of type no in the end 
because you initialize it with a number.Now, this actually is a constant.

*/
//we can assign var by this so later on we can't assign any other datatype to it or
//we can assign value to var during declaration. Ts dynamically add type to it 
//taking the type from value. so here we're adding type explicitly.

let number15:number;
// number15="5";


//--demo for object types
/*
This is the object type inferred by typescript.
And object types are written almost like objects.But of course, we don't have key value 
pairs there.But key type pairs, object types are there to describe, well, the type of 
object that is getting used somewhere. We could be more generic.
I could explicitly assign a type here to the constant of object object as one of the 
built in types just like number and string. And now if I hover over this,
we see persons of type object.
*/
// const person:object = {
//     name:'Vivek',
//     age:24
// }

//so basically defining the data of this object
// const person:{
//     name:string;
//     age:number;
// } = {
//     name:'Vivek',
//     age:24
// }

// console.log(person.nick)


//--demo for array types
// const person= {
//     name:'Vivek',
//     age:24,
//     hobbies:['Sports','Cooking']
// }

//we can define type of this
//we can't store the different datatypes in string array type e.g 6,false
// let favouriteActivities : string[];
// favouriteActivities = ['sports',1];//gives out the error
//but here in place of string place any we can use any array elements inside array.
// let favouriteActivities : any[];
// favouriteActivities = ['sports',1];

//for(const hobby of person.hobbies){
//    console.log(hobby.toLocaleLowerCase())
    //here if we try to use map func which is array func not string func it will show error
    // console.log(hobby.map()) //Property 'map' does not exist on type 'string'.
// }


//--demo for typle types
// This year tells TypeScript, I want to have a special array with exactly two elements, 
// because I have exactly two types in there, and the first element should be a number.

const person :{
    name:string;
    age:number;
    hobbies:string[];
    //this is a tuple
    role:[number,string];
}= {
    name:'Vivek',
    age:24,
    hobbies:['Sports','Cooking'],
    role:[2,'author']
}

//if we push 'admin' and number, 
/*
So why can we push admin onto the role array here? Push actually is an exception, 
which is allowed on tuples, so unfortunately, TypeScript can't catch
this error, but at least it ensures that we're not assigning a wrong value here.
And outside of push, we also get some support regarding the length.
If we set personal role to a new value, for example, an empty array is not allowed.One with 
exactly the structure we defined up there is allowed.If I added an extra element here, 
then we would again get an error so the length isn't forced if we assign it like this, 
but not for a pushing and so on.This is something you have to be aware of.
*/

person.role.push('admin');
// person.role[1] = 10;