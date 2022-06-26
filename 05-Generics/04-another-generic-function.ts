

/*
You already see types of complaints about the length here because it's not clear that 
element has length.So maybe we should make it clear that it does.We could do so by creating 
a new interface or a custom type with the type keyword here.
But here I'll go for an interface which I'll name lengthy, which in the end is just 
guaranteeing that we have an object with a length property which should yield a number 
in the end. And then here we can set a constraint and say that T extends a lengthy.

So we know whatever we get, we'll have a length property and an array or a string would 
have a length property.
*/
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T): [T,string] {
    /*
    If you have a generic function, then off your parameter will be of the type.Doesn't have 
    to be but off.That is how you work with generic functions, as you will see as you get 
    more and more experience with them.
    */
    let descriptionText = 'Got no value.';
    if(element.length === 1)
        descriptionText = 'Got 1 element.';
    else if(element.length > 1)
        descriptionText = 'Got '+ element.length + ' elements.';

    return [element,descriptionText]
}

console.log(countAndDescribe('Hi There!')); //['Hi There!', 'Got 9 elements.']
console.log(countAndDescribe(['Sports','Cooking'])); //[Array(2), 'Got 2 elements.']
console.log(countAndDescribe([])); //[Array(0), 'Got no value.']

/*
Got nine elements because we've got nine characters in there.We could all to call this with 
an array where we have sports and cooking and now you will see that we got got two elements 
as a description, text or orld with an empty array, of course, in which case if I say that 
we got no value, but we won't be able to call this, for example, with a number because
a number doesn't have a length property and therefore this does not work.

So here again, we got our generic function idea is similar to the function before.We want to 
be a bit unspecific about the type of data we get here. We don't really care if it's a 
string or if it's an array or anything else which has a length property.

I might not allow for it if I restrict this generic to be of type string and array or 
anything like that. So therefore I want to be more flexible and with generic types 
we can be that we don't care about the exact type here thanks to the constraint.
I only care about the fact that it has length property.
*/