let person = {
    name: "Ali",
    email: "ali@gmail.com",
    age: 15,
    greet: function(){
        return `Hi, my name is ${this.name} `
    }
}
console.log(person.name)
console.log(person.email)

person.lastname = "alem"
console.log(person)
//display greet function
console.log(person.greet)
//call greet function
console.log(person.greet())
console.log(person["name"])
