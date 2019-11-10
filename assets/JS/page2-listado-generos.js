//Genre search
var genreUrl = window.location.href;
const searchQueryUrl = new URL (genreUrl);
var genreQuery = searchQueryUrl.searchParams.get("genreid");
genreSearch(genreQuery, 1);
    
//Title
var genreName = searchQueryUrl.searchParams.get("genrename");
document.getElementById("genre-name").innerText = genreName;

var newPage = 1
//View More
function viewmore(newPage) {
    genreSearch(genreQuery, newPage);
}