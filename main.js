/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function home(){
	const container=document.createElement("div");
	container.id='container';

	const welcome=document.createElement("div");
	welcome.textContent="Welcome, we hope you have a nice time here!";
	welcome.id='welcome'

	const image=document.createElement("img");
	image.id='bg';
	image.src="../dist/imgs/bg.jpg";

	container.appendChild(welcome);
	container.appendChild(image);
	return container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu(){
	const container=document.createElement("div");
	container.classList.add('food_container');
	const item1=createItem("../dist/imgs/food/food1.jpg","Burger with Coke!");
	const item2=createItem("../dist/imgs/food/food2.jpg","Good looking Pasta!");
	const item3=createItem("../dist/imgs/food/food3.jpg","Tasty yellow something!");
	const item4=createItem("../dist/imgs/food/food4.jpg","Healthy looking mess!");
	const item5=createItem("../dist/imgs/food/food5.jpg","Pancakes!");
	const item6=createItem("../dist/imgs/food/food6.jpg","Donuts!");

	container.appendChild(item1);
	container.appendChild(item2);
	container.appendChild(item3);
	container.appendChild(item4);
	container.appendChild(item5);
	container.appendChild(item6);
	return container;
}

function createItem(location,descrip){
	const container=document.createElement("div");
	container.classList.add('item_container');

	const img=document.createElement("img");
	img.src=location;
	img.height="180";
	img.classList.add('item_image');

	const text=document.createElement("div");
	text.textContent=descrip;
	text.classList.add('item_text');

	container.appendChild(img);
	container.appendChild(text);
	return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu); 

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contact(){
	const container=document.createElement("div");
	container.id='contact';

	const info=document.createElement("div");
	info.textContent="Please contact us through these platforms:";

	const icons=document.createElement("img");
	icons.src="../dist/imgs/icons.png";
	icons.height=100;
	icons.id='icons';

	const location=document.createElement("div");
	location.textContent="Or visit us at Classic Restaurant, Antartica, Earth";

	container.appendChild(info);
	container.appendChild(icons);
	container.appendChild(location);

	return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




function createHeader(){
	const header=document.createElement("div");
	header.id='header';

	const name=document.createElement("div");
	name.textContent="Classic Restaurant";
	name.id='name';

	const tabs=document.createElement("div");
	tabs.id='tabs';

	const home=document.createElement("div");
	home.addEventListener("click",bring_home);
	home.textContent="Home";
	home.id='home';

	const menu=document.createElement("div");
	menu.addEventListener("click",bring_menu);
	menu.textContent="Menu";
	menu.id='menu';

	const contact=document.createElement("div");
	contact.addEventListener("click",bring_contact);
	contact.textContent="Contact";
	contact.id='home';

	tabs.appendChild(home);
	tabs.appendChild(menu);
	tabs.appendChild(contact);

	header.appendChild(name);
	header.appendChild(tabs);
	return header;
}

function footer(){
	const footer=document.createElement("div");
	footer.id='footer';
	footer.textContent="@warstilide49";
	return footer;
}

function bring_home(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    content.appendChild(footer());
}

function bring_menu(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    content.appendChild(footer());
}

function bring_contact(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    content.appendChild(footer());
}

function removeChildren(){
	const content=document.getElementById("content")
	let child = content.lastElementChild; 
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
    return content;
}

function initialSite(){
	const content=document.getElementById("content")
	content.appendChild(createHeader());
	content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
	content.appendChild(footer());
}


initialSite();
})();

/******/ })()
;