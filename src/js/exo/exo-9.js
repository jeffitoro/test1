let section9 = document.querySelector("#exo-9");
let input1 = section9.querySelector("#input1");
let input2 = section9.querySelector("#input2");
let buttonS = section9.querySelector("#buttonResultat");
let res = section9.querySelector("#resultat");
let operator = section9.querySelector("#options")
let reset = section9.querySelector("#buttonReset");
let groupButton = section9.querySelectorAll(".btn-group button");
let select = section9.querySelector("select");

input1.focus();
input1.setAttribute("placeholder", "number");
input2.setAttribute("placeholder", "number");

let somme = function () {
    res.style.display = "inline-block"

    if (input1.value == "" && input2.value == "") {
        // input2.classList.add("error");
        // input2.setAttribute("placeholder", "champ obligatoire!");
        // input2.blur();
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
            case "+": res.innerHTML = " " + (parseFloat(input1.value) + parseFloat(input2.value)); break;
            case "-": res.innerHTML = " " + (parseFloat(input1.value) - parseFloat(input2.value)); break;
            case "/": res.innerHTML = " " + (parseFloat(input1.value) / parseFloat(input2.value)); break;
            case "*": res.innerHTML = " " + (parseFloat(input1.value) * parseFloat(input2.value)); break;
            default: break;
        }
    }

    if (select.selectedIndex == "") {
        select.classList.add("error");
        select.blur();
    } else {
        select.classList.remove("error");
    }
}
let checkLetter = function () {
    let reg = /^-?[0-9]*\.?[0-9]*$/;
    // let reg = new RegExp("[^0-9]");
    while (!reg.test(input1.value) || !reg.test(input2.value)) {
        let reg2 = /[^0-9]/;
        // let reg2 = /^(.(?!\d)|\D)+/;
        if (!reg.test(input1.value)) {
            let newS = input1.value.replace(reg2, "");
            input1.value = newS;
        } else if (!reg.test(input2.value)) {
            let newS = input2.value.replace(reg2, "");
            input2.value = newS;
        }
    }
}
let removeError = function () {
    if (input1.getAttribute("placeholder") == "champ obligatoire!" && input2.classList.contains("error")) {
        input1.classList.remove("error");
        input1.setAttribute("placeholder", "number");
        input2.classList.remove("error");
        input2.setAttribute("placeholder", "number");
        input1.focus();
    } else if (input1.getAttribute("placeholder") == "champ obligatoire!") {
        input1.classList.remove("error");
        input1.setAttribute("placeholder", "number");
        input1.focus();
    } else if (input2.classList.contains("error")) {
        input2.classList.remove("error");
        input2.setAttribute("placeholder", "number");
        input2.focus();
    }
    if (select.classList.contains("error")) {
        select.classList.remove("error");
        // select.focus();
    }
}
let miseAjourOper = function () {
    switch (this.textContent) {
        case "+": select.selectedIndex = 1; break;
        case "-": select.selectedIndex = 2; break;
        case "/": select.selectedIndex = 3; break;
        case "*": select.selectedIndex = 4; break;
        default: break;
    }
    somme();
    // removeError();
}
let checkKeyEnter = function (event) {
    if (event.code == "Enter") {
        somme();
    }
}

input1.addEventListener("keyup", checkLetter);
input2.addEventListener("keyup", checkLetter);
input1.addEventListener("keyup", checkKeyEnter);
input2.addEventListener("keyup", checkKeyEnter);
buttonS.addEventListener("click", somme);
input1.addEventListener("click", removeError);
input2.addEventListener("click", removeError);
select.addEventListener("click", removeError);
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
    select.selectedIndex = 0;
    removeError();
    input1.focus();
    input1.setAttribute("placeholder", "number");
    input2.setAttribute("placeholder", "number");
});
groupButton.forEach(function (element) {
    element.addEventListener("click", miseAjourOper);
})
1