/*! mark here - tells TypeScript that you, the developer, know that this button exists or 
that this operation will yield a non null value.
*/
const button = document.querySelector('button')!;

function clickHandler(message:string){
    console.log('Clicked! '+message);
}

button.addEventListener('click',()=>{
    console.log('click!');
    /*
    And here we could say that does not matter to us because we're not using this 
    in this function.So we bind it to now. Now you see here I get an error.
    I get an error that can be avoided if I set strictBindCallApply to false.
    Now, you see the error is gone now.

    strictBindCallApply basically checks on which function you're calling bind, call or
    apply and it checks if what you are setting up here makes sense.

    If I set this back to true or I just commented it out because of course it is set to 
    true by default, by setting strict to true.
    Now if we wouldn't expect an argument here, you see the error would be gone down 
    there if we all removed the message because TypeScript understands our code and 
    says you're not passing in any arguments to that method or to this function because 
    it doesn't take any.
    
    The solution is to provide this second argument here, which is the first argument 
    you want to pass in.
    */
    // clickHandler.bind(null);//error
    clickHandler.bind(null,1);//error
    // clickHandler.bind(null,'Error is not displayed');
});


function add(n1:number,n2:number){
    //error - no implicit Returns
    if(n1 + n2 > 0){
        return n1 + n2;
    }
}



