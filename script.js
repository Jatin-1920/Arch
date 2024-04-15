gsap.registerPlugin(ScrollTrigger)
let scroll = document.querySelector(".child")

let x = scroll.offsetHeight
gsap.to(".child",{
  y:-x,
  scrollTrigger:{
    trigger:".root",
    pin:true,
    scrub:true,
    start:"top 20%",
    end:"max"
  }})

  

