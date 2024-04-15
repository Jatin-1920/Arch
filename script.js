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
const trigger= document.querySelectorAll(".over")
trigger.forEach(e=>{
    gsap.to(e,{
        height:0,
        transformOrigin:"bottom",
        duration:1,
        ease:"power3.inOut",
        stagger:0.045,
        scrollTrigger: {
        trigger:e,
        start: 'top 70%',
        }
        })
})
  

