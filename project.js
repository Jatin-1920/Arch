
document.addEventListener("mousemove",(e)=>{

  const x = e.clientX
  const y = e.clientY
  const centerX = window.innerWidth/2
  const centerY = window.innerHeight/2

  const precentX = (x-centerX) / centerX
  const precentY = (y-centerY) / centerY
})
