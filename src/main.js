// import "./style.css";

const menu = document.getElementById("menu");
const closemenu = document.getElementById("closemenu");
const mobliemenu = document.getElementById("mobliemenu");
const moblieSection = document.querySelectorAll(".mobile_section_name");

let userclick_Navbar = false;

menu.addEventListener("click", () => {
  userclick_Navbar = !userclick_Navbar;
  if (userclick_Navbar) {
    mobliemenu.classList.remove("hidden");
  } else {
    mobliemenu.classList.add("hidden");
  }
  console.log("hi");
});

closemenu.addEventListener("click", () => {
  userclick_Navbar = !userclick_Navbar;
  if (userclick_Navbar) {
    mobliemenu.classList.remove("hidden");
  } else {
    mobliemenu.classList.add("hidden");
  }
  console.log("hi");
});

moblieSection.forEach((item) => {
  item.addEventListener("click", () => {
    userclick_Navbar = !userclick_Navbar;
    if (userclick_Navbar) {
      mobliemenu.classList.remove("hidden");
    } else {
      mobliemenu.classList.add("hidden");
    }
    console.log("hi");
  });
});
