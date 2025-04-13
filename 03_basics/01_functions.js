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
//console.log(loginUserMsg()) // undefined

// function calculateCartPrice(...num){
//     return num
// }

function calculateCartPrice(val1, val2, ...num){
    return num
}

//console.log(calculateCartPrice(100, 200, 400, 500))

const user = {
    username: "aman",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

// handleObject({
//     username: "bob",
//     price: 100
// })

const myNewArray = [100, 200, 500, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([300, 500, 900]))




