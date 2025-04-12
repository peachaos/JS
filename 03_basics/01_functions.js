function sayMyName(){
    console.log("Aman")
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
//addTwoNumbers(3, 5)
//console.log(result)// undefined

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log(result) 


// function loginUserMsg(username) {
//     if(!username) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMsg(username = "sam") {
    return `${username} just logged in`
}

// console.log(loginUserMsg("aman"))
console.log(loginUserMsg()) // undefined



