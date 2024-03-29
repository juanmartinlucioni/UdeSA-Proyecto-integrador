window.addEventListener("load", function () {
    var apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4"

    var id = localStorage.getItem("seriesId")

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
                        if (informacion.poster_path !== null){
                            image = posterUrl + poster 
                            } else {
                                image = 'assets/IMG/noimage.png'
                            }
                        genresArray = []
                        genresIdArray= []
                        language = informacion.original_language
                        sinopsis = informacion.overview
                        releaseDate = informacion.first_air_date
                        trailer = informacion.video
                        average = informacion.vote_average
                        lastEpisode = informacion.last_episode_to_air.name
                        lastEpisodeDate = informacion.last_air_date
                        status = informacion.status
                        seasons = informacion.seasons.length
                        homepage = informacion.homepage
                        for (var i = 0; i < informacion.genres.length; i++) {
                            var genres = informacion.genres[i].name
                            genresArray.push(genres)
                            var genresId = informacion.genres[i].id
                            genresIdArray.push(genresId)
                        }
                       
                        console.log(genresIdArray)
                        console.log(genresArray)
                        console.log(informacion)

                var detalles = document.getElementById("detalles")
                detalles.innerHTML += `
                        <div class="serie">
                            <h1>${title}</h1>
                        <div class='series-info-wrapper'>
                                <img src="${image}" alt="${title}">
                                <aside class="series-info">
                                    <div class='sinopsis-wrapper'>
                                        <div class='sinopsis-header'>
                                            <h2>Sinopsis</h2>
                                            <div class="addBtn" id="favs"><span><a href="" ><i class="material-icons heart" id="fav-icon-${id}" onclick="favorite(${id});return false">favorite</i></a></span></div>
                                        </div>    
                                        <p>${sinopsis}</p>
                                    </div>
                                    <h2>About ${title}</h2>
                                    <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                                    <progress id="js-progressbar" class="uk-progress" value="${average}" max="10"></progress>
                                    <p><strong>Current status:</strong> <span>${status}</span></p>
                                    <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                                    <p><strong>Latest episode:</strong> <span>${lastEpisode}</span></p>
                                    <p><strong>Aired on:</strong> <span>${lastEpisodeDate}</span></p>
                                    <p><strong>Seasons:</strong> <span>${seasons}</span></p>
                                    <p><strong>Original Language:</strong> <span style= text-transform:uppercase; >${language}</span></p>
                                    <p><a href='${homepage}' target='_blank'><strong>Homepage</strong></a></p>
                                    <p><strong>Genres:</strong> <span id="genre-list">
                                    </span></p>
                                </aside>
                            </div>
                        </div>`
                        onloadCheck(id)
                    for (let i = 0; i < genresArray.length; i++) {
                        genreList = document.getElementById("genre-list");
                        genreList.innerHTML += `<a href="page2-informacion-genero.html?genreid=${genresIdArray[i]}&genrename=${genresArray[i]}">${genresArray[i]}</a> `
                    }
                    
                    })
    url = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=" + apiKey + "&language=en-US"
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                for(var i = 0; i< data.results.length; i++) {
                    videoName = data.results[i].name;
                    videoKey = data.results[i].key;
                    video = "https://www.youtube.com/embed/" + videoKey;
                    var videoSection = document.getElementById("trailer-wrapper")
                    videoSection.innerHTML +=
                    `<h3 class='video-title'>${videoName}</h3>
                    <iframe src="${video}" frameborder="0" allowfullscreen></iframe>`
                }
            })
        
          // Reco modal fetch

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
                                    if (informacion.poster_path !== null){
                                        image = posterUrl + poster 
                                        } else {
                                            image = 'assets/IMG/noimage.png'
                                        }
                                    average = informacion.results[i].vote_average
                                    releaseDate = informacion.results[i].first_air_date;
                
                                    var listadoRecomendadas = document.querySelector(".listado-series-recomendadas")
                                    listadoRecomendadas.innerHTML +=  `<div class="series">
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
                    

})

// modal recommended
var recoModal = document.getElementById("reco-modal");
window.onclick = function(event) {
     if (event.target == recoModal) {
         recoModal.style.display = "none";
     }
 }

var recoBtn = document.querySelector(".reco-button");
  recoBtn.onclick = function() {
  recoModal.style.display = "block";
 }

var closeRecoModal = document.querySelector(".close-reco");
  closeRecoModal.onclick = function() {
  recoModal.style.display = "none";
 }
