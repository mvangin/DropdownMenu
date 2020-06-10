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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuDrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDrop.js */ \"./src/menuDrop.js\");\n/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow.js */ \"./src/slideshow.js\");\n/* harmony import */ var _slideshow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slideshow_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuDrop.js":
/*!*************************!*\
  !*** ./src/menuDrop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuDrop = (() => {\n    const conflictTitle = document.querySelector(\".conflictTitle\");\n    const researchTitle = document.querySelector(\".researchTitle\");\n    const storeTitle = document.querySelector(\".storeTitle\");\n    \n    \n    window.addEventListener(\"click\", (e) => {\n        if (e.target !== conflictTitle) {\n            conflictTitle.nextElementSibling.classList.remove('active')\n        }\n        if (e.target !== researchTitle) {\n            researchTitle.nextElementSibling.classList.remove('active');\n        }\n        if (e.target !== storeTitle) {\n            storeTitle.nextElementSibling.classList.remove('active');\n        }\n    });\n\n    function menuDrop(menuItem) {\n        menuItem.addEventListener(\"click\", (e) => {\n            menuItem.nextElementSibling.classList.toggle(\"active\");\n        })\n    }\n\n    menuDrop(conflictTitle);\n    menuDrop(researchTitle);\n    menuDrop(storeTitle);\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({menuDrop});\n\n//# sourceURL=webpack:///./src/menuDrop.js?");

/***/ }),

/***/ "./src/slideshow.js":
/*!**************************!*\
  !*** ./src/slideshow.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const slideshow = (() => {\n\n    const images = document.querySelectorAll(\".image\");\n    let index = 0;\n\n\n    const picCircleNavWrapper = document.querySelector(\".picCircleNavWrapper\");\n\n    function createNavCircles() {\n        for (let i = 0; i < images.length; i++) {\n            const picCircleButton = document.createElement(\"div\");\n            picCircleButton.classList.add(\"picCircleButton\");\n            picCircleButton.addEventListener(\"click\", () => {\n                currentPic(i);\n            })\n            picCircleNavWrapper.appendChild(picCircleButton);\n        }\n    }\n\n    createNavCircles();\n\n    const circleButtons = document.querySelectorAll(\".picCircleButton\");\n    const nextButton = document.querySelector(\".nextButton\");\n\n    images[0].style.opacity = \"1\";\n    circleButtons[0].style.background = \"black\";\n    nextButton.addEventListener(\"click\", nextPic);\n\n\n    function currentPic(newIndex) {\n        images[index].style.opacity = \"0\";\n        circleButtons[index].style.background = \"white\";\n\n        index = newIndex;\n        images[index].style.opacity = \"1\";\n        circleButtons[index].style.background = \"black\";\n\n    }\n\n    function nextPic() {\n        images[index].style.opacity = \"0\";\n        circleButtons[index].style.background = \"white\";\n\n        index += 1;\n\n        if (index > images.length - 1) {\n            index = 0\n        }\n        images[index].style.opacity = \"1\";\n        circleButtons[index].style.background = \"black\";\n    }\n\n    const prevButton = document.querySelector(\".previousButton\");\n    prevButton.addEventListener(\"click\", prevPic);\n\n    function prevPic() {\n        images[index].style.opacity = \"0\";\n        circleButtons[index].style.background = \"white\";\n\n        index -= 1;\n\n        if (index < 0) {\n            index = images.length - 1;\n        }\n        images[index].style.opacity = \"1\";\n        circleButtons[index].style.background = \"black\";\n\n    }\n\n    window.setInterval(nextPic, 3000);\n\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/slideshow.js?");

/***/ })

/******/ });