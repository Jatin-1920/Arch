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


let state = false;
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

        gsap.to(".nav",0,{
            display:"block"
        })
      gsap.fromTo([firstNav,secondNav],{
      height:0,
      skewY:2,
  },{
          height:"100vh",
      skewY:0,
         duration:0.8,
      ease:"power3.inOut",     
    stagger:0.1,
          transformOrigin:"right top"
  })
      
    
    
} else{
    gsap.to([secondNav,firstNav],{
      height:0,
      duration:0.8,
      ease:"power3.inOut",
    stagger:0.07
  })
      gsap.to(".nav",0,{
          delay:.945,
          display:"none"
      })
    }
})


const panMovie = document.querySelector(".movie")

function showMovie(movi){
    gsap.fromTo(panMovie,{
        skewY:3,
        
    },{
        skewY:0,
      transformOrigin:"right top",
        duration:.5,
        ease:"power3.inOut"  
    })
 gsap.to(panMovie,.4,{opacity:1,backgroundImage:`url(${movi})`,ease:"power3.inOut"}) 

}

const movie= document.querySelectorAll(".movieBtn")
movie.forEach(movie=>{
  movie.addEventListener("mouseover",e =>{
    showMovie(e.target.dataset.movie)
    
  })
 movie.addEventListener("mouseleave",e =>{
   panMovie.style.backgroundImage=""

  }) 
})

const h1s = document.querySelectorAll("h1")
h1s.forEach(h=>{
    h.classList.add("h1")
})
const hs = document.querySelectorAll(".h1")
hs.forEach(li=>{
    
    li.addEventListener("mouseover",(e)=>{
        gsap.to(e.target,{skewX:4,y:3,duration:0.3,ease:"Power3.inOut"
    })
    })
    li.addEventListener("mouseleave",(e)=>{
        gsap.to(e.target,{skewX:0,y:-3,duration:0.3,ease:"Power3.inOut"
    })
    })
  
})

const Link = document.querySelectorAll(".li") 
Link.forEach(a=>{
    a.addEventListener("click",()=>{
  state = !state
     menuToggle.disabled = true; 
  setTimeout(()=>{
    menuToggle.disabled = false;
    menuDot.innerHTML = state ? "Close":"Menu"
  },1000)
    
  gsap.to([secondNav,firstNav],{
      height:0,
      duration:0.8,
      ease:"power3.inOut",
    stagger:0.07
  })
      gsap.to(".nav",0,{
          delay:.945,
          display:"none"
      })
    
})
    })
