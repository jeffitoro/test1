let section9 = document.querySelector("#exo-9");
let input1 = section9.querySelector("#input1");
let input2 = section9.querySelector("#input2");
let buttonS = section9.querySelector("button");
let res = section9.querySelector("#resultat");

let somme = function () {
    res.style.display = "inline-block"
    res.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

buttonS.addEventListener("click", somme);