window.addEventListener("load", function () {
    //Genres
    var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"
    var genresUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key="+ apiKey +"&language=en-US"
    fetch(genresUrl)
        .then(function(answer){
            return answer.json()
        })
        .then(function(datos){
            var ids
            var name
        for (var i = 0; i <datos.genres.length; i++){
        ids = datos.genres[i].id
        name = datos.genres[i].name
        var genreUrl = "https://api.themoviedb.org/3/discover/tv?api_key="+ apiKey +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + ids
        var genreList = document.getElementById("genre-top-list");
        genreList.innerHTML += `<li><a href="#header-${ids}">${name}</a></li>`
        var tituloGenre = document.getElementById("main");
        tituloGenre.innerHTML += `<div class="genre">
        <div class="header-margin" id="header-${ids}"><h2>${name}</h2></div>
        <div class="carrousel">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
              uk-slider="autoplay: true; autoplay-interval: 3000">
              <ul class="listado-series-por-genero-${ids} uk-slider-items uk-child-width-1-4@s uk-child-width-1-4@">
              </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
                uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                uk-slider-item="next"></a>
            </div>
        </div>
        <div class="genre-footer">
            <button class="ver-mas" onclick="localStorage.setItem('selectedGenre', '${name}');window.location.href = 'page2-informacion-genero.html?genreid=${ids}';" type="button">View More</button>
            <a href="#">
                <button class="back-to-top-btn" type="button">Back To Top</button>
            </a>
        </div>
        </div>
        </div>`;
       
            fetch(genreUrl)
                .then(function (respuesta) {
                    return respuesta.json()
                })
           
                .then(makeCallback(ids))
        }
    })
})

// para que las series sean asignadas a su respectivo genero tuve que declarar esta funcion y llamarla, porque si lo hacia todo seguido me asignaba todas las peliculas al ultimo genero

function makeCallback(ids) {
    return function (informacion) {
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
                if (seriesFound[i].poster_path !== null){
                    image = posterUrl + poster 
                    } else {
                        image = 'assets/IMG/noimage.png'
                    }
                average = informacion.results[i].vote_average
                releaseDate = informacion.results[i].first_air_date;
                var listadoGenero = document.querySelector(".listado-series-por-genero-" + ids)
                listadoGenero.innerHTML += `<div class="series">
                        <div class="overlay">
                        <div class="addBtn" id="favs"><span><a href="" ><i class="material-icons heart" id="fav-icon-${id}" onclick="favorite(${id});return false">favorite</i></a></span></div>
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
                        onloadCheck(id)
            }
        }
}
        





