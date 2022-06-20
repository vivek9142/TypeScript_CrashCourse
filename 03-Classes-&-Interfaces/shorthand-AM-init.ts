/*
here we have a little bit of not really an issue, but a little bit of an inconvenience.
We have to name field here. Then we get a value for adhering to constructor and then 
we stored that value for that field here in the constructor, in the field.

it's certainly very clear what we're doing here. But in a lot of use cases, you'll have 
a lot of classes where all the properties you have, all the fields you have are 
initialized in the constructor.And therefore, often you might find yourself writing 
a couple of properties, a couple of fields like this at the top, no matter if they're 
private or public.And then you just repeat all of that down there in the constructor.
Just to then initialize these values here in the constructor function.

You don't have to do that instead of doing this double initialization code here, 
you can get rid of your field definitions up there.And now you see we would get an error, 
but you can always get rid of this here and instead now simply add the X's modifier in 
front of the parameter.So if it should be public at public, let's say for the name, 
we keep it public.Now, if it should be private, you have to add public because this now is 
an explicit instruction for typescript that tells TypeScript that you want to not just 
get these arguments here in the constructor, but that you want to create properties 
for this class with the exact same names. And therefore, here we should also rename N to name.

Property is created on the creative class.So this is simply a shortcut for 
double initialization code here where you had to find your fields and then stored the value.
*/

class NDepartment {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

    // constructor(n: string){
    //     this.name = n;
    // }

    //To make it clear that var shouldn't change, you can add read-only
    constructor(private readonly id:string, public name: string){
       
    }

    
    describe(this:NDepartment){
        // console.log('Department: '+this.name);
        console.log(`Department (${this.id}) : ${this.name}`);
    }

    addEmployee(employee:string){
        //It makes sure that if you try to write to this property after you fail 
        // this.id = 3; //shows err
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// const NDept = new NDepartment('Accounting');
const NDept = new NDepartment('d1','Accounting');

NDept.addEmployee('Max');
NDept.addEmployee('Manu');

NDept.describe();
NDept.printEmployeeInformation();
