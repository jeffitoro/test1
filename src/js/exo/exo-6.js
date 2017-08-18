//Recuperer les éléments
let section6 = document.querySelector("#exo-6")
//recuperer les element dont on va se servir
let btn = section6.querySelector("#button");
let links = section6.querySelector("#links");
//Definir les fonctionnalités

//aojuter un élément
let ajoutEle = function () {
    //créer un élé li
    let li = document.createElement('li');
    //mettre du txt ds l'élé li
    li.innerText = "Element";
    //mettre la class group
    li.className = "list-group-item";
    //ajout l'élé li à la fin de l'élé ul
    links.appendChild(li);
}

//ajout les écouteurs d'événement
btn.addEventListener("click", ajoutEle);