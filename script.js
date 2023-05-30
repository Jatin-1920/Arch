const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('.nav')
open.addEventListener("click",function(){
nav.style.transform = "translateX(0%)"
open.style.display="none"
close.style.display= "block"

})

close.addEventListener("click",function() {
    nav.style.transform="translateX(100%)"
    close.style.display = "none"
open.style.display="block"
})