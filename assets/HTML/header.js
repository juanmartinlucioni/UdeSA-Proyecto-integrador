document.getElementById('header').innerHTML += "\
<a class='logo' href='page1-home.html'>\
    <img src='assets/img/zseries1.png' alt='logo'>\
</a>\
<div class='searchbox'>\
    <div class='searchbar-wrap'>\
        <form action='page4-resultados-del-buscador.html' method='get' id='search-form'>\
            <input type='text' name='search' value='' class='searchbar' id='searchbar'>\
        </form>\
    </div>\
    <label for='searchbar'><i class='fas fa-search'></i></label>\
</div>\
<div class='hamburger'>\
    <div class='line'></div>\
    <div class='line'></div>\
    <div class='line'></div>\
</div>\
<nav>\
    <ul class='nav_links'>\
        <li><a href='page1-home.html'>Home</a></li>\
        <li><a href='page3-series-por-genero.html'>Genres</a></li>\
        <li><a href='page7-favoritas.html'>Favorites</a></li>\
    </ul>\
</nav>\
<a class='CTA' href='#'>\
    <button type='button' id='nav-button' class='login-button' style='width:auto;'>Log in</button>\
</a>"