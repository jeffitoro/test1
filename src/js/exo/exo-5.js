//exo 4
let section5 = document.querySelector("#exo-5")
//recuperer les element dont on va se servir
let inputchanger = section5.querySelector("#title-content");
let btn4 = section5.querySelector("#change-title");
let h4Exo4 = section5.querySelector("#title-to-change");
//ecrire les fonctionnalites
let changerTitre = function () {
    //prendre le contenu de l'input
    let newTitle = inputchanger.value;
    console.log(newTitle + "test");
    if (newTitle == "") {
        //Mettre msg erreur
        console.log("l'input est vide");
        inputchanger.classList.add('error');
        // inputchanger.value = "champ obligatoire";
        inputchanger.setAttribute("placeholder", "champ obligatoire!");
    } else {
        inputchanger.classList.remove('error');
        //mettre ce contenu dans le titre
        //mettre le contenu dans le h4
        h4Exo4.innerText = newTitle;
    }
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);

//fonction vider champ
let viderchamp = function () {
    if (inputchanger.classList.contains("error")) {
        inputchanger.value = "";
        inputchanger.classList.remove("error");
    }
}
inputchanger.addEventListener('click', viderchamp);