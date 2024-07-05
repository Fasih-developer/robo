function navbar(){
    let open1 = document.querySelector('nav p');
    let close1 = document.querySelector('.navbar i');
    let navbar = document.querySelector('.navbar');
    
    let z =1 ;
    open1.addEventListener('click',function(){
        navbar.style.top = '0%';
        z=0
    })
    close1.addEventListener('click',function(){
        navbar.style.top = '-100%';
        z=1
    })
}
function videoplay (){
    let play = document.querySelector('.play');
    let video = document.querySelector('.page-3-video video');
    video.addEventListener('mousemove',function (decs) {
        gsap.to(play, {
            left: decs.x - 50,
            top: decs.y - 70,
          });
    })
    video.addEventListener('mouseenter',function () {
        gsap.to(play, {
            opacity:1,
            scale:1.2,
            });
    })
    video.addEventListener('mouseleave',function () {
        gsap.to(play, {
            opacity:0,
            scale:0,
            });
    })
    video.addEventListener('click',function(){
        if (video.muted ===  true) {
            video.muted = false;
        }
         else {
            video.muted = true;
        }
    })
}
function videopin(){
    gsap.to('.page-3-video', {
        scrollTrigger: {
            trigger: ".page-3",
            start: "top top",
            end: "bottom 40%",
            // markers:true,
        scrub:true,
        pin:true, 
        },
        scale:1,
        duration:.2
    })
}
function page1(){
    gsap.from('nav p', {
        right:'-10vw',
        opacity:0,
        delay:2.2,
        duration:1.1
    })
    gsap.from('nav', {
        top:'-10vw',
        opacity:0,
        delay:2.2,
        duration:1.1
    })
    gsap.from('.page-1-head h1', {
        top:'12vw',
        opacity:0,
        delay:.8,
        ease: "power1.out",
        duration:2.2
    })
    gsap.from('.page-1 iframe', {
        scale:1.8,
        opacity:0.8,
        delay:.2,
        duration:3.5,
        ease: "power1.out"
    })
    gsap.from('.ad button', {
        top:'10vw',
        opacity:0,
        delay:2.2,
        duration:1.1
    })
    
}
function page2(){
    gsap.from('.marque', {
        scrollTrigger: {
            trigger: ".marque h4",
            start: "top 70%",
            end: "bottom 50%",
            // markers:true,
        scrub:true,
        },
        duration:10,
        opacity:0,
    })
}


// ---------------------------timeline------------------------------
let tl = gsap.timeline();
tl
.from('#shop1 ', {
    scrollTrigger: {
        trigger: ".page-4",
        start: "70% 62%",
        end:'bottom 40%',
        scrub: 2,
        },
    scale:0,
    opacity:0,
    scrub:2,
    duration:3.5,
})
.from('#shop2 ', {
    scrollTrigger: {
        trigger: ".page-4",
        start: "70% 58%",
        end:'bottom 40%',
        scrub: 2,
        },
    scale:0,
    opacity:0,
    scrub:2,
    duration:3.5,
})
.from('#shop3 ', {
    scrollTrigger: {
        trigger: ".page-4",
        start: "70% 52%",
        end:'bottom 40%',
        scrub: 2,
        },
    scale:0,
    opacity:0,
    scrub:2,
    duration:3.5,
})





gsap.from('.page-5 iframe', {
        scrollTrigger: {
            trigger: ".page-5",
            start: "40% 20%",
            end:'70% 20%',
            scrub: 2,
            },
        scale:1.8,
        opacity:0,
        duration:3.5,
        ease: "power2.out"
})
gsap.from('.page-5-head h1', {
        scrollTrigger: {
            trigger: ".page-5",
            start: "40% 20%",
            end:'70% 20%',
            scrub: 2,
        },
        scale:1,
        opacity:0,
        duration:3.5,
        delay:.5,
        ease: "power2.out"
})
gsap.to('.ad button', {
        scrollTrigger: {
        trigger: ".page-5",
        start: "40% 20%",
        end:'70% 20%',
        scrub: true,
        },
        opacity:0,
})



navbar();
page1();
page2();
videopin();
videoplay();