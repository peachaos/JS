// ****Types of Datatypes****
// 1.primitive: 7 types
//   String
//   Number
//   Boolean
//   null
//   undefined
//   Symbol
//   BigInt

const score = 100
const scoreValue = 100.4
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 452625624562456245625663565n

// 2. Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "aman",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World")
}

//console.log(typeof myFunction)



// +++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-primitive)

let myName = "amanverma"

let anothername = myName
anothername = "peachaos"

console.log(myName)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aman@google.com"

console.log(userOne.email)
console.log(userTwo.email)




