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

contact.addEventListener("click", function () {
    location.href= "C:\Users\Oshinaike Gbenga\Desktop\PRUNATER\contact\contact.html"
})

faq.addEventListener("click", function () {
    location.href= "about.html"
})