    // Trending
    fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=2d4fd4d7daaa410f13903dbc540ca5d4")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            var seriesData = data.results;
            for (var i = 0; i < 6; i++) {
                document.querySelector(".series-names").innerHTML += "<li>" + seriesData[i].name + "</li>";
                var seriesPosters = document.querySelector(".series-posters")
                seriesPosters.innerHTML += "<li><img class='series-img' src='https://image.tmdb.org/t/p/w342/" + seriesData[i].poster_path + "' alt=''></li>"
            }
        })

    // //Hover sobre trendings  
    // var activePoster = document.querySelectorAll(".series-img");
    // activePoster.onmouseover = function () {
    //     activePoster.classList.toggle("series-hover");
    // }