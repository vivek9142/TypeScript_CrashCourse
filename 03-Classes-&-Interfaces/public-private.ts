class NameDepartment {
    /*
    And besides private, we all got public, which is the default, though you don't need to 
    add public. So name like this is exactly the same as name with public in front of it.
    The difference is that public properties are accessible from outside.
    */
    // name: string;
    public name: string;
    // employees: string[] = [];
    private employees: string[] = [];

    constructor(n: string){
        this.name = n;
    }

    
    describe(this:Department){
        console.log('Department: '+this.name);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const NameDept = new NameDepartment('Accounting');

NameDept.addEmployee('Max');
NameDept.addEmployee('Manu');

NameDept.describe();
NameDept.printEmployeeInformation();

/*
we could also go to NameDept and then reach out to employees and maybe add another employee 
at index two and they are Passing and I that if we do that and we save it, we get free 
employees and we get Anna.Now you might think, well, great, we got a no way.*/

// NameDept.employees[2] = 'Anna'; //no err before adding private
// console.log(NameDept.employees) //['Max', 'Manu', 'Anna']

/*
Well, when building more complex applications, you typically want to avoid something like 
this, though.You want to make sure that there is one clear path, one way of using your 
class, and that things like that, alternative ways of using it are not really supported.
Because if you're working in a bigger team, well, then one colleague is going to use this 
approach for adding an employee and a colleague might use this approach. And you don't 
want this.You want to have one uniform way of doing this also because maybe in the 
ad employee method, you do more than just add it to the array.

Maybe you, first of all, want to have some validation etc in here. So you might have extra 
code in there, which simply does not execute if you directly assign a new value or add a new 
value to the array with this line here.So you don't want to permit that employees is 
accessible like this from outside of the class.And TypeScript has got you covered.

You can turn employees here into a private property, a private field, by adding 
the private keyword in front of it.Now, what private means is that employees is now a 
property which is only accessible from inside the class, so from inside the created object.
*/

// NameDept.employees[2] = 'Anna'; //this will send error after adding private
// console.log(NameDept.employees) //this will send error after adding private