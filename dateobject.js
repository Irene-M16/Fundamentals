let now = new Date("2026-03-31")

console.log(now)

const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()

const hour = now.getHours()
const minutes = now.getMinutes()

console.log("02.04.2026 09:43")
console.log(`${date}.${month}.${year}.${hour}.${minutes}`)

console.log(now.toLocaleDateString('en-US'))

console.log(now.getTime())


let sale = {
    customeName: "Paul",
    itemName: "cement",
    quqntity: 1000,
    costPrice: 35_000,
    tax: 0.18,
    dueDate: new Date("2026-04-30")
}
console.log(sale)


const getTimeDifference = (date1,date2)=>{
    const difference = date1.getTime() - date2.getTime()
    const seconds = difference/1000
    const minutes = seconds/60
    const hours = minutes/60
    const days = hours/24
    const weeks = days/7
    const months = days/30
    return {seconds: seconds, minutes: minutes, hours: hours, days: days}
//     console.log(difference)
}

const {days} = getTimeDifference(sale.dueDate, now)

console.log(`${days} remaining till sale is due`)
console.log(`${hour} hours remaining till sale is due`)














































































