//--Return type & Void
/*
Now, just as with variables, it's a good idea to let time do its job regarding type 
inference. And if you have no specific reason for explicitly setting the type, 
you should therefore not set the type and instead let TypeScript infer to type.
*/
function add(n1:number, n2:number):number {
    return n1+n2;
}

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