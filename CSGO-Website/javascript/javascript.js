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

function toggleTable() {
  var table = document.getElementById("myTable");
  var span = document.querySelector("#assault-rifles .rifles-pictures span");
  
  if (table.style.display === "none") {
    table.style.display = "table";
    span.style.display = "none";
  } else {
    table.style.display = "none";
    span.style.display = "block";
  }
}