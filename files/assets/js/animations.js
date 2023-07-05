/*gsap.registerPlugin(ScrollTrigger);*/

gsap.to( ".services",{
    x: 50,
    duration: 5,
    ease: "bounce",
    repeat: -1
})

/*gsap.to(".services", {
        x: "45%",
    scrollTrigger: {
       /!* trigger: border.parentElement,*!/
        start: 'top bottom',
        end: 'center center',
        back: 'end end',
        scrub: true
    }
})*/
