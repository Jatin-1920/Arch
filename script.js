gsap.registerPlugin(ScrollTrigger)


let container = document.querySelector(".container")
    let child = document.querySelector(".child")
    tween = gsap.to(child, {
      padding: 40,
      onUpdate: () => tween.scrollTrigger.spacer.style.height = child.offsetHeight + "px",
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: "max",
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      }
    });

  

