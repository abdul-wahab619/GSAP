function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h1,nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.15,
  });
  tl.from(
    ".center-part-1 h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from(".center-part-1 p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part-2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.5"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "abc"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "abc"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "def"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "def"
  );
}
page1Animation();
page2Animation();
