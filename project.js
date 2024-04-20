
gsap.registerPlugin(ScrollTrigger)
const selec = (e)=>document.querySelector(e)
const selecAll = (e)=>document.querySelectorAll(e)
const archCon = selec(".archContainer")
const gallery = selec(".archGallery")
const previewImg = selec(".previewImg img")
document.addEventListener("mousemove",(e)=>{

  const x = e.clientX
  const y = e.clientY
  const centerX = window.innerWidth/2
  const centerY = window.innerHeight/2

  const percentX = (x-centerX) / centerX
  const percentY = (y-centerY) / centerY

  const rotateX = 55 + percentY * 2
  const rotateY =  percentX * 2
  gsap.to(gallery,{
    duration:1,
    ease:"power2.inOut",
    rotateX :rotateX,
    rotateY:rotateY,
    overwrite:"auto"
  })

  
})
for(let i=0; i<47; i++){
 
  const item = document.createElement("div")
  const archImg = document.createElement("img")
  item.className = "archItem"
  archImg.src = `arch${i}.jpg`
  gallery.appendChild(item)
  item.appendChild(archImg)
}

  const allItem = selecAll(".archItem")
const numbersI = allItem.length
const angle = 360/numbersI
allItem.forEach((item,index)=>{
  gsap.to(item,{
    rotationY:90,
    rotationZ:index * angle - 90,
    transformOrigin:"50% 400px",
    
  })
  item.addEventListener("mouseover",()=>{
    const Im = item.querySelector("img")
    previewImg.src = Im.src
    gsap.to(item,{
      x:10,
      y:10,
      z:10,
      duration:.5,
      ease:"power3.inOut"
    })
  })
  item.addEventListener("mouseleave",()=>{
    previewImg.src = "plx2.jpeg"
    gsap.to(item,{
      x:0,
      y:0,
      z:0,
      duration:.5,
      ease:"power3.inOut"
    })
  })
})

ScrollTrigger.create({
  trigger:"body",
  start:"top top",
  end:"bottom bottom",
  scrub: true,
  onRefresh:setUpRotate,
  onUpdate = self =>{
    const progress = self.progress * 360 * 1
    allItem.forEach((item,index)=>{
      const newAngle = index * angle - 90 + progress
      gsap.to(item,{
    rotationZ:newAngle,
    duration:1,
        ease:"power2.inOut",
        overwrite:"auto"
    
  })
    })
  }
})
function setUpRotate(){}


    
