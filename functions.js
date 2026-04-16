// function average(numbers) {
//     // block of code is going to be for the function
//     let _sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         _sum += numbers[i]
// }
//     // console.log("This is an average function", numbers)
//     //    let average = _sum / numbers.length
//     //    console.log(average)
// }
// average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// let ages = [23, 4, 54, 12, 40]
// let height = [130, 170, 180, 165, 178, 190]

// average(ages)
// average(height)

// let heightAverage = average(height)
// let ageAverage = average(ages)

// console.log(`The average height is ${heightAverage}`)
// console.log(`The average age is ${ageAverage}`)


// function hello (Friend) {
//   console.log(`Are you okay ${Friend}`)
// }
// hello("Alphonsine")

// Write a function that returns the shortest word
function returnsShortestWord1 (word1, word2) {
    if (word1.length < word2.length) {
        return word1 
    }
    else {
        return word2
    }
}


let word1 = "pen"
let word2 = "book"

console.log(returnsShortestWord1(word1, word2))


// function expression
// const returnsShortestWord2 = function (word1, word2) {
//        if (word1.length < word2.length) {
//         return word1 
//     }
//     else {
//         return word2
//     }
// }

// Difference between function declaration and function expression


// const returnsShortestWord3 = (word1, word2) => {
//     if (word1.length < word2.length) {
//         return word1 
//     }
//     else {
//         return word2
//     }
// }

const returnsShortestWord3 = (word1, word2) => (word1.length < word2.length)? word1:word2




















































































