//Genre search

var genreUrl = window.location.href;
const searchQueryUrl = new URL (genreUrl);
var genreQuery = searchQueryUrl.searchParams.get("genreid");
genreSearch(genreQuery, 1);
    
//Title

var genreName = localStorage.getItem("selectedGenre");
document.getElementById("genre-name").innerText = genreName;


//infinite scroll

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //funciones que se activan al llegar al fondo de la pagina
    addNewItem()    
    viewmore(loadPage)
    }
};

// Como resolvi el infinite scroll? declare dos variables new page es un array y loadPage es el length de ese array, cada vez que se llega al fondo de la hoja addNewItem() agrega un item al array, loadPage lo cuenta y suma +1 cada vez que se llega al final. luego ViewMore le pide a la API la pagina que sugiere loadPage.

var newPage = [1]
var loadPage = null

function addNewItem() {
    var sumPage = newPage.push(1)
    loadPage = newPage.length
}

//View More

function viewmore(loadPage) {
    genreSearch(genreQuery, loadPage);
}   