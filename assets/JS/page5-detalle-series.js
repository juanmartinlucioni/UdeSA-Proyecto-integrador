window.addEventListener("load", function () {
            var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"

            var id = localStorage.getItem("seriesId")
            console.log(id)

            var url = "https://api.themoviedb.org/3/tv/" + id + "?api_key=" + apiKey + "&language=en-US"
            fetch(url)
                .then(function (respuesta) {
                    return respuesta.json()
                })
                .then(function (informacion) {
                        id = informacion.id
                        title= informacion.name
                        poster = informacion.poster_path
                        posterUrl = 'https://image.tmdb.org/t/p/w400/'
                        image = posterUrl + poster
                        genresArray= []
                        language = informacion.original_language
                        sinopsis = informacion.overview
                        releaseDate = informacion.first_air_date
                        trailer = informacion.video
                        average = informacion.vote_average
                        console.log(informacion)
                        for (var i = 0; i < informacion.genres.length; i++) {
                            var genres = informacion.genres[i].name
                            genresArray.push(genres)
                        }
                       
                        console.log(genres)
                        console.log(genresArray)

                        if (trailer == false) {
                    
                            
                        };
                        console.log(informacion)
                var detalles = document.getElementById("detalles")
                detalles.innerHTML += `
                        <div class="movie">
                            <h1>${title}</h1>
                            <img src="${image}" alt="">
                            <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                            <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                            <h2>Generos<h2>
                            <li>${genresArray}</li>
                            <h2>Idiomas</h2>
                            <p>${language}</p>
                            <h2>Sinopsis</h2>
                            <p>${sinopsis}</p>
                            <h2>Trailer</h2>
                            <iframe src="${trailer}" frameborder="0"></iframe>"
                        </div>`
                
                
                // "<h1>${title}</h1><img src="${posterURL}" alt=""><h2>Sinopsis</h2><p>${sinopsis}</p><h2>trailer</h2><iframe src="${trailer}" frameborder="0"></iframe>"
                    })
                        console.log(id)
                        var recoUrl = "https://api.themoviedb.org/3/tv/"+ id +"/similar?api_key=" + apiKey + "&language=en-US&query&page=1"
                        console.log(recoUrl);
                        fetch(recoUrl)
                            .then(function (respuesta) {
                                 return respuesta.json()
                            })
                            .then(function (informacion) {
                                var title
                                var poster
                                var posterUrl
                                var image
                                var id
                                var average
                                var releaseDate
                                for (var i = 0; i < informacion.results.length; i++) {
                                    id = informacion.results[i].id
                                    title = informacion.results[i].name
                                    poster = informacion.results[i].poster_path
                                    posterUrl = 'https://image.tmdb.org/t/p/original/'
                                    image = posterUrl + poster
                                    average = informacion.results[i].vote_average
                                    releaseDate = informacion.results[i].first_air_date;
                
                                    var listadoRecomendadas = document.querySelector(".listado-series-recomendadas")
                                    listadoRecomendadas.innerHTML +=  `<div class="series">
                                    <div class="overlay">
                                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon" onclick="favorite(${id});return false">favorite</i></a></span></div>
                                    <div class="serie">
                                        <h2>${title}</h2>
                                        <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                                        <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                                        <a id="detalles" onclick="serieSelected('${id}')" href="page5-detalle-series.html">Detalle</a>
                                    </div>
                                    </div>
                                    <div class="Imagenes">
                                        <img src="${image}" alt="">
                                    </div>
                                    </div>`
                                }
                                 
                    

})
// modal recommended
var recoModal = document.getElementById("reco-modal");
window.onclick = function(event) {
     if (event.target == recoModal) {
         logModal.style.display = "none";
     }
 }

var recoBtn = document.querySelector(".reco-button");
  recoBtn.onclick = function() {
  recoModal.style.display = "block";
 }

// var closeRecoModal = document.querySelector(".close-reco");
//   closeRecoModal.onclick = function() {
//   recoModal.style.display = "none";
//  }
})
