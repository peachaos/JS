const name = "aman"
const repoCount = 4

//console.log(name + repoCount + " Value")

console.log(`${name}${repoCount} Value`)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('amanverma-1212')

//console.log(gameName[0])
console.log(gameName.__proto__) //to access prototype

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(4))
//console.log(gameName.indexOf('v'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-13, 4)
console.log(anotherString)

const newStringOne = "  aman "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://aman.com/aman%20verma"

console.log(url.replace('%20', '-'))

console.log(url.includes('aman'))

console.log(gameName.split('-'))