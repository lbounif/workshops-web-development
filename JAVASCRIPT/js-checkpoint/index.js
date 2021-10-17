//Basic functions
//Find the Smallest and Biggest Numbers
const minMax = (arr) => {
    let min = arr[0]
    let max = arr[0]
    for(let i= 1; i< arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max]
}
// console.log(minMax([1,2,3,4,5])) 
// console.log(minMax([1])) 

//Are the Numbers Equal?
function isSameNum(num1, num2) {
	if(num1 === num2) {
        return true
    }
    else {
        return false
    }
    // return num1 === num2
}
// console.log(isSameNum(2, "2"))

//Arrays
//Filter out Strings from an Array
const filterArray = (arr) => {
    const result = []
    for(let i = 0; i< arr.length; i++) {
        if(typeof(arr[i]) == 'number') {
            result.push(arr[i])
        }
    }
    return result
}
// console.log(filterArray([1, "a", "b", 0, 15]))
//ES6
const filterArray2 = (arr) => {
    const result = arr.filter(value => typeof(value)== 'number')
    return result
}
// console.log(filterArray2([1, "a", "b", 0, 15]))

//Absolute Sum
const getAbsSum = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + Math.abs(arr[i])
    }
    return sum
}
// console.log(getAbsSum([2, -1, 4, 8, 10]))

//Number of true
const countTrue = (arr) => {
    let trueSom = 0
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === true) {
            trueSom ++
        }
    }
    return trueSom
}
// console.log(countTrue([true, false, true, true]))
//Objects
//Printer level
const inkLevels = (inks) => {
    let min = inks.cyan
    if(inks.magenta < min) {
        min = inks.magenta
    }
    if(inks.yellow < min) {
        min = inks.yellow
    }
    return min
}
// console.log(inkLevels({
//     "cyan": 2,
//     "magenta": 11,
//     "yellow": 10
//   }))

//Convert Key, Values in an Object to Array
const objectToArray = (obj) => {
    return Object.entries(obj)
}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }))

//Get Sum of People's Budget
const getBudgets = (arr) => {
    let sum = 0
    for(let i in arr) {
        sum = sum + arr[i].budget
        //sum += arr[i].budget
    }
    return sum
}
// console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]))

//Ageing the Population...
const afterNYears = (names, n) => {
    for(let key in names) {
        names[key] = names[key] + Math.abs(n)
    }
    return names
}
// console.log(afterNYears({
//     "Baby" : 2,
//     "Child" : 8,
//     "Teenager" : 15,
//     "Adult" : 25,
//     "Elderly" : 71
//   }, 19))
//Convert Key, Values in an Object to Array
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
const greeting2 = (name) => {
    for (let key in GUEST_LIST) {
        if(name === key) {
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[key]}.`
        }
    }
    return `Hi I'm a guest.`
}
console.log(greeting2("Karla"))
console.log(greeting("Karlaaaa"))