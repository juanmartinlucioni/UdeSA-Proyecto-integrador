// API KEY 2d4fd4d7daaa410f13903dbc540ca5d4
const apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4";

// Search Results
var searchBaseUrl = "https://api.themoviedb.org/3/search/tv?api_key="

var searchBar = document.getElementById("searchbar");
function runSearch(keyword) {
  let url = "".concat(searchBaseUrl, apiKey, "&query=", keyword)
  document.getElementById("results-list").innerHTML = "";
  fetch(url)
    .then(result => result.json())
    .then(function (data) {
      var seriesSearchResult = data.results;
        if (data.results.length !== 0){
          var resultsList = document.getElementById("results-list");
          for (var i = 0; i < seriesSearchResult.length; i++) {
            id = seriesSearchResult[i].id
            if (seriesSearchResult[i].poster_path !== null) {
            resultsList.innerHTML += "<ul class='result result"+i+"'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='https://image.tmdb.org/t/p/original/" + seriesSearchResult[i].poster_path + "' alt=''></a></li></ul>"
          } else {
            resultsList.innerHTML += "<ul class='result result" + i + "'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='assets/IMG/noimage.png' alt=''></a></li></ul>"
          }
        }
      } else {
        var resultTitle = document.getElementById("results-title")
        resultTitle.innerHTML = "No search results found";
      }
    
    })
}

//Search check
function checkSearch() {
  var x = document.forms["search-form"]["search"].value;
  if (x == "" || x.length < 3) {
    UIkit.notification({
      message: "<span uk-icon='warning'></span> El término de búsqueda debe ser mayor a 3 caractéres",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 2000
    });
    return false
  }
}

//Genre search
    //URL Base
    var genreBaseUrl = "https://api.themoviedb.org/3/discover/tv?api_key=2d4fd4d7daaa410f13903dbc540ca5d4"
    function genreSearch(id, page) {
        let url = "".concat(genreBaseUrl, "&with_genres=", id, "&page=", page)
        fetch(url)
          .then(result => result.json())
          .then(function (data) {
            console.log(url)
            var seriesSearchResult = data.results;
              if (data.results.length !== 0){
                var genreList = document.getElementById("genre-list");
                for (var i = 0; i < seriesSearchResult.length; i++) {
                  id = seriesSearchResult[i].id
                  if (seriesSearchResult[i].poster_path !== null) {
                  genreList.innerHTML += "<ul class='result result"+i+"'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='https://image.tmdb.org/t/p/original/" + seriesSearchResult[i].poster_path + "' alt=''></a></li></ul>"
                } else {
                  genreList.innerHTML += "<ul class='result result" + i + "'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='assets/IMG/noimage.png' alt=''></a></li></ul>"
                }
              }
            }
          })
      }