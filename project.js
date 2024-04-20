
gsap.registerPlugin(ScrollTrigger)
const selec = (e)=>document.querySelector(e)
const selecAll = (e)=>document.querySelectorAll(e)
const archCon = selec(".archContainer")
const gallery = selec(".archGallery")
const previewImg = selec(".previewImg img")



  for(let i=0;i<150;i++){
    const newDiv = document.createElement("div")
    const newImages = document.createElement("img")
    newDiv.className = "archItem"
    newImages.src = `arch${i+1}.jpg`
    gallery.appendChild(newDiv)
    newDiv.appendChild(newImages)
  }
 const allItem = selecAll(".archItem")
const numbersI = allItem.length
const angle = 360/numbersI
allItem.forEach((item,index)=>{
  gsap.to(item,{
    rotateY:90,
   rotateZ:angle * index - 90,
    transformOrigin:"50% 400px",
    
  })
  item.addEventListener("mouseover",()=>{
    const Im = item.querySelector("img")
    previewImg.src = Im.src
    gsap.to(item,{
      x:20,
      y:10,
      z:10,
      duration:.5,
      ease:"power3.inOut"
    })
  })
  item.addEventListener("mouseout",()=>{
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
  scrub: 2,
  onRefresh:setUpRotate,
  onUpdate: (self) => {
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


    
