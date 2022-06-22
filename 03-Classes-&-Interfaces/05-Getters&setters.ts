/*
Now, it's not all what you can do with classes no one ever need feature which you also 
have in vanilla JavaScript and which is also supported in typescript are getters 
and setters.
*/

class Deptt {
    
    protected employees: string[] = [];

    constructor(private readonly id:string, public name: string){
       
    }

    describe(this:Deptt){
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

class IDepartment extends Deptt{
    constructor(id:string, public admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

class AccountDepartment extends Deptt{
    private lastReport: string;

    /*
    Now, last report is private, so we can access it from inside this method, but we won't 
    be able to access it from outside with the dot notation.Now we can add a gater to still 
    make it accessible.
    
    A getter is basically a property where you execute a function or a method 
    when you retrieve a value. And that allows you as a developer to add more complex logic.
    */

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

const dp = new IDepartment('d1',['Max']);

dp.addEmployee('Max');
dp.addEmployee('Manu');

dp.describe();
dp.printEmployeeInformation();

const ac =  new AccountDepartment('d2',[]);

// ac.mostRecentReport = ''; //setter empty string will give error pass valid value
ac.mostRecentReport = 'Year end Report' // setter valid

console.log(ac.mostRecentReport) //this is used as getter and no reports werethere so error 
//thrown

ac.addReports('Something went wrong...');

ac.printReports();

ac.addEmployee('Max');
ac.addEmployee('Manu');
ac.printEmployeeInformation()