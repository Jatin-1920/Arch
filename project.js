
gsap.registerPlugin(ScrollTrigger)
const selec = (e)=>document.querySelector(e)
const selecAll = (e)=>document.querySelectorAll(e)
const archCon = selec(".archContainer")
const gallery = selec(".archGallery")
const previewImg = selec(".previewImg img")

const numImages = 150;
const radius = 200; // Adjust radius as needed
const angleIncrement = 360 / numImages;
for(let i=0; i<150; i++){
 const angle = angleIncrement * i;
  
  const item = document.createElement("div")
  const archImg = document.createElement("img")
  item.className = "archItem"
  archImg.src = `arch${i+1}.jpg`
  gallery.appendChild(item)
  item.appendChild(archImg)
 archImg.style.transform = `rotateY("90deg") rotateZ(${angle}deg)`
}

  
 const allItem = selecAll(".archItem")
const numbersI = allItem.length
const angles = 360/numbersI
/*allItem.forEach((item,index)=>{
 const angle = angleIncrement * index;
  const x = radius * Math.cos(angle) + container.clientWidth / 2;
  const y = radius * Math.sin(angle) + container.clientHeight / 2;
  gsap.to(item,{
    x:x,
   y:y,
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
}) */
ScrollTrigger.create({
  trigger:"body",
  start:"top top",
  end:"bottom bottom",
  scrub: 2,
  onRefresh:setUpRotate,
  onUpdate: (self) => {
    const progress = self.progress * 360 * 1
    allItem.forEach((item,index)=>{
      const newAngle = index * angles - 90 + progress
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


    
