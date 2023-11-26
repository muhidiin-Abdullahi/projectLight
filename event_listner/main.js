const title = document.querySelector(".title")
const btn =  document.querySelector(".btn")
const button = document.querySelector(".button")
const body = document.querySelector("body")

btn.addEventListener("click", () => {
   title.style.color = "red"
   title.style.backgroundColor = "blue"
   title.style.fontSize = "100px"
   body.style.backgroundColor = "coral"
})

button.addEventListener("click", function(){
   title.style.color = "black"
   title.style.fontSize = "20px"
   body.style.backgroundColor = "white"
})

button.addEventListener("click", function(){
   button.style.backgroundColor = "red"
   
})

