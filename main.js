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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const conflictTitle = document.querySelector(\".conflictTitle\");\nconst researchTitle = document.querySelector(\".researchTitle\");\nconst storeTitle = document.querySelector(\".storeTitle\");\n\nconst conflictDropdown = document.querySelector(\".conflict-dropdown\");\nconst researchDropdown = document.querySelector(\".research-dropdown\");\nconst storeDropdown = document.querySelector(\".store-dropdown\");\nconst navbar = document.querySelector(\".navbar\");\nconst allNavDropdowns = document.querySelectorAll(\".navDropdown\");\nconst allNavTitles = document.querySelectorAll(\".navTitle\");\n\n\nwindow.addEventListener(\"click\", (e) => {\n    if (e.target !== conflictTitle) {\n        conflictTitle.nextElementSibling.classList.remove('active')\n    }\n    if (e.target !== researchTitle) {\n        researchTitle.nextElementSibling.classList.remove('active');\n    }\n    if (e.target !== storeTitle) {\n        storeTitle.nextElementSibling.classList.remove('active');\n    }\n});\n\nfunction menuDrop(menuItem) {\n    menuItem.addEventListener(\"click\", (e) => {\n        menuItem.nextElementSibling.classList.toggle(\"active\");\n    })\n}\n\nmenuDrop(conflictTitle);\nmenuDrop(researchTitle);\nmenuDrop(storeTitle);\n\n\n\nconst images = document.querySelectorAll(\".image\");\nlet index = 0;\n\n\nconst picCircleNavWrapper = document.querySelector(\".picCircleNavWrapper\");\n\nfunction createNavCircles() {\n    for (let i = 0; i < images.length; i++) {\n        const picCircleButton = document.createElement(\"div\");\n        picCircleButton.classList.add(\"picCircleButton\");\n        picCircleButton.addEventListener(\"click\", () => {\n            currentPic(i);\n        })\n        picCircleNavWrapper.appendChild(picCircleButton);\n    }\n}\n\ncreateNavCircles();\n\nconst circleButtons = document.querySelectorAll(\".picCircleButton\");\nconst nextButton = document.querySelector(\".nextButton\");\n\nimages[0].style.opacity = \"1\";\ncircleButtons[0].style.background = \"black\";\nnextButton.addEventListener(\"click\", nextPic);\n\n\nfunction currentPic(newIndex) {\n    images[index].style.opacity = \"0\";\n    circleButtons[index].style.background = \"white\";\n\n    index = newIndex;\n    images[index].style.opacity = \"1\";\n    circleButtons[index].style.background = \"black\";\n\n}\n\nfunction nextPic() {\n    images[index].style.opacity = \"0\";\n    circleButtons[index].style.background = \"white\";\n\n    index += 1;\n\n    if (index > images.length - 1) {\n        index = 0\n    }\n    images[index].style.opacity = \"1\";\n    circleButtons[index].style.background = \"black\";\n}\n\nconst prevButton = document.querySelector(\".previousButton\");\nprevButton.addEventListener(\"click\", prevPic);\n\nfunction prevPic() {\n    images[index].style.opacity = \"0\";\n    circleButtons[index].style.background = \"white\";\n\n    index -= 1;\n\n    if (index < 0) {\n        index = images.length - 1;\n    }\n    images[index].style.opacity = \"1\";\n    circleButtons[index].style.background = \"black\";\n\n}\n\nwindow.setInterval(nextPic, 3000);\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });