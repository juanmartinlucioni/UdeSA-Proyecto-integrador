window.onload = function(){
    //Hover sobre trendings
    var activePoster = document.querySelectorAll(".series-img");
    activePoster.onclick = function(){
        activePoster.classList.toggle("series-hover");
    }
}