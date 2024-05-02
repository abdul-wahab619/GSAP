// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });
// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: "page2 #box",
// });
// gsap.from("#page3 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

/////////////////////////////////////////////////
// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration: 2,
//   x: 500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from("#page3 #box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 720,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 10%",
//     scrub: true,
//   },
// });

// gsap.from("#page1 #box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 720,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page1 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 5%",
//     scrub: true,
//     pin: true,
//   },
// });

//////////////////////////////////////////////////////////////

gsap.to("#page2 h1", {
  transform: "translateX(-170%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
