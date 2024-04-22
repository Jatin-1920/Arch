

const vignetteAnim =[
  {img:"archi1.jpeg",vigImg:"movie1.jpeg"},
  {img:"archi3.jpeg",vigImg:"movie2.jpeg"},
    {img:"movie3.jpeg",vigImg:"movie4.jpeg"},
    {img:"archi2.jpeg",vigImg:"archi4.jpeg"},
]

const html = vignetteAnim.map(x=>
`
<div class="galleries">
<div class="galleriesItem">
<img src="${x.img}">
</div>
<div class="vignette">
<img src="${x.vigImg}">
</div>
</div>
  `
).join('')

const mainGallery =  document.querySelector(".mainGallery")
const vignette =  document.querySelectorAll(".vignette")
mainGallery.innerHTML = html
mainGallery.addEventListener("mousemove",(e)=>{
  const xp =  e.clientX 
  const yp = e.clientY 
  gsap.to(".vignette",{
    top:yp,
    left:xp,
    duration:1.2,
    ease:"power2.inOut"
  })
})
