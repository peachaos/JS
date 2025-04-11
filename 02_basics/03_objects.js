// singleton
// Object.create

// oject literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": "Aman Verma",
    [mySym]: "mykey1",
    age: 24,
    location: "Delhi",
    email: "aman@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "aman@chatgpt.com"
//Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



