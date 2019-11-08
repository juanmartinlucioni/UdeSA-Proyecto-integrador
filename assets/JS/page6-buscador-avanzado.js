//Conseguir lista de generos
var genresUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + apiKey + "&language=en-US"
fetch(genresUrl)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
        var includeList = document.getElementById("genre-include")
        var excludeList = document.getElementById("genre-exclude");
        for (var i = 0; i < data.genres.length; i++) {
            includeList.innerHTML += "<option for=" + data.genres[i].name + " value="+ data.genres[i].id+">" + data.genres[i].name+"</option>"
            excludeList.innerHTML += "<option for=" + data.genres[i].name + " value=" + data.genres[i].id +">" + data.genres[i].name + "</option>"
        }
    })

//Chequeo de condiciones
var advBaseUrl = "https://api.themoviedb.org/3/discover/tv?api_key=2d4fd4d7daaa410f13903dbc540ca5d4"

function advanceCheck(){
    var form = document.getElementById("adv-search-form");
    var includeSelect = document.getElementById("genre-include").selectedIndex;
    var excludeSelect = document.getElementById("genre-exclude").selectedIndex;
    // var sort = document.getElementById("sort-input").value;
    var year = document.getElementById("year").value;

    var includeSelectId = document.getElementById("genre-include").value;
    var excludeSelectId = document.getElementById("genre-exclude").value;

    if ((includeSelect == 0) && (excludeSelect == 0) && (year == "")){
        UIkit.notification({
            message: "<span uk-icon='warning'></span> Complete al menos un campo",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
        return false
    } else if ((includeSelect !== 0) && (excludeSelect !== 0)){
        UIkit.notification({
            message: "<span uk-icon='warning'></span> Solo puede utilizar un tipo de filtro de generos",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
        return false
    } else if ((year.length > 0) && (year.length !== 4)) {
        UIkit.notification({
            message: "<span uk-icon='warning'></span> El año debe estar completo (ej: 1986)",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
        return false
    } else {
        let url = "".concat(advBaseUrl, "&with_genres=", includeSelectId, "&without_genres=", excludeSelectId, "&first_air_date_year=", year)
        console.log(url) //eliminar
        fetch(url)
            .then(advResults => advResults.json())
            .then(function (advData){
                var resultados = document.querySelector(".adv-results")
                resultados.innerHTML = ""
                var seriesFound = advData.results;
                var title
                var poster
                var posterUrl
                var image
                var id
                var average
                var releaseDate
                for (var i = 0; i < seriesFound.length; i++) {
                    id = seriesFound[i].id
                    title = seriesFound[i].name
                    poster = seriesFound[i].poster_path
                    posterUrl = 'https://image.tmdb.org/t/p/original/'
                    image = posterUrl + poster
                    average = seriesFound[i].vote_average
                    releaseDate = seriesFound[i].first_air_date;

                    resultados.innerHTML += `<div class="series">
                    <div class="overlay">
                    <div class="addBtn" id="favs"><span><a href="" ><i class="material-icons heart" id="fav-icon" onclick="favorite(${id});return false">favorite</i></a></span></div>
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
                console.log(seriesFound);
            })
        return false
    }
}