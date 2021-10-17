// Examine the document object
// console.dir(document)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123

// //Get elements:
// //1. get element by id
// const header = document.getElementById('header-title')
// console.log("header : ", header)
// //change text of header
// header.textContent = "hello"
// header.innerText = "GoodBye"
// //change tag of header
// header.innerHTML = '<h3> my title </h3>'
// //add styling to title
// header.style.borderBottom = '3px solid red'

// //2. get element by class name
// const items = document.getElementsByClassName('list-group-item')
// console.log("items: ", items)
// items[1].textContent = "hello 2"
// items[1].style.backgroundColor = "yellow"
// items[1].style.fontWeight = 'bold'

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }
// //3. get element by tag name
// const list = document.getElementsByTagName('li')
// console.log("list: ", list)

// //4. query selector
// const headerTitle = document.querySelector('#main-header')
// console.log("headerTitle: ", headerTitle)

// const item = document.querySelector('.list-group-item')
// console.log("item: ", item)

// const listItems = document.querySelectorAll('.list-group-item')
// console.log("listItems: ", listItems)

// const input = document.querySelector('input')
// console.log(input)

// let even = document.querySelectorAll('li:nth-child(even)')
// console.log(even)
// let odd = document.querySelectorAll('li:nth-child(odd)')
// console.log(odd)

// for(let i=0; i < odd.length ; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

//Create Elements
//create a div
// let newDiv = document.createElement('div')
// console.log(newDiv)
// //add class
// newDiv.className = "mydiv"
// //add id
// newDiv.id = 'hello'
// //create text
// let newDivText = document.createTextNode('Hello world')
// console.log(newDivText)

// //add text to div
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container')
// console.log(container)

// // container.appendChild(newDiv)
// const h1 = document.querySelector('header h1')
// console.log(h1)

// container.insertBefore(newDiv, h1)

//EVENTS
let button = document.getElementById('button')

button.addEventListener('click', buttonClick)

function buttonClick (event) {
    console.log("button clicked")
    document.getElementById('header-title').textContent = 'Changed'
}




