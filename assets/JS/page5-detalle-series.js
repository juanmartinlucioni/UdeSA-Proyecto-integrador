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
                    genres = informacion.genres
                    language = informacion.original_language
                    sinopsis = informacion.overview
                    status = informacion.status
                    releaseDate = informacion.first_air_date
                    lastEpisode = informacion.last_episode_to_air.name
                    lastEpisodeDate = informacion.last_air_date
                    trailer = informacion.video
                    average = informacion.vote_average
                    if (trailer == false) {
                    console.log("holas");
                    };
                    console.log(informacion)
                var detalles = document.getElementById("detalles")
                detalles.innerHTML += `
                        <div class="serie">
                            <h1>${title}</h1>
                            <div class='series-info-wrapper'>
                                <img src="${image}" alt="${title}">
                                <aside class="series-info">
                                    <div class='sinopsis-wrapper'>
                                        <h2>Sinopsis</h2>
                                        <p>${sinopsis}</p>
                                    </div>
                                    <h2>About ${title}</h2>
                                    <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                                    <progress id="js-progressbar" class="uk-progress" value="${average}" max="10"></progress>
                                    <p><strong>Current status:</strong> <span>${status}</span></p>
                                    <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                                    <p><strong>Latest episode:</strong> <span>${lastEpisode}</span></p>
                                    <p><strong>Aired on:</strong> <span>${lastEpisodeDate}</span></p>
                                </aside>
                            </div>
                        </div>`
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
                    <iframe width="640" height="390" src="${video}" frameborder="0" allowfullscreen></iframe>`
                }
            })
})
