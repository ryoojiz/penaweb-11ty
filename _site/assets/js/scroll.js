window.onscroll = function() {myFunction()};
nav = document.getElementById("navbar")
btn = document.getElementById("loginbtn")
function myFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
   btn.classList.add("mcbtn");
   nav.classList.add("scrolled");
  } else {
    btn.classList.remove("mcbtn");
    nav.classList.remove("scrolled");
  }
}