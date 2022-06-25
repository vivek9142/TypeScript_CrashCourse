/*
I want to explore Function Overloads, a feature that allows us to define multiple functions,
signatures, so to say for one at the same function, which simply means we can have multiple 
possible ways of calling a function with different parameters, for example, to then do 
something inside of that function.And a good example where function overloads can help us, 
can be seen a little bit further above this add function we wrote earlier.
*/

type Combinable3 = string | number;
type Numeric3 = string | boolean;

type Universal3 = Combinable2 & Numeric2;

//function overloading witrh one param
function add(a:number, b?:number):number;

//function overloading with string types
function add(a:string,b:string):string;

//function overload
function add(a:number, b:number):number;

function add(a:Combinable3,b:Combinable3){
    if(typeof a === 'string' || typeof b === 'string')
     return a.toString() + b.toString();
    return a + b; 
}

const result = add(1,5);
// result.split(''); //will give err since result will give ot num. so it will not wrk on numbers 
const res = add('Max', 'Schwarz');
res.split(''); // will work on string so no error

/*
If I now get my result here by calling add and pass in one and five, you'll see results of 
type combinability.A consequence of this is that TypeScript does not know whether the result 
is a number or a string.Now, this might really matter if we are passing in strings, 
if I pass in Max  Schwartz here, then this works, but is still get back combinabile now 
as a consequence, I can't call string functions end result.
I can't call split, for example, to split on the whitespace.we can use typecasting here and 
tell TypeScript that what we get back is a string.Still, it's not optimal that we have to do 
that, I would argue, because we have to write more code here, even though we would expect,
But TypeScript isn't really analyzing our code good enough here.And that's where a function 
overload can help us function overload as written by simply writing function
right above your main function, so to say, with the same name.

So you repeat this line here, basically.However, without the curly braces, no opening and 
closing curly braces thereafter, and now here you want to use specific types, number and 
number, and then the find a return type for when this is the case, when you get at least 
one number there, we could say then the return type is number.

So now with that, we're saying to TypeScript, if we call this function and both arguments 
are a number,then this function returns a number.Now, this, of course, is not certain text 
that would work in JavaScript.It will be eliminated by typescript in the compilation process.

But TypeScript merges this function information and this function declaration here together 
and basically combines the knowledge of these two lines here and now.It knows, OK, we can 
call this function here ever with A and B of type combinability or with A and B of type 
number.By the way, you also can add more or less parameters here in your overloads.

You're really flexible there.We could also add function, add here and just expect one number 
and return a number.And this would all the work if we make B optional in our other overloads 
as well.
*/