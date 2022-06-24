/*
Intersection types allow us to combine other types.

Let's say we have a type.Admin, which is an object type.
So again, this is not creating an object here.We're defining a type.

*/
type Admin = {
    name: string;
    priviledges: string[]
};

type Employee = {
    name : string;
    startDate : Date;
}

type ElevatedEmployee = Admin & Employee;
/*
But if we have these two types already, then we can also just combine this by saying admin.
And so we use the & symbol here employee.And now the result is a new object type which must 
have both.
So if I have my employee e one, which should be of type elevated employee, then I can 
store an object in there which must have a name property which must have a privileged 
property.
*/
const el: ElevatedEmployee = {
    name: 'Max',
    priviledges: ['create-server'],
    startDate:new Date()
}

/*
So this is now a simple way of combining two types.
Now I will say that intersection types are closely related to interface inheritance 
because of course we could have achieved the same here by using an interface.
*/

interface Admin1 {
    name: string;
    priviledges: string[]
};

interface Employee1 {
    name : string;
    startDate : Date;
}
/*
we could have achieved the same here by using an interface.Admin.
And then an interface employee, and then we could also use an intersection type on these 
interfaces or we create a third interface.
Elevated employee. Which extends.Employee and.Admin.
*/
type ElevatedEmployee1 = Admin & Employee;

interface ElevatedEmployee2 extends Employee,Admin{}

/*
it is worth noting that whilst intersection types can be especially useful when 
used in conjunction with object types as we're doing it here, you can use them 
with any types.
*/
type Combinable1 = string | number;
type Numeric = string | boolean;

type Universal = Combinable1 & Numeric;

/*
So we have a union type here with the string or number of base types.
And then we had a numeric type here, which is either a number or a boolean.
Well, then we could have our, let's say, universal type here by intersecting, combining 
all with numeric.
And in the end, TypeScript then sees that universal, of course, is of type number 
because that is the only intersection we have here.
But if you had more intersections, then this would be the type that is assigned to Universal.
*/