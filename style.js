var menuTitleDad = document.querySelector(".title-dad .menu")
function anMenu(){
    console.log(menuTitleDad.classList.toggle('menu-dad'))
} 

var menu = document.querySelector(".container-reponsive .bx-menu")
var containerLeft = document.querySelector(".container-left")
var containerLeftFather = document.querySelector(".container-left-father")
  menu.addEventListener("click", function(){
    containerLeftFather.classList.add("on")
    containerLeft.classList.add("on")
  })
  containerLeftFather.addEventListener("click",function(){
    containerLeftFather.classList.remove("on")
    containerLeft.classList.remove("on")
  })


function san_pham(index) {
    window.location.href = "San_pham_" + index + ".html";
  }
  
     

