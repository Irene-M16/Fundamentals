class Sale {
    customerName = ""
    itemName = ""
    quantity = 0
    costPrice = 1000
    tax = 0.18
    isCredit = false

    constructor(customerName,itemName,quantity,costPrice,tax,isCredit) {
        this.customerName=customerName
        this.itemName=itemName
        this.quantity=quantity
        this.costPrice=costPrice
        this.tax=tax
        this.isCredit=isCredit
    }
    calculateTotalCost(){
    return this.quantity * this.costPrice (1 + this.tax)
}
}

let sale = new Sale("Irene", "cement", 10,350000,0.18,false)
let sale_1 = new Sale("Paul", "Iron", 10,350000,0.18,false)
console.log(sale)
console.log(sale_1)
// console.log(sale.customerName, sale.costPrice)

console.log(sale.calculateTotalCost)
console.log(sale_1.calculateTotalCost)


class NGHStock {
    openTendering = ""
    singleSourcec = ""
    requestForX = ""
    closedTendering = ""

    constructor(nameOfItem, quantityInUnits,supplierName) {
        this.nameOfItem=nameOfItem
        this.quantityInUnits=quantityInUnits
        this.supplierName=supplierName
    }
}

console.log(NGHStock)


class CreditSale{
    constructor(customerName, itemName, quantity, costPrice, tax, isCredit, dueDate, paymentStatus) {
        this.customerName=customerName
        this.itemName=itemName
        this.quantity=quantity
        this.costPrice=costPrice
        this.tax=tax
        this.isCredit=isCredit
        this.dueDate=dueDate
        this.paymentStatus=paymentStatus
    }
    calculateTotalCost(){
        return this.quantity * this.costPrice * (1 + this.)
    }
}














































































