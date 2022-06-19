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