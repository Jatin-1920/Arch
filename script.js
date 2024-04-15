gsap.registerPlugin(ScrollTrigger)
let scroll = document.querySelector(".root")

let x = scroll.offsetHeight
gsap.to(scroll,{
  scrollTrigger:{
    trigger:".root",
    pin:scroll,
    scrub:true,
    start:"top 20%",
    end:"max"
  }
})
