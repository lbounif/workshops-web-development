let ligne = document.querySelectorAll(".ligne")
console.log("ligne: ", ligne)


//increase
let increase = document.querySelectorAll(".increase")
console.log("increase: ", increase)

//decrease
let decrease = document.querySelectorAll(".decrease")
console.log("decrease: ", decrease)

//delete
let del = document.querySelectorAll(".delete")
console.log("del: ", del)

//quant
let quant = document.querySelectorAll(".quant")
console.log("quant: ", quant)

//prix
let prix = document.querySelectorAll('.prix')
console.log('prix:', prix)

//image
let image = document.querySelectorAll('.image')
console.log('like:', image)

//total
let total = document.querySelector('.prix-total')
console.log('prixTotal:', total)

//Calculer le prix total
function updateTotal() {
    let prixTotal = 0
    for (let i = 0; i < quant.length ; i++) {
        prixTotal = prixTotal + quant[i].value * parseInt(prix[i].textContent)
    }
    console.log("prixTotal: ", prixTotal)
    total.textContent = prixTotal + ' DA'

}
updateTotal()

// increment 
for(let i=0; i < increase.length; i++){
    increase[i].addEventListener('click', incrementation) 
    function incrementation(){
        quant[i].value++ 
        updateTotal()
    }
 }

 // deccrement 
for(let i=0; i < decrease.length; i++){
    decrease[i].addEventListener('click', descrementation) 
    function descrementation(){
        if(quant[i].value >= 1)
        quant[i].value -- 
        updateTotal()
    }
 }

 //delete product
 for(let i = 0; i < del.length; i++) {
     del[i].addEventListener('click', deletion)
     function deletion () {
         ligne[i].remove()
         quant[i].value = 0
         updateTotal()
     }
 }

 //like and dislike
 for(let i= 0; i< image.length; i++){
     image[i].addEventListener('click', like)

     function like () {
         if(image[i].style.color === "black"){
             image[i].style.color = "red"
         }
         else {
            image[i].style.color = "black"
         }
     }
 }