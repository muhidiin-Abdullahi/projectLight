const btnOn = document.querySelector("#btn1")
const btnOff = document.querySelector("#btn2")
const lightBox = document.querySelector(".lightBox")
btnOn.addEventListener("click", function(){
   lightBox.style.backgroundColor = "yellow"
})

btnOff.addEventListener("click", function(){
   lightBox.style.backgroundColor = "white"
})