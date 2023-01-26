const sliders = document.querySelectorAll(".slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    const interval = 4000;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    const animDuration = 1000;
    // for (let i = 0; i < sliders.length; ++i) {
    //   const slider = sliders[i];
    //   const dots = slider.querySelector(".dots");
    //   const sliderImgs = slider.querySelectorAll(".img");
  
      // let currImg = 0;
      // let prevImg = sliderImgs.length - 1;
      // let intrvl;
      // let timeout;

    var slideimg=document.getElementById("slideimg");
    var img=new Array(
        "img/bagimage3.png",
        "img/download.jfif",
        "img/bagimag2.webp"
    );
    var length=images.length;
    var i=0;
    function sliderimg(){
      if(i>length-1){
      i=0;
      }
    slideimg.src=images[i];
    i++;
    }
    setTimeout('sliderimg()', 3000);