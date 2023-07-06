gsap.registerPlugin(ScrollTrigger);


gsap.from( ".services",{
    x: -500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none restart"
    }
})

gsap.from(".equipment",{
    x: 500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".equipment",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none restart"
    }
})

gsap.from( ".ce_image.left",{
    x: -500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".ce_image.left",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none restart"
    }
})

gsap.from(".ce_image.right",{
    x: 500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".ce_image.right",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none restart"
    }
})





