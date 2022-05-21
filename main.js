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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li .edit {\n  margin-left: auto;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  margin-top: 16px;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems li {\n  min-height: 20px;\n  padding: 8px;\n  border: 2px solid #004a7c;\n}\n\n.todoItems li:nth-child(2n) {\n  background-color: #e8f1f5;\n  color: #004a7c;\n  display: none;\n}\n\n.todoItems li:nth-child(2n + 1) {\n  background-color: #005691;\n  cursor: pointer;\n}\n\n.todoItems li:nth-child(2n + 1) div {\n  pointer-events: none;\n}\n\n.todoItems li:nth-child(2n + 1) button {\n  pointer-events: auto;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:nth-child(2n + 1):hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:nth-child(2n + 1):hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

  const projectListDom = document.querySelector(".projects>ul");

  // Created to test functionality before implementation
  const todoItem = document.querySelectorAll(".tempClass");
  todoItem.forEach((item) => {
    item.addEventListener(("click"), (e) => {
      console.log(e.target.nextElementSibling.style.display);
      e.target.nextElementSibling.style.display = (e.target.nextElementSibling.style.display === "block") ? "none" : "block";
    });
  });

  const createDeleteButton = () => {
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

  const createEditButton = () => {
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
      tempLi.append(projectTitle, createEditButton(), createDeleteButton());
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
  const todoList = [];
  const getToDoList = () => todoList.slice();
  const addToList = (titleTodo, descTodo, dueDateTodo, priorityTodo) => {
    todoList.push(todoItem(titleTodo, descTodo, dueDateTodo, priorityTodo));
  };

  return {
    title, desc, dueDate, priority, isActive, getToDoList, addToList,
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

projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.addProject("Test Project2", "Description for test project 2", "2022-05-05", "Medium");
projects.addProject("Test Project3", "Description for test project 3", "2022-05-05", "High");
projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.addProject("Test Project2", "Description for test project 2", "2022-05-05", "Medium");
projects.addProject("Test Project3", "Description for test project 3", "2022-05-05", "High");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBLDZDQUE2QyxjQUFjLGVBQWUsbUJBQW1CLHNDQUFzQyxHQUFHLFVBQVUsa0JBQWtCLG1CQUFtQixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixHQUFHLGdCQUFnQixxQkFBcUIsc0JBQXNCLGtCQUFrQix5REFBeUQsOEJBQThCLHFFQUFxRSxHQUFHLHdCQUF3QixvQkFBb0IseUJBQXlCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLDhCQUE4Qix5QkFBeUIseUJBQXlCLGtCQUFrQiw2QkFBNkIsOEJBQThCLG9DQUFvQyw4QkFBOEIsK0JBQStCLGdDQUFnQyxvQkFBb0IsbUJBQW1CLEdBQUcsNkJBQTZCLDhCQUE4QixrQ0FBa0MsR0FBRyw2Q0FBNkMsbUJBQW1CLHlCQUF5Qix5QkFBeUIsa0JBQWtCLHFDQUFxQywyQkFBMkIsNEJBQTRCLGtDQUFrQyxtQ0FBbUMsOEJBQThCLCtCQUErQiwyQ0FBMkMsc0JBQXNCLG9CQUFvQixHQUFHLG9EQUFvRCw4QkFBOEIsbUJBQW1CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQkFBcUIseUJBQXlCLHlCQUF5QixrQkFBa0IsNkJBQTZCLDhCQUE4QixvQ0FBb0MsOEJBQThCLCtCQUErQixnQ0FBZ0MscUJBQXFCLEdBQUcsZ0NBQWdDLHFCQUFxQixxREFBcUQscURBQXFELHVCQUF1QixHQUFHLG1DQUFtQyxpQ0FBaUMseUJBQXlCLHlCQUF5QixrQkFBa0IsdUJBQXVCLEdBQUcsd0NBQXdDLG1CQUFtQix5QkFBeUIseUJBQXlCLHlCQUF5QixrQkFBa0IsaUNBQWlDLGtDQUFrQyxtQ0FBbUMsbUNBQW1DLEdBQUcsNkNBQTZDLGVBQWUsc0JBQXNCLG1CQUFtQixHQUFHLDJDQUEyQyxrQkFBa0IsR0FBRyx5Q0FBeUMsc0JBQXNCLEdBQUcscURBQXFELDhCQUE4QixHQUFHLHlDQUF5Qyw4QkFBOEIsbUJBQW1CLDhCQUE4QixzQkFBc0IsdUJBQXVCLHVEQUF1RCx1REFBdUQsb0JBQW9CLDhDQUE4Qyw4Q0FBOEMscUJBQXFCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRywwQ0FBMEMsOEJBQThCLG1CQUFtQixxREFBcUQscURBQXFELG1DQUFtQyxtQ0FBbUMscUJBQXFCLDRCQUE0QixHQUFHLHNEQUFzRCxtQkFBbUIsR0FBRyw2QkFBNkIsOEJBQThCLGtDQUFrQyxHQUFHLGdEQUFnRCxtQkFBbUIseUJBQXlCLHlCQUF5QixrQkFBa0IsOEJBQThCLCtCQUErQiwyQ0FBMkMscUNBQXFDLDJCQUEyQiw0QkFBNEIsa0NBQWtDLHFDQUFxQyxzQkFBc0Isb0JBQW9CLEdBQUcsaUVBQWlFLHNCQUFzQixvQkFBb0IsR0FBRyw4Q0FBOEMseUJBQXlCLHlCQUF5QixrQkFBa0IsOEJBQThCLCtCQUErQiwyQ0FBMkMsb0JBQW9CLEdBQUcsMERBQTBELDZCQUE2QixvQkFBb0Isb0JBQW9CLEdBQUcsZ0JBQWdCLG1CQUFtQixxQkFBcUIscUJBQXFCLDhCQUE4Qix1QkFBdUIsdURBQXVELHVEQUF1RCxHQUFHLG1CQUFtQixxQkFBcUIsaUJBQWlCLDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsbUJBQW1CLGtCQUFrQixHQUFHLHFDQUFxQyw4QkFBOEIsb0JBQW9CLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLDRDQUE0Qyx5QkFBeUIsR0FBRyxpREFBaUQseUJBQXlCLHlCQUF5QixrQkFBa0IsOEJBQThCLCtCQUErQiwyQ0FBMkMsdUJBQXVCLEdBQUcsNERBQTRELHNCQUFzQixxQkFBcUIsNEJBQTRCLEdBQUcsMkNBQTJDLDhCQUE4QixzQkFBc0IsOEJBQThCLEdBQUcsa0RBQWtELHdCQUF3QixHQUFHLGFBQWEsb0JBQW9CLHlCQUF5Qix1QkFBdUIsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLEdBQUcsZUFBZSx5QkFBeUIseUJBQXlCLGtCQUFrQiw2QkFBNkIsOEJBQThCLG9DQUFvQyw4QkFBOEIsK0JBQStCLGdDQUFnQywwQkFBMEIsbUJBQW1CLEdBQUcsaUJBQWlCLDJHQUEyRywyR0FBMkcsa0JBQWtCLHVDQUF1Qyx1Q0FBdUMsaUJBQWlCLEdBQUcsdUJBQXVCLHdDQUF3Qyx3Q0FBd0MsaURBQWlELGlEQUFpRCxHQUFHLFlBQVksa0JBQWtCLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLG9CQUFvQixrQkFBa0IsaUJBQWlCLHlDQUF5QyxlQUFlLEdBQUcsa0JBQWtCLDhCQUE4QixrQkFBa0IsOEJBQThCLGdCQUFnQixpQkFBaUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLG1DQUFtQyxtQkFBbUIsOEJBQThCLCtCQUErQiwyQ0FBMkMsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQix5QkFBeUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLDJDQUEyQyw4QkFBOEIsK0JBQStCLGdDQUFnQyxvQkFBb0IsdUJBQXVCLHFDQUFxQyxHQUFHLDhCQUE4QixnQkFBZ0IsaUJBQWlCLG9CQUFvQix5QkFBeUIseUJBQXlCLGtCQUFrQiw2QkFBNkIsOEJBQThCLG9DQUFvQyw4QkFBOEIsK0JBQStCLGdDQUFnQyx1QkFBdUIsR0FBRyx3QkFBd0IsbUJBQW1CLG1CQUFtQixzQkFBc0IsR0FBRyw2Q0FBNkMsbUJBQW1CLG1CQUFtQixrQkFBa0IsOEJBQThCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLHVDQUF1QyxHQUFHLHlFQUF5RSw4QkFBOEIsbUJBQW1CLEdBQUcsNEhBQTRILHFEQUFxRCxxREFBcUQsOEJBQThCLDhCQUE4QixHQUFHLDJCQUEyQixtQkFBbUIseUJBQXlCLHlCQUF5QixrQkFBa0IsNkJBQTZCLDhCQUE4QixvQ0FBb0MsOEJBQThCLCtCQUErQixnQ0FBZ0Msb0JBQW9CLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLGlCQUFpQixHQUFHLGtCQUFrQixxREFBcUQscURBQXFELDhCQUE4QixzQkFBc0IsbUNBQW1DLG1DQUFtQyxHQUFHLGFBQWEsOEJBQThCLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxvQkFBb0IsdUJBQXVCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGtCQUFrQixxQkFBcUIsNEJBQTRCLEdBQUcsK0NBQStDLCtHQUErRyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLFVBQVUsUUFBUSxNQUFNLFVBQVUsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxhQUFhLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxjQUFjLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsTUFBTSxZQUFZLGNBQWMsVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFFBQVEsTUFBTSxhQUFhLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxhQUFhLGNBQWMsYUFBYSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLFlBQVksUUFBUSxNQUFNLFlBQVksVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxhQUFhLGNBQWMsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLGFBQWEsY0FBYyxXQUFXLFdBQVcsV0FBVyxRQUFRLEtBQUssYUFBYSxZQUFZLFdBQVcsYUFBYSxXQUFXLGFBQWEsY0FBYyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxjQUFjLGVBQWUsYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksVUFBVSxhQUFhLFlBQVksVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLEtBQUssV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLDZCQUE2QjtBQUM1Z2U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLDREQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLDZEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMEJBQTBCLG1FQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBeUI7QUFDakM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsbUVBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsY0FBYyxpQkFBaUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSx3QkFBd0I7QUFDeEIsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdk1qQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNoRXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzlCOztBQUV0QiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtcm93czogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKTtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZTogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKS8xZnIgM2ZyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIge1xcbiAgLW1zLWdyaWQtcm93OiAxO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg4cHggKyAxdmgpO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkge1xcbiAgcGFkZGluZzogY2FsYyg4cHggKyAxdmgpIDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSBzcGFuIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiBzcGFuIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSAuZGVsZXRlIHtcXG4gIG1hcmdpbjogMCA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIC5lZGl0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FkY2YwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIGJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciBzcGFuID4gc3BhbiB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg0cHggKyAwLjV2aCk7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIC5wcm9qZWN0UHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0Rlc2Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyAucHJvamVjdER1ZSB7XFxuICB3aWR0aDogY2FsYygxMjhweCArIDE1JSk7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RvSXRlbXMge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDRhN2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpIHtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGRpdiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBidXR0b24ge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgLnRvZG9IZWFkZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSAudG9kb0hlYWRlciAudG9kb1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZhYTU7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgLW1zLWdyaWQtcm93OiAzO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNGE3YztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGJ1dHRvbiB7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOGYxZjU7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBzcGFuIGJ1dHRvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dCwgLm1vZGFsID4gZGl2IHNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAwLjV2aCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB3aWR0aDogY2FsYyg2NHB4ICsgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0IC5zZWxlY3RPcHRpb24sIC5tb2RhbCA+IGRpdiBzZWxlY3QgLnNlbGVjdE9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dDpob3ZlciwgLm1vZGFsID4gZGl2IGlucHV0OmZvY3VzLXdpdGhpbiwgLm1vZGFsID4gZGl2IHNlbGVjdDpob3ZlciwgLm1vZGFsID4gZGl2IHNlbGVjdDpmb2N1cy13aXRoaW4ge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZjFmNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5tb2RhbCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDEwMG1zO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMWUxZTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGVsZXRlLCAuZWRpdCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQ0FBaUM7QUNabkM7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsY0FsQndC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Q2QsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtFQUMvQix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0EscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VBZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEFkZFByb2plY3RcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNsb3NlQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfSkoKTtcblxuICBjb25zdCBlZGl0UHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNsb3NlRWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlRWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEVkaXRQcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlRWRpdFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0XCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUVkaXRcIik7XG5cbiAgICBjbG9zZUVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgZWRpdFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFByb2plY3RNb2RhbCkge1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuZWRpdFByb2plY3QoXG4gICAgICAgICAgZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCxcbiAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGVtcFByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW2VkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXhdO1xuICAgICAgdGl0bGUudmFsdWUgPSB0ZW1wUHJvamVjdC50aXRsZTtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGVtcFByb2plY3QuZGVzYztcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0ZW1wUHJvamVjdC5kdWVEYXRlO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0ZW1wUHJvamVjdC5wcmlvcml0eTtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlZGl0UHJvamVjdE1vZGFsLCB1cGRhdGVNb2RhbCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz51bFwiKTtcblxuICAvLyBDcmVhdGVkIHRvIHRlc3QgZnVuY3Rpb25hbGl0eSBiZWZvcmUgaW1wbGVtZW50YXRpb25cbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBDbGFzc1wiKTtcbiAgdG9kb0l0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5KTtcbiAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZWRpdFByb2plY3RzLmVkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gICAgICBlZGl0UHJvamVjdHMudXBkYXRlTW9kYWwoKTtcbiAgICAgIGVkaXRQcm9qZWN0cy5lZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhdHRhY2hQcm9qZWN0TGlzdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHM+dWw+bGlcIik7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RGaWVsZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtpbmRleF07XG4gICAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0RmllbGRzWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0RmllbGRzWzFdLnRleHRDb250ZW50ID0gcHJvamVjdC5wcmlvcml0eTtcbiAgICBwcm9qZWN0RmllbGRzWzJdLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICAgIHByb2plY3RGaWVsZHNbM10udGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG4gIH07XG5cbiAgY29uc3QgcmVmcmVzaFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHByb2plY3RMaXN0RG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB1bmxvYWRQcm9qZWN0RmllbGRzKCk7XG4gICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmUpIHtcbiAgICAgICAgdGVtcExpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRQcm9qZWN0KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IGBEdWU6ICR7cHJvamVjdC5kdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJvamVjdC5wcmlvcml0eX1gO1xuICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICAgIHRlbXBMaS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgICB0ZW1wTGkuYXBwZW5kKHByb2plY3RUaXRsZSwgY3JlYXRlRWRpdEJ1dHRvbigpLCBjcmVhdGVEZWxldGVCdXR0b24oKSk7XG4gICAgICBwcm9qZWN0TGlzdERvbS5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xuICAgIH0pO1xuICAgIGF0dGFjaFByb2plY3RMaXN0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdW5sb2FkUHJvamVjdEZpZWxkcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgcHJvamVjdEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyAvLyBJbml0aWFsIHBhZ2UgbG9hZFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBpc0FjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCBnZXRUb0RvTGlzdCA9ICgpID0+IHRvZG9MaXN0LnNsaWNlKCk7XG4gIGNvbnN0IGFkZFRvTGlzdCA9ICh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvSXRlbSh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQWN0aXZlLCBnZXRUb0RvTGlzdCwgYWRkVG9MaXN0LFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IFtdO1xuICBjb25zdCBnZXRMaXN0T2ZQcm9qZWN0cyA9ICgpID0+IGxpc3RPZlByb2plY3RzLnNsaWNlKCk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaChwcm9qZWN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgbGlzdE9mUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgbGlzdE9mUHJvamVjdHNbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZWRpdFByb2plY3QgPSAoaW5kZXgsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbGlzdE9mUHJvamVjdHNbaW5kZXhdO1xuICAgIHRlbXBQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgdGVtcFByb2plY3QuZGVzYyA9IGRlc2M7XG4gICAgdGVtcFByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGVtcFByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExpc3RPZlByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0LCBlZGl0UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbnByb2plY3RzLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIGEgcHJvamVjdCBleGFtcGxlLCB0byBnZXQgc3RhcnRlZCBtYWtpbmcgeW91ciBvd24gcHJvamVjdHMgY2xpY2sgdGhlIHBsdXMgYnV0dG9uIG9uIHRoZSBwcm9qZWN0cyBwYW5lbFwiLCBcIjIwMjItMDUtMDVcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDJcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDJcIiwgXCIyMDIyLTA1LTA1XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDNcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDNcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIGEgcHJvamVjdCBleGFtcGxlLCB0byBnZXQgc3RhcnRlZCBtYWtpbmcgeW91ciBvd24gcHJvamVjdHMgY2xpY2sgdGhlIHBsdXMgYnV0dG9uIG9uIHRoZSBwcm9qZWN0cyBwYW5lbFwiLCBcIjIwMjItMDUtMDVcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDJcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDJcIiwgXCIyMDIyLTA1LTA1XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDNcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDNcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kaXNwbGF5Q29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==