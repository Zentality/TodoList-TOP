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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: #004a7c;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  display: none;\n  padding: 0;\n  font-size: 0.8rem;\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li button {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li .delete {\n  background-color: #be1e1e;\n}\n\n.container .projectsBar ul li .edit {\n  margin-left: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover span > span {\n  display: block;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  display: block;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsY0FBYyxRQUFRLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsWUFBWSxjQUFjLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFdBQVcsV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxVQUFVLFVBQVUsUUFBUSxLQUFLLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFVBQVUsWUFBWSxZQUFZLFVBQVUs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OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUMvRHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzlCOztBQUV0QiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLXJvd3M6IGNhbGMoNjBweCArIDN2aCkgMWZyIGNhbGMoNTBweCArIDF2aCk7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGNhbGMoNjBweCArIDN2aCkgMWZyIGNhbGMoNTBweCArIDF2aCkvMWZyIDNmcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIC1tcy1ncmlkLXJvdzogMTtcXG4gIC1tcy1ncmlkLXJvdy1zcGFuOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDI7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIC5wcm9qZWN0c0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDU2OTE7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoOHB4ICsgMXZoKTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNHB4IDE2cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIC5wcm9qZWN0c0hlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIHtcXG4gIHBhZGRpbmc6IGNhbGMoOHB4ICsgMXZoKSA4cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgc3BhbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIHNwYW4gc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIGJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSAuZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTFlMWU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIC5lZGl0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FkY2YwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHNwYW4gPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaTpob3ZlciBidXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkuYWN0aXZlIHNwYW4gPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMTZweCBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNTY5MTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyg0cHggKyAwLjV2aCk7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIC5wcm9qZWN0UHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IC5wcm9qZWN0Vmlld0Rlc2Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyAucHJvamVjdER1ZSB7XFxuICB3aWR0aDogY2FsYygxMjhweCArIDE1JSk7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgLW1zLWdyaWQtcm93OiAzO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDA0YTdjO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgc3BhbiB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U4ZjFmNTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4gYnV0dG9uIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0LCAubW9kYWwgPiBkaXYgc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMwMDRhN2M7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIHBhZGRpbmc6IDAuNXZoIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gIHdpZHRoOiBjYWxjKDY0cHggKyA1MCUpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubW9kYWwgPiBkaXYgaW5wdXQgLnNlbGVjdE9wdGlvbiwgLm1vZGFsID4gZGl2IHNlbGVjdCAuc2VsZWN0T3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0OmhvdmVyLCAubW9kYWwgPiBkaXYgaW5wdXQ6Zm9jdXMtd2l0aGluLCAubW9kYWwgPiBkaXYgc2VsZWN0OmhvdmVyLCAubW9kYWwgPiBkaXYgc2VsZWN0OmZvY3VzLXdpdGhpbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZThmMWY1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLm1vZGFsID4gZGl2ID4gYnV0dG9uIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXM7XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQVp3QjtFQWF4QixpQ0FBaUM7QUNabkM7O0FEZUE7RUFDRSxhQUFhO0FDWmY7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FDWnJCOztBRGVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFhO0VBQ2IsYUFBYTtFQWlJZCxvREFBQTtFQzVJQyx5QkFBeUI7TURRM0IsNERBSVU7QUNWVjs7QUFFQTtFRGhCRSxlQUFlO0VBQ2Ysb0JBQW1CO0VBMkJqQixrQkFBZTtFQUNmLHVCQXJDc0I7RUFzQ3ZCLGtCQUFBO0VDUkQseUJBQXlCO0VERjNCLG9CQVdFO0VBQ0Usb0JBdkNPO0VBd0NQLGFBQWE7RUEwRmQsd0JBQUE7TUNoR0cscUJBQXFCO1VEUGpCLHVCQWNOO0VBQ0UseUJBQWM7TUFDZCxzQkFBYTtVQUNiLG1CQTNDQztFQTRDRCxlQUFhO0VBQ2IsY0FBYTtBQ0xuQjs7QUFFQTtFRGtCSyx5QkFBQTtFQ2hCSCw2QkFBNkI7QURsQi9COztBQ3FCQTtFREtRLGNBQVk7RUFDWixvQkFBVztFQUNYLG9CQUFrQjtFQUNs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LHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0RBQWdEO1VBQ3hDLHdDQUF3QztFQUNoRCx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHdCQUF3QjtNQUNwQixxQkFBcUI7VUFDakIsdUJBQXVCO0VBQy9CLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0RBQWdEO1VBQ3hDLHdDQUF3QztFQUNoRCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7QUFDQSxxQ0FBcUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlQWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRBZGRQcm9qZWN0XCIpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG4gICAgXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxuICAgIGFkZFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PSBhZGRQcm9qZWN0TW9kYWwpe1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgIGlmICh0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGR1ZURhdGUudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIGlucHV0c1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLmFkZFByb2plY3QodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9XG4gICAgfSlcbiAgICBjbG9zZUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbiAgfSkoKTtcblxuICBjb25zdCBlZGl0UHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpXG4gICAgY29uc3QgY2xvc2VFZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VFZGl0UHJvamVjdFwiKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RWRpdFByb2plY3RcIik7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlRWRpdFwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uRWRpdFwiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZUVkaXRcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUVkaXRcIik7XG5cbiAgICBjbG9zZUVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICAgIGVkaXRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT0gZWRpdFByb2plY3RNb2RhbCl7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pXG4gICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlLnZhbHVlID09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMuZWRpdFByb2plY3QoKGVkaXRQcm9qZWN0TW9kYWwuZGF0YXNldC5wcm9qZWN0SW5kZXgpLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHVwZGF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgbGV0IHRlbXBQcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtlZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4XTtcbiAgICAgIHRpdGxlLnZhbHVlID0gdGVtcFByb2plY3QudGl0bGU7XG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRlbXBQcm9qZWN0LmRlc2M7XG4gICAgICBkdWVEYXRlLnZhbHVlID0gdGVtcFByb2plY3QuZHVlRGF0ZTtcbiAgICAgIHByaW9yaXR5LnZhbHVlID0gdGVtcFByb2plY3QucHJpb3JpdHk7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2VkaXRQcm9qZWN0TW9kYWwsIHVwZGF0ZU1vZGFsfTtcbiAgfSkoKTtcblxuXG5cbiAgY29uc3QgcHJvamVjdExpc3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzPnVsXCIpO1xuXG4gIGNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0cy5lZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgZWRpdFByb2plY3RzLnVwZGF0ZU1vZGFsKCk7XG4gICAgICBlZGl0UHJvamVjdHMuZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgfSlcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjaFByb2plY3RMaXN0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHM+dWw+bGlcIik7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHByb2plY3RzLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVmcmVzaFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHByb2plY3RMaXN0RG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB1bmxvYWRQcm9qZWN0RmllbGRzKCk7XG4gICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHRlbXBMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKXtcbiAgICAgICAgdGVtcExpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRQcm9qZWN0KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IGBEdWU6ICR7cHJvamVjdC5kdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJvamVjdC5wcmlvcml0eX1gXG4gICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgICAgdGVtcExpLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgIHRlbXBMaS5hcHBlbmQocHJvamVjdFRpdGxlLCBjcmVhdGVFZGl0QnV0dG9uKCksIGNyZWF0ZURlbGV0ZUJ1dHRvbigpKTtcbiAgICAgIHByb2plY3RMaXN0RG9tLmFwcGVuZENoaWxkKHRlbXBMaSk7XG4gICAgfSlcbiAgICBhdHRhY2hQcm9qZWN0TGlzdExpc3RlbmVycygpO1xuICB9XG5cbiAgY29uc3QgbG9hZFByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgcHJvamVjdEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEZpZWxkXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtpbmRleF07XG4gICAgaWYgKHByb2plY3QgPT0gdW5kZWZpbmVkKXtyZXR1cm59O1xuICAgIHByb2plY3RGaWVsZHNbMF0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3RGaWVsZHNbMV0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuICAgIHByb2plY3RGaWVsZHNbMl0udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG4gICAgcHJvamVjdEZpZWxkc1szXS50ZXh0Q29udGVudCA9IHByb2plY3QuZHVlRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHVubG9hZFByb2plY3RGaWVsZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEZpZWxkXCIpO1xuICAgIHByb2plY3RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb2plY3RMaXN0KCk7IC8vSW5pdGlhbCBwYWdlIGxvYWRcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IGdldFRvRG9MaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdC5zbGljZSgpO1xuICB9XG4gIGNvbnN0IGFkZFRvTGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gIH1cbiAgXG4gIHJldHVybiB7dGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0FjdGl2ZSwgZ2V0VG9Eb0xpc3QsIGFkZFRvTGlzdH07XG59XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdE9mUHJvamVjdHMgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdE9mUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxpc3RPZlByb2plY3RzLnNsaWNlKCk7XG4gIH1cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsaXN0T2ZQcm9qZWN0cy5wdXNoKHByb2plY3QodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH1cbiAgfVxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9PSB0cnVlKXtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzZXRBY3RpdmVQcm9qZWN0KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0T2ZQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzLmxlbmd0aCA9PT0gMCl7cmV0dXJufTtcbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfSlcbiAgICBsaXN0T2ZQcm9qZWN0c1tpbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xuICB9XG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGluZGV4LCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IGxpc3RPZlByb2plY3RzW2luZGV4XTtcbiAgICB0ZW1wUHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHRlbXBQcm9qZWN0LmRlc2MgPSBkZXNjO1xuICAgIHRlbXBQcm9qZWN0LmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRlbXBQcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgXG4gIHJldHVybiB7Z2V0TGlzdE9mUHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHNldEFjdGl2ZVByb2plY3QsIGVkaXRQcm9qZWN0fTtcbn0pKCk7XG5cblxuXG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uIGZvciBhIHByb2plY3QgZXhhbXBsZSwgdG8gZ2V0IHN0YXJ0ZWQgbWFraW5nIHlvdXIgb3duIHByb2plY3RzIGNsaWNrIHRoZSBwbHVzIGJ1dHRvbiBvbiB0aGUgcHJvamVjdHMgcGFuZWxcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJUZXN0IFByb2plY3QyXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRlc3QgcHJvamVjdCAyXCIsIFwiMjAyMi0wNS0wNVwiLCBcIk1lZGl1bVwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJUZXN0IFByb2plY3QzXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRlc3QgcHJvamVjdCAzXCIsIFwiMjAyMi0wNS0wNVwiLCBcIkhpZ2hcIik7XG5wcm9qZWN0cy5hZGRQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uIGZvciBhIHByb2plY3QgZXhhbXBsZSwgdG8gZ2V0IHN0YXJ0ZWQgbWFraW5nIHlvdXIgb3duIHByb2plY3RzIGNsaWNrIHRoZSBwbHVzIGJ1dHRvbiBvbiB0aGUgcHJvamVjdHMgcGFuZWxcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJUZXN0IFByb2plY3QyXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRlc3QgcHJvamVjdCAyXCIsIFwiMjAyMi0wNS0wNVwiLCBcIk1lZGl1bVwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJUZXN0IFByb2plY3QzXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRlc3QgcHJvamVjdCAzXCIsIFwiMjAyMi0wNS0wNVwiLCBcIkhpZ2hcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmRpc3BsYXlDb250cm9sbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9