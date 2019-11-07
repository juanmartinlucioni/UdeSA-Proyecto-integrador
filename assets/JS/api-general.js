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
      var resultsList = document.getElementById("results-list");
      for (var i = 0; i < seriesSearchResult.length; i++) {
        id = seriesSearchResult[i].id
        if (seriesSearchResult[i].poster_path !== null) {
        resultsList.innerHTML += "<ul class='result result"+i+"'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='https://image.tmdb.org/t/p/original/" + seriesSearchResult[i].poster_path + "' alt=''></a></li></ul>"
      } else {
        resultsList.innerHTML += "<ul class='result result" + i + "'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='assets/IMG/noimage.png' alt=''></a></li></ul>"
      }
    }
    })
}
searchBar.onkeypress = function (event) {
  var key = event.key;
  if ((key == "Enter") && (searchBar.value.length > 3)) {
    var searchQueryStr = searchBar.value;
    localStorage.setItem("searchQuery", searchQueryStr);
    // location.href = "page4-resultados-del-buscador.html?query=" + localStorage.getItem("searchQuery")
  } else if ((key == "Enter") && (searchBar.value.length <= 3)) {
    return UIkit.notification({
      message: "<span uk-icon='warning'></span> El término de búsqueda debe ser mayor a 3 caractéres!",
      status: 'warning',
      pos: 'bottom-left',
      timeout: 2000
    });
  }
}