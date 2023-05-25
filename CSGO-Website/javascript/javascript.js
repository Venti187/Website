
// Open or close Sidebar
window.onload = function(){
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click",function(){
    sidebar.classList.toggle("open")
    menuBtnChange()
  })

  function menuBtnChange(){
    if(sidebar.classList.contains("open")){
      closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
    }else{
      closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
    }
  }

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

// Get the button
let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Fallback for browsers that don't support smooth scrolling
    smoothScroll('scrollTopBtn');
  }
}

