var menu = document.querySelector("#nav i ");
var close_menu = document.querySelector("#full i ");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.6,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.3,
  stagger: 0.25,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close_menu.addEventListener("click", function () {
  tl.reverse();
});
