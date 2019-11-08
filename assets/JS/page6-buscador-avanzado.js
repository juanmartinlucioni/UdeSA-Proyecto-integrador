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

//Generar lista de año
var currentYear = new Date().getFullYear();

for (var i = currentYear; i >= 1940; --i) {
    var yearList = document.getElementById("year")
    yearList.innerHTML += "<option value="+i+">"+i+"</option>"
}

//Cambio include/exclude
function includeChange() {
    var excludeSelect = document.getElementById("genre-exclude").selectedIndex;
    if (excludeSelect !== 0){
        document.getElementById("genre-exclude").value = "";
        UIkit.notification({
            message: "<span uk-icon='warning'></span> Solo puede utilizar un tipo de filtro de generos",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
    }
}

function excludeChange() {
    var includeSelect = document.getElementById("genre-include").selectedIndex;
    if (includeSelect !== 0){
        document.getElementById("genre-include").value = "";
        UIkit.notification({
            message: "<span uk-icon='warning'></span> Solo puede utilizar un tipo de filtro de generos",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
    }
}

//Chequeo de condiciones
var advBaseUrl = "https://api.themoviedb.org/3/discover/tv?api_key=2d4fd4d7daaa410f13903dbc540ca5d4"

function advanceCheck(){
    var includeSelect = document.getElementById("genre-include").selectedIndex;
    var excludeSelect = document.getElementById("genre-exclude").selectedIndex;
    var sort = document.getElementById("sort-input").selectedIndex;
    var year = document.getElementById("year").selectedIndex;

    var includeSelectId = document.getElementById("genre-include").value;
    var excludeSelectId = document.getElementById("genre-exclude").value;
    var sortSelected = document.getElementById("sort-input").value;
    var yearSelected = document.getElementById("year").value;

    if ((includeSelect == 0) && (excludeSelect == 0) && (year == 0) && (sort == 0)){
        UIkit.notification({
            message: "<span uk-icon='warning'></span> Complete al menos un campo",
            status: 'warning',
            pos: 'bottom-left',
            timeout: 2000
        });
        return false
    } else {
        let url = "".concat(advBaseUrl, "&with_genres=", includeSelectId, "&without_genres=", excludeSelectId, "&sort_by=", sortSelected, "&first_air_date_year=", yearSelected, "&include_null_first_air_dates=false")
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
                    <div class="addBtn" id="favs"><span><a href="" ><i class="material-icons heart" id="fav-icon-${id}" onclick="favorite(${id});return false">favorite</i></a></span></div>
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
        return false
    }
}