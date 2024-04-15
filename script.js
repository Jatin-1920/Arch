gsap.registerPlugin(ScrollTrigger)
let child = document.querySelector(".child")

const tween = gsap.to(child,{
  onUpdate:()=>
      tween.scrollTrigger.spacer.style.height
      = child.offsetHeight+"px",
  scrollTrigger:{
    padding:40,
    trigger:".container",
    pin:true,
    scrub:true,
    start:"top top",
    end:"max",
    pinSpacing:false
  }})

  

