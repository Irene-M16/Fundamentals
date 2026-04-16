const user = {
    firstNam: "Paul",
    age: 40
}

console.log(user, typeof user)

const jsonUser = '{"firstNmae":"Paul","age":40,"isCredit":true}'

let parsedJson = JSON.parse(jsonUser)

console.log(jsonUser, typeof jsonUser)
console.log(parsedJson, typeof parsedJson)

console.log(jsonUser.age)
console.log(parsedJson.age, typeof parsedJson.age)
console.log(parsedJson.isCredit, typeof parsedJson.isCredit)



function login(username,password){
    let user = {username, password}
    let stringUser = JSON.stringify(user)
    console.log(stringUser)
}

login("Lillian", "querty1234")





































































