
const sliders = document.querySelectorAll(".slider");
// interval between switching images
// can't be less than your animation duration in css!
const interval = 4000;
// if you don't want to first animation last longer than other animations  
// set animDuration (in miliseconds) to your value of animation duration in css
const animDuration = 1000;


// -------------bannerslider
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
var myIndexnext = 0;
carouselnext();

function carouselnext() {
  var y = document.getElementsByClassName("mySlidesnext");
  for (var i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  myIndexnext++;
  if (myIndexnext > y.length) { myIndexnext = 1 }
  y[myIndexnext - 1].style.display = "block";
  setTimeout(carouselnext, 3000); // Change image every 2 seconds
}

var Cnt = false || localStorage.getItem("cnt");
document.querySelector(".prfl").addEventListener("click",ckprfl);

 function ckprfl(){

	if(Cnt === "true"){
	window.location.href="myAccount.html"
	}else{
	window.location.href="signin.html"
}
}



