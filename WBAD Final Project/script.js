function submitMsg() {
  alert("Login Successful!")
}

function reviewMsg() {
  alert("Your review has been successfully submitted.")
}

function submitContactMsg() {
  alert("Request has been successfully submitted.")
}

$ = function(popup1) {
  return document.getElementById(popup1);
}
  
var show = function(popup1) {
    $(popup1).style.display ='block';
}
var hide = function(popup1) {
    $(popup1).style.display ='none';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-pic");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}