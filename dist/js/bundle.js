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
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(12);

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
    }
};
//ajout les écouteurs d'événement
btn.addEventListener("click", ajoutEle);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map