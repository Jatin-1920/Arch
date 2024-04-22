

const vignetteAnim =[
  {img:"arch1.jpg",vigImg:"arch4.jpg"},
  {img:"arch78.jpg",vigImg:"arch36.jpg"},
    {img:"arch109.jpg",vigImg:"arch123.jpg"},
    {img:"archi2.jpeg",vigImg:"archi1.jpeg"},
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
mainGallery.innerHTML = html
