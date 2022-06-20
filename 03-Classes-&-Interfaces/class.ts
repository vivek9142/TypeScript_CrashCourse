class Department {
    name: string;

    constructor(n: string){
        this.name = n;
    }

    /*
    Instead, this is interpreted by TypeScript to be a hint regarding what this should 
    be referred to. And now it's important to assign a type to this and to type here 
    in this case should be our class type here.
    So department what I'm saying with this is when DESCRIBE is executed, this inside 
    of describe.So in this case here should always refer to an instance that's based 
    on the department class.So an object which in the end would be of type department 
    and therefore now we actually get an error down there.
    */
    describe(this:Department){
        console.log('Department: '+this.name);
    }
}

const accounting = new Department('Accounting');

console.log(accounting);

accounting.describe();

/*
We get an error here, because what we got here is that when we call described here 
on accounting copy, we're not calling it on an instance of department.
So data for THIS will be violated.This in this case will not refer to an object of 
type department. So here we add some extra type safety by adding this dummy parameter, 
because now if I try to save this, I do get an error related to this line here, because 
now indeed we would execute some code that would not work as expected.

So we have to fix this, for example, by adding a name property here.
For that to work, because now TypeScript sees the object on which you're calling describe 
now has a name property just like this expects it to have because this is based on a 
department object, which also has a name property.
*/
// const accountingCopy = {describe: accounting.describe}

const accountingCopy = {name:'dummy',describe: accounting.describe}

accountingCopy.describe(); //will give error


/*
es6 js version using ts
"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
//# sourceMappingURL=class.js.map
*/