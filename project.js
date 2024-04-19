
gsap.registerPlugin(ScrollTrigger)
const selec = (e)=>document.querySelector(e)
const selecAll = (e)=>document.querySelectorAll(e)
const archCon = selec(".archContainer")
const gallery = selec(".archGallery")
archCon.addEventListener("mousemove",(e)=>{

  const x = e.clientX
  const y = e.clientY
  const centerX = window.innerWidth/2
  const centerY = window.innerHeight/2

  const precentX = (x-centerX) / centerX
  const precentY = (y-centerY) / centerY

  const rotateX = 55 + percentY *2
  const rotateY =  percentX *2
  gsap.to(gallery,{
    duration:1,
    ease:"power2.inOut",
    rotateX :rotateX,
    rotateY:rotateY,
    overwrite:"auto"
  })

  
})
for(let i=0, i<40,i++){
 
  const item = document.createElement("div")
  const archImg = document.createElement("img")
  item.className = "archItem"
  archImg.src = `arch${i}.jpg`
  gallery.appendChild(item)
  item.appendChild("img")
}

  const allItem = selecAll(".archItem")
const numberI = allItem.length
const angleIncrement = 360/numberI
allItem.forEach((item,index)=>{
  gsap.set(item,{
    rotationY:90,
    rotationZ:index*angelIncrement-90,
    transformOrigin:"50% 400px"
  })
})
