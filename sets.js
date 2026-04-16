

sales.push({
    customerName: 'Maria',
    itemName: 'cement',
    itemCost: 35_000,
    tax: 0.18,
    isCredit: true
})

let customers = sales.map((sale) => sale.customerName)
console.log(customers)

let availableCustomers = new Set(customers)
console.log(availableCustomers)



let availableItems = new Set(["cement", "nails", "paint", "sandpaper", "gloss paint", "cement"])

availableItems.add("cement")
availableItems.add("nails")
availableItems.add("paint")

availableItems.add("cement")

console.log(availableItems)

console.log(availableItems.has("cement bags"))

availableItems.delete("paint")
console.log(availableItems.size)



for (const item of availableItems) {
    console.log(item)
}










































































