console.log("hello")
// Select HTML elements
// email, password, submit-btn, err, content, logged-in
const email = document.querySelector(".email")
console.log("email: ", email) 

const password = document.querySelector(".password")
console.log("password: ", password) 

const submitBtn = document.querySelector(".submit-btn")
console.log("submitBtn: ", submitBtn) 

const err = document.querySelector(".err")
console.log("err: ", err) 

const content= document.querySelector(".content")
console.log("content: ", content) 

const loggedContent = document.querySelector(".logged-in")
console.log("loggedContent: ", loggedContent) 

//Add onclick event to button submitBtn
submitBtn.addEventListener("click", submitClicked)

function submitClicked () {
    console.log("button clicked")
    if(email.value === "user@gmail.com" && password.value=== "user") {
        content.style.display = "none"
        loggedContent.style.display = "flex"
    }
    else {
        err.textContent = "Email or password incorrect!"
        //do not display err message after 4 seconds
        setTimeout(()=> {
            err.textContent = ""
        }, 4000)
    }
}