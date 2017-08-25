let section10 = document.querySelector("#exo-10");
let inputCollection = section10.querySelectorAll("input");
let buttons = section10.querySelectorAll(".buttons button");
let updateButton = section10.querySelector("#updateOperator")
let resultat = section10.querySelector("#resultat");
let inputActive = inputCollection[0];
/*Des qu'il y a un evenement alors un listener pour traiter*/

/**
 * Il met le focus au début
 */
function init() {
    inputCollection.item(0).focus();
}
/**
 * IL permet de faire les operations
 */
function mainOperationsButtons() {
    checkValues(this.textContent);
    operatorMiseAjour(this.textContent);
    operation(this.textContent);
    clearAll(this.textContent);
}
/**
 * check values valides
 */
function checkValues(string) {
    if (/\.|\-|[0-9]/.test(string) && /^-?[0-9]*\.?[0-9]*$/.test(inputActive.value + string)) {
        inputActive.value += string;
    }
}
/**
 * check operator
 */
function isOperator(string) {
    return /\+|\-|\/|\*/.test(string);
}
/**
 * fait l'operation lorsque on rentre enter ou "="
 */
function operation(string) {

    if (/\=/.test(string) && (/\-|\./.test(inputCollection[0].value) && /\-|\./.test(inputCollection[1].value)) &&
        (inputCollection[0].value.length > 0 && inputCollection[1].value.length > 0)) {
        switch (updateButton.textContent) {
            case "/":
                resultat.value = " " + (parseFloat(inputCollection[0].value) / parseFloat(inputCollection[1].value)); break;
            case "+":
                resultat.value = "" + (parseFloat(inputCollection[0].value) + parseFloat(inputCollection[1].value)); break;
            case "-":
                resultat.value = " " + (parseFloat(inputCollection[0].value) - parseFloat(inputCollection[1].value)); break;
            case "*":
                resultat.value = " " + (parseFloat(inputCollection[0].value) * parseFloat(inputCollection[1].value)); break;
            default: break;
        }
    }
}
/**
 * Il permet d'enlever les errors
 */
function removeError() {
}
/**
 * Ajoute l'error au Node
 */
function addError() {
}
/**
 * Mise à jour de span avec operator
 */
function operatorMiseAjour(string) {
    if (isOperator(string)) {
        switch (string) {
            case "+": updateButton.textContent = "+"; break;
            case "-": updateButton.textContent = "-"; break;
            case "/": updateButton.textContent = "/"; break;
            case "*": updateButton.textContent = "*"; break;
            default: break;
        }
        if (inputActive.id == "input1" && inputCollection[1].value.length == 0 && ((inputCollection[0].value != "-"))) {
            inputActive = inputCollection[1];
            inputActive.focus();
        } else if (inputCollection[0].value.length == 0 && (inputCollection[1].value != "-")) {
            inputActive = inputCollection[0];
            inputActive.focus();
        }
        if (inputCollection[0].value.length != 0 && inputCollection[1].value.length != 0) {
            operation(string);
        }
    }
}
/**
 * clear resultat
 */
function clearAll(string) {
    if (string == "C") {
        for (let index = 0; index < 3; index++) {
            inputCollection[index].value = "";
        }
        updateButton.textContent = ".."
        inputCollection[0].focus();
    }
}
/**
 * check enter and put resultat
 */
function checkEnter(event) {
    if (event.code == "Enter") {
        operation("=");
    }
}
/**
 * check if button  
    return /\-|[0-9]|\./.test(string);
}
/**
 * check input active et change content variable
 */
function getResultI() {
    inputActive = this;
    console.log(inputActive.id);
}

window.addEventListener("load", init);
buttons.forEach(function (element) {
    element.addEventListener("click", mainOperationsButtons);
})
inputCollection.forEach(function (element) {
    element.addEventListener("focus", getResultI);
    element.addEventListener("keyup", checkEnter);
});