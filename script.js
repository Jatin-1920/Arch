gsap.registerPlugin(ScrollTrigger,Flip)


const lenis = new Lenis({
  smooth:true,
  smoothTouch:false,
  lerp:0.05,
  duration:1
})



lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
const select = e => document.querySelector(e)
const selectAll = e => document.querySelectorAll(e)
const intro = select(".introAnim")


const animTl = gsap.timeline()
animTl.fromTo(".line",{
  y: 100,
  skewY: 7,  
},{
  ease: "power4.out",
    delay: 1,
    y: 0,
  skewY: 0,  
  duration:1.8,
    stagger: {
      amount: 0.3
    }
}).to(".toplayer",{
  duration:1.6,
  ease:"expo.out",
  stagger:{
    amount:.4
  },
  yPercent:100
}).to(".layer",{
  xPercent:100,
  duration:1.6,
  ease:"expo.out",
  stagger:{
    amount:.4
  },
  delay:-0.8
}).from(".archCase img",{
  duration:1.6,
  ease:"expo.out",
  stagger:{
    amount:.4
  },
  scale:1.5,
  delay:-2
})


const movie = document.querySelectorAll(".movieBtn")
let state = false
const menuToggle = document.querySelector(".menu")
const firstNav = document.querySelector(".firstNav")
const secondNav = document.querySelector(".secondNav")
menuToggle.addEventListener("click",(e)=>{
state = !state
  menuToggle.disabled = true;
    setTimeout(()=>{
      menuToggle.disabled = false;
    menuToggle.innerHTML = state ? "Close":"Menu"
  },1000)


    
    if(state) {
      
gsap.fromTo([firstNav,secondNav],{
  height:0,
  transformOrigin:"right top",
  skewY:2,
  
},{
  height:"100vh",
  duration:.8,
  ease:"power3.inOut",
  stagger:.1,
  skewY:0,
}) 
} else{
    gsap.to([secondNav,firstNav],{
  height:0,
  duration:.8,
  ease:"power3.inOut",
  stagger:.07
})   
    }
})

    

const panMovie = document.querySelector(".movie")
function showMovie(movi){
  gsap.fromTo(panMovie,1,{
    transformOrigin:"right top",
  skewY:2,
  },{
        transformOrigin:"right top",
  skewY:0,
    ease:"power3.inOut"
  })
 gsap.to(panMovie,.4,{opacity:1,backgroundImage:`url(${movi})`,ease:"power3.inOut"}) 

}

movie.forEach(movie=>{
  movie.addEventListener("mouseover",e =>{
    showMovie(e.target.dataset.movie)
    
  })
 movie.addEventListener("mouseleave",e =>{
   panMovie.style.backgroundImage=""
  }) 
})







const linka= document.querySelectorAll(".li")

linka.forEach(a=>{
    a.addEventListener("mouseover",(e)=>{
        gsap.to(e.target,{skewX:4,y:3,duration:0.3,ease:"Power3.inOut"
    })
    })
    a.addEventListener("mouseleave",(e)=>{
        gsap.to(e.target,{skewX:0,y:-3,duration:0.3,ease:"Power3.inOut"
    })
    })
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


    
      


  
