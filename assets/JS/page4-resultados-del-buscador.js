// runSearch(localStorage.getItem("searchQuery"));
var searchUrl = window.location.href;
const searchQueryUrl = new URL (searchUrl);
var query = searchQueryUrl.searchParams.get("search");
runSearch(query);
document.getElementById("searchbar").value = query;
