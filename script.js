gsap.registerPlugin(ScrollTrigger)
let child = document.querySelector(".child")

const tween = gsap.to(scroll,{
  onUpdate:()=>
      tween.scrollTrigger.spacer.style.height
      = child.offsetHeight+"px",
  scrollTrigger:{
    padding:"30vh",
    trigger:".root",
    pin:true,
    scrub:true,
    start:"top top",
    end:"max",
    pinSpacing:false
  }})

  

