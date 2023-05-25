
// Open or close Sidebar
window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open")
    menuBtnChange()
  })

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
    }
  }

}

//toggle between Dark and Lightmode
window.addEventListener("DOMContentLoaded", function () {
  // Retrieve the mode from localStorage
  var isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

  // Apply the saved mode if it exists
  if (isDarkModeEnabled === "true") {
    var element = document.body;
    element.classList.add("dark-mode");
  }

  var logoClass = localStorage.getItem("logoClass");
  var logo = document.getElementById("toggleLogo");
  if (logo && logoClass) {
    logo.className = logoClass;
  }
});

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Check if dark mode is enabled
  var isDarkModeEnabled = element.classList.contains("dark-mode");

  // Save the mode in localStorage
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);

  //Change the logo
  var logo = document.getElementById("toggleLogo");
  if (logo) {
    if (isDarkModeEnabled) {
      logo.classList.remove("bxs-sun");
      logo.classList.add("bxs-moon");
    } else {
      logo.classList.remove("bxs-moon");
      logo.classList.add("bxs-sun");
    }
  }

  // Save the logo class in localStorage
  localStorage.setItem("logoClass", logo.className);
}

function toggleTable(tableId, spanId) {

  var table = document.getElementById(tableId);
  var span = document.getElementById(spanId);

  if (table.style.display === "none") {
    fadeIn(table);
    span.style.display = "none";
  } else {
    fadeOut(table);
    span.style.display = "block";
  }
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "table";
  var opacity = 0;

  var fadeEffect = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
}

function fadeOut(element) {
  var opacity = 1;

  var fadeEffect = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
      element.style.display = "none";
    }
  }, 50);
}

function smoothScroll(target) {
  const element = document.getElementById(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

