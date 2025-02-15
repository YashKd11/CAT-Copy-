
var page1 = document.querySelector(".page1");
var slogan = document.querySelector("#slogan");
var h1 = document.querySelector(".page1 #slogan h1");
var p = document.querySelector(".page1 #slogan p");
var lbtn = document.querySelector(".page1 #left-button");
var Rbtn = document.querySelector(".page1 #right-button");
cnt = 0;

lbtn.addEventListener('click', function () {
    if (cnt == 0) {
        page1.style.backgroundImage = "url(55299d1b0108cf394df61d5a_sheep.jpeg)"
        slogan.style.width = "40vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "You need a good partner"
        p.innerHTML = "Let us help you realise your true potential"
        page1.style.transition = "all linear 0.5s"
        cnt = 1;
    }
    else if (cnt == 1) {
        page1.style.backgroundImage = "url(5527a395e02754bb57746389_slider1.jpg)"
        slogan.style.width = "40vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "We can change your digital world."
        p.innerHTML = "Bold enough to blow a hole in your next marketing campaign."
        page1.style.transition = "all linear 0.5s"
        cnt = 2;
    }
    else if (cnt == 2) {
        page1.style.backgroundImage = "url(55299e51264213136f7d6a43_hoop.jpg)"
        slogan.style.width = "20vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "Shoot for the hoop"
        p.innerHTML = "Aiming low is not an option for us"
        page1.style.transition = "all linear 0.5s"
        cnt = 0;
    }
})

Rbtn.addEventListener('click', function () {
    if (cnt == 0) {
        page1.style.backgroundImage = "url(5527a395e02754bb57746389_slider1.jpg)"
        slogan.style.width = "40vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "We can change your digital world."
        p.innerHTML = "Bold enough to blow a hole in your next marketing campaign."
        page1.style.transition = "all linear 0.5s"
        cnt = 1;
    }
    else if (cnt == 1) {
        page1.style.backgroundImage = "url(55299d1b0108cf394df61d5a_sheep.jpeg)"
        slogan.style.width = "40vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "You need a good partner"
        p.innerHTML = "Let us help you realise your true potential"
        page1.style.transition = "all linear 0.5s"
        cnt = 2;
    }
    else if (cnt == 2) {
        page1.style.backgroundImage = "url(55299e51264213136f7d6a43_hoop.jpg)"
        slogan.style.width = "20vw"
        slogan.style.textAlign = "right"
        h1.innerHTML = "Shoot for the hoop"
        p.innerHTML = "Aiming low is not an option for us"
        page1.style.transition = "all linear 0.5s"
        cnt = 0;
    }
})

var tl = gsap.timeline();

tl.from(".page2 #line2 #r1 h2",{
    y:"200%",
    opacity: -1,
    duration: 0.7,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",     
        start: "top 50%",
        end:"top 40%",
        scrub: 1
    }
})

tl.from("#line2 #r1 h2+h2+p",{
    x:"-25%",
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger:".page2",
        scroller:"body",      
        start: "top 50%",
        end:"top 40%",
        scrub: 1
    }
})

tl.from("#line1 #l2 h2",{
    y:"110%",
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start: "top -10%",
        end:"top -30%",
        scrub:1
    }
})

tl.from("#line1 #l2 h2+h2+p",{
    x:"-20%",
    opacity:0,
    duration: 0.8,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub: 1
    }
})

tl.from("#stats h1,#stats p",{
    opacity:0,
    delay:0.5,
    scrollTrigger:{
        trigger:"#stats",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:0.5
    }
})

tl.from("#row2 .box",{
    y:"50%",
    opacity: 0,
    stagger: 0.6,
    scrollTrigger:{
        trigger:"#row2",
        scroller:"body",
        start:"top 60%",
        end: "top 30%",
        scrub:2
    }
})

tl.from("#stats-2 div h1",{
    y:"110%",
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#stats-2",
        scroller:"body",
        start: "top 50%",
        end:"top 40%",
        scrub:1
    }
})

tl.from("#stats-2 div p",{
    x:"-20%",
    opacity:0,
    duration: 0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#stats-2",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub: 1
    }
})

tl.from("#greet div h1",{
    y:"110%",
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#greet",
        scroller:"body",
        start: "top 60%",
        end:"top 50%",
        scrub:1
    }
})

tl.from("#greet div p",{
    x:"-20%",
    opacity:0,
    duration: 0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#greet",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub: 1
    }
})