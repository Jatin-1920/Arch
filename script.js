gsap.registerPlugin(ScrollTrigger)
let scroll = document.querySelector(".root")

let x = scroll.offsetHeight
gsap.to(x,{
  y:-x,
  scrollTrigger:{
    trigger:".root",
    pin:scroll,
    scrub:true,
    start:"top 20%",
    end:"max"
  }})

  

