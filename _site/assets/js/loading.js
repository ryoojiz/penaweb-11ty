const htmlElement = document.querySelector('html');
const currentTheme = htmlElement.getAttribute('data-bs-theme');

const loaddark = document.getElementById("loaddark");
const loadlight = document.getElementById("loadlight");
if (currentTheme === 'light') {
    loadlight.style.display = "block";
} else if (currentTheme === 'dark') {
     loaddark.style.display = "block";
}

window.onload = function() {
    setTimeout(function() {
        document.getElementsByClassName("loading-screen")[0].style.opacity = "0"; 
        setTimeout(function() {
            document.getElementsByClassName("loading-screen")[0].style.display = "none"; 
        }, 500);
    }, 1000);
};