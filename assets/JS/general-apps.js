// Animaciones Menu Hamburguesa
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_links li");

hamburger.addEventListener("click",()=> {
  navlinks.classList.toggle("open");
  navlinks.classList.toggle("is-visible");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
});

//Animaciones Search Bar
const searchbar = document.querySelector(".searchbar");
const searchbox = document.querySelector(".searchbox");
const searchicon = document.querySelector(".fa-search");

searchicon.addEventListener("click", ()=> {
  searchbar.classList.toggle("expand");
});

//Hover logo
const logo = document.querySelector(".logo");
const logoimg = document.querySelector(".logo img");

logo.onmouseover = function() {
  logoimg.setAttribute('src', 'assets/IMG/zseries1hover.png');
}

logo.onmouseout = function() {
  logoimg.setAttribute('src', 'assets/IMG/zseries1.png');
}
//Login In Modal
var modal = document.getElementById('login-modal');
window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
