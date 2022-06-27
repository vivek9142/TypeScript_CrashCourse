/*
Now, one common source of confusion I want to clarify here is the difference between 
generics and union types.
*/

class DataStorage1<T extends string | number | boolean > {
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

/*


*/

class DataStorage2 {
    /*
    Well, for example, our data storage here, if we're accepting generic types based on these 
    types, we could also rewrite that to just say, well, we want to store strings or numbers 
    or booleans in here.
    So we could store that or to be precise, wrap this in parentheses so that we say either 
    of these types as an array. 
    */
    private data: string[] | number[] | boolean[] = [];

    /*
    And then here, of course, we could also say, well, 
    what we get here when we add an item is either a string, a number or boolean, we remove 
    it.It's the same. Now what's the problem with this approach?On first side, it might look 
    like it achieves the same, but actually does something totally different. 
    What we're saying here is we're storing any kind of data in there as long as it's 
    either an array of strings, numbers or booleans.

    And we're also then adding any kind of data here either a string, a number or Boolean, 
    and the same for removing.
    And we already got some errors down there, of course, because I can't initialize this in 
    a generic way anymore, but other than that, it works.

    Now, the problem, however, is for one up here, we're not saying this is either an array 
    of strings or an arrays of numbers or an array of booleans.This says, well, we got an 
    array which can have strings, numbers and booleans mixed. So if we would want to say 
    either an array of strings or an array of numbers, we would have to say string array, 
    number array or boolean array.Well, we can do that, but now we get a problem here.
    Now we're adding a string, a number or a boolean.But depending on what, we actually 
    set this data array to be either a number array or a boolean array or a string array.

    We're not allowed to add a number or a boolean or a string. If we set this to be a 
    string array, well then we can't add a number here yet. Here I am fine with any parameter 
    as long as it is a number boolean or a string.

    */
    addItem(item:string | number | boolean){
        this.data.push(item);
    }

    removeItem(item:string | number | boolean){
        if(this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

/*
So the problem is here with union types, we accept any of these values every time this 
method gets called or this method. So we're not saying, hey, whenever we're working with 
this class, you have to decide for one type and then stick to it.
Instead, we're saying whenever you're calling this method, you're free to use any of 
these types. And that's exactly not what we want here.
*/

/*
If a reverts this to the previous setup where we use generic types. Then we got a different 
setup here. We say you got to choose once which kind of data you want to store and then 
you're only allowed to add that exact type of data.

So here, if I add a number, for example. I get an error because that's not a string and 
I chose that.I only want to manage strings here when I set the generic type.
And that's the difference between union types and generic types.

Union types can be great if you want to have a function which you can call with one of these 
types every time you call it.Generic types are great.
If you want to lock in a certain type, use the same type throughout the entire class 
instance you create use the same type throughout the entire function.
You want union types when you are flexible to have a different type with every method call, 
with every function call, then you can use union types, generic types lock in a type.
*/