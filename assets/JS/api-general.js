// API KEY 2d4fd4d7daaa410f13903dbc540ca5d4
const apiKey = "2d4fd4d7daaa410f13903dbc540ca5d4";

// Search Results
var searchBaseUrl = "https://api.themoviedb.org/3/search/tv?api_key="

var searchBar = document.getElementById("searchbar");
function runSearch(keyword) {
  let url = "".concat(searchBaseUrl, apiKey, "&query=", keyword)
  document.getElementById("results-list").innerHTML = "";
  console.log(url); //ELIMINAR
  fetch(url)
    .then(result => result.json())
    .then(function (data) {
      var seriesSearchResult = data.results;
      for (var i = 0; i < seriesSearchResult.length; i++) {
        if (seriesSearchResult[i].poster_path !== null) {
        document.getElementById("results-list").innerHTML += "<ul class='result result"+i+"'><li>" + seriesSearchResult[i].name + "</li>" + "<li><img class='series-img' src='https://image.tmdb.org/t/p/w185/" + seriesSearchResult[i].poster_path + "' alt=''></li></ul>"
      } else {
        document.getElementById("results-list").innerHTML += "<ul class='result result" + i + "'><li>" + seriesSearchResult[i].name + "</li>" + "<li><img class='series-img' src='/assets/IMG/Zseries1.png' alt=''></li></ul>"
      }
    }
      console.log(seriesSearchResult) //ELIMINAR
    })
}
searchBar.onkeypress = function (event) {
  var key = event.key;
  if (key == "Enter") {
    var searchQueryStr = searchBar.value;
    var searchQueryFix = searchQueryStr.replace(" ", "+")
    localStorage.setItem("searchQuery", searchQueryFix);
    location.href = "page4-resultados-del-buscador.html?query=" + localStorage.getItem("searchQuery")
  }
}