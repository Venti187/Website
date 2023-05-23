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

