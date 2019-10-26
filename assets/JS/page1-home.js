//Hover sobre trendings
var activePoster = document.querySelectorAll(".series-img");
// activePoster.onclick = function(){
//     console.log("hola");
// }
activePoster.onmouseover = function(){
    activePoster.classList.toggle("series-hover");
}