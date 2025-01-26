gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from("nav, img", {
  y: -30,
  opacity: 0,
  duration: 0.75,
  delay: 0.4,
});

tl.from("nav li", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
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

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourservice",
    scroller: "body", // Ensure this matches your scrollable container
    markers: true,
    start: "top 50%",
    end: "0",
    scrub: 2,
  },
});

console.log(document.querySelectorAll("productDiv"));

tl2.from("#ourservice h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

setTimeout(() => {
  const nodes = document.querySelectorAll("product");
  console.log(nodes); // Check if cards are selected
  gsap.from(nodes, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
}, 0);
