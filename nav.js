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

