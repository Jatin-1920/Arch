

const vignetteAnim =[
  {img:"about.jpeg",vigImg:"movie1.jpeg",heading:"Innovation",para:"We embrace new technologies, materials, and design methodologies to push the boundaries of what's possible."},
  {img:"archi3.jpeg",vigImg:"movie2.jpeg",heading:"Sustainability",para:"We are committed to environmentally responsible design practices, aiming to minimize our ecological footprint and create spaces that enhance the well-being of both people and the planet."},
    {img:"movie3.jpeg",vigImg:"movie4.jpeg",heading:"Collaboration",para:"We foster a collaborative approach, working closely with clients, stakeholders, and industry partners to achieve shared goals and deliver exceptional results."},
    {img:"archi2.jpeg",vigImg:"archi4.jpeg",heading:"Our Projects",para:"Explore a portfolio of our most notable projects, each a testament to our dedication to excellence and innovation. From sleek urban skyscrapers to sustainable community developments, our diverse body of work showcases our versatility, creativity, and unwavering commitment to quality." },
]

const html = vignetteAnim.map(x=>
`
<div class="galleries">
<div class="galleriesItem">
<img src="${x.img}">
</div>
<div class="vigContent">
<p>${x.para}</p>
</div>
<div class="vignette">
<img src="${x.vigImg}">
<p class="vigP">${x.heading}</p>
</div>
</div>
  `
).join('')

const mainGallery =  document.querySelector(".mainGallery")
const aboutTop =  document.querySelector(".aboutTop")
const vignette =  document.querySelectorAll(".vignette")
mainGallery.innerHTML = html
mainGallery.addEventListener("mousemove",(e)=>{
  const xp =  e.clientX 
  const yp = e.clientY 
  gsap.to(".vignette",{
    top:yp,
    left:xp,
    duration:1,
    ease:"power3.inOut"
  })
})

aboutTop.addEventListener("mousemove",(e)=>{
  const xps =  e.clientX 
  const yps = e.clientY 
  gsap.to(".aboutModal",{
    top:yps,
    left:xps,
    duration:1,
    ease:"power3.inOut"
  })
  
})

const slec = e=> document.querySelector(e)
const fline1 = slec(".fline1")
    const fline2 = slec(".fline2")
const fline3 = slec(".fline3")
const fline4 = slec(".fline4")
const fline5 = slec(".fline5")
const email = slec("#email")
const name = slec("#name")
const formdiv = slec(".formlogdiv")
const formSp = slec(".form span")
const formP = slec(".form P") 
const formTl = gsap.timeline({paused:true})
formTl.to(".formContainer",0,{
    display:"block",
  }).from(".formContainer",{
  scaleY:0,
      duration:.8,
    ease:"power2.inOut",
  transformOrigin:"top"
},0).from([fline1,fline5,fline2],{
  height:0,
  duration:.8,
  stagger:0.1,
  ease:"power2.inOut"
   }).from([fline3,fline4],{
  width:0,
  duration:.8,
  stagger:0.1,
  ease:"power2.inOut"
   }).from([formSp,formP],{
  duration:.6,
  stagger:0.1,
  opacity:0,
  ease:"power2.inOut"
   }).from([name,email,formdiv],{
  opacity:0,
  duration:.6,
    stagger:0.1,
  ease:"power2.inOut"
   })
const formbtn = document.querySelector(".formbtn")

let formState = false
function switchForm(){
  formState = !formState
  if(formState){
    formTl.play()
  } else{
    formTl.reverse()
  }
}
  formbtn.addEventListener("click", switchForm)
