window.addEventListener("load", function () {
    // Populares
        var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"
        var popularUrl = " https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&page=1"
        fetch(popularUrl)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (informacion) {
                console.log(informacion)
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

                    var listadoPopulares = document.querySelector(".listado-series-populares")
                    listadoPopulares.innerHTML +=  `<div class="series">
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
            })

    // Top rated
        var ratedUrl = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + apiKey + "&page=1"
        fetch(ratedUrl)
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

                    var listadoPuntuadas = document.querySelector(".listado-series-puntuadas")
                    listadoPuntuadas.innerHTML +=  `<div class="series">
                    <div class="overlay">
                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon-${id}" onclick="favorite(${id});return false">favorite</i></a></span></div>
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
            })

    // On Air
        var airUrl = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + apiKey + "&page=1"
        fetch(airUrl)
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
                    var listadoPuntuadas = document.querySelector(".listado-series-aire")
                    listadoPuntuadas.innerHTML += `<div class="series">
                    <div class="overlay">
                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon-${id}" onclick="favorite(${id});return false">favorite</i></a></span></div>
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
                })
            .catch(function (error) {
                console.log("Error: " + error);
            })  
        })

