gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

gsap.to(".image", {
  x: -600,
  duration: 15,
  repeat: -1,
});

gsap.to(".logox1", {
  x: -1000,
  duration: 18,
  repeat: -1,
});

gsap.to(".logox2", {
  x: -1000,
  duration: 22,
  repeat: -1,
});
gsap.to(".logox3", {
  x: -1000,
  duration: 16,
  repeat: -1,
});


// gsap.to('.slide1',{
//     scrollTrigger:{
//         // scroller:'#main',
//         trigger:'.slide2',
//         pin:'.slide1',
//         markers:true,
//         start:"top 90%",
//         end:"bottom top",
//     }
// });
// gsap.to('.slide2',{
//     scrollTrigger:{
//         // scroller:'#main',
//         trigger:'.slide3',
//         pin:'.slide2',
//         markers:true,
//         start:"top 90%",
//         end:"bottom top",
//     }
// });
// gsap.to('.slide3',{
//     scrollTrigger:{
//         // scroller:'#main',
//         trigger:'.slide4',
//         pin:'.slide3',
//         markers:true,
//         start:"top 90%",
//         end:"bottom top",
//     }
// });


//pin  dbdfbdfdfdfdffdf



// gsap.fromTo('.slide1',{
//     y:0
// },{y:0})

// gsap.to('.slide1',{
//     scrollTrigger:{
//         // scroller:'#main',
//         trigger:'.slide4',
//         pin:'.slide1',
//         markers:true,
//         scrub:true,
//         start:"-300% 10%",
//         end:"top 50%",
//     }
// });

// gsap.fromTo('.slide2',{
//     y:0
// },{y:0})

// gsap.to('.slide1',{
//     scrollTrigger:{
//         // scroller:'#main',
//         trigger:'.slide4',
//         pin:'.slide2',
//         markers:true,
//         scrub:true,
//         start:"-200% 10%",
//         end:"top 50%",
//     }
// });



//dftghdfgtyhdtgdftghgd


gsap.to('.award',{
    scrollTrigger:{
        // scroller:'#main',
        trigger:'.page6right',
        pin:'.award',
        pinSpacing:false,
        // markers:true,
        start:"top 10%",
        end:"bottom 50%",

    }
})


gsap.from('#slide1',{
    scrollTrigger:{
        // scroller:'#main',
        trigger:'#slide4',
        pin:'#slide1',
        pinSpacing:false,
        scrub:true,
        // markers:true,
        start:"-300% 10%",
        end:"top 10%",
    }
});
gsap.from('#slide2',{
  scrollTrigger:{
      // scroller:'#main',
      trigger:'#slide4',
      pin:'#slide2',
      pinSpacing:false,
      scrub:true,
      // markers:true,
      start:"-200% 16%",
      end:"top 16%",
  }
});
gsap.from('#slide3',{
  scrollTrigger:{
      // scroller:'#main',
      trigger:'#slide4',
      pin:'#slide3',
      pinSpacing:false,
      scrub:true,
      // markers:true,
      start:"-100% 22%",
      end:"top 22%",
}});


// gsap.from('#slide4',{
//   y:0,
//   scrollTrigger:{
//       // scroller:'#main',
//       trigger:'.swiperup',
//       // pin:'#slide4',
//       // pinSpacing:false,
//       scrub:true,
//       markers:true,
//       start:"top 28%",
//       end:"top 28%",
//   }
// });