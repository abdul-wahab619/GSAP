// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.to("#box2", {
//   x: 1200,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
//   backgroundColor: "yellow",
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   padding: 2,
//   stagger: 1,
// });

/////////////////////////////////////

// gsap.to("#box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1500,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });

/////////////////////////////////
// let tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1500,
//   backgroundColor: "yellow",
//   duration: 1.5,
// });

// tl.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
// });

//////////////////////////////////////////////////
let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
