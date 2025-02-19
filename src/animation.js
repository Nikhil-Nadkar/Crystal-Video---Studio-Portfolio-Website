gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from("nav, img", {
  y: -30,
  opacity: 0,
  duration: 0.75,
  delay: 0.2,
});

tl.from("nav li", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
});

tl.from(
  "#herosection",
  {
    y: -80,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);
