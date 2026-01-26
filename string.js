let name = "jay"
console.log(`hello i am ${name} surani and i am a student`)   // muse concationation in string using backtick ` `

let firstName = "jay"
let lastName = "surani"
console.log(`hello i am ${firstName} ${lastName} and i am a student`)   // muse concationation in string using backtick ` `         

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   jay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jay.com/jay%20surani"  // using for space removing in url website

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));