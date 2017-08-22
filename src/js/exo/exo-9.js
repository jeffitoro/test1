let section9 = document.querySelector("#exo-9");
let input1 = section9.querySelector("#input1");
let input2 = section9.querySelector("#input2");
let buttonS = section9.querySelector("button");
let res = section9.querySelector("#resultat");

let somme = function () {
    res.style.display = "inline-block"

    if (input1.value == "" && input2.value == "") {
        input2.classList.add("error");
        input2.setAttribute("placeholder", "champ obligatoire!");
        input2.blur();
        input1.classList.add("error");
        input1.setAttribute("placeholder", "champ obligatoire!");
        input1.blur();
    } else if (input1.value == "") {
        input1.classList.add("error");
        input1.setAttribute("placeholder", "champ obligatoire!");
        input1.blur();
    } else if (input2.value == "") {
        input2.classList.add("error");
        input2.setAttribute("placeholder", "champ obligatoire!");
        input2.blur();
    } else {
        res.innerHTML = parseInt(input1.value) + parseInt(input2.value);
    }
}
let checkLetter = function () {
    let reg = new RegExp("[^0-9]");
    while (reg.test(input1.value) || reg.test(input2.value)) {
        if (reg.test(input1.value)) {
            let newS = input1.value.replace(reg, "");
            input1.value = newS;
        } else {
            let newS = input2.value.replace(reg, "");
            input2.value = newS;
        }
    }
}


input1.addEventListener("keyup", checkLetter);
input2.addEventListener("keyup", checkLetter);
buttonS.addEventListener("click", somme);
input1.addEventListener("click", function () {
    if (input1.getAttribute("placeholder") == "champ obligatoire!") {
        input1.classList.remove("error");
        input1.setAttribute("placeholder", "");
    }
});
input2.addEventListener("click", function () {
    console.dir(this);
    if (this.classList.contains("error")) {
        this.classList.remove("error");
        this.setAttribute("placeholder", "");
    }
});