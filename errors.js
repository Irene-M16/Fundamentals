// let userName = "Irene"
// let userAge = 25
// let password = "okay"
// console.log(userName)
// userAge.toUpperCase()
// try {
//     userAge.toUpperCase()
// } catch(error) {
//     console.log(error)
//     userAge = 0
//     console.log("before", password)
// } finally {
//      password=""
// }

// console.log("after", password)


// for (let i=userAge; i<40; i++) {
// //     console.log(i)
// } 







let tonnage = 900

// business requirements states that the tonnage of any new procurement should be above 1000 tons

// if (tonnage < 1000) {
//     console.log("tonnage is below the request amount")
// }

function checkTonnage(tonnage){
    if (tonnage < 1000) {
        throw "tonnage is below the required amount"
    }
}

try {
    checkTonnage(tonnage)
} catch (error) {
    console.log(error)

    if (error === "tonnage is below the required amount") {
        console.log("please provide a valid tonnage")
        tonnage = 1000
    }
}

































































