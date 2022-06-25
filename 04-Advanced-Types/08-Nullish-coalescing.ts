/*
Now, imagine you have some data, some input where you don't know with certainty whether 
it's null or undefined or whether it's actually a valid piece of data.
*/

const userInput1 = null;
const userInput2 = '';

const storeData = userInput1 || 'DEFAULT'; // default if the userInput1 is null;
const storeData1 = userInput2 || 'DEFAULT'; //default since '' is taken as false.
const storeData12 = userInput2 ?? 'DEFAULT'; 
//"" since '' is taken as true in nullish coalescing.


/*The problem with this approach is if this is actually not null or undefined, 
but let's say an empty string, it is treated as a false value and day for that default 
fallback value will kick in.So if I can look stored data here, you will see that this 
prints default.Now, maybe that is what you want.
And in that case, this is a perfectly fine solution.

But if you want to keep that user input or whatever data you're working with, unless it 
really is null or undefined, then you need another approach, because here we would treat 
this as false and use the fallback.
But maybe you want to keep an empty input.Just null or undefined should be handled 
differently for that.
TypeScript also has an operator, the double questionmark operator.
This is called the Nullish coalescing operator.And it means if this is null or undefined and 
really just that, not an empty string, not zero really just now or undefined, then we'll use 
the fallback.
If it's not null or undefined will use that value.*/