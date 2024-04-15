gsap.registerPlugin(ScrollTrigger)
const scroll = document.querySelector(".root")

let x = scroll.scrollHeight
gsap.to(scroll,{
  scrollTrigger:{
    trigger:".root",
    pin:true,
    scrub:true,
    start:"top 20%",
    end:"+=500vh"
  }
})
