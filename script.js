gsap.registerPlugin(ScrollTrigger,Flip)
const select= (e) => document.querySelector(e)
const selectAll= (e) => document.querySelectorAll(e)





    const introTl = gsap.timeline() 
    introTl.from(".line", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".toplayer", 1.6, {
      yPercent: 100,
      ease: "expo.out",
      stagger: {
          amount:0.4
      }
    })
    .to(".layer", 1.6, {
      xPercent: 100,
      ease: "expo.out",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .from(".archCase img", 1.6, {
      scale: 1.5,
      ease: "expo.out",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    })
        
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
        start: 'top 20%',
        }
        })
})


const matchMedia  = window.matchMedia("(min-width:1000px)")

let photos = gsap.utils.toArray(".imgDiv:not(:first-child)")
const allPhotos = gsap.utils.toArray(".imgDiv")
const content = gsap.utils.toArray(".pinh1:not(:first-child)")
gsap.set(photos,{
clipPath:"inset(100% 0 0 0)"
})

ScrollTrigger.create({
        trigger:".pinSection",
        start:"top top",
        pin:".pinImg"
    })
content.forEach((e,index)=>{
    const animation = gsap.timeline().to(photos[index],{
        clipPath:"inset(0% 0 0 0)",
        ease:"none"
    })
    ScrollTrigger.create({
        trigger:e,
        start:"top 80%",
        end:"top top",
        animation:animation,
        scrub:true
    })
})
   



  
const prlxSection = document.querySelectorAll(".prlx-section")

        prlxSection.forEach(e=>{
  const prlxImg  = e.querySelector(".prlx-item")
  const prlxTl = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
    }
})
  const yHeight = prlxImg.offsetHeight - e.offsetHeight 

  prlxTl.fromTo(prlxImg,{y:-yHeight},{
    y:0,
    ease:"none"
  })
})


    const races = document.querySelector(".parallaxRace")
function getScrollAmount(){
    let racesWidth = races.scrollWidth
    return -(racesWidth-window.innerWidth)

}
const slider = gsap.to(races,{
    x:getScrollAmount,
    duration:5,ease:"none",
  

})
const parallaxDiv = selectAll(".parallaxDiv")





ScrollTrigger.create({
    trigger:".parallaxSlider",
    start:"top 20%",
    end:()=> `+=${getScrollAmount()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:slider,
})

      parallaxDiv.forEach(e=>{
  
const paralxImg =  e.querySelector("img")
        const xWidth = e.offsetWidth - paralxImg.offsetWidth
   gsap.fromTo(paralxImg,{
    x:"-22.5vw",
},{
  x:0,
  ease:"none",
     scrollTrigger:{
    trigger:e,
    start:"left right",
  end:"right left",
    scrub: true,
    containerAnimation:slider,
      id:"id"
     }
})
})


 const mask=select(".mask")
mask.addEventListener("mousemove",e=>{
gsap.to(e,{
    maskPosition:`${e.clientX}px ${e.clientY}px`,
    webkitMaskPosition:`${e.clientX}px ${e.clientY}px`,
    duration:1,
    ease:"expo.out",
})
})

    const maskScale = mask.querySelector("p")

  maskScale.addEventListener("mouseeenter",e=>{
      gsap.to(e,{
    duration:.35,
    ease:"expo.out",
        maskSize:"400px",
        webkitMaskSize:"400px"
})
    })
    maskScale.addEventListener("mouseleave",e=>{
      gsap.to(e,{
    duration:.35,
    ease:"expo.out",
        maskSize:"40px",
        webkitMaskSize:"40px"
})
  })
    


  
