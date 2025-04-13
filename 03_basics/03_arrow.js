const user = {
    username: "aman",
    price: 889,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "bob"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     // console.log(this)
//     let username = "aman"
//     console.log(this.username)//can't use this like this in func
// }

// chai()

// const chai = function () {
//     let username = "aman"
//     console.log(this.username)
// }

const chai = () => {
    let username = "aman"
    // console.log(this.username)
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "aman"}) // to return object

console.log(addTwo(4, 6))