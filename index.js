const nav = document.getElementById("nav-1");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");

let thumbnail=document.getElementById("key-one");
let slideshowbtn=document.getElementById("slideshow")

menuBtn.addEventListener("click", () => {
  nav.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block"
});

//window on scroll of the navigation menu  to dissappear3i
window.addEventListener("scroll", () => {
  
})
 slideshowbtn.addEventListener("click", (
  
 ) =>{thumbnail.style.display="flex"})

closeBtn.addEventListener("click", () => {
  nav.style.display = "none";
  closeBtn.style.display = "none"
  menuBtn.style.display = "block"
});

let plus =document.getElementById("plus");
let minus =document.getElementById("minus");
let num = document.getElementById("num");

let a=1;

plus.addEventListener("click",()=>{
    if(a<=19)
    a++;
    a=(a<20)?"0"+a:a;
    num.innerHTML = a;
});
minus.addEventListener("click",()=>{
    if(a>=1)
    a--;
    a=( a >0)?"0"+a:a;
    num.innerHTML = a;
});

const slideshowContainer = document.querySelector('.shoe-image');
const slideshowImages = document.querySelectorAll('.shoe-child img');
let currentIndex = 0;
function changeSlide() {
  slideshowImages[currentIndex].classList.remove('active');
  console.log(slideshowImages[currentIndex]);
  currentIndex++;

  if (currentIndex >= slideshowImages.length) {
    currentIndex = 0;
  }

  slideshowImages[currentIndex].classList.add('active');
}

slideshowImages[0].classList.add('active');

setInterval(changeSlide, 3000); // Change slide every 3 seconds
//slideshow code 
//previuos button 
document.getElementById('prev').addEventListener('click', ()=> {
   currentIndex = parseInt(document.getElementById('shoe-child').style.transform.slice(7, -3), 10);
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  document.getElementById('shoe-child').style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
});
//next button 
document.getElementById('next').addEventListener('click', function() {
  var currentIndex = parseInt(document.getElementById('shoe-child').style.transform.slice(7, -3), 10);
  currentIndex++;
  if (currentIndex > 3) {
    currentIndex = 0;
  }
  document.getElementById('shoe-child').style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
});