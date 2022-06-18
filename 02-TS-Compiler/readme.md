****Adding Watch Mode
Adding Watch Mode in Terminal for Single Ts File

`tsc app.ts --watch`   
        OR
`tsc app.ts --w`

The downside is that we still have to specifically target this file here.
And at the moment, of course, this is the only file we're working with, but typically in bigger projects,that's not necessarily the case.

****Compiling the Entire Project / Multiple Files

We need to signify Ts that this is one project that should be managed with TypeScript and we do that by 

`tsc --init`

That means it will now basically tell TypeScript that everything in the folder where you run this command and therefore it's important that you navigate it into the right folder.
And what does does is it creates this ***Tsconfig.json file.***
This basically is the indicator for typescript at the project in which this file lies and all sub folders of this folder should be managed by TypeScript.

Now, if we have a look into this file, we see there are a bunch of options, most of them uncommented out there.Just there is so that you see that you could set them.
And you've got a short explanation here as well.

And of course, this can all be combined with what mode you can run to watch as I showed before.And this will now enter watch mode for all typescript files.

`tsc --w`