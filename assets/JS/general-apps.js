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
  var nuevoUsuario= document.getElementById("reg-user").value
  console.log(nuevoUsuario); // eliminar
  var users = JSON.parse(localStorage.getItem('Users')) || [];
  console.log(users)
  if (users.filter(e => e.username === nuevoUsuario).length > 0) {
     return console.log("Este usuario ya esta registrado");
  }
  else {
    var userData = {
      username: document.getElementById("reg-user").value,
      email: document.getElementById("reg-email").value,
      password: document.getElementById("reg-psw").value
    }
    users.push(userData);
    localStorage.setItem('Users', JSON.stringify(users));
    document.getElementById("register-modal").style.display = "none"
    document.getElementById("login-modal").style.display = "block"
    console.log(users);
    return alert(`New user ${nuevoUsuario} now registered!`);
    }
  }
)
// al poner la contrasena mal, me dijo que el usuario no existe, osea no loggea, necesito una condicon que cuando exista usuario pero psw != notificacion " contrasena mal

// Log in with User
document.querySelector(".login-modal").addEventListener("submit", function (event) {
  event.preventDefault()
  var users = JSON.parse(localStorage.getItem('Users')) || [];
  console.log(users)
  var usurarioIngresado = document.getElementById("login-user").value
  console.log(usurarioIngresado);
  var passwordIngresado = document.getElementById("login-psw").value
  console.log(passwordIngresado);
  if ((users.filter(e => e.username === usurarioIngresado).length > 0) && (users.filter(e => e.password === passwordIngresado).length > 0)){
  document.querySelector(".login-button").innerHTML= usurarioIngresado
  document.getElementById("login-modal").style.display = "none"
  UIkit.notification({
    message: 'Bienvenido '+ usurarioIngresado + "!",
    status: 'primary',
    pos: 'bottom-left',
    timeout: 5000
  });
  }
  else if((users.filter(e => e.username === usurarioIngresado).length > 0) && (users.filter(e => e.password !== passwordIngresado).length > 0)){
    UIkit.notification({
      message: 'Contraseña incorrecta!',
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
  }
  else {
    UIkit.notification({
      message: usurarioIngresado+' no existe, porfavor registrese!',
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
    document.getElementById("login-modal").style.display = "none"
    document.getElementById("register-modal").style.display = "block"
  }
 
})
