/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoSettings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 8px 0 16px;\n}\n\n.todoSettings .sort {\n  background-color: #50505a;\n  color: #e8f1f5;\n}\n\n.todoSettings > button, .todoSettings .sort {\n  padding: 6px 12px;\n  margin: 0 4px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.todoSettings > button:last-child, .todoSettings .sort:last-child {\n  background-color: #005691;\n  color: #e8f1f5;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems:empty {\n  visibility: hidden;\n}\n\n.todoItems li {\n  min-height: 20px;\n  padding: 8px;\n  border: 2px solid #004a7c;\n}\n\n.todoItems li:nth-child(2n) {\n  background-color: #e8f1f5;\n  color: #004a7c;\n  display: none;\n}\n\n.todoItems li:nth-child(2n + 1) {\n  background-color: #005691;\n  cursor: pointer;\n}\n\n.todoItems li:nth-child(2n + 1) div {\n  pointer-events: none;\n}\n\n.todoItems li:nth-child(2n + 1) button {\n  pointer-events: auto;\n}\n\n.todoItems li:nth-child(2n + 1) span:last-child {\n  margin-left: 32px;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:nth-child(2n + 1):hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:nth-child(2n + 1):hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton:not(.dropdownButton) {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:not(.dropdownButton):hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.sort {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  border: none;\n}\n\n.sort .dropdown {\n  padding-top: 8px;\n  width: 100%;\n  margin-left: -12px;\n  display: none;\n  position: absolute;\n  background-color: inherit;\n  border-radius: 4px;\n}\n\n.sort .dropdown button {\n  padding: 4px 12px;\n  background-color: inherit;\n  color: #e8f1f5;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.sort .dropdown button:hover {\n  color: white;\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n.sort:hover {\n  min-width: 128px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.sort:hover .dropdown {\n  display: block;\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n  margin-left: auto !important;\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const displayController = (() => {
  const addProjects = (() => {
    const addProjectModal = document.querySelector(".addProject");
    const addProjectButton = document.querySelector(".addProjectButton");
    const closeAddProject = document.querySelector(".closeAddProject");
    const addProject = document.querySelector(".submitAddProject");

    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");

    addProjectButton.addEventListener("click", () => {
      addProjectModal.style.display = "flex";
    });
    addProjectModal.addEventListener("click", (e) => {
      if (e.target === addProjectModal) {
        addProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        addProjectModal.style.display = "none";
      }
    });
    addProject.addEventListener("click", () => {
      if (title.value === "" || dueDate.value === "") {
        alert("Please fill all inputs");
      } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(
          title.value,
          description.value,
          dueDate.value,
          priority.value,
        );
        title.value = "";
        description.value = "";
        dueDate.value = "";
        addProjectModal.style.display = "none";
        refreshProjectList();
      }
    });
    closeAddProject.addEventListener("click", () => {
      addProjectModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      addProjectModal.style.display = "none";
    });
  })();

  const editProjects = (() => {
    const editProjectModal = document.querySelector(".editProject");
    const closeEditProject = document.querySelector(".closeEditProject");
    const editProject = document.querySelector(".submitEditProject");

    const title = document.querySelector("#titleEdit");
    const description = document.querySelector("#descriptionEdit");
    const dueDate = document.querySelector("#dueDateEdit");
    const priority = document.querySelector("#priorityEdit");

    closeEditProject.addEventListener("click", () => {
      editProjectModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      editProjectModal.style.display = "none";
    });
    editProjectModal.addEventListener("click", (e) => {
      if (e.target === editProjectModal) {
        editProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
      }
    });
    editProject.addEventListener("click", () => {
      if (title.value === "" || dueDate.value === "") {
        alert("Please fill all inputs");
      } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(
          editProjectModal.dataset.projectIndex,
          title.value,
          description.value,
          dueDate.value,
          priority.value,
        );
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
        refreshProjectList();
      }
    });

    const updateModal = () => {
      const tempProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[editProjectModal.dataset.projectIndex];
      title.value = tempProject.title;
      description.value = tempProject.desc;
      dueDate.value = tempProject.dueDate;
      priority.value = tempProject.priority;
      editProjectModal.style.display = "none";
    };

    return { editProjectModal, updateModal };
  })();

  const editTodos = (() => {
    const editTodoModal = document.querySelector(".editTodo");
    const closeEditTodo = document.querySelector(".closeEditTodo");
    const editTodo = document.querySelector(".submitEditTodo");

    const title = document.querySelector("#titleEditTodo");
    const description = document.querySelector("#descriptionEditTodo");
    const dueDate = document.querySelector("#dueDateEditTodo");
    const priority = document.querySelector("#priorityEditTodo");

    closeEditTodo.addEventListener("click", () => {
      editTodoModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      editTodoModal.style.display = "none";
    });
    editTodoModal.addEventListener("click", (e) => {
      if (e.target === editTodoModal) {
        editTodoModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editTodoModal.style.display = "none";
      }
    });
    editTodo.addEventListener("click", (e) => {
      const { projectIndex } = e.target.parentElement.parentElement.dataset;
      if (title.value === "" || dueDate.value === "") {
        alert("Please fill all inputs");
      } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].editTodo(
          e.target.parentElement.parentElement.dataset.todoIndex,
          title.value,
          description.value,
          dueDate.value,
          priority.value,
        );
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editTodoModal.style.display = "none";
        loadTodoList(projectIndex);
      }
    });

    const updateModal = (todoIndex) => {
      const tempProject = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[editTodoModal.dataset.projectIndex];
      const todo = tempProject.getToDoList()[todoIndex];
      title.value = todo.title;
      description.value = todo.description;
      dueDate.value = todo.dueDate;
      priority.value = todo.priority;
      editTodoModal.style.display = "none";
    };

    return { editTodoModal, updateModal };
  })();

  const projectListDom = document.querySelector(".projects>ul");
  const addTodo = document.querySelector(".addTodo");

  addTodo.addEventListener(("click"), (e) => {
    const { projectIndex } = e.target.parentElement.nextElementSibling.firstElementChild.dataset;
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].addToList("New todo", "Edit to change fields", "Today", "High");
    loadTodoList(projectIndex);
  });

  const createProjectDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      _projects__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(e.target.parentElement.dataset.index);
      refreshProjectList();
    });
    return deleteButton;
  };

  const createTodoDeleteButton = (projectIndex) => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].removeFromList(e.target.parentElement.parentElement.dataset.todoIndex);
      loadTodoList(projectIndex);
    });
    return deleteButton;
  };

  const createProjectEditButton = () => {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click", (e) => {
      editProjects.editProjectModal.dataset.projectIndex = e.target.parentElement.dataset.index;
      editProjects.updateModal();
      editProjects.editProjectModal.style.display = "flex";
      e.stopPropagation();
      refreshProjectList();
    });
    return editButton;
  };

  const createTodoEditButton = (projectIndex) => {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click", (e) => {
      const { todoIndex } = e.target.parentElement.parentElement.dataset;
      editTodos.editTodoModal.dataset.projectIndex = projectIndex;
      editTodos.editTodoModal.dataset.todoIndex = todoIndex;
      editTodos.updateModal(todoIndex);
      editTodos.editTodoModal.style.display = "flex";
      e.stopPropagation();
    });
    return editButton;
  };

  const attachProjectListListeners = () => {
    const projectList = document.querySelectorAll(".projects>ul>li");
    projectList.forEach((project) => {
      project.addEventListener("click", (e) => {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveProject(e.target.dataset.index);
        refreshProjectList();
      });
    });
  };

  const loadProject = (index) => {
    const projectFields = document.querySelectorAll(".projectField");
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[index];
    if (project === undefined) {
      return;
    }
    projectFields[0].textContent = project.title;
    projectFields[1].textContent = project.priority;
    projectFields[2].textContent = project.desc;
    projectFields[3].textContent = project.dueDate;
    loadTodoList(index);
  };

  const loadTodoList = (projectIndex) => {
    const todoListDom = document.querySelector(".todoItems");
    todoListDom.textContent = "";
    todoListDom.dataset.projectIndex = projectIndex;
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex];
    const todoList = project.getToDoList();

    for (let i = 0; i < todoList.length; i++) {
      const todoListHeader = document.createElement("li");
      todoListHeader.dataset.todoIndex = i;
      const headerContainer = document.createElement("div");
      todoListHeader.appendChild(headerContainer);
      headerContainer.classList.add("todoHeader");
      const headerDetails = document.createElement("div");
      const todoTitle = document.createElement("div");
      todoTitle.textContent = todoList[i].title;
      todoTitle.classList.add("todoTitle");
      const todoDetails = document.createElement("div");
      const todoDue = document.createElement("span");
      todoDue.textContent = `Due: ${todoList[i].dueDate}`;
      const todoPriority = document.createElement("span");
      todoPriority.textContent = `Priority: ${todoList[i].priority}`;
      todoDetails.append(todoDue, todoPriority);
      headerDetails.append(todoTitle, todoDetails);
      headerContainer.append(headerDetails, createTodoEditButton(projectIndex), createTodoDeleteButton(projectIndex));
      todoListHeader.addEventListener(("click"), (e) => {
        e.target.nextElementSibling.style.display = (e.target.nextElementSibling.style.display === "block") ? "none" : "block";
      });

      const todoListBody = document.createElement("li");
      todoListBody.style.display = "none";
      todoListBody.textContent = todoList[i].description;
      todoListDom.append(todoListHeader, todoListBody);
    }
  };

  const sortTodoButtons = document.querySelectorAll(".sort>.dropdown>.dropdownButton");
  sortTodoButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      const { projectIndex } = e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.dataset;
      sortTodoList(index, projectIndex);
    });
  });

  const sortTodoList = (method, projectIndex) => {
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].sortTodos(method);
    loadTodoList(projectIndex);
  };

  const refreshProjectList = () => {
    projectListDom.textContent = "";
    unloadProjectFields();
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects().forEach((project, index) => {
      const tempLi = document.createElement("li");
      if (project.isActive) {
        tempLi.classList.add("active");
        loadProject(index);
      }
      const projectTitle = document.createElement("span");
      projectTitle.textContent = project.title;
      const projectDetails = document.createElement("span");
      projectDetails.textContent = `Due: ${project.dueDate}, Priority: ${project.priority}`;
      projectTitle.appendChild(projectDetails);
      tempLi.dataset.index = index;
      tempLi.append(projectTitle, createProjectEditButton(), createProjectDeleteButton());
      projectListDom.appendChild(tempLi);
    });
    attachProjectListListeners();
  };

  const unloadProjectFields = () => {
    const projectFields = document.querySelectorAll(".projectField");
    projectFields.forEach((field) => {
      field.textContent = "";
    });
  };

  refreshProjectList(); // Initial page load
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const todoItem = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const project = (title, desc, dueDate, priority) => {
  const isActive = false;
  let todoList = [];
  const getToDoList = () => todoList.slice();
  const addToList = (titleTodo, descTodo, dueDateTodo, priorityTodo) => {
    todoList.push(todoItem(titleTodo, descTodo, dueDateTodo, priorityTodo));
  };
  const removeFromList = (index) => {
    todoList.splice(index, 1);
  };
  const editTodo = (index, title, description, dueDate, priority) => {
    todoList[index].title = title;
    todoList[index].description = description;
    todoList[index].dueDate = dueDate;
    todoList[index].priority = priority;
  };
  const sortTodos = (method) => {
    if (method === 0) {
      todoList = todoList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (method === 1) {
      todoList = todoList.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    } else if (method === 2) {
      console.log({ a, b });
    }
  };

  return {
    title, desc, dueDate, priority, isActive, getToDoList, addToList, removeFromList, editTodo, sortTodos,
  };
};

const projects = (() => {
  const listOfProjects = [];
  const getListOfProjects = () => listOfProjects.slice();
  const addProject = (title, desc, dueDate, priority) => {
    listOfProjects.push(project(title, desc, dueDate, priority));
    if (listOfProjects.length === 1) {
      setActiveProject(0);
    }
  };
  const removeProject = (index) => {
    if (listOfProjects[index].isActive === true) {
      listOfProjects.splice(index, 1);
      setActiveProject(0);
    } else {
      listOfProjects.splice(index, 1);
    }
  };
  const setActiveProject = (index) => {
    if (listOfProjects.length === 0) { return; }
    listOfProjects.forEach((project) => {
      project.isActive = false;
    });
    listOfProjects[index].isActive = true;
  };
  const editProject = (index, title, desc, dueDate, priority) => {
    const tempProject = listOfProjects[index];
    tempProject.title = title;
    tempProject.desc = desc;
    tempProject.dueDate = dueDate;
    tempProject.priority = priority;
  };

  return {
    getListOfProjects, addProject, removeProject, setActiveProject, editProject,
  };
})();

// These are just preloaded example projects
projects.addProject("Sample Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.getListOfProjects()[0].addToList("Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-04-04", "Low");
projects.getListOfProjects()[0].addToList("Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-05", "High");
projects.addProject("Sample 2", "This has no todos, but shows how the project bar looks", "2022-05-05", "Medium");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



_displayController__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxRQUFRLE1BQU0sV0FBVyxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLGFBQWEsWUFBWSxRQUFRLE1BQU0sYUFBYSxZQUFZLFlBQVksWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksVUFBVSxZQUFZLFFBQVEsTUFBTSxZQUFZLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLFFBQVEsTUFBTSxhQUFhLFlBQVksV0FBVyxRQUFRLEtBQUssY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxjQUFjLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsUUFBUSxNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsYUFBYSxjQUFjLFdBQVcsYUFBYSxZQUFZLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxhQUFhLFdBQVcsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxhQUFhLFlBQVksYUFBYSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLFVBQVUsV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsYUFBYSxhQUFhLFVBQVUsWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLGNBQWMsV0FBVyxVQUFVLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZ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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLDREQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLDZEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMEJBQTBCLG1FQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLG1FQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzlCOztBQUV0QiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtcm93czogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKTtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZTogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKS8xZnIgM2ZyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIge1xcbiAgLW1zLWdyaWQtcm93OiAxO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg4cHggKyAxdmgpO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkge1xcbiAgcGFkZGluZzogY2FsYyg4cHggKyAxdmgpIDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSBzcGFuIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiBzcGFuIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSAuZGVsZXRlIHtcXG4gIG1hcmdpbjogMCA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWRjZjA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUgc3BhbiA+IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA1NjkxO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDRweCArIDAuNXZoKTtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdIZWFkZXIgLnByb2plY3RQcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdEZXNjIC5wcm9qZWN0RHVlIHtcXG4gIHdpZHRoOiBjYWxjKDEyOHB4ICsgMTUlKTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiA4cHggMCAxNnB4O1xcbn1cXG5cXG4udG9kb1NldHRpbmdzIC5zb3J0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNWE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyA+IGJ1dHRvbiwgLnRvZG9TZXR0aW5ncyAuc29ydCB7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50b2RvU2V0dGluZ3MgPiBidXR0b246bGFzdC1jaGlsZCwgLnRvZG9TZXR0aW5ncyAuc29ydDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLnRvZG9JdGVtcyB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9JdGVtczplbXB0eSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvSXRlbXMgbGkge1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDRhN2M7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgZGl2IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGJ1dHRvbiB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgLnRvZG9IZWFkZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSAudG9kb0hlYWRlciAudG9kb1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZhYTU7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgLW1zLWdyaWQtcm93OiAzO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNGE3YztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGJ1dHRvbiB7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOGYxZjU7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBzcGFuIGJ1dHRvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dCwgLm1vZGFsID4gZGl2IHNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAwLjV2aCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB3aWR0aDogY2FsYyg2NHB4ICsgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0IC5zZWxlY3RPcHRpb24sIC5tb2RhbCA+IGRpdiBzZWxlY3QgLnNlbGVjdE9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dDpob3ZlciwgLm1vZGFsID4gZGl2IGlucHV0OmZvY3VzLXdpdGhpbiwgLm1vZGFsID4gZGl2IHNlbGVjdDpob3ZlciwgLm1vZGFsID4gZGl2IHNlbGVjdDpmb2N1cy13aXRoaW4ge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZjFmNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5tb2RhbCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmJ1dHRvbjpub3QoLmRyb3Bkb3duQnV0dG9uKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpub3QoLmRyb3Bkb3duQnV0dG9uKTpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDEwMG1zO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5zb3J0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNvcnQgLmRyb3Bkb3duIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc29ydCAuZHJvcGRvd24gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc29ydCAuZHJvcGRvd24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNvcnQ6aG92ZXIge1xcbiAgbWluLXdpZHRoOiAxMjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnNvcnQ6aG92ZXIgLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTFlMWU7XFxufVxcblxcbi5lZGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZWxldGUsIC5lZGl0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGlDQUFpQztBQ1puQzs7QURlQTtFQUNFLGFBQWE7RUFDYixjQWxCd0I7QUNNMUI7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FDWnJCOztBRGVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFhO0VBQ2IsYUFBYTtFQW1IZCxvREFBQTtFQzlIQyx5QkFBeUI7TURRM0IsNERBSVU7QUNWVjs7QUFFQTtFRGpCRSxlQUFlO0VBQ2Ysb0JBQW1CO0VBNEJqQixrQkFBZTtFQUNmLHVCQXRDc0I7RUF1Q3ZCLGtCQUFBO0VDUkQseUJBQXlCO0VERjNCLG9CQVdFO0VBQ0Usb0JBeENPO0VBeUNQLGFBQWE7RUE0RWQsd0JBQUE7TUNsRkcscUJBQXFCO1VEUGpCLHVCQWNOO0VBQ0UseUJBQWM7TUFDZCxzQkFBYTtVQUNiLG1CQTVDQztFQTZDRCxlQUFhO0VBQ2IsY0FBYTtBQ0xuQjs7QUFFQTtFRGtCSyx5QkFBQTtFQ2hCSCw2QkFBNkI7QURsQi9COztBQ3FCQTtFREtR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YUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQSxxQ0FBcUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUFkZFByb2plY3RcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QWRkUHJvamVjdFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYWRkUHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFxuICAgICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2xvc2VBZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9KSgpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZWRpdFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgY2xvc2VFZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VFZGl0UHJvamVjdFwiKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RWRpdFByb2plY3RcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVFZGl0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbkVkaXRcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZUVkaXRcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5RWRpdFwiKTtcblxuICAgIGNsb3NlRWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBlZGl0UHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0UHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5lZGl0UHJvamVjdChcbiAgICAgICAgICBlZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4LFxuICAgICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdXBkYXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleF07XG4gICAgICB0aXRsZS52YWx1ZSA9IHRlbXBQcm9qZWN0LnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wUHJvamVjdC5kZXNjO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRlbXBQcm9qZWN0LmR1ZURhdGU7XG4gICAgICBwcmlvcml0eS52YWx1ZSA9IHRlbXBQcm9qZWN0LnByaW9yaXR5O1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVkaXRQcm9qZWN0TW9kYWwsIHVwZGF0ZU1vZGFsIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZWRpdFRvZG9zID0gKCgpID0+IHtcbiAgICBjb25zdCBlZGl0VG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VG9kb1wiKTtcbiAgICBjb25zdCBjbG9zZUVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRFZGl0VG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZUVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbkVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlFZGl0VG9kb1wiKTtcblxuICAgIGNsb3NlRWRpdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBlZGl0VG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0VG9kb01vZGFsKSB7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBwcm9qZWN0SW5kZXggfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0O1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLmVkaXRUb2RvKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRvZG9JbmRleCxcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBsb2FkVG9kb0xpc3QocHJvamVjdEluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZU1vZGFsID0gKHRvZG9JbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVtcFByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW2VkaXRUb2RvTW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXhdO1xuICAgICAgY29uc3QgdG9kbyA9IHRlbXBQcm9qZWN0LmdldFRvRG9MaXN0KClbdG9kb0luZGV4XTtcbiAgICAgIHRpdGxlLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICBwcmlvcml0eS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZWRpdFRvZG9Nb2RhbCwgdXBkYXRlTW9kYWwgfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcm9qZWN0TGlzdERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHM+dWxcIik7XG4gIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9cIik7XG5cbiAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgcHJvamVjdEluZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5kYXRhc2V0O1xuICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbcHJvamVjdEluZGV4XS5hZGRUb0xpc3QoXCJOZXcgdG9kb1wiLCBcIkVkaXQgdG8gY2hhbmdlIGZpZWxkc1wiLCBcIlRvZGF5XCIsIFwiSGlnaFwiKTtcbiAgICBsb2FkVG9kb0xpc3QocHJvamVjdEluZGV4KTtcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdERlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kb0RlbGV0ZUJ1dHRvbiA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbcHJvamVjdEluZGV4XS5yZW1vdmVGcm9tTGlzdChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC50b2RvSW5kZXgpO1xuICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RWRpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZWRpdFByb2plY3RzLmVkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICBlZGl0UHJvamVjdHMudXBkYXRlTW9kYWwoKTtcbiAgICAgIGVkaXRQcm9qZWN0cy5lZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvRWRpdEJ1dHRvbiA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB0b2RvSW5kZXggfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0O1xuICAgICAgZWRpdFRvZG9zLmVkaXRUb2RvTW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgICBlZGl0VG9kb3MuZWRpdFRvZG9Nb2RhbC5kYXRhc2V0LnRvZG9JbmRleCA9IHRvZG9JbmRleDtcbiAgICAgIGVkaXRUb2Rvcy51cGRhdGVNb2RhbCh0b2RvSW5kZXgpO1xuICAgICAgZWRpdFRvZG9zLmVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhdHRhY2hQcm9qZWN0TGlzdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHM+dWw+bGlcIik7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RGaWVsZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtpbmRleF07XG4gICAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0RmllbGRzWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0RmllbGRzWzFdLnRleHRDb250ZW50ID0gcHJvamVjdC5wcmlvcml0eTtcbiAgICBwcm9qZWN0RmllbGRzWzJdLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICAgIHByb2plY3RGaWVsZHNbM10udGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG4gICAgbG9hZFRvZG9MaXN0KGluZGV4KTtcbiAgfTtcblxuICBjb25zdCBsb2FkVG9kb0xpc3QgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9JdGVtc1wiKTtcbiAgICB0b2RvTGlzdERvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdG9kb0xpc3REb20uZGF0YXNldC5wcm9qZWN0SW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IHByb2plY3QuZ2V0VG9Eb0xpc3QoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdG9kb0xpc3RIZWFkZXIuZGF0YXNldC50b2RvSW5kZXggPSBpO1xuICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvZG9MaXN0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9IZWFkZXJcIik7XG4gICAgICBjb25zdCBoZWFkZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvTGlzdFtpXS50aXRsZTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kb1RpdGxlXCIpO1xuICAgICAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdG9kb0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdG9kb0R1ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kb0xpc3RbaV0uZHVlRGF0ZX1gO1xuICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kb0xpc3RbaV0ucHJpb3JpdHl9YDtcbiAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZCh0b2RvRHVlLCB0b2RvUHJpb3JpdHkpO1xuICAgICAgaGVhZGVyRGV0YWlscy5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGV0YWlscyk7XG4gICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckRldGFpbHMsIGNyZWF0ZVRvZG9FZGl0QnV0dG9uKHByb2plY3RJbmRleCksIGNyZWF0ZVRvZG9EZWxldGVCdXR0b24ocHJvamVjdEluZGV4KSk7XG4gICAgICB0b2RvTGlzdEhlYWRlci5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IChlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRvZG9MaXN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHRvZG9MaXN0Qm9keS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB0b2RvTGlzdEJvZHkudGV4dENvbnRlbnQgPSB0b2RvTGlzdFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIHRvZG9MaXN0RG9tLmFwcGVuZCh0b2RvTGlzdEhlYWRlciwgdG9kb0xpc3RCb2R5KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc29ydFRvZG9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0Pi5kcm9wZG93bj4uZHJvcGRvd25CdXR0b25cIik7XG4gIHNvcnRUb2RvQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBwcm9qZWN0SW5kZXggfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5kYXRhc2V0O1xuICAgICAgc29ydFRvZG9MaXN0KGluZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBzb3J0VG9kb0xpc3QgPSAobWV0aG9kLCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF0uc29ydFRvZG9zKG1ldGhvZCk7XG4gICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgcmVmcmVzaFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHByb2plY3RMaXN0RG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB1bmxvYWRQcm9qZWN0RmllbGRzKCk7XG4gICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmUpIHtcbiAgICAgICAgdGVtcExpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRQcm9qZWN0KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IGBEdWU6ICR7cHJvamVjdC5kdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJvamVjdC5wcmlvcml0eX1gO1xuICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICAgIHRlbXBMaS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgICB0ZW1wTGkuYXBwZW5kKHByb2plY3RUaXRsZSwgY3JlYXRlUHJvamVjdEVkaXRCdXR0b24oKSwgY3JlYXRlUHJvamVjdERlbGV0ZUJ1dHRvbigpKTtcbiAgICAgIHByb2plY3RMaXN0RG9tLmFwcGVuZENoaWxkKHRlbXBMaSk7XG4gICAgfSk7XG4gICAgYXR0YWNoUHJvamVjdExpc3RMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCB1bmxvYWRQcm9qZWN0RmllbGRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RGaWVsZFwiKTtcbiAgICBwcm9qZWN0RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVmcmVzaFByb2plY3RMaXN0KCk7IC8vIEluaXRpYWwgcGFnZSBsb2FkXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiAoe1xuICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LFxufSk7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IGlzQWN0aXZlID0gZmFsc2U7XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCBnZXRUb0RvTGlzdCA9ICgpID0+IHRvZG9MaXN0LnNsaWNlKCk7XG4gIGNvbnN0IGFkZFRvTGlzdCA9ICh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvSXRlbSh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUZyb21MaXN0ID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcbiAgY29uc3QgZWRpdFRvZG8gPSAoaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICB0b2RvTGlzdFtpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgICB0b2RvTGlzdFtpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0b2RvTGlzdFtpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdG9kb0xpc3RbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH07XG4gIGNvbnN0IHNvcnRUb2RvcyA9IChtZXRob2QpID0+IHtcbiAgICBpZiAobWV0aG9kID09PSAwKSB7XG4gICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LnNvcnQoKGEsIGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IDEpIHtcbiAgICAgIHRvZG9MaXN0ID0gdG9kb0xpc3Quc29ydCgoYSwgYikgPT4gYS5kdWVEYXRlLmxvY2FsZUNvbXBhcmUoYi5kdWVEYXRlKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IDIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgYSwgYiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQWN0aXZlLCBnZXRUb0RvTGlzdCwgYWRkVG9MaXN0LCByZW1vdmVGcm9tTGlzdCwgZWRpdFRvZG8sIHNvcnRUb2RvcyxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdE9mUHJvamVjdHMgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdE9mUHJvamVjdHMgPSAoKSA9PiBsaXN0T2ZQcm9qZWN0cy5zbGljZSgpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxpc3RPZlByb2plY3RzLnB1c2gocHJvamVjdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICBpZiAobGlzdE9mUHJvamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0c1tpbmRleF0uaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0T2ZQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGluZGV4LCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IGxpc3RPZlByb2plY3RzW2luZGV4XTtcbiAgICB0ZW1wUHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHRlbXBQcm9qZWN0LmRlc2MgPSBkZXNjO1xuICAgIHRlbXBQcm9qZWN0LmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRlbXBQcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0T2ZQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdCwgZWRpdFByb2plY3QsXG4gIH07XG59KSgpO1xuXG4vLyBUaGVzZSBhcmUganVzdCBwcmVsb2FkZWQgZXhhbXBsZSBwcm9qZWN0c1xucHJvamVjdHMuYWRkUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uIGZvciBhIHByb2plY3QgZXhhbXBsZSwgdG8gZ2V0IHN0YXJ0ZWQgbWFraW5nIHlvdXIgb3duIHByb2plY3RzIGNsaWNrIHRoZSBwbHVzIGJ1dHRvbiBvbiB0aGUgcHJvamVjdHMgcGFuZWxcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbMF0uYWRkVG9MaXN0KFwiRXhhbXBsZSB0b2RvXCIsIFwiSGV5IEkgaG9wZSB5b3UgZW5qb3kgdGhpcyBwcm9qZWN0LCBmZWVsIGZyZWUgdG8gZGVsZXRlIHRoaXMgdG9kbyBpdCBpcyBvbmx5IGFuIGV4YW1wbGVcIiwgXCIyMDIyLTA0LTA0XCIsIFwiTG93XCIpO1xucHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVswXS5hZGRUb0xpc3QoXCJBbm90aGVyIG9uZVwiLCBcIkFsc28gYW4gZXhhbXBsZSwgYW55d2F5LCBpZiB5b3Ugd291bGQgbGlrZSB0byBlbmNvdXJhZ2UgbWUgYSBmb2xsb3cgb24gZ2l0aHViIGNvdWxkbid0IGh1cnQhIFRoZSBsaW5rIGlzIGluIHRoZSBmb290ZXJcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJTYW1wbGUgMlwiLCBcIlRoaXMgaGFzIG5vIHRvZG9zLCBidXQgc2hvd3MgaG93IHRoZSBwcm9qZWN0IGJhciBsb29rc1wiLCBcIjIwMjItMDUtMDVcIiwgXCJNZWRpdW1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZGlzcGxheUNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=