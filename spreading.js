

let age = [34, 56, 76, 24, 12]
let newAge = age

console.log(newAge, newAge.length)

age.pop()
console.log(newAge, newAge.length)

let sale = {
    customerName: "Tendo",
    itemName: "cement",
    quantity: 1000,
    costPrice: 35000,
    tax: 0.18,
    isCredit: false    
}

let creditInformation = {
    customerName:"Paul",
    dueDate:"2026-04-01",
    closingBalance: 50000
}

let newSale = {...sale}

let branchSale = {...sale, ...creditInformation, dueDate: new Date("2026-03-31").toISOString()}

console.log(newSale)
// console.log(branchNewSales)















































































