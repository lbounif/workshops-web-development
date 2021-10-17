//If statement
//check if n is a number
// const checkIfNumber = (n) => {
//     if(typeof(n) === "number") {
//         return `${n} is a number`
//     }
// }
// console.log(checkIfNumber(3))
// console.log(checkIfNumber("hello"))
// //If Else statement
// const checkIfNumberOrNot = (n) => {
//     if(typeof(n) === "number") {
//         return `${n} is a number`
//     }
//     else {
//         return `${n} is not a number`
//     }
// }
// console.log(checkIfNumberOrNot(3))
// console.log(checkIfNumberOrNot("hello"))

function isSameNum(num1, num2) {
	if(num1 === num2) {
        return true
    }
    else {
        return false
    }
    // return num1 === num2
}
console.log(isSameNum(2, "2"))

const equal = (num1, num2, num3) => {
    if(num1 === num2 && num2 === num3) {
        return true
    }
    else {
        return false
    }
}
// console.log(equal(2,2,2))
// console.log(equal(2,"2",2))

const area = (width, height) => {
    return width * height
}
// console.log(area(2, 4))

const nextNumber = (a) => {
    return a + 1
}
// console.log(nextNumber(3))

const footballPts = (wins, draws, defeats) => {
    return wins * 3 + draws 
    //return wins * 3 + draws * 1 + defeats * 0
}
// console.log(footballPts(3, 2, 4))

const between = (a) => {
    if(a >= 100 && a <=200) {
        return true
    } 
    else {
        return false
    }
}
// console.log(between(50))
// console.log(between(120))
const getDay = (day) => {
    if(day === 1) return "Sunday"
    else if(day === 2) return "Monday"
    else if(day === 3) return "Tuesday"
    else if(day === 4) return "Wednesday"
    else if(day === 5) return "Thursday"
    else if(day === 6) return "Friday"
    else if(day === 7) return "Saturday"
    else return "Wrong number"
}
// console.log(getDay(3))
// console.log(getDay(9))
const getDaySwitch = (day) => {
    switch(day) {
        case 1: 
            return "Sunday"
            break
        case 2: 
            return "Monday"
            break
        case 3: 
            return "Tuesday"
            break
        case 4: 
            return "Wednesday"
            break
        case 5: 
            return "Thursday"
            break
        case 6: 
            return "Friday"
            break
        case 7: 
            return "Saturday"
            break
        default:
            return "Wrong number"
    }
}
// console.log(getDaySwitch(2))
// console.log(getDaySwitch(0))

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }
const greeting = (name) => {
    switch(name) {
        case "Randy": 
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST.Randy}`
        case "Karla": 
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST.Karla}`
        case "Wendy": 
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST.Wendy}`
        case "Norman": 
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST.Norman}`
        case "Sam": 
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST.Sam}`
        default:
            return "Hi I'm a guest"
    }
}
console.log(greeting("Karla"))
console.log(greeting("Karlaaaa"))


