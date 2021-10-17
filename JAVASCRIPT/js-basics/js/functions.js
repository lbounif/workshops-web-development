//Function addition
// (a, b) => function add => return a + b
// function add(a, b) {
//     let result = a + b
//     return result
// }
//ES6: Arrow function
const add = (a, b) => {
    let result = a + b
    return result
}
// //function call
// let sum1 = add(4, 3)
// console.log(sum1)
// let sum2 = add(5, 6)
// console.log(sum2)
// console.log(add(2, 4))
// //function multiplication
// const multiply = (a, b) => {
//     return a * b
// }
// console.log(multiply(3, 7))

// //function fullName
// // firstName, lastName => firstName lastName
// const fullName = (firstName, lastName) => {
//     //return firstName + ' ' + lastName
//     return `${firstName} ${lastName}`
// }
// console.log(fullName("Sara", "Ali"))

//Convert minutes to seconds
const minuteConvert = (minutes) => {
    return minutes * 60
}
console.log(minuteConvert(3))

//Convert minutes to seconds
const convertHourMinutes = (hours, minutes) => {
    return hours * 3600 + minutes * 60
}
console.log(convertHourMinutes(1, 30))
