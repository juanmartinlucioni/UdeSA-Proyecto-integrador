var usuarioActual = sessionStorage.getItem("usuarioActual");
if(usuarioActual !== null) {
    document.querySelector(".login-button").innerHTML= usuarioActual;
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
    // var logoutTrigger = 
    // regTrigger.onclick = function() {
      // logModal.style.display = "block";
      userModal.style.display = "none";
    })
}
var searchUrl = window.location.href;
const searchQueryUrl = new URL (searchUrl);
var query = searchQueryUrl.searchParams.get("search");
runSearch(query);
document.getElementById("searchbar").value = query;

function serieSelected(id) {
  localStorage.setItem("seriesId", id);
  // window.open("page5-detalle-series.html");
  return false;
}
