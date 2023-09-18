const accountId = 40499
let accountEmail = "Unknown@gmail.com"
var accountPassword = "98765"
accountCity = "TechCity"
let accountState;

// accountId = 34534 // not allowed
console.log(accountId);

accountEmail = "Not@gmail.com"
accountPassword = "12345"
accountCity = "TechValley"

console.table([accountId, accountEmail ,accountPassword, accountCity,accountState])

/* Prefer not to use var
because it cause issue in block and functional scope
*/ 
