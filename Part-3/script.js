var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "View More";

  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "#ffffff8a",
  });
});

imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
