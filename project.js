const archCon = select(".archContainer")
const gallery = select(".gallery")
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
    rotateY:rotateY
  })

  
})
