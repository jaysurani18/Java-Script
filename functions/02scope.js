// block scope {let, const} this two are inside of {} and they can not access outside of the block scope 
//var is function scope and it can access outside of the function scope

function scope() {
    let a = "jay"
    var age = 22
    const website = "youtube"
}

console.log(name); // error
console.log(age); // undefined
console.log(website); // error

function one() {
    const username = "jay"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    conslole.log(website);
    two()

}

one()