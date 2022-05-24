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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n  word-wrap: break-word;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoSettings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 8px 0 16px;\n}\n\n.todoSettings .sort {\n  background-color: #50505a;\n  color: #e8f1f5;\n}\n\n.todoSettings > button, .todoSettings .sort {\n  padding: 6px 12px;\n  margin: 0 4px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.todoSettings > button:last-child, .todoSettings .sort:last-child {\n  background-color: #005691;\n  color: #e8f1f5;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems:empty {\n  visibility: hidden;\n}\n\n.todoItems li {\n  min-height: 20px;\n  padding: 8px;\n  border: 2px solid #004a7c;\n}\n\n.todoItems li:nth-child(2n) {\n  background-color: #e8f1f5;\n  color: #004a7c;\n  display: none;\n}\n\n.todoItems li:nth-child(2n + 1) {\n  background-color: #005691;\n  cursor: pointer;\n}\n\n.todoItems li:nth-child(2n + 1) div {\n  pointer-events: none;\n}\n\n.todoItems li:nth-child(2n + 1) div .isDue {\n  color: #ff7878;\n  font-weight: 600;\n}\n\n.todoItems li:nth-child(2n + 1) button {\n  pointer-events: auto;\n}\n\n.todoItems li:nth-child(2n + 1) span:last-child {\n  margin-left: 32px;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:nth-child(2n + 1):hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:nth-child(2n + 1):hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton:not(.dropdownButton) {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:not(.dropdownButton):hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.sort {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  border: none;\n}\n\n.sort .dropdown {\n  padding-top: 8px;\n  width: 100%;\n  margin-left: -12px;\n  display: none;\n  position: absolute;\n  background-color: inherit;\n  border-radius: 4px;\n}\n\n.sort .dropdown button {\n  padding: 4px 12px;\n  background-color: inherit;\n  color: #e8f1f5;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.sort .dropdown button:hover {\n  color: white;\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n.sort:hover {\n  min-width: 128px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.sort:hover .dropdown {\n  display: block;\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n  margin-left: auto !important;\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.textAreaDesc {\n  width: 100%;\n  height: 10vh;\n  outline: none;\n  color: #323232;\n  resize: vertical;\n  max-height: 25vh;\n  padding: 4px;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
        const { todoIndex } = e.target.parentElement.parentElement.dataset;
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].editTodo(
          todoIndex,
          title.value,
          description.value,
          dueDate.value,
          priority.value,
        );
        const todoFields = document.querySelectorAll(".todoItems>li .todoField");
        todoFields[todoIndex * 3].textContent = title.value;
        todoFields[todoIndex * 3 + 1].textContent = `Due: ${dueDate.value}`;
        todoFields[todoIndex * 3 + 2].textContent = `Priority: ${priority.value}`;
        if (_projects__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[projectIndex].getToDoList()[todoIndex].due() === true) {
          todoFields[todoIndex * 3 + 1].classList.add("isDue");
        } else {
          todoFields[todoIndex * 3 + 1].classList.remove("isDue");
        }
        const todoList = document.querySelectorAll(".todoItems>li");
        todoList[todoIndex * 2 + 1].textContent = description.value;
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editTodoModal.style.display = "none";
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
      todoTitle.classList.add("todoField");
      todoTitle.classList.add("todoTitle");
      const todoDetails = document.createElement("div");
      const todoDue = document.createElement("span");
      todoDue.textContent = `Due: ${todoList[i].dueDate}`;
      todoDue.classList.add("todoField");
      if (todoList[i].due()) {
        todoDue.classList.add("isDue");
      }
      const todoPriority = document.createElement("span");
      todoPriority.textContent = `Priority: ${todoList[i].priority}`;
      todoPriority.classList.add("todoField");
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
const todoItem = (title, description, dueDate, priority) => {
  const due = () => {
    const today = new Date();
    const dueDateArray = dueDate.split("-");
    if (today.getFullYear() > dueDateArray[0]) {
      return true;
    } if (today.getFullYear() < dueDateArray[0]) {
      return false;
    } if (today.getMonth() + 1 > dueDateArray[1]) {
      return true;
    } if (today.getMonth() + 1 < dueDateArray[1]) {
      return false;
    } if (today.getDate() >= dueDateArray[2]) {
      return true;
    }

    return false;
  };
  return {
    title, description, dueDate, priority, due,
  };
};

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
    todoList[index] = todoItem(title, description, dueDate, priority);
  };
  const sortTodos = (method) => {
    if (method === 0) {
      todoList = todoList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (method === 1) {
      todoList = todoList.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    } else if (method === 2) {
      todoList = todoList.sort((b, a) => {
        let aValue = 0;
        let bValue = 0;
        if (a.priority === "High") {
          aValue = 2;
        } else if (a.priority === "Medium") {
          aValue = 1;
        }
        if (b.priority === "High") {
          bValue = 2;
        } else if (b.priority === "Medium") {
          bValue = 1;
        }
        return aValue - bValue;
      });
    } else if (method === 3) {
      todoList = todoList.reverse();
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
projects.addProject("Sample Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-24", "High");
projects.getListOfProjects()[0].addToList("Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-05-24", "Medium");
projects.getListOfProjects()[0].addToList("B Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-23", "High");
projects.getListOfProjects()[0].addToList("Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-04-04", "Low");
projects.getListOfProjects()[0].addToList("Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-27", "Medium");
projects.getListOfProjects()[0].addToList("C Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-04-04", "Low");
projects.getListOfProjects()[0].addToList("Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-25", "High");

projects.addProject("Sample 2", "This has no todos, but shows how the project bar looks", "2022-05-05", "Medium");
projects.addProject("SampleSampleSampleSampleSample", "This has no todos, but shows how the project bar looks", "2022-05-05", "Medium");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxRQUFRLE1BQU0sV0FBVyxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLGFBQWEsWUFBWSxRQUFRLE1BQU0sYUFBYSxZQUFZLFlBQVksWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxRQUFRLE1BQU0sV0FBVyxZQUFZLGFBQWEsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksWUFBWSxZQUFZLFFBQVEsS0FBSyxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsUUFBUSxNQUFNLGFBQWEsWUFBWSxXQUFXLFFBQVEsS0FBSyxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLGNBQWMsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxhQUFhLGNBQWMsV0FBVyxhQUFhLFlBQVksWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLGFBQWEsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsVUFBVSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxhQUFhLGFBQWEsVUFBVSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsY0FBYyxXQUFXLFVBQVUsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsWUFBWSxRQUFRLEtBQUssV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxhQUFhLGNBQWMsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyw2QkFBNkI7QUFDNTdpQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNma0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVEsNERBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVEsNkRBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwwQkFBMEIsbUVBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0EsUUFBUTtBQUNSLGdCQUFnQixZQUFZO0FBQzVCLFFBQVEsbUVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRSxpRUFBaUUsZUFBZTtBQUNoRixZQUFZLG1FQUEwQjtBQUN0QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMEJBQTBCLG1FQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLElBQUksbUVBQTBCO0FBQzlCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQTBCO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQXlCO0FBQ2pDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUVBQTBCO0FBQzlDOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLElBQUksbUVBQTBCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsY0FBYyxpQkFBaUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSx3QkFBd0I7QUFDeEIsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOVZqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN2SHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzlCOztBQUV0QiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtcm93czogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKTtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZTogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKS8xZnIgM2ZyO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIge1xcbiAgLW1zLWdyaWQtcm93OiAxO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg4cHggKyAxdmgpO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkge1xcbiAgcGFkZGluZzogY2FsYyg4cHggKyAxdmgpIDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSBzcGFuIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiBzcGFuIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSAuZGVsZXRlIHtcXG4gIG1hcmdpbjogMCA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWRjZjA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUgc3BhbiA+IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA1NjkxO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDRweCArIDAuNXZoKTtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdIZWFkZXIgLnByb2plY3RQcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdEZXNjIC5wcm9qZWN0RHVlIHtcXG4gIHdpZHRoOiBjYWxjKDEyOHB4ICsgMTUlKTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiA4cHggMCAxNnB4O1xcbn1cXG5cXG4udG9kb1NldHRpbmdzIC5zb3J0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNWE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyA+IGJ1dHRvbiwgLnRvZG9TZXR0aW5ncyAuc29ydCB7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50b2RvU2V0dGluZ3MgPiBidXR0b246bGFzdC1jaGlsZCwgLnRvZG9TZXR0aW5ncyAuc29ydDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLnRvZG9JdGVtcyB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9JdGVtczplbXB0eSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvSXRlbXMgbGkge1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDRhN2M7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgZGl2IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGRpdiAuaXNEdWUge1xcbiAgY29sb3I6ICNmZjc4Nzg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGJ1dHRvbiB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgLnRvZG9IZWFkZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSAudG9kb0hlYWRlciAudG9kb1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZhYTU7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgLW1zLWdyaWQtcm93OiAzO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNGE3YztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGJ1dHRvbiB7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOGYxZjU7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBzcGFuIGJ1dHRvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dCwgLm1vZGFsID4gZGl2IHNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAwLjV2aCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB3aWR0aDogY2FsYyg2NHB4ICsgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0IC5zZWxlY3RPcHRpb24sIC5tb2RhbCA+IGRpdiBzZWxlY3QgLnNlbGVjdE9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dDpob3ZlciwgLm1vZGFsID4gZGl2IGlucHV0OmZvY3VzLXdpdGhpbiwgLm1vZGFsID4gZGl2IHNlbGVjdDpob3ZlciwgLm1vZGFsID4gZGl2IHNlbGVjdDpmb2N1cy13aXRoaW4ge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZjFmNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5tb2RhbCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmJ1dHRvbjpub3QoLmRyb3Bkb3duQnV0dG9uKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpub3QoLmRyb3Bkb3duQnV0dG9uKTpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDEwMG1zO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5zb3J0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNvcnQgLmRyb3Bkb3duIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc29ydCAuZHJvcGRvd24gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc29ydCAuZHJvcGRvd24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNvcnQ6aG92ZXIge1xcbiAgbWluLXdpZHRoOiAxMjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnNvcnQ6aG92ZXIgLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTFlMWU7XFxufVxcblxcbi5lZGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZWxldGUsIC5lZGl0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi50ZXh0QXJlYURlc2Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICMzMjMyMzI7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgbWF4LWhlaWdodDogMjV2aDtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsaUNBQWlDO0FDWm5DOztBRGVBO0VBQ0UsYUFBYTtFQUNiLGNBbEJ3QjtBQ00xQjs7QURlQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWE7RUFDYixhQUFhO0VBQ2Isb0RBQXFCO0VBbUh0Qix5QkFBQTtNQzlISyw0REFBNEQ7RURPbEUscUJBS1U7QUNWVjs7QUFFQTtFRGxCRSxlQUFlO0VBQ2Ysb0JBQW1CO0VBNkJqQixrQkFBZTtFQUNmLHVCQXZDc0I7RUF3Q3ZCLGtCQUFBO0VDUkQseUJBQXlCO0VESDNCLG9CQVlFO0VBQ0Usb0JBekNPO0VBMENQLGFBQWE7RUE0RWQsd0JBQUE7TUNsRkcscUJBQXFCO1VEUmpCLHVCQWVOO0VBQ0UseUJBQWM7TUFDZCxzQkFBYTtVQUNiLG1CQTdDQztFQThDRCxlQUFhO0VBQ2IsY0FBYTtBQ0xuQjs7QUFFQTtFRGtCSyx5QkFBQTtFQ2hCSCw2QkFBNkI7QURuQi9COztBQ3NCQTtFREtRLGNBQVk7RUFDWixvQkFBVztFQUNYLG9CQUFrQjtFQUNsQixhQUFXO0VBQ1gsZ0NBQWdCO0VBckR0QixzQkFBYTtNQUNiLG1CQUF1QjtVQUN2QixxQkFBbUI7RUFx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LFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0EscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VBZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEFkZFByb2plY3RcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNsb3NlQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfSkoKTtcblxuICBjb25zdCBlZGl0UHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNsb3NlRWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlRWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEVkaXRQcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlRWRpdFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0XCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUVkaXRcIik7XG5cbiAgICBjbG9zZUVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgZWRpdFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFByb2plY3RNb2RhbCkge1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuZWRpdFByb2plY3QoXG4gICAgICAgICAgZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCxcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGVtcFByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW2VkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXhdO1xuICAgICAgdGl0bGUudmFsdWUgPSB0ZW1wUHJvamVjdC50aXRsZTtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGVtcFByb2plY3QuZGVzYztcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0ZW1wUHJvamVjdC5kdWVEYXRlO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0ZW1wUHJvamVjdC5wcmlvcml0eTtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlZGl0UHJvamVjdE1vZGFsLCB1cGRhdGVNb2RhbCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGVkaXRUb2RvcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRvZG9cIik7XG4gICAgY29uc3QgY2xvc2VFZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBlZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RWRpdFRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0VG9kb1wiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlRWRpdFRvZG9cIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5RWRpdFRvZG9cIik7XG5cbiAgICBjbG9zZUVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgZWRpdFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFRvZG9Nb2RhbCkge1xuICAgICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgcHJvamVjdEluZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIiB8fCBkdWVEYXRlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0c1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgdG9kb0luZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgICAgICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLmVkaXRUb2RvKFxuICAgICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b2RvRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvSXRlbXM+bGkgLnRvZG9GaWVsZFwiKTtcbiAgICAgICAgdG9kb0ZpZWxkc1t0b2RvSW5kZXggKiAzXS50ZXh0Q29udGVudCA9IHRpdGxlLnZhbHVlO1xuICAgICAgICB0b2RvRmllbGRzW3RvZG9JbmRleCAqIDMgKyAxXS50ZXh0Q29udGVudCA9IGBEdWU6ICR7ZHVlRGF0ZS52YWx1ZX1gO1xuICAgICAgICB0b2RvRmllbGRzW3RvZG9JbmRleCAqIDMgKyAyXS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcmlvcml0eS52YWx1ZX1gO1xuICAgICAgICBpZiAocHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLmdldFRvRG9MaXN0KClbdG9kb0luZGV4XS5kdWUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRvZG9GaWVsZHNbdG9kb0luZGV4ICogMyArIDFdLmNsYXNzTGlzdC5hZGQoXCJpc0R1ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2RvRmllbGRzW3RvZG9JbmRleCAqIDMgKyAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXNEdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9JdGVtcz5saVwiKTtcbiAgICAgICAgdG9kb0xpc3RbdG9kb0luZGV4ICogMiArIDFdLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVNb2RhbCA9ICh0b2RvSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtlZGl0VG9kb01vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRvZG8gPSB0ZW1wUHJvamVjdC5nZXRUb0RvTGlzdCgpW3RvZG9JbmRleF07XG4gICAgICB0aXRsZS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICBkdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVkaXRUb2RvTW9kYWwsIHVwZGF0ZU1vZGFsIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJvamVjdExpc3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPnVsXCIpO1xuICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvXCIpO1xuXG4gIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICBjb25zdCB7IHByb2plY3RJbmRleCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldDtcbiAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF0uYWRkVG9MaXN0KFwiTmV3IHRvZG9cIiwgXCJFZGl0IHRvIGNoYW5nZSBmaWVsZHNcIiwgXCJUb2RheVwiLCBcIkhpZ2hcIik7XG4gICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5yZW1vdmVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleCk7XG4gICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9EZWxldGVCdXR0b24gPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF0ucmVtb3ZlRnJvbUxpc3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudG9kb0luZGV4KTtcbiAgICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdEVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0cy5lZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgZWRpdFByb2plY3RzLnVwZGF0ZU1vZGFsKCk7XG4gICAgICBlZGl0UHJvamVjdHMuZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kb0VkaXRCdXR0b24gPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9kb0luZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgICAgIGVkaXRUb2Rvcy5lZGl0VG9kb01vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgZWRpdFRvZG9zLmVkaXRUb2RvTW9kYWwuZGF0YXNldC50b2RvSW5kZXggPSB0b2RvSW5kZXg7XG4gICAgICBlZGl0VG9kb3MudXBkYXRlTW9kYWwodG9kb0luZGV4KTtcbiAgICAgIGVkaXRUb2Rvcy5lZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH07XG5cbiAgY29uc3QgYXR0YWNoUHJvamVjdExpc3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzPnVsPmxpXCIpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbaW5kZXhdO1xuICAgIGlmIChwcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdEZpZWxkc1swXS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdEZpZWxkc1sxXS50ZXh0Q29udGVudCA9IHByb2plY3QucHJpb3JpdHk7XG4gICAgcHJvamVjdEZpZWxkc1syXS50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICBwcm9qZWN0RmllbGRzWzNdLnRleHRDb250ZW50ID0gcHJvamVjdC5kdWVEYXRlO1xuICAgIGxvYWRUb2RvTGlzdChpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRvZG9MaXN0ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG4gICAgdG9kb0xpc3REb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9MaXN0RG9tLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF07XG4gICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LmdldFRvRG9MaXN0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHRvZG9MaXN0SGVhZGVyLmRhdGFzZXQudG9kb0luZGV4ID0gaTtcbiAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvTGlzdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvSGVhZGVyXCIpO1xuICAgICAgY29uc3QgaGVhZGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0udGl0bGU7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG9GaWVsZFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kb1RpdGxlXCIpO1xuICAgICAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdG9kb0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdG9kb0R1ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kb0xpc3RbaV0uZHVlRGF0ZX1gO1xuICAgICAgdG9kb0R1ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0ZpZWxkXCIpO1xuICAgICAgaWYgKHRvZG9MaXN0W2ldLmR1ZSgpKSB7XG4gICAgICAgIHRvZG9EdWUuY2xhc3NMaXN0LmFkZChcImlzRHVlXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kb0xpc3RbaV0ucHJpb3JpdHl9YDtcbiAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kb0ZpZWxkXCIpO1xuICAgICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9EdWUsIHRvZG9Qcmlvcml0eSk7XG4gICAgICBoZWFkZXJEZXRhaWxzLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXRhaWxzKTtcbiAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyRGV0YWlscywgY3JlYXRlVG9kb0VkaXRCdXR0b24ocHJvamVjdEluZGV4KSwgY3JlYXRlVG9kb0RlbGV0ZUJ1dHRvbihwcm9qZWN0SW5kZXgpKTtcbiAgICAgIHRvZG9MaXN0SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG9kb0xpc3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdG9kb0xpc3RCb2R5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRvZG9MaXN0Qm9keS50ZXh0Q29udGVudCA9IHRvZG9MaXN0W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgdG9kb0xpc3REb20uYXBwZW5kKHRvZG9MaXN0SGVhZGVyLCB0b2RvTGlzdEJvZHkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzb3J0VG9kb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnQ+LmRyb3Bkb3duPi5kcm9wZG93bkJ1dHRvblwiKTtcbiAgc29ydFRvZG9CdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IHByb2plY3RJbmRleCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQ7XG4gICAgICBzb3J0VG9kb0xpc3QoaW5kZXgsIHByb2plY3RJbmRleCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRUb2RvTGlzdCA9IChtZXRob2QsIHByb2plY3RJbmRleCkgPT4ge1xuICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbcHJvamVjdEluZGV4XS5zb3J0VG9kb3MobWV0aG9kKTtcbiAgICBsb2FkVG9kb0xpc3QocHJvamVjdEluZGV4KTtcbiAgfTtcblxuICBjb25zdCByZWZyZXNoUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcHJvamVjdExpc3REb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHVubG9hZFByb2plY3RGaWVsZHMoKTtcbiAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkge1xuICAgICAgICB0ZW1wTGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbG9hZFByb2plY3QoaW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHByb2plY3REZXRhaWxzLnRleHRDb250ZW50ID0gYER1ZTogJHtwcm9qZWN0LmR1ZURhdGV9LCBQcmlvcml0eTogJHtwcm9qZWN0LnByaW9yaXR5fWA7XG4gICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgICAgdGVtcExpLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgIHRlbXBMaS5hcHBlbmQocHJvamVjdFRpdGxlLCBjcmVhdGVQcm9qZWN0RWRpdEJ1dHRvbigpLCBjcmVhdGVQcm9qZWN0RGVsZXRlQnV0dG9uKCkpO1xuICAgICAgcHJvamVjdExpc3REb20uYXBwZW5kQ2hpbGQodGVtcExpKTtcbiAgICB9KTtcbiAgICBhdHRhY2hQcm9qZWN0TGlzdExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVubG9hZFByb2plY3RGaWVsZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEZpZWxkXCIpO1xuICAgIHByb2plY3RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9KTtcbiAgfTtcblxuICByZWZyZXNoUHJvamVjdExpc3QoKTsgLy8gSW5pdGlhbCBwYWdlIGxvYWRcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgZHVlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkdWVEYXRlQXJyYXkgPSBkdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBpZiAodG9kYXkuZ2V0RnVsbFllYXIoKSA+IGR1ZURhdGVBcnJheVswXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBpZiAodG9kYXkuZ2V0RnVsbFllYXIoKSA8IGR1ZURhdGVBcnJheVswXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gaWYgKHRvZGF5LmdldE1vbnRoKCkgKyAxID4gZHVlRGF0ZUFycmF5WzFdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGlmICh0b2RheS5nZXRNb250aCgpICsgMSA8IGR1ZURhdGVBcnJheVsxXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gaWYgKHRvZGF5LmdldERhdGUoKSA+PSBkdWVEYXRlQXJyYXlbMl0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkdWUsXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBpc0FjdGl2ZSA9IGZhbHNlO1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgY29uc3QgZ2V0VG9Eb0xpc3QgPSAoKSA9PiB0b2RvTGlzdC5zbGljZSgpO1xuICBjb25zdCBhZGRUb0xpc3QgPSAodGl0bGVUb2RvLCBkZXNjVG9kbywgZHVlRGF0ZVRvZG8sIHByaW9yaXR5VG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kb0l0ZW0odGl0bGVUb2RvLCBkZXNjVG9kbywgZHVlRGF0ZVRvZG8sIHByaW9yaXR5VG9kbykpO1xuICB9O1xuICBjb25zdCByZW1vdmVGcm9tTGlzdCA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG4gIGNvbnN0IGVkaXRUb2RvID0gKGluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgdG9kb0xpc3RbaW5kZXhdID0gdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIH07XG4gIGNvbnN0IHNvcnRUb2RvcyA9IChtZXRob2QpID0+IHtcbiAgICBpZiAobWV0aG9kID09PSAwKSB7XG4gICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LnNvcnQoKGEsIGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IDEpIHtcbiAgICAgIHRvZG9MaXN0ID0gdG9kb0xpc3Quc29ydCgoYSwgYikgPT4gYS5kdWVEYXRlLmxvY2FsZUNvbXBhcmUoYi5kdWVEYXRlKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IDIpIHtcbiAgICAgIHRvZG9MaXN0ID0gdG9kb0xpc3Quc29ydCgoYiwgYSkgPT4ge1xuICAgICAgICBsZXQgYVZhbHVlID0gMDtcbiAgICAgICAgbGV0IGJWYWx1ZSA9IDA7XG4gICAgICAgIGlmIChhLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICAgIGFWYWx1ZSA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5wcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgIGFWYWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIucHJpb3JpdHkgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgYlZhbHVlID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChiLnByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgYlZhbHVlID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVZhbHVlIC0gYlZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IDMpIHtcbiAgICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QucmV2ZXJzZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNBY3RpdmUsIGdldFRvRG9MaXN0LCBhZGRUb0xpc3QsIHJlbW92ZUZyb21MaXN0LCBlZGl0VG9kbywgc29ydFRvZG9zLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IFtdO1xuICBjb25zdCBnZXRMaXN0T2ZQcm9qZWN0cyA9ICgpID0+IGxpc3RPZlByb2plY3RzLnNsaWNlKCk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaChwcm9qZWN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgbGlzdE9mUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgbGlzdE9mUHJvamVjdHNbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZWRpdFByb2plY3QgPSAoaW5kZXgsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbGlzdE9mUHJvamVjdHNbaW5kZXhdO1xuICAgIHRlbXBQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgdGVtcFByb2plY3QuZGVzYyA9IGRlc2M7XG4gICAgdGVtcFByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGVtcFByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExpc3RPZlByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0LCBlZGl0UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbi8vIFRoZXNlIGFyZSBqdXN0IHByZWxvYWRlZCBleGFtcGxlIHByb2plY3RzXG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiU2FtcGxlIFByb2plY3RcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIGEgcHJvamVjdCBleGFtcGxlLCB0byBnZXQgc3RhcnRlZCBtYWtpbmcgeW91ciBvd24gcHJvamVjdHMgY2xpY2sgdGhlIHBsdXMgYnV0dG9uIG9uIHRoZSBwcm9qZWN0cyBwYW5lbFwiLCBcIjIwMjItMDUtMjRcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVswXS5hZGRUb0xpc3QoXCJFeGFtcGxlIHRvZG9cIiwgXCJIZXkgSSBob3BlIHlvdSBlbmpveSB0aGlzIHByb2plY3QsIGZlZWwgZnJlZSB0byBkZWxldGUgdGhpcyB0b2RvIGl0IGlzIG9ubHkgYW4gZXhhbXBsZVwiLCBcIjIwMjItMDUtMjRcIiwgXCJNZWRpdW1cIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIkIgQW5vdGhlciBvbmVcIiwgXCJBbHNvIGFuIGV4YW1wbGUsIGFueXdheSwgaWYgeW91IHdvdWxkIGxpa2UgdG8gZW5jb3VyYWdlIG1lIGEgZm9sbG93IG9uIGdpdGh1YiBjb3VsZG4ndCBodXJ0ISBUaGUgbGluayBpcyBpbiB0aGUgZm9vdGVyXCIsIFwiMjAyMi0wNS0yM1wiLCBcIkhpZ2hcIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIkV4YW1wbGUgdG9kb1wiLCBcIkhleSBJIGhvcGUgeW91IGVuam95IHRoaXMgcHJvamVjdCwgZmVlbCBmcmVlIHRvIGRlbGV0ZSB0aGlzIHRvZG8gaXQgaXMgb25seSBhbiBleGFtcGxlXCIsIFwiMjAyMi0wNC0wNFwiLCBcIkxvd1wiKTtcbnByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbMF0uYWRkVG9MaXN0KFwiQW5vdGhlciBvbmVcIiwgXCJBbHNvIGFuIGV4YW1wbGUsIGFueXdheSwgaWYgeW91IHdvdWxkIGxpa2UgdG8gZW5jb3VyYWdlIG1lIGEgZm9sbG93IG9uIGdpdGh1YiBjb3VsZG4ndCBodXJ0ISBUaGUgbGluayBpcyBpbiB0aGUgZm9vdGVyXCIsIFwiMjAyMi0wNS0yN1wiLCBcIk1lZGl1bVwiKTtcbnByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbMF0uYWRkVG9MaXN0KFwiQyBFeGFtcGxlIHRvZG9cIiwgXCJIZXkgSSBob3BlIHlvdSBlbmpveSB0aGlzIHByb2plY3QsIGZlZWwgZnJlZSB0byBkZWxldGUgdGhpcyB0b2RvIGl0IGlzIG9ubHkgYW4gZXhhbXBsZVwiLCBcIjIwMjItMDQtMDRcIiwgXCJMb3dcIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIkFub3RoZXIgb25lXCIsIFwiQWxzbyBhbiBleGFtcGxlLCBhbnl3YXksIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGVuY291cmFnZSBtZSBhIGZvbGxvdyBvbiBnaXRodWIgY291bGRuJ3QgaHVydCEgVGhlIGxpbmsgaXMgaW4gdGhlIGZvb3RlclwiLCBcIjIwMjItMDUtMjVcIiwgXCJIaWdoXCIpO1xuXG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiU2FtcGxlIDJcIiwgXCJUaGlzIGhhcyBubyB0b2RvcywgYnV0IHNob3dzIGhvdyB0aGUgcHJvamVjdCBiYXIgbG9va3NcIiwgXCIyMDIyLTA1LTA1XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlNhbXBsZVNhbXBsZVNhbXBsZVNhbXBsZVNhbXBsZVwiLCBcIlRoaXMgaGFzIG5vIHRvZG9zLCBidXQgc2hvd3MgaG93IHRoZSBwcm9qZWN0IGJhciBsb29rc1wiLCBcIjIwMjItMDUtMDVcIiwgXCJNZWRpdW1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZGlzcGxheUNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=