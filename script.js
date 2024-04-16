gsap.registerPlugin(ScrollTrigger)



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
        start: 'top 50%',
        }
        })
})
  

const photos = gsap.utils.toArray(".imgDiv:not(:first-child)")
const content = gsap.utils.toArray(".pinContent h1")
gsap.set(photos,{
    scale:0,
})

ScrollTrigger.create({
        trigger:".pinSection",
        start:"top 20%",
        pin:".pinImg"
    })
content.forEach((e,index)=>{
    const animation = gsap.timline().to(photos[index],{
        scale:1,
        ease:"none"
    })
    ScrollTrigger.create({
        trigger:e,
        start:"top 80%",
        end:"top 20%",
        animation:animation,
        scrub:1
    })
})
