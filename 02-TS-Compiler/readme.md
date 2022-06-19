## Adding Watch Mode
Adding Watch Mode in Terminal for Single Ts File

`tsc app.ts --watch`   OR       `tsc app.ts --w`

The downside is that we still have to specifically target this file here.
And at the moment, of course, this is the only file we're working with, but typically in bigger projects,that's not necessarily the case.

----

## Compiling the Entire Project / Multiple Files

We need to signify Ts that this is one project that should be managed with TypeScript and we do that by 

`tsc --init`

That means it will now basically tell TypeScript that everything in the folder where you run this command and therefore it's important that you navigate it into the right folder.
And what does does is it creates this ***Tsconfig.json file.***
This basically is the indicator for typescript at the project in which this file lies and all sub folders of this folder should be managed by TypeScript.

Now, if we have a look into this file, we see there are a bunch of options, most of them uncommented out there.Just there is so that you see that you could set them.
And you've got a short explanation here as well.

And of course, this can all be combined with what mode you can run to watch as I showed before.And this will now enter watch mode for all typescript files.

`tsc --w`

----

## Including & Excluding Files

Now, before we dive into the compiler options, where we, as the name suggests, can configure how the compiler behaves, let's scroll down to the place before to closing curly brace.
But after this nested closing, curly brace and let's see some of the options we can add here, which don't affect the compiler or the compilation step behavior, but instead how the compiler works with this project, because there, 

for example, you can set exclude option.

### Exclude option

Now, if you add exclude here, that will be an array.And what you can enter here are payoff's two files, which should not be included in compilation when you run TSC on the entire project.
So for example, here we could say we want to exclude analytics teams from compilation.
Of course, this does make much sense here.
But just to show how this works, if we do that and we now rerun TSC and first of all, delete analytics just so that we can see if it is recreated, if we now run to see or to see in what mode you see no analytics as far as created.
The reason for that is that we're excluding that file.

If you want to exclue some generic file types we can - 

`
"exclude":[
    "*.dev.ts", <!-- excluding .dev.ts files -->
    "**/*.dev.ts", <!--excluding .dev.ts any file with this extension on any folder-->
    "node_modules
]
`
though, I will say if you don't specify the exclude option at all, node modules is automatically excluded as a default setting.So you don't really need to add this option here.
This would be default.

### Include option

besides exclude, we also have include and include allowing it to do the opposite.
It allows you to specifically tell TypeScript which files you want to include in the compilation process and anything that's not listed here will not be compiled.

`
"include":[
    "app.ts",
    "analytics.ts"
]
`
Exclude, by the way, if set alongside include will filter down include.
So if we exclude some subfolder, all the folder that is part of include, then that excluded subfolder will be excluded.So basically we compile include minus exclude.
Now of course here I don't want to set include, I want to compile all types of files

### File option

Now you also have a files option.This allows you to point at the individual files.
So it's a bit like include with the difference that here you can specify whole folders, what you want to include.Instead, you really just specify the individual files you want to compile.
That might be option for smaller projects where, you know, you will only work with free files.

`
"files":[
    "app.ts"
]
`

For some reason you got a couple of other types of files which you don't want to touch, though.Then you can set a list of files like this.In reality, you might not need that 
setting that often, though, and therefore that's it with the basic compilation or project management options here.

## Setting a Compilation Target

let's dive into the compiler options, because that's really interesting.This allows us to control how our types good code is compiled.So not only which files, but also how the files which are getting compiled are treated by TypeScript.


Now, we'll pick up on the important options here throughout this course, because some options only make sense when we learn about a certain feature.And I want to dive into some options right now already, though.

### Target

With this option is you tell typescript for which target JavaScript version you want
to compile the code, because what typescript does is it does not just compile new features, like to type annotations that don't exist in JavaScript to JavaScript code.So the good thing here is that we can use TypeScript to generate code that works in older browsers as
well.But it's totally up to us if we want to do that.
Maybe we don't want to do that with TypeScript because maybe we got some other build tool that will then take care about the JavaScript translation.

### Lib

Lib is an option that allows you to specify which default objects and features typescript knows.With that, I mean things like working with the DOM,let's say in integrated HTML, we have a button and on this button we say Click me.And when we click this button, we just want to print the message.Now in App.ts, we can select this button.
We can get access to this button with document query selector, for example, selecting the first button

But keep in mind that when you write a typescript code, you don't necessarily write it for the browser.You could be writing your no direct application with TypeScript and dare.
Indeed, this would all not work.So the reason why this works is this live option.
And as you see, it's not even set here.But if it isn't set, then some defaults are assumed.
If it's not set, the defaults depend on your JavaScript target here.

And for ES6, it by default includes all the features that are globally available in ES5, for
example, the MAP object, which is available in year six.Therefore, it wouldn't complain if you use map.So it assumes all these years six features which are made available globally in JavaScript, that they are available in typescript as well.And in addition, it assumes that all DOM APIs are available.

So long story short, if the live option is not set, some defaults are assumed and these are typically the defaults. You need to have TypeScript run in the browser. So all the DOM APIs and so on. 

If we uncomment this and I now compile everything I do, I forget an error because now by commenting it in, we don't have to default settings anymore.Instead, we now say, hey, please include some default libraries.So some default type definitions you could say, which I will give you in this array.
And as you see, I'm not passing any description, any paths, any values here.

So therefore, we want to set this to more reasonable values.

`
"lib": [
      "dom",
      "es6",
      "dom.iterable",
      "ScriptHost"
    ],  
`

And this, by the way, is the exact default setup you get when you set Target to iOS six anyways.So if you comment design and set it up like this, you have exactly the same behavior as if you don't specify Lib at all.

### allowJs
you can also include JavaScript files in the compilation now with allow, just a JavaScript file will be compiled by TypeScript.
So even if it doesn't end with thoughts, TypeScript will compile it.

### checkJs

with checkJs It will not compile it, but it will still check the syntax in there and report potential errors.

But you could use that in projects where you don't want to use typescript at all or where, for whatever reason, you have some vanilla JavaScript files next to your typescript files and you want to check the vanilla JavaScript files as well.

### sourceMap

Source map helps us with debugging and development.It would be nice if we would see the typescript files here and not JavaScript files with the source map option.If you set this to true and you run the TSC command again, then you see we got these dot dot map files
being generated as well.
Now if we look at them, they're pretty strange files, but what they do is they basically act as a bridge, which is understood by modern browsers and developer tools there to connect the JavaScript files to the input files.So with these files generated, if I reload here, you see in the sources tab, we now not just have our JavaScript files, we also Ts files and we can even place breakpoints in the types of files.

### outDir
You often will see in projects is that you have a source folder and you have a dist folder
next. So the disk folder has the job of holding all the output.So all the JavaScript files, let's say, and the source folder might hold all our types good files
so we can move to TypeScript falls into the source folder.
And if I now delete the JavaScript folder, we have the problem that if we compile everything, these types of files are compiled.Because, TypeScript, the compiler does look into sub folders, but the output sits next to our input files and that's something we can control with the outDir.

For example, if we set outer, we can tell the typescript compiler where the created files should be stored.

`
"outDir": "./dist"
`

this folder structure you have in the source folder will also be replicated in the disk folder, which is of course very convenient because that makes sure that you can import the files basically as you would import them into source folder as well so that the structure you set up there is kept.

### rootDir
You can also set the root directory and set this specifically at the folder where your files are stored in like in this example source to make sure that the typescript compiler does not look in our folders. That's also something you could do with the include option down there.

But with root directory, the typescript compiler will not just look only at that source folder. It also makes sure that project structure you set up there is kept in a disk folder.
Now, it did so by default before, as you saw.But keep in mind that before it would have included any types of files here.Also outside of source.
So, for example, if we comment this out temporarily, if we had a user folder here on the top level with a user TIAs file where we have a username of Max, let's say then if we compile this, you will also see that user folder in the folder.

And now the source folder is included as well, because now we have a typescript file on a higher level and therefore the types of compiler thinks that our whole project, again, is the input and it replicates  folder structure it finds there in the dist folder.
Now, that's, of course, not what we would want.

### removeComments
If you set this, then any comments you might have in your typescript, good files will be removed and compiled JavaScript files. So if I comment this in and I compile my code, you see an APTs, I have a comment and yes, it's not there. So you can do that to make your files smaller and therefore this might be a nice option.

`
"removeComments":true
`

### noEmit

You can also set no limit if you don't want to generate any JavaScript files.Now, this might sound strange because that's the idea of TypeScript, but if you just want to check
whether your files are correct, but you don't want to write all these output files to save some time,
for example, in a bigger project, then you could set this to true to just have the types of compiler check your files and report any potential errors without actually creating an output file import.

`
"noEmit" : true
`

### downLevelIteration

It is interesting when you compile your code to older versions of JavaScript and you work with for loops, then in some rare scenarios you could run into issues where the compilation doesn't work correctly.This option, if you turn it on, gives you a more exact compilation which will work in these in these cases.

So therefore you might think you should always turn it on, but it will also output more verbose code.So you should only turn this on if you have loops and you see that you are generated code. suddenly behaves differently than it should regarding those loops.

----
here is one other option, which is actually not even mentioned here, which I still want to mention

### noEmitonError

the no limit on error option you can set us to draw falls into default is false.
And what does this do if we set it to false? Let me show you where this might be a problem.
It is a problem if we introduce an error or it can be a problem.

Let's say here I do have my button and I removed his exclamation mark.
Now, even though we don't fully understand what's going on, the problem here simply is that TypeScript does not know that.


```typescript 
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    console.log('clicked');
})
```

If there is no element in the dorms that satisfying the selector, then this will return null.
And that's basically what types of complaints about here we exis something on a potential null object,and that's not good.

Now, that's an error we have here.If we compile our code, we also get this error here in the console.Nonetheless, the file is created.So even if I delete the file, it will be recreated.
So even if we have an error typescript creates a JavaScript file, this might or might not be wanted.Maybe you have an error in your typescript file and you don't really know how to work around it.But, you know, it will not be a problem in the final app like here, even if we don't know about the exclamation mark.

Well, if we don't know about the exclamation mark, we might not know how to disable this.
They are basically.But still, we know that this will work in our page here.
So we might be fine with compiling this despite having an error.

Nonetheless, you could set this to false or not set it at all because falls to default.
If you are fine with generating JavaScript files, if you have an error, if you set this to true, however, what will happen is that problematic files will not be generated if I now rerun this.And therefore, it is an option I typically like to set because I'm not interested in getting JavaScript files if I still have errors in my type code files.

### Strict Options

There is this strict true option.And actually what this does is it enables all strict type checking options.

So effectively setting this is the same as if you would set all these options separately so you can ever set all these options one by one or just set this option.

Of course, you want to set the individual options if you want to have some options set to false,otherwise they're all set to true.

```typescript
    "strict":true
```
    OR

```typescript 
    "noImplicitAny": true, //it ensures to be clear about its parameters, about values being sent within the code (especially in functions, not in normal var declaration)
    "strictNullChecks": true,//it ensures TS to be strict in access and work with values that might hold a null value                     
    "strictFunctionTypes": true, //related to function types you might be setting up.                   
    "strictBindCallApply": true,                    
    "strictPropertyInitialization": true,             
    "noImplicitThis": true, //TS tries to warn you if you use the this key word in a place where it's not clear                        
    "useUnknownInCatchVariables": true,               
    "alwaysStrict": true, //It simply controls that the JavaScript files which are generated are using strict mode so that this is added.                           
    "noUnusedLocals": true,  //TypeScript will complain if you have certain unused vars                              
    "noUnusedParameters": true, //TS will warn if one or more params are unused                      
    "exactOptionalPropertyTypes": true,               
    "noImplicitReturns": true,  // we get an error if we have a function that sometimes returns something and sometimes it does not(e.g return in if cond).                    
    "noFallthroughCasesInSwitch": true, //It helps in switch statements where you might forget the break keyword             
    "noUncheckedIndexedAccess": true,                 
    "noImplicitOverride": true,                        
    "noPropertyAccessFromIndexSignature": true,
    "allowUnusedLabels": true,                        
    "allowUnreachableCode": true,    
```