/*
Static properties and methods allow you to add properties and methods to classes which are 
not accessed on an instance of the class.So where you don't need to call new class name 
first, but which you accessed directly on the class,

this is often used for utility functions that you want to group or map to a class logically 
or global constants which you always want to store in a class.

An example built into JavaScript, which is not defined by typescript and not defined by you, 
but part of JavaScript in the browser is the math constructor function or class, if you want 
to call it like this.That's globally available in JavaScript, where you can access PI as a 
constant value to give you that PI number or functions or methods to be precise, 
like Pow to calculate the power of something.

Math.PI
Math.pow(1,2)

These are methods and properties which you don't access. On the instance of Math, you don't 
have to call new math first. Indeed, that won't work, but you access these properties and 
methods directly on the class itself.So math acts more like a namespace as a grouping 
mechanism here.
*/

class Deppt {
    /*
     if you would want to add a static property, you could do that as well if you had 
     something like the fiscal year here.to make it available without instantiating this, 
     you could add static in front of this property
     So now down there for a console log, my created employee here, we can also access 
     department.fiscal year, just like that, without instantiating it,
    */
    static fiscal_year = 2020;

    protected employees: string[] = [];

    constructor(private readonly id:string, public name: string){ 
    }

    /*
    Let's say on department, we want to have the method that helps us create employees, 
    and that is something we might want to be able to access without instantiating 
    department, because we typically instantiate our more specialized versions, 
    I.T. department and accounting department, and we don't really want to instantiate 
    department just to call a utility method. And therefore, we can add a method here, 
    create employee, let's say, where we want to get the name,which is a string as an 
    argument.
    
    And there we want to return something now to make that a static method which we can 
    access without instantiating this class. We add the static keyword in front of this 
    method, and then in here we maybe return an object where we have the name property 
    mapped to this name value.
    */

    static createEmployee(name:string){
        return {name:name};
    }

    describe(this:Deppt){
        console.log(`Department (${this.id}) : ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITTDepartment extends Deppt{
    constructor(id:string, public admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

class AccDepartment extends Deppt{
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


//use static method here
const employee1 = Deppt.createEmployee('Max');
console.log(employee1,Deppt.fiscal_year); //{name: 'Max'} 2020

/*
So this would be a typical example for a static method. We call it directly on the class 
without the new keyword. And therefore we use the class as a grouping mechanism, 
you could say.
*/

const dp1 = new ITTDepartment('d1',['Max']);

dp.addEmployee('Max');
dp.addEmployee('Manu');

dp.describe();
dp.printEmployeeInformation();

const ac1 =  new AccDepartment('d2',[]);

ac1.mostRecentReport = 'Year end Report';

console.log(ac1.mostRecentReport);

ac1.addReports('Something went wrong...');

ac1.printReports();

ac1.addEmployee('Max');
ac1.addEmployee('Manu');
ac1.printEmployeeInformation()


/*
One important word about them or one thing you should keep in mind when you add them on a 
class, you can't access them from inside your non static parts.

So if you feel like accessing the fiscal year in the here into constructor and you want to 
consult Target here. This, as you can see, will not work.

I'm getting an error here that the property fiscal year is a static member.We can't exist is 
here because the constructor and basically anything in there, all the methods as well, which 
are not marked with static and you can't mark deconstructionists. Static, by the way, 
will not be able to access static properties because this does refer to the instance
created based on the class.

Well, the static property is not available on an instance because the whole idea behind 
static properties and static methods is that they're detached from instances.
So of course, you can't access them with this keyword.If you would want to use the static 
property or a method from inside the class, you would have to use to class name here to 
access it. This gives you access to static properties and methods also from inside the class.
*/