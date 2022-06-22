/*
There is a pattern in object oriented programming, which is called the singleton pattern, 
the singleton pattern is about ensuring that you will always only have exactly one instance 
of a certain class.

This can be useful in scenarios where you somehow can't use static methods or properties or 
you don't want to.But at the same time, you want to make sure that you can't create 
multiple objects based on a class,but that you always have exactly one object based on a 
class.
Let's say for our accounting department, we want to make sure that we can only create exactly 
one object based on this class, because we have exactly one accounting department in our 
entire company.
We might have more than one IT department, but we have exactly one accounting department 
now to enforce this and to avoid that, we manually call new accounting department multiple 
times. We can turn the constructor of the accounting department class into a private 
constructor by adding the private keyword in front of it.
Now, what this does is it ensures that we can't call new on this. Here you see him getting 
an error on AccDept obj creation in line 
because the constructor is private.

So it's only accessible from inside the class, which sounds strange because how do we get 
inside after class if we can't create objects based on it anymore?
The answer is, well, static methods, a static method can be called on the class itself.
So you don't have to instantiated for that.
*/

abstract class Deppt2 {
    static fiscal_year = 2020;
    protected employees: string[] = []; 
    constructor(protected readonly id:string, public name: string){ 
    }

    static createEmployee(name:string){
        return {name:name};
    }

    abstract describe(this:Deppt2) : void;

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITTDepartment2 extends Deppt2{
    constructor(id:string, public admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
    describe(){
        console.log('IT Department - ID: '+ this.id)
    }
}

class AccDepartment2 extends Deppt2{
    private lastReport: string;
    //creating a static private prop called instance
    private static instance : AccDepartment2;

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;

        throw new Error('No Report Found');
    }

    set mostRecentReport(value:string){
        if(!value)  throw new Error('Please pass valid value')
        
        this.addReports(value)
    }
    //making constructor of acc dept private 
    private constructor(id:string,private reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    //making static method for getting instance of AccDept class
    //Now get instant's will check if we already have an instance of this class and if not, 
    //return a new one. for this we'll create a new static property
    static getInstance(){
        if(AccDepartment2.instance)
        return this.instance;

        this.instance = new AccDepartment2('d2',[]);
        return this.instance;
    }

    describe() {
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

const employee3 = Deppt2.createEmployee('Max');
console.log(employee3,Deppt2.fiscal_year);

const dp3 = new ITTDepartment2('d1',['Max']);

dp3.addEmployee('Max');
dp3.addEmployee('Manu');

dp3.describe();
dp3.printEmployeeInformation();

//getting err since  accdept constructor is private
// const ac3 =  new AccDepartment2('d2',[]);

//we can get instance of accDept with static
// we will get the same instance if we create two obj and assign getinstance()
const ac3 = AccDepartment2.getInstance();
const ac31 = AccDepartment2.getInstance();

console.log(ac3,ac31);
console.log(ac3===ac31);//true;

ac3.mostRecentReport = 'Year end Report';

console.log(ac3.mostRecentReport);

ac3.addReports('Something went wrong...');

// ac3.printReports();

ac3.addEmployee('Max');
ac3.addEmployee('Manu');
// ac3.printEmployeeInformation()

ac3.describe();
