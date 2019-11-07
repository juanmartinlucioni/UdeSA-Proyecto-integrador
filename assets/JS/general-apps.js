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
  var nuevoUsuario= document.getElementById("reg-user").value;
  var users = JSON.parse(localStorage.getItem('Users')) || [];
  var regPassword = document.getElementById("reg-psw").value;
  var regPasswordConfirm = document.getElementById("reg-pswconfirm").value;
  if (regPassword !== regPasswordConfirm) {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> Las contraseñas deben ser iguales",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
 }
  else if (users.filter(e => e.username === nuevoUsuario).length > 0) {
    UIkit.notification({
      message: "<span uk-icon='close'></span> Este usuario ya esta registrado",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
  }
  else {
    var userData = {
      username: document.getElementById("reg-user").value,
      email: document.getElementById("reg-email").value,
      password: document.getElementById("reg-psw").value,
      favoritos: []
    }
    users.push(userData);
    localStorage.setItem('Users', JSON.stringify(users));
    document.getElementById("register-modal").style.display = "none"
    document.getElementById("login-modal").style.display = "block"
    UIkit.notification({
      message: "<span uk-icon='check'></span> Se ha creado el usuario "+ nuevoUsuario + "!",
      status: 'success',
      pos: 'bottom-left',
      timeout: 5000
    });
  }
});

// Log in with User

document.querySelector(".login-modal").addEventListener("submit", function (event) {
  event.preventDefault()
  var users = JSON.parse(localStorage.getItem('Users')) || [];
  var usuarioIngresado = document.getElementById("login-user").value
  var passwordIngresado = document.getElementById("login-psw").value
  if ((users.filter(e => e.username === usuarioIngresado).length > 0) && (users.filter(e => e.password === passwordIngresado).length > 0)){
  document.querySelector(".login-button").innerHTML= usuarioIngresado
  document.getElementById("login-modal").style.display = "none"
  UIkit.notification({
    message: "Bienvenido " + usuarioIngresado + "!",
    status: 'success',
    pos: 'bottom-left',
    timeout: 5000
  });
  document.getElementById("nav-button").classList.add("user-button");
  document.getElementById("nav-button").classList.toggle("login-button");
  var userModal = document.getElementById("user-modal"); // user modal empieza
  window.onclick = function(event) {
     if (event.target == userModal) {
         userModal.style.display = "none";
     }
  }
    var userBtn = document.querySelector(".user-button");
    userBtn.onclick = function() {
    userModal.style.display = "block";
   }
    var closeUserModal = document.getElementById("close-user-modal");
    closeUserModal.onclick = function() {
    userModal.style.display = "none";
  }
  document.querySelector(".user-modal").addEventListener("submit", function (event) {
    event.preventDefault()
    location.reload()
      userModal.style.display = "none";
    })
    var usuarioActual = sessionStorage.setItem("usuarioActual", usuarioIngresado);
}
  else if((users.filter(e => e.username === usuarioIngresado).length > 0) && (users.filter(e => e.password !== passwordIngresado).length > 0)){
    UIkit.notification({
      message: "<span uk-icon='close'></span> Contraseña incorrecta!",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
  }
  else {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> " +usuarioIngresado+" no existe, por favor registrese!",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
    document.getElementById("login-modal").style.display = "none"
    document.getElementById("register-modal").style.display = "block"
  }
 
})

// Agregar series a favoirtas usando corazon

function favorite(id) {
  var favoritas = JSON.parse(localStorage.getItem("favs")) || [];
  if (favoritas.indexOf(id) === -1) {
    favoritas.push(id);
    localStorage.setItem("favs", JSON.stringify(favoritas));
    UIkit.notification({
      message: "Agregada a favoritos",
      status: 'success',
      pos: 'bottom-left',
      timeout: 5000
    });
    var materialIcon = document.getElementById("fav-icon")
    materialIcon.innerText = "delete";
  } else {
    UIkit.notification({
      message: "Esta serie ya esta en favoritos",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
    return false
  }
}

// ir a detalles de series

function serieSelected(id) {
  localStorage.setItem("seriesId", id);
  // window.open("page5-detalle-series.html");
  return false;
}


