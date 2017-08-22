let section9 = document.querySelector("#exo-9");
let input1 = section9.querySelector("#input1");
let input2 = section9.querySelector("#input2");
let buttonS = section9.querySelector("#buttonResultat");
let res = section9.querySelector("#resultat");
let operator = section9.querySelector("#options")
let reset = section9.querySelector("#buttonReset");

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
        switch (operator.value) {
            case "+":
                res.innerHTML = " " + (parseFloat(input1.value) + parseFloat(input2.value));
                break;
            case "-":
                res.innerHTML = " " + (parseFloat(input1.value) - parseFloat(input2.value));
                break;
            case "/":
                res.innerHTML = " " + (parseFloat(input1.value) / parseFloat(input2.value));
                break;
            case "*":
                res.innerHTML = " " + (parseFloat(input1.value) * parseFloat(input2.value));
                break;
            default:
                break;
        }
    }
}

let checkLetter = function () {
    let reg = new RegExp("^-?[0-9]*\.?[0-9]*$");
    // let reg = new RegExp("[^0-9]");
    while (!reg.test(input1.value) || !reg.test(input2.value)) {
        let reg2 = new RegExp("[^0-9]");
        if (!reg.test(input1.value)) {
            let newS = input1.value.replace(reg2, "");
            input1.value = newS;
        } else if (!reg.test(input2.value)) {
            let newS = input2.value.replace(reg2, "");
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
// input1.addEventListener("drop", function () {
// input1.value = "";
// });
input1.ondrop = function () {
    return false;
    // input2.value = "";
}
input2.ondrop = function () {
    return false;
    // input2.value = "";
}
reset.addEventListener("click", function () {
    input1.value = "";
    input2.value = "";
    res.innerHTML = "";
});