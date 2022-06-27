/*
we're getting a bunch of errors now for one, because the name storage is a reserved name, 
so let's name it data storage. That's easy to get rid of.

Now, we also get an error here because we're not saying anything about the kind of data 
restoring and which type item has here.And that's exactly where we can turn this into a 
generic class, because you might not care about the type of data we want to make sure 
it's uniform data so it's ever just strings or just numbers or just objects.
But other than that, I don't care about that.So here we could turn this into a generic 
class by adding angle brackets after the class name and then again, t you whatever you 
want to use as an identifier and add this here as a generic type.
Here we can say this here is an array of type T, so it stores data off that generic 
type in it.Therefore here we add such data and we try to remove such data here and 
therefore here it get items correctly is inferred to return an array of generic 
types and now we can create different stretches.

We can have our string or our text storage here by calling new data storage.Setting that 
generic type two type string here and then here in text storage, I can call add item and
if I try to add a number, I get an error because I'm saying that this will be a data 
storage which only stores strings. So I can indeed store Max here and maybe all the 
store Mannu and then call text storage, remove item max and then console log text 
storage, get items.
*/
// class DataStorage<T> {
//     private data: T[] = [];

//     addItem(item:T){
//         this.data.push(item);
//     }

//     removeItem(item:T){
//         this.data.splice(this.data.indexOf(item),1);
//     }

//     getItems(){
//         return [...this.data];
//     }
// }


// const textStorage = new DataStorage<string>();
//textStorage.addItem(10); //gives error siunce it takes only string here in textStorage
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems());

/*
Now, why would we build such a generic class?
Well, just as I said, because maybe we don't just want to store text.I might also want to .
store some numbers in a different data storage. So then I could create such a data storage.
And setting this to no ensures that now we can only add numbers to that storage.

And of course, we could also set up a storage where we allow both by using a union type.
So we got full flexibility there, but we give typescript some extra information that makes 
this both a flexible and still strongly typed class, just as we added with functions really 
flexible and still perfect type support. That's the whole idea behind generic types.
*/

// const numberStorage = new DataStorage<number>();

/*
We'll have one problem about our data storage class, though, let's say here I have my object 
storage now I can create new data storage and say India, I want to store objects

add an item, let's say object where I have named Max and store another object where a store 
manu, then let's say we're doing some stuff in our code. And at a later point of time here, 
I want to remove the item, went to remove the item with name manu
*/

//const objStorage = new DataStorage<object>();
//objStorage.addItem({name:'Max'});
//objStorage.addItem({name:'Max'});
// ...
// objStorage.removeItem({name:'Manu'});
// console.log(objStorage.getItems()); // o/p - gives max obj - that's right.

//objStorage.removeItem({name:'Max'}); //now remove max 
//console.log(objStorage.getItems()); // o/p still is max.

/*
Now, the problem is that we're working with objects here, as you know, objects in 
JavaScript, our reference typesThe problem is the way our class is built with this logic 
on how data is removed and identified. We're not really doing a good job when we work with 
non primitive values.
So when we work with objects or arrays because index off if we pass in, an object here will 
not work because technically this is a new object.It might look like this one, but it doesn't 
work because this technically is a brand new object in memory and has a different address.
And indeed, here JavaScript will look for the address and basically not find it.
So what it then does is it removes the last element in the array here.
*/

/*
One workaround to at least fix that is to check if we find an item so we can check if 
this code here.If data is equal to minus one, which means we did not find it, then we can 
return and make sure we don't accidentally remove the wrong item.

But of course, now we just fixed that part, but we still don't have to in a state where 
it would work with objects. Well, the only way how it could work with objects is if we pass 
in the exact same object again.So here if I had my max object stored in a constant.
Like this and the in here, I pass and Max object and I do the same here, then I'm really 
using the same the exact same object, the exact same object in memory.

And therefore, now it would work. This would be the only way to make this work. So therefore, 
here, the better idea might be to make sure that this really only works with primitive values.
So we could say that T extends string, no, maybe all the booleans and so on.
*/

//workaround for not using this for non-primitive values.
class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        //workaround for not deleting the last element in non-primitive values
        if(this.data.indexOf(item) === -1) return;

        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

//not works  with objects now.

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Max'});
// objStorage.addItem({name:'Max'});
// // ...
// // objStorage.removeItem({name:'Manu'});
// // console.log(objStorage.getItems()); 

// objStorage.removeItem({name:'Max'});
// console.log(objStorage.getItems()); 

/*
you could have more than one generic type here as well, you're not limited to one type when 
you work with classes. And you can also have methods which have their own generic types 
inside of classes. So you could introduce new generic types in class methods if you have 
some generic type, which only is needed in a certain method and not in the entire class.
*/