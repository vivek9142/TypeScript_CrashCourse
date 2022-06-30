## Decorators

In this section,we have illustrated the Decorators.

Decorator's are a feature which can be very useful for metaprogramming.

Now, what does metaprogramming mean?
It means that you typically won't use decorator's that often to have a direct impact on the end users of your page.

So if the users visiting your page but instead decorator's are a particularly well suited instrument for writing code, which is then easier to use by other developers.It all comes down to the fact that unlike with other code snippets, let's say when we add an event listener, we can easily write code which have a direct impact on the users of our page.

If we register a listener on the button and we show an alert after the button gets clicked, then the user visiting our page immediately sees something with decorator's.

TS implementation of Decorators concepts is explained in brief.

###
For Decorators to work , we need to add the following properties in TS.config.json
`
"target": "es6",  
"experimentalDecorators": true,
`

### Concepts Locating Directories

Concept                                         |  File Information
--------------                                  | ------------
Decorators                                      | ***01-decorators.ts***
Creating Decorators Factories                   | ***02-creating-decorators-factories.ts***
Building Decorators                             | ***03-Building-decorators.ts***
Adding Multiple Decorators                      | ***04-adding-multiple-decorators.ts***
Property Decorators                             | ***05-property-decorators.ts***
Accessor & Parameter Decorators                 | ***06-Accessor-&-Parameter-Decorators.ts***
Decorators Execution                            | ***07-Decorators-execution.ts***
Returning(or changing)class in Class Decorator  | ***08-Returning-class-inClassDec.ts***
Other Decorator Return Types                    | ***09-Other-Decorator-Return-Types.ts***
Example: Creating an "Autobind" Decorator       | ***10-Example:Creating-an-Autobind-Decorator.ts***
Validation with Decorators                      | ***11-ValidationwithDecorators.ts***