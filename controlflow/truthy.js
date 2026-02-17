const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10   // here 5 is considered because it is a non-nullish value
val1 = null ?? 10    // 10 considered because null is a nullish value
//  val1 = undefined ?? 15   // here 15 is considered
//val1 = null ?? 10 ?? 20 // null is not considere and 10 is 
// nullish coalescing operator will return the first non-nullish value (not null or undefined) from the left. In this case, it will return 10, because null is considered a nullish value, and 10 is the first non-nullish value encountered. The second nullish coalescing operator (?? 20) will not be evaluated because the first one already returned a non-nullish value.



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")