/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//définir une phrase d'accueil
var phrase = "Bonjours tout le monde";
//faire apparaitre le contnu de la variable phrase dans la console
console.log(phrase);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//exo 2
//selectionner un element
var element = document.querySelector('#element-to-select');
//afficher dns la console
console.log(element);
console.log(element.innerText);
element.innerText = "ceci est le contenu modifier en js";
console.log(element.innerText);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//exo 3


//recuperer les element dont on va se servir
var btn3 = document.querySelector("#first-event");
//ecrire les fonctionnalites
var direbonjour = function direbonjour() {
    console.log("on me click");
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn3.addEventListener('click', direbonjour);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//exo 4
//recuperer les element dont on va se servir
var inputchanger = document.querySelector("#title-content");
var btn4 = document.querySelector("#change-title");
var h4Exo4 = document.querySelector("#title-to-change");
//ecrire les fonctionnalites
var changerTitre = function changerTitre() {
    //prendre le contenu de l'input
    var newTitle = inputchanger.value;
    //mettre le contenu dans le h4
    h4Exo4.innerText = newTitle;
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//exo 4
var section5 = document.querySelector("#exo-5");
//recuperer les element dont on va se servir
var inputchanger = section5.querySelector("#title-content");
var btn4 = section5.querySelector("#change-title");
var h4Exo4 = section5.querySelector("#title-to-change");
//ecrire les fonctionnalites
var changerTitre = function changerTitre() {
    //prendre le contenu de l'input
    var newTitle = inputchanger.value;
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
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);

//fonction vider champ
var viderchamp = function viderchamp() {
    if (inputchanger.classList.contains("error")) {
        inputchanger.value = "";
        inputchanger.classList.remove("error");
    }
};
inputchanger.addEventListener('click', viderchamp);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Recuperer les éléments
var section6 = document.querySelector("#exo-6");
//recuperer les element dont on va se servir
var btn = section6.querySelector("#button");
var links = section6.querySelector("#links");
var input = section6.querySelector("#text-input");
//Definir les fonctionnalités

//aojuter un élément
var ajoutEle = function ajoutEle() {
    //créer un élé li
    var li = document.createElement('li');
    //recuperer element de l'input
    var text = input.value;
    //verification
    if (text == "") {
        console.log("input est vide");
        input.classList.add("error");
        input.setAttribute("placeholder", "champ obligatoire!");
        input.blur();
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
};
//ajout les écouteurs d'événement
btn.addEventListener("click", ajoutEle);

//use console.log() console.dir()
//evenement check enter
var checkey = function checkey(event) {
    if (event.code == "Enter") {
        ajoutEle();
    }
};
input.addEventListener('keyup', checkey);
//this represent lelement qui a provoqué l'évenement
input.addEventListener("click", function () {
    if (input.getAttribute("placeholder") == "champ obligatoire!") {
        input.classList.remove("error");
        input.setAttribute("placeholder", "");
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section7 = document.querySelector("#exo-7");
var btn = section7.querySelectorAll("button");

var deleteB = function deleteB() {
    //event evenement different
    //this - element
    var parent = this.parentElement;
    parent.removeChild(this);
    // section7.removeChild(this);
};
// btn.addEventListener("click", d);

btn.forEach(function (element) {
    element.addEventListener("click", deleteB);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section8 = document.querySelector("#exo-8");
var btn = section8.querySelectorAll("button");

var deleteE = function deleteE() {
    var span = document.createElement("span");
    console.dir(this);
    var taille = this.offsetWidth + "px";
    span.style.width = taille;
    span.style.display = "inline-block";
    var parent = this.parentNode; //pour qu'il ne s'efface pas
    this.parentNode.replaceChild(span, this);
    //2ème partie ajouter un btn à la suite
    var newButton = document.createElement("Button");
    newButton.className = "btn btn-warning";
    newButton.innerText = "Delete me";
    console.log(btn);
    console.dir(btn);
    parent.append(newButton);
    newButton.addEventListener('click', deleteE);
};
// btn.addEventListener("click", d);

btn.forEach(function (element) {
    //il met a tous les button un ecouter devenemnts
    element.addEventListener("click", deleteE);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section9 = document.querySelector("#exo-9");
var input1 = section9.querySelector("#input1");
var input2 = section9.querySelector("#input2");
var buttonS = section9.querySelector("#buttonResultat");
var res = section9.querySelector("#resultat");
var operator = section9.querySelector("#options");
var reset = section9.querySelector("#buttonReset");

var somme = function somme() {
    res.style.display = "inline-block";

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
                res.innerHTML = " " + parseFloat(input1.value) / parseFloat(input2.value);
                break;
            case "*":
                res.innerHTML = " " + parseFloat(input1.value) * parseFloat(input2.value);
                break;
            default:
                break;
        }
    }
};

var checkLetter = function checkLetter() {
    var reg = new RegExp("^-?[0-9]*\.?[0-9]*$");
    // let reg = new RegExp("[^0-9]");
    while (!reg.test(input1.value) || !reg.test(input2.value)) {
        var reg2 = new RegExp("[^0-9]");
        if (!reg.test(input1.value)) {
            var newS = input1.value.replace(reg2, "");
            input1.value = newS;
        } else if (!reg.test(input2.value)) {
            var _newS = input2.value.replace(reg2, "");
            input2.value = _newS;
        }
    }
};

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
};
input2.ondrop = function () {
    return false;
    // input2.value = "";
};
reset.addEventListener("click", function () {
    input1.value = "";
    input2.value = "";
    res.innerHTML = "";
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map