gsap.to(".imagecontainer",{
    ease: "expo.inOut",
    width: "100%",
    // duration:2,
    stagger:2.5,
    repeat:-1
})

gsap.to(".text h1",{
    ease: "expo.inOut",
    stagger:2.5,
    top:0,
    repeat:-1
})
gsap.to(".text h1",{
    delay:2.5,
    ease: "expo.inOut",
    stagger:2.5,
    top:"-150%",
    repeat:-1
})