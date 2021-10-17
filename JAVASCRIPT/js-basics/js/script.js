// /* Simple affichage dans la console */
// console.log("hello from scriot.js")

// /* Types de donnes */
// //const let var
// //1. String
// const mot = "hello world    !"
// console.log("mot =  ",mot)

// //2. Number
// const a = 7
// console.log("a = ", a)

// //3. Boolean : true or false
// let value = true
// console.log("value  = ", value)
// //change value to false
// value = false
// console.log("value  = ", value)

// //4. Arrays: ensemble de valeurs de meme types
// let tab1 = [1, 2, 3, 6, 9]
// console.log("tab1: ", tab1)
// let tab2 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", 
//             "Thursday", "Friday"]
// console.log("tab2: ", tab2)

// //concatenation
// let nom = "Alem"
// let prenom = "Ali"
// let nombre1 = 3
// let nombre2 = 4
// console.log(nom + " "+ prenom + nombre1 + nombre2)
// console.log(nombre1 + nombre2 + nom + " "+ prenom )
// //get variable type
// console.log(typeof(nom))
// console.log(typeof(nombre1))

// //Alert, Promt and confirm
// alert("This is an alert !")
// let visitorName = prompt("What is your name: ")
// console.log(visitorName)
// let confirmation = confirm("Are you okay with this ?")
// console.log(confirmation)

/* Les operateurs arithmetiques */
// console.log(2 + 4)
// console.log(2 - 4)
// console.log(2 * 4)
// console.log(2 / 4)
// //Modulo: reste de la division
// console.log(10 % 3) //1
// //Puissance
// console.log(4 ** 3)

/* Les operateurs logiques */
//&& : ET  x && y is true if both x and y are true
// x   y    x && y
// 0   0      0
// 0   1      0
// 1   0      0
// 1   1      1
//|| : ou  x || y is false if both x and y are false
// x   y    x || y
// 0   0      0
// 0   1      1
// 1   0      1
// 1   1      1
let x = 1 // true
let y = 0 //false
let z = 1
// console.log(x && y) //ET
// console.log(x && z) //ET
// console.log(x || y)  //OU

/* Comparaisons */
// let firstNumber = 3
// let secondNumber = 4
// let a = firstNumber >= secondNumber  //false
// let b = firstNumber <= secondNumber //true
// console.log(a)
// console.log(b)

// == egalite des valeurs 
// === egalite des valeurs et types
// != difference des valeurs
// !== difference des valeurs et types
// let number1 = 3  //number
// let number2 = "3" //string
// let egalite1 = number1 == number2
// console.log(egalite1) //true
// let egalite2 = number1 === number2
// console.log(egalite2) //false
// let difference1 = number1 != number2
// console.log(difference1) //false
// let difference2 = number1 !== number2
// console.log(difference2) //true

/* Incrementation */
// let inc = 0
// console.log(inc)
// inc ++  //inc = inc + 1   //1
// console.log(inc)
// inc ++  //2
// console.log(inc)
// inc --
// console.log(inc)

// let t = 5
// console.log("t: ", t) //5
// let v = 2
// console.log("v: ", v) //2
// t = t + v  //t += v  // add 5 to 2 and stock the result in t
// console.log("t: ", t)  //7
// t -= v //t = t - v
// console.log("t: ", t) //5
// t *= v //t = t * v
// console.log("t: ", t) // 5 * 2 = 10

/* Negation */
let a = true
console.log(a)
console.log(!a)

/*Concatenation */
let firstname = "Sara"
let lastname = "Alem"
console.log(firstname + " " + lastname)
console.log(`${firstname}  ${lastname}`) //ES6









