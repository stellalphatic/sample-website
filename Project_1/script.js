var cursor = document.querySelector("#cursor")
var cursorblur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"

    cursorblur.style.left = dets.x - 150 + "px"
    cursorblur.style.top = dets.y - 150 + "px"

})

gsap.to("#nav", {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,  //smoothness
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -95%",
        scrub: 2,  //smoothness
    }
})