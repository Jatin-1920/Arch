gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({ 
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.05,
    smooth: 2,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
  });



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
