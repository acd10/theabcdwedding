const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const url = 'https://forms.gle/L9uLQ1naGtaWzBfD7';

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * (-0.3) - 100 + "px";
})

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 6500;
  parallax1.style.backgroundPositionY = offset * (-0.1) + "px";
})

function myFunction() {
  document.getElementById("check").checked = false;
}

function mapFunction(){
  window.open('https://maps.google.com', '_blank');
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function handleRsvpClick() {
  window.open(url, '_blank');
}