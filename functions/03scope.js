function one( ) {                       
    const username = "jay";

      function two(){
        const website = "youtube";
        console.log(username); // accessible because of closure AND THEY CAN ACCESS GLOBAL SCOPE
        
      }
      console.log(website); // not accessible because it is declared inside of the function two and it is not accessible outside of the function two

      two();
    
}

one()


// using if checking to show the block scope and function scope

if (true) {
    const username = "jay";
    if (username === "jay") {
        const website = " youtube";
        console.log(username + website ); // accessible because of closure AND THEY CAN ACCESS GLOBAL SCOPE
    }
    console.log(website); // not accessible because it is declared inside of the if block and it is not accessible outside of the if block
}
console.log(username); // not accessible because it is declared inside of the if block and it is not accessible outside of the if block



//variable can make a function
function addone(num){
    return num + 1;
}
 
// addone(5) 

// const addtwo = function (num){     // in variable we can declare a function 
//     return num + 2;
// }

// addtwo(5)



// either we can 
addone(5) 
function addone(num){
    return num + 1;
}

// it show error
addtwo(5)          // we can not call the function before declaring it because it is declared with variable and variable is not hoisted but function declaration is hoisted
const addtwo = function (num){     // in variable we can declare a function 
    return num + 2;
}


