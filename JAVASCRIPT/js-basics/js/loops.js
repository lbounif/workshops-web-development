
const tab = [30,2,3,4,5,6,7,8,9,10]
//display tab elements
// console.log("l'element a l'index 0 est: ",tab[0])
// console.log("l'element a l'index 1 est: ",tab[1])
// console.log("l'element a l'index 2 est: ",tab[2]) 
// console.log("l'element a l'index 3 est: ",tab[3]) 
// console.log("l'element a l'index 4 est: ",tab[4]) 
// console.log("l'element a l'index 5 est: ",tab[5]) 
// console.log("l'element a l'index 6 est: ",tab[6]) 
// console.log("l'element a l'index 7 est: ",tab[7])
// console.log("l'element a l'index 8 est: ",tab[8]) 
// console.log("l'element a l'index 9 est: ",tab[9]) 

/* For Loop */
//display tab element with for
// for(let i = 0; i <= 9; i++) {
//     console.log("l'element a l'index " + i + " est: "+ tab[i])
// }
/* For in */
// for(let i in tab) {
//     console.log("l'element a l'index " + i + " est: "+ tab[i])
// }

/* For of */
// for(let value of tab) {
//     console.log("l'element est "+ value)
// }

//WHILE LOOP
// let i = 0
// while(i <= 9) {
//     console.log("l'element a l'index " + i + " est: "+ tab[i])
//     i++
// }

//Do While
// do {
//     console.log("l'element a l'index " + i + " est: "+ tab[i])
//     i++
// } while (i < 10)

//Sum of array: tab
// let sum = 0
// sum = sum + tab[0] //0 + 30 = 30
// sum = sum + tab[1] //30 + 2 = 32
// sum = sum + tab[2] //32 + 3 = 35
//......

//For
// let sum = 0
// for(let i = 0; i < tab.length; i++){
//     sum = sum + tab[i]
// }
// console.log("tab is: ", tab)
// console.log("sum is: ", sum)

// let sum = 0
// for (let i in tab) {
//     sum = sum + tab[i]
// }
// console.log("sum is: ", sum)

// let sum = 0
// for(let value of tab) {
//     sum = sum + value
// }
// console.log("sum is: ", sum)

// let i = 0
// let sum = 0
// while( i < tab.length) {
//     sum = sum + tab[i]
//     i++
// }
// console.log("sum is: ", sum)

let i = 0
let sum = 0
do {
    sum = sum + tab[i]
    i++
} while(i < tab.length) 
console.log("sum is: ", sum)






