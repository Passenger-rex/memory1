//Menu Button
//function myFunction(x) {
    //x.classList.toggle("change");
    //butt.classList.toggle("menu2")
//}

let diva= document.getElementById("diva")
let buttLay = document.getElementById('butt')

diva.addEventListener("click", function () {
    buttLay.style.display = "block";
})


window.addEventListener("click", function (e) {
    if (e.target === buttLay) {
        buttLay.style.display = 'none'
    }
})
   
let contact= document.getElementById("contact")
let faq= document.getElementById("faq")
let home= document.getElementById("home")

contact.addEventListener("click", function () {
    location.href= "contact/index.html"
})

faq.addEventListener("click", function () {
    location.href= "about/index.html"
})

home.addEventListener("click", function () {
    location.href= "index.html"
})