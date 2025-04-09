const accountId = 135546
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "av@av.com"
accountPassword = "3563453"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
prefer not to use var
because of issue in block scope and functional scope
*/