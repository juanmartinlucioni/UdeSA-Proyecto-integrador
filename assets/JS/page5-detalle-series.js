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
                        releaseDate = informacion.first_air_date
                        trailer = informacion.video
                        average = informacion.vote_average
                        if (trailer == false) {
                            console.log("holas");
                            
                        };
                        console.log(informacion)
                var detalles = document.getElementById("detalles")
                detalles.innerHTML += `
                        <div class="movie">
                            <h1>${title}</h1>
                            <img src="${image}" alt="">
                            <p id="p_rating"><strong>Rating:</strong> <span>${average} / 10 </span> </p>
                            <p><strong>First air date:</strong> <span>${releaseDate}</span></p>
                            <h2>Sinopsis</h2>
                            <p>${sinopsis}</p>
                            <h2>Trailer</h2>
                            <iframe src="${trailer}" frameborder="0"></iframe>"
                        </div>`
                
                
                // "<h1>${title}</h1><img src="${posterURL}" alt=""><h2>Sinopsis</h2><p>${sinopsis}</p><h2>trailer</h2><iframe src="${trailer}" frameborder="0"></iframe>"
                    })})
