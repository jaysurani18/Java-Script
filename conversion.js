let j = "123"

console.log(typeof j); // string

let k = Number(j)

console.log(typeof k); // number
console.log(k); // 123
//what if 
 let y = "123jay"

let x= Number(y)
console.log(typeof x); // number
console.log(x); // NaN

let z = 123
let a = String(z)
console.log(typeof a); // string
console.log(a); // "123" without quotes it is become a string

let l = Boolean(k)
console.log(typeof l); // boolean
console.log(l); // true