/*
built in types, types ships with which utilize generic types or which are generic types
that give us certain utility functionalities.
*/
 
//--------------------Partial Type---------------------//

interface CourseGoal {
    title:string;
    description:string;
    completeUntil:Date;
}

function createCoursegoal(title:string,description:string, date:Date):CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    /*Now, here I'm getting errors because, of course, a concert title is not a property 
    of this object, and while this works in vanilla JavaScript, typescript doesn't really 
    like that on the fly, adding here. So we might want to say that this should be of type 
    CourseGoal here.
    Now, TypeScript is not complaining about this, but about the fact that this is an empty 
    object, which clearly is not fitting our type here.
    
    Now, TypeScript is not complaining about this, but about the fact that this is an empty 
    object, which clearly is not fitting our type here. So in the end, I want to return to 
    that.I want to add all these things step by step, maybe because we have extra validation 
    before each step and therefore want to add it like this.
    Now, here's where the partial type can come in handy. We could set a course goal here 
    should be a partial type, which in the end, thanks to generic types,will hold a course 
    goal.
    
    Now, what this does is it tells TypeScript that this is an object which in the end will 
    be a core skill, but initially partial kind of wraps our own type and changes it to a 
    type where all these properties are optional.
    
    That's what partial does one of these built in types, types of chips with.So it turns 
    this into a type which is also an object type where all the properties are optional.
    */
    return courseGoal as CourseGoal;
    /*
    The only problem is that in the end we can't return this because now it's still of type 
    partial core goal and not of type CourseGoal.
    We can fix this by converting this to Coursegoal with typecasting, because we know at 
    this point of time we will have added all the data.So it will be a real CourseGoal and 
    not a partial one.
    */
}

/*
Now, of course, this is a bit made up, but you could have scenarios like this where you want 
to temporarily switch one of your object types, one of your interfaces to be optional, 
only to make sure that all the properties in there can be optional only temporarily.
And then the partial type would allow you to do that.
*/




//--------------------Readonly Type---------------------//
const names1:Readonly<string[]> = ['Max','Anna'];
// names1.push('Manu');// giving error
// names1.pop();
/*
I want to make sure that this is a locked array.We can't add more here now.
We can always add more here, but at least I want to yell at me if I try it. Well, that's 
where we can use to read only type. We could set this to read only.String array with that, 
we tell TypeScript.
Well, what we story here is a is an array of strings, but it's also an array of strings 
which is read only.
So when we try to add something with push or if we try to remove something with pop, 
we get errors because we're not allowed to do these things with this array.
And this is not limited to erase. By the way, you can also use read only on an object, 
for example, to market as read only so that
you're not allowed to change the properties or add new properties to this object.
*/