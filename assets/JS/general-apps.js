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

// Register = Local storage Usuarios
document.querySelector(".register-modal").addEventListener("submit",function(event){
  event.preventDefault()
  var nuevoUsuario= document.getElementById("reg-user").value;
  var nuevoEmail = document.getElementById("reg-email").value;
  var users = JSON.parse(localStorage.getItem('Users')) || [];
  var regPassword = document.getElementById("reg-psw").value;
  var regPasswordConfirm = document.getElementById("reg-pswconfirm").value;
    if ((nuevoUsuario.length <=3)){
      UIkit.notification({
        message: "<span uk-icon='warning'></span> Username must be at least 4 characters",
        status: 'danger',
        pos: 'bottom-left',
        timeout: 5000
      });
      username.style.border = "2px solid red";
      username.focus();
  }
  else if (validateEmail(nuevoEmail) == false) {

  }
  else if (regPassword == "") {
      UIkit.notification({
        message: "<span uk-icon='warning'></span> Password must be at least 6 characters",
        status: 'danger',
        pos: 'bottom-left',
        timeout: 5000
      });
      password.style.border = "2px solid red";
      password.focus();
  }
  else if (regPassword !== regPasswordConfirm) {
        UIkit.notification({
          message: "<span uk-icon='warning'></span> Password do not match!",
          status: 'danger',
          pos: 'bottom-left',
          timeout: 5000
        });
        password_confirm.style.border = "2px solid red"
        password_confirm.focus();
  } 
  else if (users.filter(e => e.username === nuevoUsuario).length > 0) {
    UIkit.notification({
      message: "<span uk-icon='close'></span> This user already exists",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });
    username.focus();
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
    location.reload()
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

// User modal empieza
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
  location.reload()
}

// Ir a detalles de series
function serieSelected(id) {
  localStorage.setItem("seriesId", id);
  return false;
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
  function favorite(id) {
    var activeUser = document.getElementById("nav-button").textContent
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
      var user = jsonUsers.find(function(user){
        return user.username === activeUser
      })
        var favoritas = user.favoritos
        if (favoritas.indexOf(id) === -1) {
          favoritas.push(id)
          localStorage.setItem("Users", JSON.stringify(jsonUsers));
          UIkit.notification({
            message: "Added to favorites",
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
            message: "Removed from favorites",
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

// on load - checkea si estan en favs o no y les pone el tachito en vez del corazon.
function onloadCheck(id) {
  var activeUser = document.getElementById("nav-button").textContent
  if(activeUser !== "Log in"){
    let jsonUsers = JSON.parse(localStorage.getItem("Users"));
    var user = jsonUsers.find(function (user) {
      return user.username === activeUser
    })
    var favoritas = user.favoritos
    if (favoritas.includes(id)) {
      var materialIcon = document.getElementById("fav-icon-" + id)
      materialIcon.innerText = "delete";
    }
  }
}
// sacar de favoritas
function removeFav(id) {
  var activeUser = document.getElementById("nav-button").textContent
  let jsonUsers = JSON.parse(localStorage.getItem("Users"));
  var user = jsonUsers.find(function (user) {
    return user.username === activeUser
  })
  var favoritas = user.favoritos
  let index = favoritas.indexOf(id);
  favoritas.splice(index, 1)
  localStorage.setItem("Users", JSON.stringify(jsonUsers));
  document.getElementById(id).style.display = "none"
  UIkit.notification({
    message: "Removed from favorites",
    status: 'warning',
    pos: 'bottom-left',
    timeout: 5000
  });
}
// validacion onchange de register
var username = document.forms['reg-form']['username'];
var email = document.forms['reg-form']['email'];
var password = document.forms['reg-form']['psw'];
var password_confirm = document.forms['reg-form']['pswconfirm'];

//validacion de usuario
username.onchange = function(){
  if (username.value.length<=3){
    UIkit.notification({
      message: "<span uk-icon='warning'></span> Username must be at least 4 characters!",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });;
    username.style.border = "2px solid red";
    username.focus();
  }
  else {
    username.style.border = "2px solid #65FF00";
  }
}
// validacion password
password.onchange = function () {
  if (password.value.length <= 5) {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> Password must be at least 6 characters!",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });;
    password.style.border = "2px solid red";
    password.focus();
  } else {
    password.style.border = "2px solid #65FF00";
  }
}
// validacion verificacion psw
password_confirm.onchange = function () {
  if (password_confirm.value === password.value) {
    password_confirm.style.border = "2px solid #65FF00";
  } else {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> Password do not match!",
      status: 'danger',
      pos: 'bottom-left',
      timeout: 5000
    });;
    password_confirm.style.border = "2px solid red"
    password_confirm.focus();
  }
}
// validacion de email
function validateEmail(emailIngresado) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var testear = re.test(String(emailIngresado).toLowerCase())
   if (testear !== true) {
     UIkit.notification({
       message: "<span uk-icon='warning'></span> Please enter a valid email!",
       status: 'danger',
       pos: 'bottom-left',
       timeout: 5000
     });
     email.style.border = "2px solid red";
     email.focus();
     return false
   }
   else{
     email.style.border = "2px solid #65FF00";
   }
}
email.onchange = function(){
  emailIngresado = email.value
  console.log(emailIngresado);
  validateEmail(emailIngresado)
 
}



// validate on submit

// function postValidate(event) {
//   if (username.value == "") {
//     event.preventDefault()
//     username.style.border = "2px solid red";
//     username.focus();
//     return false;
//   }
//   // username lenght
//   else if (username.value.length < 3) {
//     event.preventDefault()
//     username.style.border = "2px solid red";
//     username.focus();
//     return false;
//   }
//   // validate email
//   if (email.value == "") {
//     event.preventDefault()
//     email.style.border = "1px solid red";
//     document.getElementById('reg-email').style.color = "red";
//     email.focus();
//     return false;
//   }
//   // validate password
//   if (password.value == "") {
//     event.preventDefault()
//     password.style.border = "1px solid red";
//     document.getElementById('reg-psw').style.color = "red";
//     password_confirm.style.border = "1px solid red";
//     password_error.textContent = "Password is required";
//     password.focus();
//     return false;
//   }
//   // check if the two passwords match
//   if (password.value != password_confirm.value) {
//     password.style.border = "1px solid red";
//     document.getElementById('reg-pswconfirm').style.color = "red";
//     password_confirm.style.border = "1px solid red";
//     password_error.innerHTML = "The two passwords do not match";
//     return false;
//   }
// }
// event handler functions
// function nameVerify() {
//   if (username.value != "") {
//     username.style.border = "1px solid #5e6e66";
//     document.getElementById('username_div').style.color = "#5e6e66";
//     name_error.innerHTML = "";
//     return true;
//   }
// }

// function emailVerify() {
//   if (email.value != "") {
//     email.style.border = "1px solid #5e6e66";
//     document.getElementById('email_div').style.color = "#5e6e66";
//     email_error.innerHTML = "";
//     return true;
//   }
// }

// function passwordVerify() {
//   if (password.value != "") {
//     password.style.border = "1px solid #5e6e66";
//     document.getElementById('pass_confirm_div').style.color = "#5e6e66";
//     document.getElementById('password_div').style.color = "#5e6e66";
//     password_error.innerHTML = "";
//     return true;
//   }
//   if (password.value === password_confirm.value) {
//     password.style.border = "1px solid #5e6e66";
//     document.getElementById('pass_confirm_div').style.color = "#5e6e66";
//     password_error.innerHTML = "";
//     return true;
//   }
// }