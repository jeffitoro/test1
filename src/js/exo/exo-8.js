let section8 = document.querySelector("#exo-8");
let btn = section8.querySelectorAll("button");

let deleteE = function () {
    let span = document.createElement("span");
    console.dir(this);
    let taille = this.offsetWidth + "px";
    span.style.width = taille;
    span.style.display = "inline-block";
    this.parentNode.replaceChild(span, this);
}
// btn.addEventListener("click", d);

btn.forEach(function (element) {
    element.addEventListener("click", deleteE);
});