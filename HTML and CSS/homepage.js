var slideIndex = 1;
var updateIndex=1;

var timer=setInterval(autoSlide, 4000);
var timer1=setInterval(autoSlide1, 4000);

function minusSlide(){
  clearInterval(timer);
  slideIndex = slideIndex - 2;
  if(slideIndex==-1){
    slideIndex=5;
  }
  autoSlide();
  timer=setInterval(autoSlide, 4000);
}
function plusSlide(){
  clearInterval(timer);
  autoSlide();
  timer=setInterval(autoSlide, 4000);
}

function currentSlide(n) {
  clearInterval(timer);
  autoSlide(slideIndex = n);
  timer=setInterval(autoSlide, 4000);
}


function minus(){
  clearInterval(timer1);
  updateIndex= updateIndex-2;
  if(updateIndex==-1){
    updateIndex=3;
  }
  autoSlide1();
  timer1=setInterval(autoSlide1, 4000);
}
function plus(){
  clearInterval(timer1);
  autoSlide1();
  timer1=setInterval(autoSlide1, 4000);
}
function updateSlide(n) {
  clearInterval(timer1);
  autoSlide1(updateIndex = n);
  timer1=setInterval(autoSlide1, 4000);
}

function autoSlide() {
  var a;
  var slides = document.getElementsByClassName("slides");
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}

function autoSlide1() {
  var a;
  var slide = document.getElementsByClassName("slide");
  for (a = 0; a < slide.length; a++) {
    slide[a].style.display = "none";
  }
  updateIndex++;
  if (updateIndex > slide.length) {updateIndex = 1}
  slide[updateIndex-1].style.display = "block";
}
