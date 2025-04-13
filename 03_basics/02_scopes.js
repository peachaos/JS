// var c = 100

if (true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "aman"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()

}

// one()


// +++++++++++ interesting +++++++++++

console.log(addone(6))

function addone(num){
    return num + 1
}


// addtwo(2)
const addtwo = function(num){
    return num + 2
}

addtwo(2)

