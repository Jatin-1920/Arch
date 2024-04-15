gsap.registerPlugin(ScrollTrigger)


let container = document.querySelector(".container")
    let child = document.querySelector(".child")
    tween = gsap.to(child, {
      padding: 40,
      onUpdate: () => tween.scrollTrigger.spacer.style.height = child.offsetHeight + "px",
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: "max",
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      }
    });
const trigger= document.querySelectorAll(".img")
trigger.forEach(e=>{
    gsap.from(e,{
        scaleY:0,
        transformOrigin:"bottom",
        duration:1,
        ease:"power3.inOut",
        scrollTrigger: {
        trigger: e,
        start: 'top 20%',
      }
    })
})
  

