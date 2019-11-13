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
  logoimg.setAttribute('src', 'assets/IMG/Zseries1hover.png');
}

logo.onmouseout = function() {
  logoimg.setAttribute('src', 'assets/IMG/Zseries1.png');
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
      message: "<span uk-icon='warning'></span> Passwords must match each other",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
 }
  else if (users.filter(e => e.username === nuevoUsuario).length > 0) {
    UIkit.notification({
      message: "<span uk-icon='close'></span> This user already exists",
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
      message: "<span uk-icon='check'></span> New user "+ nuevoUsuario + " created!",
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
    message: "Welcome " + usuarioIngresado + "!",
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
      message: "<span uk-icon='close'></span> Incorrect password!",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
  }
  else {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> User " +usuarioIngresado+" does not exist, please register!",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
    });
    document.getElementById("login-modal").style.display = "none"
    document.getElementById("register-modal").style.display = "block"
  }
 
})

//Mantener login
var usuarioActual = sessionStorage.getItem("usuarioActual");
if(usuarioActual !== null) {
    document.querySelector(".login-button").innerHTML= usuarioActual;
    document.getElementById("nav-button").classList.add("user-button");
    document.getElementById("nav-button").classList.remove("login-button");
  // user modal empieza
var userModal = document.getElementById("user-modal");
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
}

//Log Out
var logOutBtn = document.querySelector(".logout-button")
logOutBtn.onclick = function() {
  var userModal = document.getElementById("user-modal");
  var loginModal = document.getElementById("login-modal");
  document.getElementById("nav-button").innerHTML = "Log In";
  document.getElementById("nav-button").classList.remove("user-button");
  document.getElementById("nav-button").classList.add("login-button");
  userModal.style.display = "none";
  sessionStorage.removeItem("usuarioActual")
  var loginBtn = document.querySelector(".login-button");
  loginBtn.onclick = function () {
    loginModal.style.display = "block";
  }
}

// Agregar series a favoritas usando corazon

function favorite(id) {
  var favoritas = JSON.parse(localStorage.getItem("favs")) || [];
  if (favoritas.indexOf(id) === -1) {
    favoritas.push(id);
    localStorage.setItem("favs", JSON.stringify(favoritas));
    UIkit.notification({
      message: "Added to favorites",
      status: 'success',
      pos: 'bottom-left',
      timeout: 5000
    });

      var materialIcon = document.getElementById("fav-icon-"+id)
      materialIcon.innerText = "delete";
      
  } else {
    removeFav(id)
    var materialIcon = document.getElementById("fav-icon-"+id)
    materialIcon.innerText = "favorite";
    return false
  }
}

// Ir a detalles de series

function serieSelected(id) {
  localStorage.setItem("seriesId", id);
  return false;
}

// Sacar de favs

function removeFav(id) {
  let jsonFavoritas = JSON.parse(localStorage.getItem("favs")) || [];
  let index = jsonFavoritas.indexOf(id);
  jsonFavoritas.splice(index, 1)
  localStorage.setItem("favs", JSON.stringify(jsonFavoritas));
  UIkit.notification({
    message: "Removed from favorites",
    status: 'danger',
    pos: 'bottom-left',
    timeout: 5000
  });
}
// on load - checkea si estan en favs o no y les pone el tachito en vez del corazon.

function onloadCheck(id) {
  var listadoFavoritas = JSON.parse(localStorage.getItem("favs")) || [];
  if (listadoFavoritas.includes(id)) {
    var materialIcon = document.getElementById("fav-icon-" + id)
    materialIcon.innerText = "delete";
  }
}

// Media Queries
var searchClick = document.getElementById("search-trigger");

searchClick.onclick = function () {
  var logo = document.querySelector(".logo");
  var logButton = document.querySelector(".CTA");
  logo.classList.toggle("none");
  logButton.classList.toggle("none");
}

// agregar favs a un usuario especifico
//  function favUser(){
  var activeUser = document.getElementById("nav-button").textContent
  console.log(activeUser);

  function favorite(id) {
    if (activeUser === "Log in"){
    UIkit.notification({
      message: "Please Login",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
    return false
  }
    else {
      
      let jsonUsers = JSON.parse(localStorage.getItem("Users"));
      console.log(jsonUsers)
      var user = jsonUsers.find(function(user){
       
        return user.username === activeUser
      })
      console.log(user)
      // if (user.filter(e => e.username === activeUser).length > 0) {
        var favoritas = user.favoritos
        if (favoritas.indexOf(id) === -1) {
          favoritas.push(id)
          localStorage.setItem("Users", JSON.stringify(jsonUsers));
          UIkit.notification({
            message: "Agregada a favoritos",
            status: 'success',
            pos: 'bottom-left',
            timeout: 5000
          });
        var materialIcon = document.getElementById("fav-icon-" + id)
        materialIcon.innerText = "delete";
        return false
        }
        else {
          let index = favoritas.indexOf(id);
          favoritas.splice(index, 1)
          localStorage.setItem("Users", JSON.stringify(jsonUsers));
          UIkit.notification({
            message: "Eliminada de favoritos",
            status: 'danger',
            pos: 'bottom-left',
            timeout: 5000
          });
          var materialIcon = document.getElementById("fav-icon-" + id)
          materialIcon.innerText = "favorite";
          return false
        }
      }
     
    }
