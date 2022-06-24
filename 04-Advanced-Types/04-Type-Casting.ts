/*
Typecasting helps you tell TypeScript that some value is of a specific type where 
TypeScript is not able to detect it on its own.But you as a developer, know that it will be 
the case.
A good example for this is if we get access to something in DOM, let's say here we have a 
paragraph and it's an empty paragraph.So, if we save that, we don't see anything here on the 
screen.Now, we can get access to that paragraph from inside our script here.


Now when we use queries Lechter and we pass in P as a selector, so it's selecting by the PAETEC, then

typescript is actually able to find out, as you can see, if I hover over it, that this will be of

type paragraph element or null because maybe such an element doesn't exist in the page, but that's

a different thing.

Let's ignore that or null case for now.

The important thing is to TypeScript actually finds out that this is a paragraph element.
*/

// const paragraph = document.querySelector('p'); //we get a HTMLParagraphElement | null
const msg = document.getElementById('message-output'); //we get HTMLElement | null

// const userInputElement = document.getElementById("user-input")!;
/*
Now we as a developer, we know that here we reach out to this input element.But as I said, 
TypeScript does know that TypeScript doesn't read our age HTML code, so TypeScript only 
knows that it's some HTML element.Now if would want to set the value property off this 
deal for and 
it would try to do user input element dot value equal.Hi there.

You see that.I actually get an error, I get an error because for one does 
object is possibly null.We can fix this by adding an exclamation mark after this.
But even then I still get an error.
That value does not exist on type HTML element because this generic type, 
which basically any HTML element has as a type, does not support properties that 
are specific to, well, specific HTML elements.So we would need to tell TypeScript 
that actually what we select here is not just not null, but that

it's also of type HTML input element and that's what we can do with typecasting.
Now there are two ways of typecasting cuz syntax we can use and they are equivalent.

One is that we add something in front of the thing we want to convert or where we want to 
tell typescript the type.We add angle brackets opening and closing and then between these 
brackets, the type of the thing after the angle brackets in this case H html input element.
And this type is globally available because of my Ts config file.I am including the Dom lip.

With that typescript knows that whatever we select here after the angle brackets will be of 
type HTML input element and therefore it doesn't complain anymore.
*/

// const userInputElement = <HTMLInputElement> document.getElementById("user-input")!;

/*
So this is version one.
you can use this now if you know, react, however, you know that there you also have such an 
angle brackets, syntax inside of JavaScript or typescript, if you use that for react files 
where you write JSX code in your react components.

So totally detached from TypeScript to not clash with that JS syntax, the typescript team 
providesan alternative to this angle bracket type casting.

You can also add something after the thing you want to type cast.So after deselection in 
this case and that thing is the AS word.And then here you again at the type to which you 
want to cast this.
So this now tell typescript that the expression in front of it in this case, 
this expression here will yield a value of type HTML input element and therefore again 
we get no error.

So this is an alternative and you can use either of the two syntaxes, whatever you prefer.
*/
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

// userInputElement.value = 'Hi There!';

/*
This exclamation mark allows us to tell TypeScript that the expression in front of it will 
never yield null.And does this required for some expressions like this here?
When we select something from the DOM that might return null, if we know as a developer 
that this will never return null, then we can use this exclamation mark 

otherwise if you're 
not sure that this will not return null, you can use if check so you could check
if user input element is Truthy and therefore it is not null and then use it in there.
Now I had to remove the typecasting in this case because if we do typecast here, we also 
tell TypeScript that this will not be null. And since I'm not certain about that, I can't 
cast here instead.

We simply have to wrap this expression into parentheses then to make sure that this is 
evaluated first and then we try to access value on the result of this expression and 
now we have that alternative to using the exclamation mark.
*/

const userInputElement = document.getElementById("user-input");
if(userInputElement)
(userInputElement as HTMLInputElement).value = 'Hi There!';