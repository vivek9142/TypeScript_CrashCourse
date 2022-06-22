/*
we do have debt describe method here in our department class and therefore we can call this
on any instance based on IT department and accounting department, because these classes 
are based on department and they have access to all the properties and methods of that 
department based class.
Now, as you learned, you can override methods, so, for example, here in accounting 
department,we could add our own describe method version where I want to do something 
different, where it may be one to say accounting.
*/

abstract class Deppt1 {
    static fiscal_year = 2020;

    protected employees: string[] = [];
    //making id protected so that we can access it in child classes.

    // constructor(private readonly id:string, public name: string){ 
    constructor(protected readonly id:string, public name: string){ 
    }

    static createEmployee(name:string){
        return {name:name};
    }

    // describe(this:Deppt1){
    //     console.log(`Department (${this.id}) : ${this.name}`);
    // }

    //add abstract here in func
    abstract describe(this:Deppt1) : void; //will give error
    /* 
    abs meth can only appear in abs class so declare class as abstract
    now force all classes based on that class to add and override this method.
    */

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITTDepartment1 extends Deppt1{
    constructor(id:string, public admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }

    //we need to implement abs methods in every class inherited from deptt1
    describe(){
        console.log('IT Department - ID: '+ this.id)
    }
}

class AccDepartment1 extends Deppt1{
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;

        throw new Error('No Report Found');
    }

    set mostRecentReport(value:string){
        if(!value)  throw new Error('Please pass valid value')
        
        this.addReports(value)
    }

    constructor(id:string,private reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    //override method
    describe() {
        //id will give error since its a private prop of Deptt1 
        //so we need to make it protected
        console.log('Accounting Department - ID: '+ this.id)
    }

    addEmployee(name:string){
        if(name === 'Max') return;
        this.employees.push(name); 
    }

    addReports(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

const employee2 = Deppt1.createEmployee('Max');
console.log(employee2,Deppt1.fiscal_year); //{name: 'Max'} 2020

const dp2 = new ITTDepartment1('d1',['Max']);

dp2.addEmployee('Max');
dp2.addEmployee('Manu');

dp2.describe();
dp2.printEmployeeInformation();

const ac2 =  new AccDepartment1('d2',[]);

ac2.mostRecentReport = 'Year end Report';

console.log(ac2.mostRecentReport);

ac2.addReports('Something went wrong...');

// ac2.printReports();

ac2.addEmployee('Max');
ac2.addEmployee('Manu');
// ac2.printEmployeeInformation()

//using the overrid method of AccDept1
ac2.describe();//Accounting Department - ID: d2

/*
Now, of course, we could also override the described method in the IT department, but 
sometimes you don't just want to offer the option of overriding a method because that 
always exists.You instead want to force the developers working with a certain class or 
extending a certain class to implement a certain method or to override a certain method.

When would you do that?
Well, whenever you want to ensure that a certain method is available in all classes 
based on some base class in this case department.But when you also know at the same 
time that the exact implementation will depend on the specific version.

So when you can't provide a general method but you want to enforce that, 
this method exists.But the inheriting classes will need to provide their 
own implementation because you can't provide a default implementation and the base class.

So in such a situation, you might want to have an empty method in your base class and 
now force all classes based on that class to add and override this method.
And you can do so by adding the abstract keyword here.
If you add abstract here, you see we get an error that this is only available in an 
abstract class.

So if you have one method or more with abstract in front of the method, you have to 
add abstract here in front of class as well.
*/

/* IMPORTANT
Abstract can therefore be very useful if you want to enforce that all classes based on 
some upper class share, some common method or property.You can also have abstract properties, 
but at the same time you want to make sure that you don't have to provide the concrete value,
the concrete implementation and the base class, but instead the inheriting class has to do 
that. 

Also important,abstract classes.So class is marked as abstract with this keyword can't be 
instantiated themselves.So you can't instantiate department now. It's basically just a class 
that's there to be inherited from so that the inheriting classes can be instantiated and 
the inheriting classes are forced to provide concrete implementations for, in this case to 
describe method following the structure you laid out here.
So with the this keyword referring to a department instance or instance somehow based on 
department, including inherited classes that might be in between, and that it doesn't return 
anything.
*/