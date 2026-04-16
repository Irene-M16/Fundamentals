
//PART A-Variables declaration and type checking

/*number 1*/
const storeName = "NYONDO General Hardware LTD";
let minimumStockLevel = 50;
const isStoreOpen = true;
let currentManagerName; 
const closedDepartments = null; 

/*number 2*/
console.log(`storeName is of type: ${typeof storeName}`);
console.log(`minimumStockLevel is of type: ${typeof minimumStockLevel}`);
console.log(`isStoreOpen is of type: ${typeof isStoreOpen}`);
console.log(`currentManagerName is of type: ${typeof currentManagerName}`);
console.log(`closedDepartments is of type: ${typeof closedDepartments}`);


//number 3
/* 
   I used 'const' for storeName, isStoreOpen, and closedDepartments because 
   these values are intended to remain constant during the script execution.
   I used 'let' for minimumStockLevel and currentManagerName because 
   stock levels change and the manager name is currently unassigned (mutable).
*/

//number 4
let supplierInput = "  john HARDWARE  ";
let cleanSupplierName = supplierInput
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(`Supplier Name: ${cleanSupplierName}`);



//PART B-String Manipulation & input validation

//number 5
if (cleanSupplierName.length >= 2 && cleanSupplierName !== "") {
    console.log("Valid supplier name");
} else {
    console.log("Invalid supplier name");
}

//number 6
let phoneNumber = "0700000000"; 
if ((phoneNumber.startsWith("07") && phoneNumber.length === 10) || 
    (phoneNumber.startsWith("256") && phoneNumber.length === 12)) {
    console.log("Valid Ugandan phone number");
} else {
    console.log("Invalid phone number");
}

//number 7
let productDesc = " iron sheets — box of 20 ";
let formattedDesc = productDesc.trim().toUpperCase().replace("—", ":");
console.log(formattedDesc);

//number 8
const category = 'ROOFING';
const itemId = 204;
const branchCode = 'KLA';
const stockCode = `NYD-${category}-${branchCode}-${itemId}`;
console.log(stockCode);

//PART C-Conditional Logic & Stock Arrays

//number 9
let userRole = 'Sales Attendant';
let quantityOrdered = 30;
let sellingPriceUgx = '45000';
let costPriceUgx = 38000;

// Rule 1
if (userRole == 'Sales Attendant') {
    console.log("Error: Sales attendants cannot add stock");
} else {
    // Rule 2 & 3: nested
    if (quantityOrdered >= 10) {
        if (sellingPriceUgx > costPriceUgx) {
            console.log("All rules passed");
        }
    }
}

//number 10
let rule2 = quantityOrdered >= 10;
let rule3 = Number(sellingPriceUgx) > costPriceUgx;
if (rule2 && rule3) {
    console.log("Stock entry valid");
} else {
    console.log("Stock entry invalid");
}

//number 11
let hardwareStock = ['Iron Sheets', 'Cement Bags', 'Steel Rods', 'Paint (20L)', 'PVC Pipes'];
hardwareStock.push("Binding Wire");
hardwareStock.shift();

let cementExists = false;
for(let i=0; i < hardwareStock.length; i++) {
    if(hardwareStock[i] == "Cement Bags") {
        cementExists = true;
    }
}
console.log(hardwareStock);

let branchStock = ['Nails', 'Bolts'];
let allStock = hardwareStock.concat(branchStock);



//PART D-Functions, Objects & Loops

//number 12
function calculateSaleAmount(quantityInUnits, pricePerUnit) {
    if (typeof quantityInUnits !== 'number' || typeof pricePerUnit !== 'number') {
        return "Invalid input";
    }
    return quantityInUnits * pricePerUnit;
}

//number 13
const validateNIN = (nin) => {
    return nin.length === 14; 
};

//number 14
function getUserPermissions(role) {
    switch (role) {
        case 'Store Manager': return "stock_and_pricing";
        case 'Sales Attendant': return "sales_and_receipts";
        case 'Accounts/Admin': return "full_reports";
        default: return "unauthorized";
    }
}

//number 15
function createSaleRecord(itemName, quantity, buyerContact, amountPaid) {
    let obj = {
        receiptId: 1001, 
        itemName: itemName,
        quantityInUnits: quantity,
        buyerContact: buyerContact,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCredit: false
    };
    return obj;
}

let testSale = createSaleRecord("Paint", 2, "077000000", 50000);
testSale.branch = "Kampala Main";
testSale.isCredit = true;
testSale["dueDate"] = "next week";
console.log(Object.keys(testSale));


//number 16
let weeklyDeposits = [10000, 20000, 15000, 30000, 25000, 40000, 12000];
let total = 0;
for(let i=0; i<weeklyDeposits.length; i++) {
    total = total + weeklyDeposits[i];
}
console.log("Total: " + total);
console.log("Average: " + (total/7));


//PART E-Higher-Order Functions, Sets & Maps

const procurementRecords = [
    { id: 1, 
        supplierName: "Hima", 
        itemName: "Cement", 
        quantityInUnits: 100, 
        costInUgx: 3000000 
    },

    { id: 2, 
        supplierName: "Roofings", 
        itemName: "Sheets", 
        quantityInUnits: 40, 
        costInUgx: 2000000 
    },
    { id: 3, 
        supplierName: "Hima", 
        itemName: "Lime", 
        quantityInUnits: 60, 
        costInUgx: 600000 
    },
    { id: 4, 
        supplierName: "Sadolin", 
        itemName: "Paint", 
        quantityInUnits: 20, 
        costInUgx: 400000 
    },
    { id: 5, 
        supplierName: "SteelCo", 
        itemName: "Rods", 
        quantityInUnits: 150, 
        costInUgx: 5000000 
    },
    { id: 6, 
        supplierName: "Roofings", 
        itemName: "Wire", 
        quantityInUnits: 10, 
        costInUgx: 100000 
    }
];

//number 17
let mapped = procurementRecords.map(function(item) {
    item.costPerUnit = item.costInUgx / item.quantityInUnits;
    return item;
});

//number 18
let bulk = procurementRecords.filter(r => r.quantityInUnits >= 50);
console.log("Bulk items count: " + bulk.length);

//number 19
let totalQty = procurementRecords.reduce((acc, curr) => acc + curr.quantityInUnits, 0);
let totalC = procurementRecords.reduce((acc, curr) => acc + curr.costInUgx, 0);
console.log(`Total Qty: ${totalQty}, Total Cost: ${totalC}`);

//number 20

//a-Set
function getUniqueSuppliers(records) {
    let supplierNames = records.map(r => r.supplierName);
    let uniqueSet = new Set(supplierNames);
    return [...uniqueSet];
}


const authorizedRoles = new Set(['Store Manager', 'Accounts/Admin']);

function canRegisterStock(role) {
    
    return authorizedRoles.has(role);
}


console.log("Suppliers:", getUniqueSuppliers(procurementRecords));
console.log("Can Sales Attendant register? " + canRegisterStock('Sales Attendant'));


//b- Map

const nyondoPriceList = new Map();

nyondoPriceList.set('Cement', 35000);
nyondoPriceList.set('Paint', 25000);
nyondoPriceList.set('Nails', 5000);
nyondoPriceList.set('Iron Sheets', 45000);
nyondoPriceList.set('Steel Rods', 15000);

function calculateSaleTotal(itemName, quantityInUnits) {
    let price = nyondoPriceList.get(itemName);
    
    if (price != undefined) {
        return price * quantityInUnits;
    } else {
        return "Item not found";
    }
}


console.log("Current Price List:");
for (let [item, price] of nyondoPriceList) {
    console.log(item + " goes for " + price + " UGX");
}


let maxPrice = 0;
nyondoPriceList.forEach((price) => {
    if (price > maxPrice) {
        maxPrice = price;
    }
});
console.log("The highest price found is: " + maxPrice);





































































































































































































































