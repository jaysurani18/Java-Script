const user = {
    username: "jay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() //in object method this keyword point to the object itself so it print hitesh , welcome to website and then it print the whole user object
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);




// function chai(){
//     let username = "jay"
//     console.log(this.username);
// }

// chai()                // it print undefined because in normal function this keyword point to global object and in global object there is no username property so it print undefined

// const chai = function () {
//     let username = "jay"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "jay"
    console.log(this);
}

const chaai = () => {
    let username = "jay"
    console.log(username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jay"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()