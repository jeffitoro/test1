//Recuperer les éléments
let section6 = document.querySelector("#exo-6")
//recuperer les element dont on va se servir
let btn = section6.querySelector("#button");
let links = section6.querySelector("#links");
let input = section6.querySelector("#text-input");
//Definir les fonctionnalités

//aojuter un élément
let ajoutEle = function () {
    //créer un élé li
    let li = document.createElement('li');
    //recuperer element de l'input
    let text = input.value;
    //verification
    if (text == "") {
        console.log("input est vide");
        input.classList.add("error");
        input.setAttribute("placeholder", "champ obligatoire!");
    } else {
        //remove class error
        input.classList.remove("error");
        //mettre du txt ds l'élé li
        li.innerText = text;
        //mettre la class group
        li.className = "list-group-item";
        //ajout l'élé li à la fin de l'élé ul
        links.appendChild(li);
        //delete text input
        input.value = "";
        //placeholder
        input.setAttribute("placeholder", "entrer données");
    }
}
//ajout les écouteurs d'événement
btn.addEventListener("click", ajoutEle);

//
let checkey = function (event) {
    if (event.code == "Enter") {
        ajoutEle();
    }
}
input.addEventListener('keyup', checkey);