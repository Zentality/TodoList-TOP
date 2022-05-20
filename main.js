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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li .edit {\n  margin-left: auto;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  margin-top: 16px;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems li {\n  background-color: #005691;\n  border: 2px solid #004a7c;\n  min-height: 20px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.todoItems li .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const displayController = (() => {
  const addProjects = (() => {
    const addProjectModal = document.querySelector(".addProject")
    const addProjectButton = document.querySelector(".addProjectButton");
    const closeAddProject = document.querySelector(".closeAddProject");
    const addProject = document.querySelector(".submitAddProject");

    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#priority");
    
    addProjectButton.addEventListener("click", () => {
      addProjectModal.style.display = "flex";
    })
    addProjectModal.addEventListener("click", (e) => {
      if (e.target == addProjectModal){
        addProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        addProjectModal.style.display = "none";
      }
    })
    addProject.addEventListener(("click"), () => {
      if (title.value == "" || dueDate.value == ""){
        alert("Please fill all inputs");
      } else {
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(title.value, description.value, dueDate.value, priority.value);
        title.value = "";
        description.value = "";
        dueDate.value = "";
        addProjectModal.style.display = "none";
        refreshProjectList();
      }
    })
    closeAddProject.addEventListener("click", () => {
      addProjectModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      addProjectModal.style.display = "none";
    })
  })();

  const editProjects = (() => {
    const editProjectModal = document.querySelector(".editProject")
    const closeEditProject = document.querySelector(".closeEditProject");
    const editProject = document.querySelector(".submitEditProject");

    let title = document.querySelector("#titleEdit");
    let description = document.querySelector("#descriptionEdit");
    let dueDate = document.querySelector("#dueDateEdit");
    let priority = document.querySelector("#priorityEdit");

    closeEditProject.addEventListener(("click"), () => {
      editProjectModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      editProjectModal.style.display = "none";
    })
    editProjectModal.addEventListener("click", (e) => {
      if (e.target == editProjectModal){
        editProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
      }
    })
    editProject.addEventListener(("click"), () => {
      if (title.value == "" || dueDate.value == ""){
        alert("Please fill all inputs");
      } else {
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].editProject((editProjectModal.dataset.projectIndex), title.value, description.value, dueDate.value, priority.value);
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
        refreshProjectList();
      }
    })

    const updateModal = () => {
      let tempProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[editProjectModal.dataset.projectIndex];
      title.value = tempProject.title;
      description.value = tempProject.desc;
      dueDate.value = tempProject.dueDate;
      priority.value = tempProject.priority;
      editProjectModal.style.display = "none";
    }

    return {editProjectModal, updateModal};
  })();



  const projectListDom = document.querySelector(".projects>ul");

  const createDeleteButton = () => {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener(("click"), (e) => {
      e.stopPropagation();
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(e.target.parentElement.dataset.index);
      refreshProjectList();
    })
    return deleteButton;
  }

  const createEditButton = () => {
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener(("click"), (e) => {
      editProjects.editProjectModal.dataset.projectIndex = e.target.parentElement.dataset.index;
      editProjects.updateModal();
      editProjects.editProjectModal.style.display = "flex";
      e.stopPropagation();
      refreshProjectList();
    })
    return editButton;
  }

  const attachProjectListListeners = () => {
    let projectList = document.querySelectorAll(".projects>ul>li");
    projectList.forEach((project) => {
      project.addEventListener("click", (e) => {
        console.log(e);
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveProject(e.target.dataset.index);
        refreshProjectList();
      })
    })
  }

  const refreshProjectList = () => {
    projectListDom.textContent = "";
    unloadProjectFields();
    _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects().forEach((project, index) => {
      let tempLi = document.createElement("li");
      if (project.isActive){
        tempLi.classList.add("active");
        loadProject(index);
      }
      const projectTitle = document.createElement("span");
      projectTitle.textContent = project.title;
      const projectDetails = document.createElement("span");
      projectDetails.textContent = `Due: ${project.dueDate}, Priority: ${project.priority}`
      projectTitle.appendChild(projectDetails);
      tempLi.dataset.index = index;
      tempLi.append(projectTitle, createEditButton(), createDeleteButton());
      projectListDom.appendChild(tempLi);
    })
    attachProjectListListeners();
  }

  const loadProject = (index) => {
    let projectFields = document.querySelectorAll(".projectField");
    let project = _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].getListOfProjects()[index];
    if (project == undefined){return};
    projectFields[0].textContent = project.title;
    projectFields[1].textContent = project.priority;
    projectFields[2].textContent = project.desc;
    projectFields[3].textContent = project.dueDate;
  }

  const unloadProjectFields = () => {
    const projectFields = document.querySelectorAll(".projectField");
    projectFields.forEach((field) => {
      field.textContent = "";
    })
  }

  refreshProjectList(); //Initial page load
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
const todoItem = (title, description, dueDate, priority) => {
  return {title, description, dueDate, priority};
}

const project = (title, desc, dueDate, priority) => {
  let isActive = false;
  const todoList = [];
  const getToDoList = () => {
    return todoList.slice();
  }
  const addToList = (title, description, dueDate, priority) => {
    todoList.push(todoItem(title, description, dueDate, priority));
  }
  
  return {title, desc, dueDate, priority, isActive, getToDoList, addToList};
}

const projects = (() => {
  const listOfProjects = [];
  const getListOfProjects = () => {
    return listOfProjects.slice();
  }
  const addProject = (title, desc, dueDate, priority) => {
    listOfProjects.push(project(title, desc, dueDate, priority));
    if (listOfProjects.length === 1){
      setActiveProject(0);
    }
  }
  const removeProject = (index) => {
    if (listOfProjects[index].isActive == true){
      listOfProjects.splice(index, 1);
      setActiveProject(0);
    } else {
      listOfProjects.splice(index, 1);
    }
  }
  const setActiveProject = (index) => {
    if (listOfProjects.length === 0){return};
    listOfProjects.forEach((project) => {
      project.isActive = false;
    })
    listOfProjects[index].isActive = true;
  }
  const editProject = (index, title, desc, dueDate, priority) => {
    const tempProject = listOfProjects[index];
    tempProject.title = title;
    tempProject.desc = desc;
    tempProject.dueDate = dueDate;
    tempProject.priority = priority;
  }
  
  return {getListOfProjects, addProject, removeProject, setActiveProject, editProject};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLFVBQVUsUUFBUSxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLFVBQVUsV0FBVyxhQUFhLGFBQWEsVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsYUFBYSxjQUFjLFdBQVcsV0FBVyxXQUFXLFFBQVEsS0FBSyxhQUFhLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxjQUFjLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLGNBQWMsZUFBZSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxVQUFVLGFBQWEsWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsS0FBSyxXQUFXLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEs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Ozs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzlCOztBQUV0QiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtcm93czogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKTtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZTogY2FsYyg2MHB4ICsgM3ZoKSAxZnIgY2FsYyg1MHB4ICsgMXZoKS8xZnIgM2ZyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5oZWFkZXIge1xcbiAgLW1zLWdyaWQtcm93OiAxO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg4cHggKyAxdmgpO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgLnByb2plY3RzSGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkge1xcbiAgcGFkZGluZzogY2FsYyg4cHggKyAxdmgpIDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSBzcGFuIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiBzcGFuIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSAuZGVsZXRlIHtcXG4gIG1hcmdpbjogMCA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIC5lZGl0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FkY2YwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIGJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciBzcGFuID4gc3BhbiB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg0cHggKyAwLjV2aCk7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIC5wcm9qZWN0UHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0Rlc2Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyAucHJvamVjdER1ZSB7XFxuICB3aWR0aDogY2FsYygxMjhweCArIDE1JSk7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RvSXRlbXMge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDRhN2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaSAudG9kb0hlYWRlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpIC50b2RvSGVhZGVyIC50b2RvVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi50b2RvSXRlbXMgbGk6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcztcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NmFhNTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpob3ZlciBidXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAtbXMtZ3JpZC1yb3c6IDM7XFxuICAtbXMtZ3JpZC1yb3ctc3BhbjogMTtcXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcXG4gIC1tcy1ncmlkLWNvbHVtbi1zcGFuOiAyO1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMyUpIGh1ZS1yb3RhdGUoMTQxZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMyUpIGh1ZS1yb3RhdGUoMTQxZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZm9vdGVyIGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDA0YTdjO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgYnV0dG9uIHtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgc3BhbiB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4ZjFmNTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4gYnV0dG9uIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0LCAubW9kYWwgPiBkaXYgc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMwMDRhN2M7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIHBhZGRpbmc6IDAuNXZoIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gIHdpZHRoOiBjYWxjKDY0cHggKyA1MCUpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgaW5wdXQgLnNlbGVjdE9wdGlvbiwgLm1vZGFsID4gZGl2IHNlbGVjdCAuc2VsZWN0T3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0OmhvdmVyLCAubW9kYWwgPiBkaXYgaW5wdXQ6Zm9jdXMtd2l0aGluLCAubW9kYWwgPiBkaXYgc2VsZWN0OmhvdmVyLCAubW9kYWwgPiBkaXYgc2VsZWN0OmZvY3VzLXdpdGhpbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZThmMWY1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLm1vZGFsID4gZGl2ID4gYnV0dG9uIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXM7XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUxZTFlO1xcbn1cXG5cXG4uZWRpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kZWxldGUsIC5lZGl0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGlDQUFpQztBQ1puQzs7QURlQTtFQUNFLGFBQWE7RUFDYixjQWxCd0I7QUNNMUI7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FDWnJCOztBRGVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFhO0VBQ2IsYUFBYTtFQXNIZCxvREFBQTtFQ2pJQyx5QkFBeUI7TURRM0IsNERBSVU7QUNWVjs7QUFFQTtFRGpCRSxlQUFlO0VBQ2Ysb0JBQW1CO0VBNEJqQixrQkFBZTtFQUNmLHVCQXRDc0I7RUF1Q3ZCLGtCQUFBO0VDUkQseUJBQXlCO0VERjNCLG9CQVdFO0VBQ0Usb0JBeENPO0VBeUNQLGFBQWE7RUErRWQsd0JBQUE7TUNyRkcscUJBQXFCO1VEUGpCLHVCQWNOO0VBQ0UseUJBQWM7TUFDZCxzQkFBYTtVQUNiLG1CQTVDQztFQTZDRCxlQUFhO0VBQ2IsY0FBYTtBQ0xuQjs7QUFFQTtFRGtCSyx5QkFBQTtFQ2hCSCw2QkFBNkI7QURsQi9COztBQ3FCQTtFREtRLGNBQVk7RUFDWixvQkFBVztFQUNYLG9CQUFrQjtFQUNsQixhQUFXO0VBQ1gsZ0NBQWdCO0VBcER0QixzQkFBYTtNQUNiLG1CQUF1QjtVQUN2QixxQkFBbUI7RUFvRGIsOEJBQWdCO0VBQ2pCLHlCQUFBO01DREQsc0JBQXNCO1VEaENsQiw4QkFtQ0g7RUFDRCxpQkFBZ0I7RUFDaEIsZUFBZTtBQ0RyQjs7QUFFQTtFRHRDQSx5QkF1Q007RUFDRSxjQUFTO0VBQ1QsWUFBUztFQUNULFdBQUE7RUFnREQsa0JBQUE7RUM5Q0wsZUFB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dWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKVxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUFkZFByb2plY3RcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QWRkUHJvamVjdFwiKTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICAgIFxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSlcbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT0gYWRkUHJvamVjdE1vZGFsKXtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT0gXCJcIiB8fCBkdWVEYXRlLnZhbHVlID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pXG4gICAgY2xvc2VBZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG4gIH0pKCk7XG5cbiAgY29uc3QgZWRpdFByb2plY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJvamVjdFwiKVxuICAgIGNvbnN0IGNsb3NlRWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlRWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEVkaXRQcm9qZWN0XCIpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZUVkaXRcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbkVkaXRcIik7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0XCIpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlFZGl0XCIpO1xuXG4gICAgY2xvc2VFZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbiAgICBlZGl0UHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09IGVkaXRQcm9qZWN0TW9kYWwpe1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgIGlmICh0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0c1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLmVkaXRQcm9qZWN0KChlZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4KSwgdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB1cGRhdGVNb2RhbCA9ICgpID0+IHtcbiAgICAgIGxldCB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleF07XG4gICAgICB0aXRsZS52YWx1ZSA9IHRlbXBQcm9qZWN0LnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wUHJvamVjdC5kZXNjO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRlbXBQcm9qZWN0LmR1ZURhdGU7XG4gICAgICBwcmlvcml0eS52YWx1ZSA9IHRlbXBQcm9qZWN0LnByaW9yaXR5O1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtlZGl0UHJvamVjdE1vZGFsLCB1cGRhdGVNb2RhbH07XG4gIH0pKCk7XG5cblxuXG4gIGNvbnN0IHByb2plY3RMaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz51bFwiKTtcblxuICBjb25zdCBjcmVhdGVEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5yZW1vdmVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleCk7XG4gICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICB9KVxuICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gIH1cblxuICBjb25zdCBjcmVhdGVFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIChlKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdHMuZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAgIGVkaXRQcm9qZWN0cy51cGRhdGVNb2RhbCgpO1xuICAgICAgZWRpdFByb2plY3RzLmVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgIH0pXG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH1cblxuICBjb25zdCBhdHRhY2hQcm9qZWN0TGlzdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzPnVsPmxpXCIpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBwcm9qZWN0cy5zZXRBY3RpdmVQcm9qZWN0KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICByZWZyZXNoUHJvamVjdExpc3QoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlZnJlc2hQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0TGlzdERvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdW5sb2FkUHJvamVjdEZpZWxkcygpO1xuICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB0ZW1wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSl7XG4gICAgICAgIHRlbXBMaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkUHJvamVjdChpbmRleCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdERldGFpbHMudGV4dENvbnRlbnQgPSBgRHVlOiAke3Byb2plY3QuZHVlRGF0ZX0sIFByaW9yaXR5OiAke3Byb2plY3QucHJpb3JpdHl9YFxuICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICAgIHRlbXBMaS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgICB0ZW1wTGkuYXBwZW5kKHByb2plY3RUaXRsZSwgY3JlYXRlRWRpdEJ1dHRvbigpLCBjcmVhdGVEZWxldGVCdXR0b24oKSk7XG4gICAgICBwcm9qZWN0TGlzdERvbS5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xuICAgIH0pXG4gICAgYXR0YWNoUHJvamVjdExpc3RMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RGaWVsZFwiKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbaW5kZXhdO1xuICAgIGlmIChwcm9qZWN0ID09IHVuZGVmaW5lZCl7cmV0dXJufTtcbiAgICBwcm9qZWN0RmllbGRzWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0RmllbGRzWzFdLnRleHRDb250ZW50ID0gcHJvamVjdC5wcmlvcml0eTtcbiAgICBwcm9qZWN0RmllbGRzWzJdLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICAgIHByb2plY3RGaWVsZHNbM10udGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG4gIH1cblxuICBjb25zdCB1bmxvYWRQcm9qZWN0RmllbGRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RGaWVsZFwiKTtcbiAgICBwcm9qZWN0RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyAvL0luaXRpYWwgcGFnZSBsb2FkXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjsiLCJjb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCBnZXRUb0RvTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3Quc2xpY2UoKTtcbiAgfVxuICBjb25zdCBhZGRUb0xpc3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICB9XG4gIFxuICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNBY3RpdmUsIGdldFRvRG9MaXN0LCBhZGRUb0xpc3R9O1xufVxuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxpc3RPZlByb2plY3RzID0gW107XG4gIGNvbnN0IGdldExpc3RPZlByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBsaXN0T2ZQcm9qZWN0cy5zbGljZSgpO1xuICB9XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaChwcm9qZWN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDEpe1xuICAgICAgc2V0QWN0aXZlUHJvamVjdCgwKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0c1tpbmRleF0uaXNBY3RpdmUgPT0gdHJ1ZSl7XG4gICAgICBsaXN0T2ZQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2V0QWN0aXZlUHJvamVjdCgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdE9mUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDApe3JldHVybn07XG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0pXG4gICAgbGlzdE9mUHJvamVjdHNbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBlZGl0UHJvamVjdCA9IChpbmRleCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdGVtcFByb2plY3QgPSBsaXN0T2ZQcm9qZWN0c1tpbmRleF07XG4gICAgdGVtcFByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICB0ZW1wUHJvamVjdC5kZXNjID0gZGVzYztcbiAgICB0ZW1wUHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0ZW1wUHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIFxuICByZXR1cm4ge2dldExpc3RPZlByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0LCBlZGl0UHJvamVjdH07XG59KSgpO1xuXG5cblxucHJvamVjdHMuYWRkUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgYSBwcm9qZWN0IGV4YW1wbGUsIHRvIGdldCBzdGFydGVkIG1ha2luZyB5b3VyIG93biBwcm9qZWN0cyBjbGljayB0aGUgcGx1cyBidXR0b24gb24gdGhlIHByb2plY3RzIHBhbmVsXCIsIFwiMjAyMi0wNS0wNVwiLCBcIkhpZ2hcIik7XG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiVGVzdCBQcm9qZWN0MlwiLCBcIkRlc2NyaXB0aW9uIGZvciB0ZXN0IHByb2plY3QgMlwiLCBcIjIwMjItMDUtMDVcIiwgXCJNZWRpdW1cIik7XG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiVGVzdCBQcm9qZWN0M1wiLCBcIkRlc2NyaXB0aW9uIGZvciB0ZXN0IHByb2plY3QgM1wiLCBcIjIwMjItMDUtMDVcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgYSBwcm9qZWN0IGV4YW1wbGUsIHRvIGdldCBzdGFydGVkIG1ha2luZyB5b3VyIG93biBwcm9qZWN0cyBjbGljayB0aGUgcGx1cyBidXR0b24gb24gdGhlIHByb2plY3RzIHBhbmVsXCIsIFwiMjAyMi0wNS0wNVwiLCBcIkhpZ2hcIik7XG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiVGVzdCBQcm9qZWN0MlwiLCBcIkRlc2NyaXB0aW9uIGZvciB0ZXN0IHByb2plY3QgMlwiLCBcIjIwMjItMDUtMDVcIiwgXCJNZWRpdW1cIik7XG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiVGVzdCBQcm9qZWN0M1wiLCBcIkRlc2NyaXB0aW9uIGZvciB0ZXN0IHByb2plY3QgM1wiLCBcIjIwMjItMDUtMDVcIiwgXCJIaWdoXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kaXNwbGF5Q29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==