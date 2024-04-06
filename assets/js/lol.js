document.addEventListener('DOMContentLoaded', function () {
  // Check if dark mode is active by checking the data-bs-theme attribute on the html tag
  var htmlTheme = document.documentElement.getAttribute('data-bs-theme');
  var isDarkMode = htmlTheme && htmlTheme.toLowerCase() === 'dark';

  // Get the reference to the div you want to style
  var div = document.getElementById('bubble-wrapper');

  // Change the style based on dark mode status
  if (isDarkMode) {
    div.classList.add("bubblesdark");
    // Add other styles for dark mode
  } else {
    div.style.backgroundColor = 'dark';
    div.style.color = 'black';
     div.classList.remove("bubblesdark");
    // Add other styles for light mode
  }
});
