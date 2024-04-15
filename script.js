gsap.registerPlugin(ScrollTrigger)
let scroll = document.querySelector(".root")

let x = scroll.clientHeight
gsap.to(scroll,{
  scrollTrigger:{
    trigger:".root",
    pin:true,
    scrub:true,
    start:"top 20%",
    end:() => `+=${x}`
  }
})
