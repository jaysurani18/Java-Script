// block scope {let, const} this two are inside of {} and they can not access outside of the block scope 

//var is function scope and it can access outside of the function scope



    if (true) {
    let name = "jay"
    const website = "youtube"
        var age = 22

}

// console.log(name); 
// console.log(website); 
console.log(age);        // accessible outside of the block scope because it is declared with var and var is function scope not block scope
 
let n = 2000; // global scope
    if (true) {
    let n = 20;
    console.log("inner ", n);        // inner 20
    

}
console.log(n);                 // global scope 2000


