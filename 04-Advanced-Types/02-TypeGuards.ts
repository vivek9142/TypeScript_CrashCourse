/*
type guards help us with union types because whilst it is nice to have that flexibility, 
often you need to know which exact type you are getting now at runtime.
Let's say here we have our add function where I get a number which needs to be of 
type combinability.So a string or a number, and therefore I'll actually David a year.
And then I got another argument which also needs to be combined.So a number or a string 
and then at one return A plus B.Now we saw in the past that this does not work.

Instead, we now need to check if type of A is equal to string Or type of B is 
equal to string, and if that is the case, we return A to string plus B to string,
so we concatenate these two strings.Otherwise, if we don't make it into this if statement, 
we return A plus B, because now TypeScript knows A and B have to be numbers here, 
because if at least one of them would not be a number,we would be in here.

Now, this here is called a type guard because it allows us to utilize the flexibility union 
types gives us and still ensure that our code runs correctly at runtime, because often 
you have functions that work with two or three different types and therefore a union type 
is perfect.

But what exactly you do with the values then does depend on the type like here where we ever
concatenate or we add mathematically.

Now this is a type guard using type of you can all the right other kinds of type cards.
*/
type Admin2 = {
    name: string;
    privileges: string[]
};

type Employee2 = {
    name : string;
    startDate : Date;
}

type ElevatedEmployee3 = Admin2 & Employee2;

const el1: ElevatedEmployee3 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate:new Date()
}

type Combinable2 = string | number;
type Numeric2 = string | boolean;

type Universal2 = Combinable2 & Numeric2;


function add(a:Combinable2,b:Combinable2){
    //type guard - if condition
    if(typeof a === 'string' || typeof b === 'string')
     return a.toString() + b.toString();
    return a + b; 
}

type UnknownEmployee = Employee2 | Admin2 ;

/* printEmployeeInformation
The problem just is with type of will not win anything if we check the type of employee 
that will just be object at runtime.That doesn't tell us whether it has this property or 
not, though. Hence if I move the code, this if check typescript is not happier than 
before because an object is
well, just an object doesn't tell us anything about the properties.We can't check if it's of 
type employee because that is not a type JavaScript knows. And keep in mind that this check 
runs at runtime and uses JavaScript so we can only compare the type type of gets us with 
the types of JavaScript knows, and that would be object, string number and boolean and so on.

And our custom type is not part of it.That only exists in typescript world, not in the 
compiled JavaScript world. So therefore this also does not work.Now here a workaround is to 
use a different if check.
*/
function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: '+emp.name);
    //emp is object we can't check it of custom properties in it
    // if(typeof emp === 'object'){
    if('privileges' in emp){
        console.log('Privileges: '+emp.privileges)
    }

    if('startDate' in emp){
        console.log('StartDate: '+emp.startDate)
    }
}

printEmployeeInformation(el1) //will give output for the fields start date and privileges
printEmployeeInformation({name:'Manu', startDate: new Date()}); //privileges is not present 
//but instead it will print the remaining odes in printEmployeeInformation 

/*When working with classes, you can also use another type of type guard, and that would be 
the instance of type guard.*/
class Car {
    drive(){
        console.log('Driving ...');
    }

    loadCargo(amount:number){
        console.log('Loading cargo ... '+amount);
    }
}

class Truck {
    drive(){
        console.log('Driving a truck');
    }
    loadCargo(amount:number){
        console.log('loading Cargo ... '+amount);
    }
}

type Vehicle = Car | Truck;

/*
So now we have two classes, which, of course, have some similarity, the drive method, 
but also have a difference. Now, again, we can create a union type here vehicle, which is 
either a car or a truck.
And now let's say we create a new vehicle, the one which is a new car and a number one V two, 
which is a new truck.

Now I have a function use vehicle which just expects to get a vehicle which should be of 
type vehicle, so which should be of this union type.So here we get a vehicle and now 
let's say our goal here is to do everything we can do with vehicles,drive and load cargo.

So, of course, we can call vehicle drive because that always exists.But for every vehicle 
load cargo, we have a problem because only a truck has that.A car doesn't have it.
So this won't work.Now we can, of course, again, check if load cargo is in vehicle.
And if that is the case, we can use it.At least if I fixed that typo here, so we now 
save that and we then call use vehicle and pass in the one and then we call it again with V2.
And I save all of that.It compiles and it works.

Now, that is one way of doing it, an alternative way, which might be a bit more elegant 
because it also eliminates the risk of you mistyping in this property string here is that 
you use instant's off.We can check if vehicle is an instance of truck.

If that's the case, we know it will have a load cargo method.An instance off is a normal 
operator built into vanilla JavaScript.So this is no typescript code, just like type of this 
is part of JavaScript and it executes at runtime JavaScript.

Doesn't know the truck type, but it knows constructor functions and classes in the end are just translated

to constructor functions.

And TypeScript is then able to find out if vehicle was created based on the truck constructor function.

So since classes are compiled to something JavaScript understands constructor functions, i
*/

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){ //it will work
        if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

/*
if we would be using an interface here instead of a class.And therefore, of course we 
couldn't have the implementation in here but would do that.
When we create an object with the object literal notation, then we could not use instance 
off because interfaces, as you learned, are not comparable to any JavaScript code and 
therefore we can't use them at runtime for a class.
We can do that because JavaScript supports classes and constructor functions.
And with instance, all of you can then find out if some object is based on that class and 
we know if it is that it will have a load cargo function.
So these are type cards  

In the End type Guards' is just a term that describes the idea or approach of checking if a 
certain property or method exists before you try to use it, or if you can do something
with the type before you try to use it for objects that can be done with instance of or 
with in.
For other types, you can use type of and therefore we now have all the flexibility to use 
the flexibility union types give you and still write code that then does one thing or the 
other based on the exact type you're getting at runtime.
*/