window.addEventListener("load", function () {
var arrayFavs = localStorage.getItem("favs")
if (arrayFavs === null){
    var favoritas = []
}
else {
var favoritas = JSON.parse(localStorage.getItem("favs"))
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
            var image = posterUrl + poster
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
// sacar de favoritas
function removeFav(id){
  let jsonFavoritas = JSON.parse(localStorage.getItem("favs")) || [];
  let index = jsonFavoritas.indexOf(id);
  jsonFavoritas.splice(index, 1)
  localStorage.setItem("favs", JSON.stringify(jsonFavoritas));
  document.getElementById(id).style.display = "none"
  UIkit.notification({
      message: "Removed from favorites",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 5000
  });
}

// eliminar todas las favoritas 

var removeBtn = document.getElementById("borrar-todas")
    removeBtn.onclick = function() {
   localStorage.removeItem("favs")
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
