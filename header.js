
var btn = document.getElementById("fade")
function divfade() {
    var cll = document.getElementById("cloth_hover");
    cll.style.display = "grid";
    cll.style.background = "white";
}
btn.addEventListener("mouseover", divfade);



var cll = document.getElementById("cloth_hover");
function divclfade() {
        cll.style.display = "none";
}
cll.addEventListener("mouseleave", divclfade);

// -------------shoeslinkhover
var btn2 = document.getElementById("shofade")
function shofade() {
    var sll = document.getElementById("shoes_hover");
    sll.style.display = "grid";
    sll.style.background = "white";
}
btn2.addEventListener("mouseover", shofade);



var sll = document.getElementById("shoes_hover");
function shoclfade() {
        sll.style.display = "none";
}
sll.addEventListener("mouseleave", shoclfade);

// -------------------fixed nav
window.onscroll = function() {myfixFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myfixFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
