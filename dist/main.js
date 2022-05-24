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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoSettings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 8px 0 16px;\n}\n\n.todoSettings .sort {\n  background-color: #50505a;\n  color: #e8f1f5;\n}\n\n.todoSettings > button, .todoSettings .sort {\n  padding: 6px 12px;\n  margin: 0 4px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.todoSettings > button:last-child, .todoSettings .sort:last-child {\n  background-color: #005691;\n  color: #e8f1f5;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems:empty {\n  visibility: hidden;\n}\n\n.todoItems li {\n  min-height: 20px;\n  padding: 8px;\n  border: 2px solid #004a7c;\n}\n\n.todoItems li:nth-child(2n) {\n  background-color: #e8f1f5;\n  color: #004a7c;\n  display: none;\n}\n\n.todoItems li:nth-child(2n + 1) {\n  background-color: #005691;\n  cursor: pointer;\n}\n\n.todoItems li:nth-child(2n + 1) div {\n  pointer-events: none;\n}\n\n.todoItems li:nth-child(2n + 1) div .isDue {\n  color: #ff7878;\n  font-weight: 600;\n}\n\n.todoItems li:nth-child(2n + 1) button {\n  pointer-events: auto;\n}\n\n.todoItems li:nth-child(2n + 1) span:last-child {\n  margin-left: 32px;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:nth-child(2n + 1):hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:nth-child(2n + 1):hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton:not(.dropdownButton) {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:not(.dropdownButton):hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.sort {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  border: none;\n}\n\n.sort .dropdown {\n  padding-top: 8px;\n  width: 100%;\n  margin-left: -12px;\n  display: none;\n  position: absolute;\n  background-color: inherit;\n  border-radius: 4px;\n}\n\n.sort .dropdown button {\n  padding: 4px 12px;\n  background-color: inherit;\n  color: #e8f1f5;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.sort .dropdown button:hover {\n  color: white;\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n.sort:hover {\n  min-width: 128px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.sort:hover .dropdown {\n  display: block;\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n  margin-left: auto !important;\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
      if (todoList[i].due()) {
        todoDue.classList.add("isDue");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxjQUFjLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksY0FBYyxhQUFhLFFBQVEsTUFBTSxXQUFXLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsUUFBUSxNQUFNLFlBQVksYUFBYSxZQUFZLFFBQVEsTUFBTSxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssYUFBYSxXQUFXLFFBQVEsTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLE1BQU0sWUFBWSxZQUFZLFlBQVksUUFBUSxLQUFLLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxRQUFRLE1BQU0sYUFBYSxZQUFZLFdBQVcsUUFBUSxLQUFLLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsY0FBYyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksYUFBYSxhQUFhLFFBQVEsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLGFBQWEsY0FBYyxXQUFXLGFBQWEsWUFBWSxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsYUFBYSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxVQUFVLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLGFBQWEsYUFBYSxVQUFVLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxjQUFjLFdBQVcsVUFBVSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxZQUFZLFFBQVEsS0FBSyxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssV0FBVyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLDZCQUE2QjtBQUN6cWlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSw0REFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSw2REFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDBCQUEwQixtRUFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxtRUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDBCQUEwQixtRUFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLFlBQVksZUFBZTtBQUMzQixJQUFJLG1FQUEwQjtBQUM5QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUEwQjtBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUF5QjtBQUNqQztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtRUFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUEwQjtBQUM5Qzs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxJQUFJLG1FQUEwQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCLGNBQWMsaUJBQWlCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0JBQXdCO0FBQ3hCLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hWakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDeEh4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUM5Qjs7QUFFdEIsMERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLXJvd3M6IGNhbGMoNjBweCArIDN2aCkgMWZyIGNhbGMoNTBweCArIDF2aCk7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGNhbGMoNjBweCArIDN2aCkgMWZyIGNhbGMoNTBweCArIDF2aCkvMWZyIDNmcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIC1tcy1ncmlkLXJvdzogMTtcXG4gIC1tcy1ncmlkLXJvdy1zcGFuOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDI7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIC5wcm9qZWN0c0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDU2OTE7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoOHB4ICsgMXZoKTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNHB4IDE2cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIC5wcm9qZWN0c0hlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIHtcXG4gIHBhZGRpbmc6IGNhbGMoOHB4ICsgMXZoKSA4cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIHNwYW4gc3BhbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgLmRlbGV0ZSB7XFxuICBtYXJnaW46IDAgNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FkY2YwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIGJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciBzcGFuID4gc3BhbiB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg0cHggKyAwLjV2aCk7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIC5wcm9qZWN0UHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0Rlc2Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyAucHJvamVjdER1ZSB7XFxuICB3aWR0aDogY2FsYygxMjhweCArIDE1JSk7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RvU2V0dGluZ3Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogOHB4IDAgMTZweDtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyAuc29ydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDVhO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi50b2RvU2V0dGluZ3MgPiBidXR0b24sIC50b2RvU2V0dGluZ3MgLnNvcnQge1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udG9kb1NldHRpbmdzID4gYnV0dG9uOmxhc3QtY2hpbGQsIC50b2RvU2V0dGluZ3MgLnNvcnQ6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi50b2RvSXRlbXMge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNGE3YztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi50b2RvSXRlbXM6ZW1wdHkge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpIHtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGRpdiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBkaXYgLmlzRHVlIHtcXG4gIGNvbG9yOiAjZmY3ODc4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBidXR0b24ge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIC50b2RvSGVhZGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDAuODVyZW07XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgLnRvZG9IZWFkZXIgLnRvZG9UaXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKTpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2YWE1O1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpOmhvdmVyIGJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIC1tcy1ncmlkLXJvdzogMztcXG4gIC1tcy1ncmlkLXJvdy1zcGFuOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDI7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzJSkgaHVlLXJvdGF0ZSgxNDFkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTAwJSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzJSkgaHVlLXJvdGF0ZSgxNDFkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTAwJSk7XFxuICBtYXJnaW46IDAgOHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZykgc2NhbGUoMS4yKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbCA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDRhN2M7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogNzB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbCA+IGRpdiBidXR0b24ge1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZThmMWY1O1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgc3BhbiBidXR0b24ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgaW5wdXQsIC5tb2RhbCA+IGRpdiBzZWxlY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogIzAwNGE3YztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgcGFkZGluZzogMC41dmggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgd2lkdGg6IGNhbGMoNjRweCArIDUwJSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dCAuc2VsZWN0T3B0aW9uLCAubW9kYWwgPiBkaXYgc2VsZWN0IC5zZWxlY3RPcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgaW5wdXQ6aG92ZXIsIC5tb2RhbCA+IGRpdiBpbnB1dDpmb2N1cy13aXRoaW4sIC5tb2RhbCA+IGRpdiBzZWxlY3Q6aG92ZXIsIC5tb2RhbCA+IGRpdiBzZWxlY3Q6Zm9jdXMtd2l0aGluIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGYxZjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5idXR0b246bm90KC5kcm9wZG93bkJ1dHRvbikge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246bm90KC5kcm9wZG93bkJ1dHRvbik6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxMDBtcztcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uc29ydCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zb3J0IC5kcm9wZG93biB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNvcnQgLmRyb3Bkb3duIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA0cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNvcnQgLmRyb3Bkb3duIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zb3J0OmhvdmVyIHtcXG4gIG1pbi13aWR0aDogMTI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5zb3J0OmhvdmVyIC5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUxZTFlO1xcbn1cXG5cXG4uZWRpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVsZXRlLCAuZWRpdCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQ0FBaUM7QUNabkM7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsY0FsQndCO0FDTTFCOztBRGVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQ1pyQjs7QURlQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBYTtFQUNiLGFBQWE7RUFtSGQsb0RBQUE7RUM5SEMseUJBQXlCO01EUTNCLDREQUlVO0FDVlY7O0FBRUE7RURqQkUsZUFBZTtFQUNmLG9CQUFtQjtFQTRCakIsa0JBQWU7RUFDZix1QkF0Q3NCO0VBdUN2QixrQkFBQTtFQ1JELHlCQUF5QjtFREYzQixvQkFXRTtFQUNFLG9CQXhDTztFQXlDUCxhQUFhO0VBNEVkLHdCQUFBO01DbEZHLHFCQUFxQjtVRFBqQix1QkFjTjtFQUNFLHlCQUFjO01BQ2Qsc0JBQWE7VUFDYixtQkE1Q0M7RUE2Q0QsZUFBYTtFQUNiLGNBQWE7QUNMbkI7O0FBRUE7RURrQksseUJBQUE7RUNoQkgsNkJBQTZCO0FEbEIvQjs7QUNxQkE7RURLUSxjQUFZO0VBQ1osb0JBQVc7RUFDWCxvQkFBa0I7RUFDbEIsYUFBVztFQUNYLGdDQUFnQjtFQXBEdEIsc0JBQWE7TUFDYixtQkFBdUI7VUFDdkIscUJBQW1CO0VBb0RiLDhCQUFnQjtFQUNqQix5QkFBQTtNQ0RELHNCQUFzQjtVRGhDbEIsOEJBbUNIO0VBQ0QsaUJBQWdCO0VBQ2hCLGVBQWU7QUNEckI7O0FBRUE7RUR0Q0EseUJBdUNNO0VBQ0UsY0FBUztFQUNULFlBQVM7RUFDVCxXQUFBO0VBNkNELGtCQUFBO0VDM0NMLGVBQWU7RUQ1Q2pCLGdCQVdFO0VBaUNRLG9CQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix3QkFBc0I7TUFNdkIscUJBQUE7VUNGQyx1QkFBdUI7RURuRGpDLHlCQXVDTTtNQVVNLHNCQUFVO1VBQ1YsbUJBQWlCO0VBQ2pCLGdCQTdFYztBQ2tGMUI7O0FEeERBO0VBdURVLGdCQUFhO0VBQ2QsZ0RBQUE7VUNLQyx3Q0FBd0M7RUQ3RGxELGtCQVdFO0FDb0RGOztBQUVBO0VEakVBLDRCQXVDUTtFQXNCRSxvQkF4Rkg7RUF5Rkcsb0JBMUZtQjtFQTJGbkIsYUFBWTtFQUNaLGtCQUFrQjtBQ081Qjs7QUFFQTtFRExVLGNBQWE7RUFPZCxvQkFBQTtFQ0NQLG9CQUFvQjtFRDVFdEIsb0JBV0U7RUEyRFUsYUFBWTtFQUNiLDRCQUFBO0VDU1QsNkJBQTZCO01EaEYvQiwwQkF1Q1E7VUFuRUcsc0JBQWtCO0FDK0c3Qjs7QURuRkE7RUE2RVUsVUFBQTtFQUNBLGlCQTFHbUI7RUEyR25CLGNBQWM7QUNVeEI7O0FBRUE7RURMUyxhQUFBO0FDT1Q7O0FBRUE7RURWVyx5QkFBQTtBQ1lYOztBQUVBO0VEUEkseUJBQWM7RUF5QmYsY0FBQTtFQ2ZELHlCQUF5QjtFRHRHM0IsaUJBMEZFO0VBSUksa0JBQWM7RUFDZCxrREFBYTtVQUNiLDBDQUE4QjtFQUM5QixlQUFlO0VBQ2YseUNBQXFCO1VBQ3JCLGlDQUFnQztFQUNoQyxnQkFBUztBQ1dmOztBQUVBO0VEakhBLG1CQTBGRTtBQ3lCRjs7QUFFQTtFQUNFLGNBQWM7QUR0SGhCOztBQ3lIQTtFRFhNLHlCQUFlO0VBTWhCLGNBQUE7RUNRSCxnREFBZ0Q7VUQ1SHhDLHdDQStHSjtFQUNFLDhCQUF3QjtVQUN4QixzQkFBZTtFQUNmLGdCQUFlO0VBQ2hCLHVCQUFBO0FDZVA7O0FBRUE7RURWRSxjQUFBO0FDWUY7O0FBRUE7RURoQkEseUJBSVE7RUFDSiw2QkFBK0I7QUNjbkM7O0FBRUE7RURyQkEsY0FRSTtFQUNBLG9CQUFpQjtFQUNqQixvQkFBYTtFQUNiLGFBQWE7RUFDYix5QkFBZ0I7TUFDaEIsc0JBQWlCO1VBS2xCLDhCQUFBO0VDV0QsZ0NBQWdDO0VEN0JsQyxzQkFRVTtNQU9KLG1CQWxLQztVQURJLHFCQUFrQjtFQXFLeEIsZ0NBQUE7RUNpQkgsaUJBQWlCO0VEYm5CLGVBQVc7QUNlWDs7QUFFQTtFRGJFLGlCQUFlO0VBQ2YsZUFBZTtBQ2VqQjs7QURwQkE7RUFPSSxvQkFBa0I7RUFDbkIsb0JBQUE7RUNpQkQsYUFBYTtFRHpCZix5QkFTSztNQUNELHNCQUFnQjtVQUNULDhCQUFLO0VBQ1osZUFBWTtBQ2tCaEI7O0FEOUJBO0VBZUksd0JBeExPO0VBeUxQLGVBdkxzQjtFQXdMdEIsZUFBYTtBQ21CakI7O0FEcENBO0VBaUNJLG9CQXpNRztFQTBNSCxvQkFBZTtFQWtCaEIsYUFBQTtFQ1ZELHFCQUFxQjtNRDFDdkIsa0JBbUJlO1VBRVQseUJBQW9CO0VBS3JCLG1CQUFBO0FDb0JMOztBQUVBO0VEeEJRLHlCQUFnQjtFQUNqQixjQUFBO0FDMEJQOztBQUVBO0VEeEJLLGlCQUFBO0VDMEJILGFBQWE7RUR2RGYsa0JBbUJJO0VBWUUsZ0JBQWE7RUFDZCxpQkFBQTtBQzJCTDs7QUFFQTtFRHhCTSx5QkFBaUI7RUFDakIsY0FBVztBQzBCakI7O0FEaEVBO0VBd0NRLGNBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXVCO0VBQ3hCLGtCQUFBO0VDNEJMLGtEQUFrRDtVRHZFMUMsMENBNkNFO0FDNEJaOztBQUVBO0VBQ0Usa0JBQWtCO0FENUVwQjs7QUMrRUE7RUFDRSxnQkFBZ0I7RUR6QmxCLFlBQVE7RUFDTix5QkFBa0I7QUMyQnBCOztBQUVBO0VEdlBFLHlCQUF1QjtFQUN2QixjQUFhO0VBNE9kLGFBQUE7QUNjRDs7QUFFQTtFRDdQRSx5QkFBdUI7RUFDdkIsZUFBYTtBQytQZjs7QUFFQTtFQUNFLG9CQUFvQjtBRDFDdEI7O0FDNkNBO0VEaENJLGNBQUE7RUFDQSxnQkFBWTtBQ2tDaEI7O0FEaERBO0VBaUJJLG9CQUFtQjtBQ21DdkI7O0FBRUE7RURoQ0EsaUJBQU87QUNrQ1A7O0FBRUE7RURoQ0Usb0JBQWU7RUFDZixvQkFBYTtFQUNiLGFBQVk7RUFDWix5QkFBa0I7TUFDbEIsc0JBQVU7VUFpRVgsOEJBQUE7RUM5QkMsa0JBQWtCO0FEM0NwQjs7QUM4Q0E7RURsQ0ksaUJBQWlCO0VBQ2pCLGdCQUFXO0VBQ1gsdUJBQVk7QUNvQ2hCOztBQUVBO0VEbENJLHlCQXhReUI7RUF5UXpCLGlCQUFpQjtFQXFEbEIseUJBQUE7QUNoQkg7O0FBRUE7RURwQ0ssbUJBQUE7QUNzQ0w7O0FBRUE7RURyQ00sZUFBYTtFQUNiLG9CQUFpQjtFQUNqQixrQkFBYTtFQUNiLHVCQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQXBSSztFQTRSTixjQUFBO0VDZ0NILG9CQUFvQjtFRHRFdEIsb0JBK0JNO0VBQ0UsYUFBVztFQUNYLHdCQUFZO01BQ1oscUJBQWU7VUFsUmQsdUJBQU07RUFDYix5QkFBdUI7TUFDdkIsc0JBQW1CO1VBa1JiLG1CQUFrQjtBQzJDMUI7O0FEL0VBO0VBd0NNLG9CQUFjO0VBQ2Qsb0JBL1J1QjtFQWdTdkIsYUFBVztFQUNaLHdCQUFBO01DMkNDLHFCQUFxQjtVRDdFdkIsdUJBbUNPO0VBQ0wseUJBQWM7TUFDZCxzQkFsU29CO1VBbVNiLG1CQUFNO0VBQ2IscUJBdFNLO0VBdVNMLGNBQVM7QUM0Q2Y7O0FBRUE7RUQxQ00sc0dBQXVCO1VBQ3ZCLDhGQUFpQjtFQUNqQixhQUFZO0VBVWIsa0NBQUE7VUNtQ0ssMEJBQTBCO0VEcEdwQyxZQTRDSTtBQzBESjs7QUFFQTtFQUNFLG1DQUFtQztVRGhHakMsMkJBQUE7RUFvREksNENBQXFDO1VBQzdCLG9DQXBUYTtBQ21XN0I7O0FBRUE7RUQvR0EsYUFrRU07RUFDQSx3QkFBYztNQW5UbEIscUJBQWE7VUFDYix1QkFBdUI7RUFDdkIseUJBQW1CO01BbVRmLHNCQUFlO1VBQ2YsbUJBQWtCO0VBQ25CLGVBQUE7RUNpREgsYUFBYTtFRDdDZixZQUFXO0VBQ1Qsb0NBQWU7RUFDZixVQUFRO0FDK0NWOztBRGpEQTtFQUlJLHlCQUFzQjtFQUN0QixhQUFZO0VBQ1oseUJBQXNCO0VBQ3ZCLFdBQUE7RUNpREQsWUFBWTtFRDlDZCxtQkFBTTtFQUNKLG9CQUFTO0VBQ1Qsb0JBQWtCO0VBQ2xCLGFBQVE7RUFDUiw0QkFBWTtFQStCYiw2QkFBQTtNQ2tCSywwQkFBMEI7VURoRDlCLHNCQUFVO0VBQ1IsY0FBYTtFQUNiLHlCQUFXO01BQ1gsc0JBQWtCO1VBQ1gsOEJBQU07QUNrRGpCOztBQUVBO0VEbkNHLGNBQUE7QUNxQ0g7O0FBRUE7RURsRE0sY0FBQTtFQUNBLG9CQTNWdUI7RUE0VnZCLG9CQUFZO0VBQ1osYUFBUTtFQUNSLHlCQUFrQjtNQU1uQixzQkFBQTtVQytDSyw4QkFBOEI7RUR4RXhDLHlCQWFVO01BUUYsc0JBQVk7VUFDWixtQkFBZ0I7RUFDaEIsZUFBZTtFQUNoQixrQkFBQTtFQ3NETCxnQ0FBZ0M7QUQ5RWxDOztBQ2lGQTtFRG5ESSxXQUFVO0VBSVgsWUFBQTtFQ2tERCxlQUFlO0VEcEZqQixvQkErQmM7RUFDUixvQkFBYztFQUNmLGFBQUE7RUN1REgsd0JBQXdCO01EbkQxQixxQkFBUTtVQUNOLHVCQUFnQztFQUNqQyx5QkFBQTtNQ3FESyxzQkFBc0I7VURwRHRCLG1CQUFBO0VBQ0osa0JBQWtCO0FDc0RwQjs7QUFFQTtFRHJEQSxjQUFlO0VBQ2IsY0FBWTtFQUNaLGlCQUFnQjtBQ3VEbEI7O0FBRUE7RURyREUsY0FBYTtFQUNiLGNBQWM7RUFDZixhQUFBO0VDdURDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtFQUMvQix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0RBQWdEO1VBQ3hDLHdDQUF3QztBQUNsRDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0EscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VBZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEFkZFByb2plY3RcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNsb3NlQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfSkoKTtcblxuICBjb25zdCBlZGl0UHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNsb3NlRWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlRWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEVkaXRQcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlRWRpdFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0XCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUVkaXRcIik7XG5cbiAgICBjbG9zZUVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgZWRpdFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFByb2plY3RNb2RhbCkge1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuZWRpdFByb2plY3QoXG4gICAgICAgICAgZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCxcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGVtcFByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW2VkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXhdO1xuICAgICAgdGl0bGUudmFsdWUgPSB0ZW1wUHJvamVjdC50aXRsZTtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGVtcFByb2plY3QuZGVzYztcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0ZW1wUHJvamVjdC5kdWVEYXRlO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0ZW1wUHJvamVjdC5wcmlvcml0eTtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlZGl0UHJvamVjdE1vZGFsLCB1cGRhdGVNb2RhbCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGVkaXRUb2RvcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRvZG9cIik7XG4gICAgY29uc3QgY2xvc2VFZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBlZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RWRpdFRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0VG9kb1wiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlRWRpdFRvZG9cIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5RWRpdFRvZG9cIik7XG5cbiAgICBjbG9zZUVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgZWRpdFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFRvZG9Nb2RhbCkge1xuICAgICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgcHJvamVjdEluZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIiB8fCBkdWVEYXRlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0c1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbcHJvamVjdEluZGV4XS5lZGl0VG9kbyhcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC50b2RvSW5kZXgsXG4gICAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVNb2RhbCA9ICh0b2RvSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtlZGl0VG9kb01vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRvZG8gPSB0ZW1wUHJvamVjdC5nZXRUb0RvTGlzdCgpW3RvZG9JbmRleF07XG4gICAgICB0aXRsZS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICBkdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVkaXRUb2RvTW9kYWwsIHVwZGF0ZU1vZGFsIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJvamVjdExpc3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPnVsXCIpO1xuICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvXCIpO1xuXG4gIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICBjb25zdCB7IHByb2plY3RJbmRleCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldDtcbiAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF0uYWRkVG9MaXN0KFwiTmV3IHRvZG9cIiwgXCJFZGl0IHRvIGNoYW5nZSBmaWVsZHNcIiwgXCJUb2RheVwiLCBcIkhpZ2hcIik7XG4gICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5yZW1vdmVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleCk7XG4gICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9EZWxldGVCdXR0b24gPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF0ucmVtb3ZlRnJvbUxpc3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudG9kb0luZGV4KTtcbiAgICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdEVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0cy5lZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgZWRpdFByb2plY3RzLnVwZGF0ZU1vZGFsKCk7XG4gICAgICBlZGl0UHJvamVjdHMuZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kb0VkaXRCdXR0b24gPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9kb0luZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgICAgIGVkaXRUb2Rvcy5lZGl0VG9kb01vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgZWRpdFRvZG9zLmVkaXRUb2RvTW9kYWwuZGF0YXNldC50b2RvSW5kZXggPSB0b2RvSW5kZXg7XG4gICAgICBlZGl0VG9kb3MudXBkYXRlTW9kYWwodG9kb0luZGV4KTtcbiAgICAgIGVkaXRUb2Rvcy5lZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH07XG5cbiAgY29uc3QgYXR0YWNoUHJvamVjdExpc3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzPnVsPmxpXCIpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbaW5kZXhdO1xuICAgIGlmIChwcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdEZpZWxkc1swXS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdEZpZWxkc1sxXS50ZXh0Q29udGVudCA9IHByb2plY3QucHJpb3JpdHk7XG4gICAgcHJvamVjdEZpZWxkc1syXS50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICBwcm9qZWN0RmllbGRzWzNdLnRleHRDb250ZW50ID0gcHJvamVjdC5kdWVEYXRlO1xuICAgIGxvYWRUb2RvTGlzdChpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRvZG9MaXN0ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG4gICAgdG9kb0xpc3REb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9MaXN0RG9tLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF07XG4gICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LmdldFRvRG9MaXN0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHRvZG9MaXN0SGVhZGVyLmRhdGFzZXQudG9kb0luZGV4ID0gaTtcbiAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvTGlzdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvSGVhZGVyXCIpO1xuICAgICAgY29uc3QgaGVhZGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0udGl0bGU7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG9UaXRsZVwiKTtcbiAgICAgIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvZG9EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRvZG9EdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG9MaXN0W2ldLmR1ZURhdGV9YDtcbiAgICAgIGlmICh0b2RvTGlzdFtpXS5kdWUoKSkge1xuICAgICAgICB0b2RvRHVlLmNsYXNzTGlzdC5hZGQoXCJpc0R1ZVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG9MaXN0W2ldLnByaW9yaXR5fWA7XG4gICAgICB0b2RvRGV0YWlscy5hcHBlbmQodG9kb0R1ZSwgdG9kb1ByaW9yaXR5KTtcbiAgICAgIGhlYWRlckRldGFpbHMuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0RldGFpbHMpO1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJEZXRhaWxzLCBjcmVhdGVUb2RvRWRpdEJ1dHRvbihwcm9qZWN0SW5kZXgpLCBjcmVhdGVUb2RvRGVsZXRlQnV0dG9uKHByb2plY3RJbmRleCkpO1xuICAgICAgdG9kb0xpc3RIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAoZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0b2RvTGlzdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB0b2RvTGlzdEJvZHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdG9kb0xpc3RCb2R5LnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0uZGVzY3JpcHRpb247XG4gICAgICB0b2RvTGlzdERvbS5hcHBlbmQodG9kb0xpc3RIZWFkZXIsIHRvZG9MaXN0Qm9keSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNvcnRUb2RvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc29ydD4uZHJvcGRvd24+LmRyb3Bkb3duQnV0dG9uXCIpO1xuICBzb3J0VG9kb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgcHJvamVjdEluZGV4IH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldDtcbiAgICAgIHNvcnRUb2RvTGlzdChpbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydFRvZG9MaXN0ID0gKG1ldGhvZCwgcHJvamVjdEluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLnNvcnRUb2RvcyhtZXRob2QpO1xuICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0TGlzdERvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdW5sb2FkUHJvamVjdEZpZWxkcygpO1xuICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XG4gICAgICAgIHRlbXBMaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkUHJvamVjdChpbmRleCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdERldGFpbHMudGV4dENvbnRlbnQgPSBgRHVlOiAke3Byb2plY3QuZHVlRGF0ZX0sIFByaW9yaXR5OiAke3Byb2plY3QucHJpb3JpdHl9YDtcbiAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgICB0ZW1wTGkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgdGVtcExpLmFwcGVuZChwcm9qZWN0VGl0bGUsIGNyZWF0ZVByb2plY3RFZGl0QnV0dG9uKCksIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24oKSk7XG4gICAgICBwcm9qZWN0TGlzdERvbS5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xuICAgIH0pO1xuICAgIGF0dGFjaFByb2plY3RMaXN0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdW5sb2FkUHJvamVjdEZpZWxkcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgcHJvamVjdEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyAvLyBJbml0aWFsIHBhZ2UgbG9hZFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBkdWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1ZURhdGVBcnJheSA9IGR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgIGlmICh0b2RheS5nZXRGdWxsWWVhcigpID4gZHVlRGF0ZUFycmF5WzBdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGlmICh0b2RheS5nZXRGdWxsWWVhcigpIDwgZHVlRGF0ZUFycmF5WzBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAodG9kYXkuZ2V0TW9udGgoKSArIDEgPiBkdWVEYXRlQXJyYXlbMV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gaWYgKHRvZGF5LmdldE1vbnRoKCkgKyAxIDwgZHVlRGF0ZUFycmF5WzFdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAodG9kYXkuZ2V0RGF0ZSgpID49IGR1ZURhdGVBcnJheVsyXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkdWUsXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBpc0FjdGl2ZSA9IGZhbHNlO1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgY29uc3QgZ2V0VG9Eb0xpc3QgPSAoKSA9PiB0b2RvTGlzdC5zbGljZSgpO1xuICBjb25zdCBhZGRUb0xpc3QgPSAodGl0bGVUb2RvLCBkZXNjVG9kbywgZHVlRGF0ZVRvZG8sIHByaW9yaXR5VG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kb0l0ZW0odGl0bGVUb2RvLCBkZXNjVG9kbywgZHVlRGF0ZVRvZG8sIHByaW9yaXR5VG9kbykpO1xuICB9O1xuICBjb25zdCByZW1vdmVGcm9tTGlzdCA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG4gIGNvbnN0IGVkaXRUb2RvID0gKGluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgdG9kb0xpc3RbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdG9kb0xpc3RbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRvZG9MaXN0W2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9O1xuICBjb25zdCBzb3J0VG9kb3MgPSAobWV0aG9kKSA9PiB7XG4gICAgaWYgKG1ldGhvZCA9PT0gMCkge1xuICAgICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAxKSB7XG4gICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZS5sb2NhbGVDb21wYXJlKGIuZHVlRGF0ZSkpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAyKSB7XG4gICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LnNvcnQoKGIsIGEpID0+IHtcbiAgICAgICAgbGV0IGFWYWx1ZSA9IDA7XG4gICAgICAgIGxldCBiVmFsdWUgPSAwO1xuICAgICAgICBpZiAoYS5wcmlvcml0eSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICBhVmFsdWUgPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKGEucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICBhVmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICAgIGJWYWx1ZSA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAoYi5wcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgIGJWYWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFWYWx1ZSAtIGJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAzKSB7XG4gICAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LnJldmVyc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQWN0aXZlLCBnZXRUb0RvTGlzdCwgYWRkVG9MaXN0LCByZW1vdmVGcm9tTGlzdCwgZWRpdFRvZG8sIHNvcnRUb2RvcyxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdE9mUHJvamVjdHMgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdE9mUHJvamVjdHMgPSAoKSA9PiBsaXN0T2ZQcm9qZWN0cy5zbGljZSgpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxpc3RPZlByb2plY3RzLnB1c2gocHJvamVjdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICBpZiAobGlzdE9mUHJvamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0c1tpbmRleF0uaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0T2ZQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGluZGV4LCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IGxpc3RPZlByb2plY3RzW2luZGV4XTtcbiAgICB0ZW1wUHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHRlbXBQcm9qZWN0LmRlc2MgPSBkZXNjO1xuICAgIHRlbXBQcm9qZWN0LmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRlbXBQcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0T2ZQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdCwgZWRpdFByb2plY3QsXG4gIH07XG59KSgpO1xuXG4vLyBUaGVzZSBhcmUganVzdCBwcmVsb2FkZWQgZXhhbXBsZSBwcm9qZWN0c1xucHJvamVjdHMuYWRkUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uIGZvciBhIHByb2plY3QgZXhhbXBsZSwgdG8gZ2V0IHN0YXJ0ZWQgbWFraW5nIHlvdXIgb3duIHByb2plY3RzIGNsaWNrIHRoZSBwbHVzIGJ1dHRvbiBvbiB0aGUgcHJvamVjdHMgcGFuZWxcIiwgXCIyMDIyLTA1LTI0XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbMF0uYWRkVG9MaXN0KFwiRXhhbXBsZSB0b2RvXCIsIFwiSGV5IEkgaG9wZSB5b3UgZW5qb3kgdGhpcyBwcm9qZWN0LCBmZWVsIGZyZWUgdG8gZGVsZXRlIHRoaXMgdG9kbyBpdCBpcyBvbmx5IGFuIGV4YW1wbGVcIiwgXCIyMDIyLTA1LTI0XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVswXS5hZGRUb0xpc3QoXCJCIEFub3RoZXIgb25lXCIsIFwiQWxzbyBhbiBleGFtcGxlLCBhbnl3YXksIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGVuY291cmFnZSBtZSBhIGZvbGxvdyBvbiBnaXRodWIgY291bGRuJ3QgaHVydCEgVGhlIGxpbmsgaXMgaW4gdGhlIGZvb3RlclwiLCBcIjIwMjItMDUtMjNcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVswXS5hZGRUb0xpc3QoXCJFeGFtcGxlIHRvZG9cIiwgXCJIZXkgSSBob3BlIHlvdSBlbmpveSB0aGlzIHByb2plY3QsIGZlZWwgZnJlZSB0byBkZWxldGUgdGhpcyB0b2RvIGl0IGlzIG9ubHkgYW4gZXhhbXBsZVwiLCBcIjIwMjItMDQtMDRcIiwgXCJMb3dcIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIkFub3RoZXIgb25lXCIsIFwiQWxzbyBhbiBleGFtcGxlLCBhbnl3YXksIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGVuY291cmFnZSBtZSBhIGZvbGxvdyBvbiBnaXRodWIgY291bGRuJ3QgaHVydCEgVGhlIGxpbmsgaXMgaW4gdGhlIGZvb3RlclwiLCBcIjIwMjItMDUtMjdcIiwgXCJNZWRpdW1cIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIkMgRXhhbXBsZSB0b2RvXCIsIFwiSGV5IEkgaG9wZSB5b3UgZW5qb3kgdGhpcyBwcm9qZWN0LCBmZWVsIGZyZWUgdG8gZGVsZXRlIHRoaXMgdG9kbyBpdCBpcyBvbmx5IGFuIGV4YW1wbGVcIiwgXCIyMDIyLTA0LTA0XCIsIFwiTG93XCIpO1xucHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVswXS5hZGRUb0xpc3QoXCJBbm90aGVyIG9uZVwiLCBcIkFsc28gYW4gZXhhbXBsZSwgYW55d2F5LCBpZiB5b3Ugd291bGQgbGlrZSB0byBlbmNvdXJhZ2UgbWUgYSBmb2xsb3cgb24gZ2l0aHViIGNvdWxkbid0IGh1cnQhIFRoZSBsaW5rIGlzIGluIHRoZSBmb290ZXJcIiwgXCIyMDIyLTA1LTI1XCIsIFwiSGlnaFwiKTtcblxucHJvamVjdHMuYWRkUHJvamVjdChcIlNhbXBsZSAyXCIsIFwiVGhpcyBoYXMgbm8gdG9kb3MsIGJ1dCBzaG93cyBob3cgdGhlIHByb2plY3QgYmFyIGxvb2tzXCIsIFwiMjAyMi0wNS0wNVwiLCBcIk1lZGl1bVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kaXNwbGF5Q29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==