window.addEventListener("load", function () {

var activeUser = document.getElementById("nav-button").textContent
if (activeUser === "Log in") {
    var footer = document.querySelector(".footer")  
    footer.style.position = "fixed";
    footer.style.bottom = 0;
}
let jsonUsers = JSON.parse(localStorage.getItem("Users"));
console.log(jsonUsers)
var user = jsonUsers.find(function (user) {
    return user.username === activeUser
})
var favoritas = user.favoritos

if (favoritas === null){
    var favoritas = []
}

for ( var i = 0; i< favoritas.length; i++){
    var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"
    var favsUrl = "https://api.themoviedb.org/3/tv/" + favoritas[i] + "?api_key=" + apiKey + "&language=en-US&query&page=1"
    console.log(favsUrl);
    
    fetch(favsUrl)
        .then(function (respuesta) {
             return respuesta.json()
        })
        .then(function (informacion) {
            console.log(informacion)
            var title = informacion.name
            var poster = informacion.poster_path
            var posterUrl = 'https://image.tmdb.org/t/p/original/'
            var image
            if (informacion.poster_path !== null){
                image = posterUrl + poster 
                } else {
                    image = 'assets/IMG/noimage.png'
                }
            var id = informacion.id
            var average = informacion.vote_average
            var releaseDate = informacion.first_air_date

            var listadoFavoritas = document.querySelector(".listado-favoritas")
            listadoFavoritas.innerHTML +=  `<div class="series" id=${id}>
            <div class="overlay">
            <div class="addBtn" id="favs"><span><a href="" ><i class="material-icons heart" id="fav-icon-${id}" onclick="removeFav(${id});return false">delete</i></a></span></div>
            <div class="serie">
                <h2>${title}</h2>
                <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                <a id="detalles" onclick="serieSelected('${id}')" href="page5-detalle-series.html">Details</a>
            </div>
            </div>
            <div class="Imagenes">
                <img src="${image}" alt="">
            </div>
            </div>`              
        })
    }
})
function serieSelected(id) {
    localStorage.setItem("seriesId", id);
    // window.open("page5-detalle-series.html");
    return false;
}

// eliminar todas las favoritas 
var removeBtn = document.getElementById("borrar-todas")
removeBtn.onclick = function() {
    var activeUser = document.getElementById("nav-button").textContent
    let jsonUsers = JSON.parse(localStorage.getItem("Users"));
    var user = jsonUsers.find(function (user) {
        return user.username === activeUser
    })
    var favoritas = user.favoritos
    function empty() {
        favoritas.length = 0;
    }
    empty();
    localStorage.setItem("Users", JSON.stringify(jsonUsers));
    //Hace que las series no sean visibles
    var favseries = document.querySelectorAll(".series")
    for (let i = 0; i < favseries.length; i++) {
       favseries[i].style.display="none";
    }
    UIkit.notification({
     message: "All series removed from favorites",
     status: 'danger',
     pos: 'bottom-left',
     timeout: 5000
 });
}
