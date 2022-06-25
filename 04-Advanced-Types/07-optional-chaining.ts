/*
Let's say you have an application where you're getting data from a backend and data from a 
database or from any source where you don't know with certainty if in an object, a certain 
property is defined.Let's say we have fetched user data and fetched user data could be an 
object about a user we fetched,there We might have an I.D. We might have a name ,job, which
is an object which has a title and which then also has a description, my own company.

Now, if we get data like this, of course you can work with it now, you might do more 
complex things.

However, if we are fetching this from a back end for whatever reason, maybe we don't fetch 
all the data we need.Maybe some data is not set at this point in bigger, more complex 
applications. You certainly sometimes work with structured with nested data where you 
don't know with certainty if some property on an object is set or if it's maybe 
undefined.

So here, let's say job does not exist here for whatever reason.I get an error in all types 
of complains about this because it knows that there is no job property.
*/

const fetchedUserData = {
    id:'u1',
    name:'Max',
    job: {
        title:'CEO',
        description:'My Own Company'
    }
}

// console.log(fetchedUserData.job.title); // this will give error

// console.log(fetchedUserData.job && fetchedUserData.job.title); 
//by this we can eliminate js runtime errors

/*
At least with TypeScript, you actually got a nicer way of doing that.You got the optional 
chaining operator.You can add a questionmark after the thing.
You're not sure whether it's defined or not.

My ideas like this, but this is a supported syntax then this tells TypeScript does 
exist if it does X job and hence here we can call that a question mark and therefore only 
access title if job is defined.
*/

console.log(fetchedUserData?.job?.title);

/*
optional chaining operator here helps us safely access nested properties, a nested objects
in our object data.And if the thing in front of the questionmark is undefined, it will not 
access the thing they're after and therefore will not flow a runtime error, but instead it 
will just not continue.
So behind the scenes, does this basically compile to a F check which checks whatever data 
exists before
*/