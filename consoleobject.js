

// const sales=['cash', 'credit', 'cash', 'cash']

// sales.forEach((sale) => {
//     if (sale === "cash") {
//         console.count("cash transaction")

//     } else 
// })


// console.time("for loop")
// let sum =0;
// for (let i=1; i<=100_000; i++) {
//     sum += i
// }
// console.timeEnd("for loop")
// console.log(sum)

// console.time("while loop")
// let _sum = 0;
// i = 1
// while (i <= 100_000) {
//     _sum += i
//     i++
// }
// console.timeEnd("while loop")
// console.log(_sum)


let = [23_2000, 43_9000, 54_000, 98_000]

console.time("for loop")
let sum = 0;
for (let i=0; i<= 1000_000; i++) {
    sum += i
}

console.timeEnd("for loop")
console.log(sum)

console.time("while loop")
let _sum = 0;
i = 0
while (i <= 1000_000) {
    _sum += i
    i++
}

console.timeEnd("while loop")
console.log(sum)



const arr = Array.from({ length: 100000 }, (_, i) => i + 1);

console.time("For Loop");
let sumFor = 0;
for (let i = 0; i < arr.length; i++) {
  sumFor += arr[i];
}
console.timeEnd("For Loop");


console.time("Reduce");
const sumReduce = arr.reduce((acc, curr) => acc + curr, 0);
console.timeEnd("Reduce");


console.log("For Loop Sum:", sumFor);
console.log("Reduce Sum:", sumReduce);








































