/*
So we work with our department quite a bit here, and I created my accounting department now 
for the application we're building, we might need departments,
We might have an I.T. department which has an I.D., which has a name, which has employees, 
but which also has administrators, something which only the IT department has.

For example, we might have the accounting department, which might also have an ID, a name 
and employees,but it might also have, let's say, reports, an array of reports it's 
generated and so on.So we might have some base properties and also methods which 
all departments should have, but then we might have specialized versions of these 
departments with their own specific properties and methods,which only that department 
might have an inheritance can help us implement something like this.
*/

class Dept {
    /*
    Private properties are really only accessible from inside the class in which they're 
    defined, not classes that inherit from that class.So employees is available inside 
    of the apartment, but not in classes based on the department.
    
    So accounting department doesn't have direct access to the employees property. If we 
    want to grant that access and still make sure that it's not a property that can be 
    changed from outside, we can switch it to protect it, protect that is like private.
    But unlike private, it's now not just available in this class, but also in any class that extends
    this class.
    */
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(private readonly id:string, public name: string){
       
    }

    describe(this:Dept){
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

class ITDepartment extends Dept{
    constructor(id:string, public admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Dept{
    constructor(id:string,private reports: string[]){
        super(id,'Accounting');
    }

    //we can also override methods or properties of our base class.
    //overriding methods
    addEmployee(name:string){
        if(name === 'Max') return;
        this.employees.push(name); 
        //give err "Property 'employees' is private and only accessible within class 'Dept'"
        //will not give err when employees array is protected not private
    }

    addReports(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}

// const dpt = new ITDepartment('d1','Accounting');
const dpt = new ITDepartment('d1',['Max']);

/*
So now you're I'm inheriting from the department. And one consequence is that if I now 
create an I.T. department here, I indeed can call it like this with this kind of constructor, 
even though the IT department class is empty, if we save that, we see it works as before, 
because when we inherit from another class, the class which inherits automatically
gets everything.The base class department in this case has, including its constructor.
*/
dpt.addEmployee('Max');
dpt.addEmployee('Manu');

dpt.describe();
dpt.printEmployeeInformation();

const acc =  new AccountingDepartment('d2',[]);
acc.addReports('Something went wrong...');

acc.printReports(); //['Something went wrong...']

acc.addEmployee('Max');
acc.addEmployee('Manu');
acc.printEmployeeInformation()