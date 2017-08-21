let section8 = document.querySelector("#exo-8");
let btn = section8.querySelectorAll("button");

let deleteE = function () {
    let span = document.createElement("span");
    console.dir(this);
    let taille = this.offsetWidth + "px";
    span.style.width = taille;
    span.style.display = "inline-block";
    let parent = this.parentNode;//pour qu'il ne s'efface pas
    this.parentNode.replaceChild(span, this);
    //2ème partie ajouter un btn à la suite
    let newButton = document.createElement("Button");
    newButton.className = "btn btn-warning";
    newButton.innerText = "Delete me";
    console.log(btn);
    console.dir(btn);
    parent.append(newButton);
    newButton.addEventListener('click', deleteE);
}
// btn.addEventListener("click", d);

btn.forEach(function (element) {//il met a tous les button un ecouter devenemnts
    element.addEventListener("click", deleteE);
});