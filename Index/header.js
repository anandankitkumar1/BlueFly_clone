var btn = document.getElementById("fade")
function divfade() {
    var cll = document.getElementById("cloth_hover");
    cll.style.display = "grid";
    cll.style.background = "white";
}
btn.addEventListener("mouseover", divfade);



var cll = document.getElementById("cloth_hover");
function divclfade() {
        cll.style.display = "none";
}
cll.addEventListener("mouseleave", divclfade);