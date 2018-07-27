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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(elements) {\n    this.elements = elements;\n    \n  }\n  \n  html(string) {\n    if(!string){\n      return this.elements[0].innerHTML;\n    }\n    else{\n      this.elements.forEach( (el) => {\n        el.innerHTML = string;\n      });\n    }\n  }\n  \n  empty(){\n    this.html(\" \");\n  }\n  \n  append(content) {\n    this.elements.forEach((el) => {\n      if(content.constructor === String){\n        el.innerHTML += content;\n      }\n      else if (content.constructor === HTMLElement) {\n        el.innerHTML += content.outerHTML;\n      }\n      else {\n        console.log(\"hey !\");\n        content.elements.forEach((cont) => {\n          el.innerHTML += cont.outerHTML;\n        });\n      }\n    });\n  }\n  \n  attr(name,setter){\n    if (!setter) {\n      return this.getAttribute(name);\n    }\n    else {\n      this.setAttribute(name,setter);\n    }\n  }\n  \n  addClass(name){\n    this.elements.forEach((el) => {\n      el.classList.add(name);\n    });\n  }\n  \n  removeClass(name){\n    this.elements.forEach((el) => {\n      el.classList.remove(name);\n    });\n  }\n  \n  children(){\n    let ele = [];\n    this.elements.forEach((el) => {\n      ele.concat(Array.from(el.childNodes));\n    });\n    return new DOMNodeCollection(ele);\n  }\n  \n  parent() {\n    let parents = [];\n    this.elements.forEach( (el) => {\n      parents.push(el.parentNode);\n    });\n    return new DOMNodeCollection(parents);\n  }\n  \n  find(selector) {\n    let descendants = [];\n    this.elements.forEach((el) => {\n      // debugger\n      descendants = descendants.concat(Array.from(el.querySelectorAll(selector)));\n    });\n    return new DOMNodeCollection(descendants);\n  }\n  \n  remove(){\n    this.children().forEach(ele => ele.removeChild(child));\n    this.html(\" \");\n    this.parentNode.removeChild(this);\n    // this.elements.forEach(ele => {\n    //    ele.innerHTML = \"\";\n    //    debugger\n    //    ele.children().forEach(child => {\n    // \n    //     // this.elements.forEach( (el) => {\n    //     //   debugger \n    //     //   this.find(el).forEach(child => {\n    //     //     child.html(\" \");\n    //     //     el.removeChild(child);\n    //     //   });\n    //     //   el.html(\" \");\n    //     //   el.parentNode.removeChild(el);\n    //     // });\n    //   });\n    //   ele.parentNode.removeChild(el);\n    // });\n  }\n  \n  on() {\n    \n    \n  }\n  \n  off() {\n    \n  }\n  \n  \n  \n}\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = function (selector) {\n  let getdoc;\n  if (selector instanceof HTMLElement) {\n    return new DOMNodeCollection([selector]);\n  }\n  else {\n    return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));\n  }\n};\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });