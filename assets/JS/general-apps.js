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
var logModal = document.getElementById("login-modal");
window.onclick = function(event) {
     if (event.target == logModal) {
         logModal.style.display = "none";
     }
 }

var loginBtn = document.querySelector(".login-button");
  loginBtn.onclick = function() {
  logModal.style.display = "block";
 }

var closeLogModal = document.querySelector(".close-login");
  closeLogModal.onclick = function() {
  logModal.style.display = "none";
 }

//Register Modal
var regModal = document.getElementById("register-modal");
var regTrigger = document.querySelector(".register-trigger");
 regTrigger.onclick = function() {
   regModal.style.display = "block";
   logModal.style.display = "none";
 }

var closeRegModal = document.querySelector(".close-reg");
 closeRegModal.onclick = function() {
   regModal.style.display = "none";
 }

window.addEventListener("click",function(event) {
  if (event.target == regModal) {
      regModal.style.display = "none";
  }
})
// Local storage Usuarios

document.querySelector(".register-modal").addEventListener("submit",function(event){
  event.preventDefault()
  // var nuevoUsuario= document.getElementById("reg-user").value
  // console.log(nuevoUsuario);

  var users = JSON.parse(localStorage.getItem('Users')) || [];
  var userData = [{
      Username: document.getElementById("reg-user").value
    },
    {
      Email: document.getElementById("reg-email").value
    },
    {
      Password: document.getElementById("reg-psw").value
    }
  ];
  users.push(userData);
  localStorage.setItem('Users', JSON.stringify(users));
  document.getElementById("register-modal").style.display="none"
  document.getElementById("login-modal").style.display="block"
console.log(users);

//   if (nuevoUsuario === usuario) {
//     // innerHTML capturo login y lo remplazo
//     console.log("son iguales");
//     document.getElementById('login').innerText=nuevoUsuario

//   }
//   else {
//     // guardar dato en local storage, set item
//     registerUser(nuevoUsuario)
//     console.log("usuario registrado");
//     function registerUser(Usuario){
//       window.localStorage.setItem("usuario", nuevoUsuario);
//       return `New user ${nuevoUsuario} now registered!`;
//   }
// }
})
    