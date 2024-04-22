const lenis = new Lenis({
  smooth:true,
  smoothTouch:false,
  lerp:0.1,
  duration:1.5
})



lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0) 


const introTl = gsap.timeline()

introTl.from(".line",{
  delay:1,
  duration:1.6,
  y:60,
  skewY:7,
  ease:"power2.inOut"
}).to(".toplayer",{
  yPercent:100,
  
})
