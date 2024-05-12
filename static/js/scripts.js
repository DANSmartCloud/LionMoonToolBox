//toggle sidebar script

let btn = document.querySelector("#toggle-menu-btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".search-btn");

btn.onclick = function() {
  sidebar.classList.toggle("active");
  if(btn.classList.contains("bx-menu")){
    btn.classList.replace("bx-menu" , "bx-menu-alt-right");
  }else{
    btn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}
searchBtn.onclick = function() {
  sidebar.classList.toggle("active");
}