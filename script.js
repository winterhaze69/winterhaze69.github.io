let i = 0;
let txto = "Actuellement en formation, je développe sur une large gamme de langages  sans discrimination entre  les  outils du front ou back end dans un souci de polyvalence. Par ailleurs je me forme aussi sur des frameworks tel que Laravel ou Express via NodeJs. De manière autonome je développe des sites et des applications, nottamment en python."
let speed = 50;

function typeWriter() {
  if (i < txto.length) {
    document.getElementById("demo").innerHTML += txto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};


document.querySelector('body').addEventListener('mouseover',function(element){
    let el = element.target;
    if(el.id == 'hobby1'){
       let txt = document.getElementById("txt");
        txt.innerHTML = "Exploration";
    }else if (el.id == 'kenobi') {
        let txt2 = document.getElementById("txt2");
         txt2.innerHTML = "Gaming";
    }else if (el.id == 'tobe3') {
        let txt3 = document.getElementById("txt3");
         txt3.innerHTML = "Space";
    }else{
       txt.innerHTML = "";
       txt2.innerHTML = "";
       txt3.innerHTML = "";

    }
});
let prevScrollpos = window.pageYOffset;
document.querySelector(".anim1").style.WebkitAnimationName = "pirouette";
document.querySelector(".anim1").style.webkitAnimationPlayState = "paused";
document.querySelector(".anim1").style.animationName = "pirouette";
document.querySelector(".anim1").style.animationPlayState = "paused";
const height = document.querySelector('body').offsetHeight;
let currentScrollPos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  const height = document.querySelector('body').offsetHeight;
  // Deuxieme animation
  if(window.pageYOffset >= (height / 3.5)) {
    document.querySelector('.scrollArrow').style.display = "none";
    document.querySelector('.click').style.display = "none";
  } else {
    document.querySelector('.scrollArrow').style.display = "inherit";
    document.querySelector('.click').style.display = "inherit";
  }
  if(window.pageYOffset <= (height / 2.5)) {
    document.querySelector('.scrollArrowReverse').style.display = "none";
    document.querySelector('.click2').style.display = "none";
  } else {
    document.querySelector('.scrollArrowReverse').style.display = "inherit";
    document.querySelector('.click2').style.display = "inherit";
  }
// 3e

if(window.pageYOffset <= (height / 2.5)) {

  document.querySelector(".anim1").style.WebkitAnimationName = "pirouette";
  document.querySelector(".anim1").style.webkitAnimationPlayState = "paused";
  document.querySelector(".anim1").style.animationName = "pirouette";
  document.querySelector(".anim1").style.animationPlayState = "paused";
} else {
  document.querySelector(".anim1").style.WebkitAnimationName = "pirouette";
  document.querySelector(".anim1").style.animationName = "pirouette";
  document.querySelector(".anim1").style.webkitAnimationPlayState = "running";
  document.querySelector(".anim1").style.animationPlayState = "running";
}
}

document.querySelector('a[href^="#slide3"]').addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });
        setTimeout(function() {
          document.getElementById('slide2').scrollIntoView({
    behavior: 'smooth'
  });
setTimeout(function() {
  window.scrollBy(0, 1000);
}, 450);
setTimeout(function() {
  window.scrollBy(0, -1);
}, 550);
}, 1300);

});

document.querySelector('a[href^="#slide3UP"]').addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });
        setTimeout(function() {
          document.getElementById('slide1').scrollIntoView({
    behavior: 'smooth'
  });
setTimeout(function() {
  window.scrollBy(0, -1000);
}, 500);
}, 1300);

});
    function myFunction() {
      // Get the checkbox
      let checkBox = document.getElementById("myCheck");
      // Get the output text
      let bdy = document.querySelector("body");

      // If the checkbox is checked, display the output text
      if (checkBox.checked == true){
        bdy.style.overflow = "visible";
      } else {

        bdy.style.overflow = "hidden";
        setTimeout(function() {
          window.scrollTo(0,document.querySelector("body").scrollHeight);
          setTimeout(function() {
            window.scrollBy(0, -1);
          }, 100);

        }, 300);

      }
    }
