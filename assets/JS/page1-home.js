    // Trending
    window.addEventListener("load", function () {
        var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"
        var popularUrl = " https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&page=1"


        fetch(popularUrl)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (informacion) {
                console.log(informacion);
                var title
                var poster
                var posterUrl
                var image
                var id
                var average
                var releaseDate
                for (var i = 0; i < informacion.results.length; i++) {
                    // informacion[i]
                    console.log(informacion.results[i]);
                    id = informacion.results[i].id
                    title = informacion.results[i].name
                    poster = informacion.results[i].poster_path
                    posterUrl = 'https://image.tmdb.org/t/p/original/'
                    image = posterUrl + poster
                    average = informacion.results[i].vote_average
                    releaseDate = informacion.results[i].first_air_date
                    console.log(image);

                    var listadoPopulares = document.querySelector(".listado-series-populares")
                    listadoPopulares.innerHTML +=  `<div class="series">
                    <div class="overlay">
                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon">favorite</i></a></span></div>
                    <div class="serie">
                        <h2>${title}</h2>
                        <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                        <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                        <a id="detalles" onclick="serieSelected('${id}')" href="page5-detalle-series.html">Detalle</a>
                    </div>
                    </div>
                    <div class="Imagenes">
                        <li><p class='titulo-series-home'></p><img src="${image}" alt="${title}"></a></li>
                    </div>
                    </div>`
                }
            })
        var ratedUrl = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + apiKey + "&page=1"
        fetch(ratedUrl)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (informacion) {
                console.log(informacion);
                var title
                var poster
                var posterUrl
                var image
                var id
                var average
                var releaseDate
                for (var i = 0; i < informacion.results.length; i++) {
                    console.log(informacion.results[i]);
                    id = informacion.results[i].id
                    title = informacion.results[i].name
                    poster = informacion.results[i].poster_path
                    posterUrl = 'https://image.tmdb.org/t/p/original/'
                    image = posterUrl + poster
                    average = informacion.results[i].vote_average
                    releaseDate = informacion.results[i].first_air_date
                    console.log(image);

                    var listadoPuntuadas = document.querySelector(".listado-series-puntuadas")
                    listadoPuntuadas.innerHTML +=  `<div class="series">
                    <div class="overlay">
                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon">favorite</i></a></span></div>
                    <div class="serie">
                        <h2>${title}</h2>
                        <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                        <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                        <a id="detalles" onclick="serieSelected('${id}')" href="page5-detalle-series.html">Detalle</a>
                    </div>
                    </div>
                    <div class="Imagenes">
                        <li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="${id}"><p class='titulo-pelis-home'></p><img src="${image}" alt=""></a></li>
                    </div>
                    </div>`
                }
            })
            var airUrl = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + apiKey + "&page=1"
            fetch(airUrl)
                .then(function (respuesta) {
                    return respuesta.json()
                })
                .then(function (informacion) {
                    console.log(informacion);
                    var title
                    var poster
                    var posterUrl
                    var image
                    var id
                    var average
                    var releaseDate
                    for (var i = 0; i < informacion.results.length; i++) {
                        console.log(informacion.results[i]);
                        id = informacion.results[i].id
                        title = informacion.results[i].name
                        poster = informacion.results[i].poster_path
                        posterUrl = 'https://image.tmdb.org/t/p/original/'
                        image = posterUrl + poster
                        average = informacion.results[i].vote_average
                        releaseDate = informacion.results[i].first_air_date
                        console.log(image);

                        var listadoPuntuadas = document.querySelector(".listado-series-aire")
                        listadoPuntuadas.innerHTML += `<div class="series">
                    <div class="overlay">
                    <div class="addBtn"><span><a href=""><i class="material-icons heart" id="fav-icon">favorite</i></a></span></div>
                    <div class="serie">
                        <h2>${title}</h2>
                        <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                        <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                        <a id="detalles" onclick="serieSelected('${id}')" href="page5-detalle-series.html">Detalle</a>
                    </div>
                    </div>
                    <div class="Imagenes">
                        <li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="${id}"><p class='titulo-pelis-home'></p><img src="${image}" alt=""></a></li>
                    </div>
                    </div>`
                    }
                })
            .catch(function (error) {
                console.log("Error: " + error);
            })
        })
// ir a detalles
function serieSelected(id) {
    localStorage.setItem("seriesId", id);
    // window.open("page5-detalle-series.html");
    return false;
}