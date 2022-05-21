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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  color: #004a7c;\n}\n\nbody {\n  height: 100vh;\n  overflow-y: overlay;\n}\n\n.container {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: calc(60px + 3vh) 1fr calc(50px + 1vh);\n  -ms-grid-columns: 1fr 3fr;\n      grid-template: calc(60px + 3vh) 1fr calc(50px + 1vh)/1fr 3fr;\n}\n\n.container .header {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 1/1/2/3;\n  background-color: #005691;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  color: #fafafa;\n}\n\n.container .projectsBar {\n  background-color: #e8f1f5;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectsBar .projectsHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(8px + 1vh);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectsBar .projectsHeader button {\n  background-color: #005691;\n  color: #e8f1f5;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 8px;\n  font-size: 2rem;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 8px;\n}\n\n.container .projectsBar ul {\n  list-style: none;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li {\n  padding: calc(8px + 1vh) 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n}\n\n.container .projectsBar ul li span {\n  color: inherit;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.container .projectsBar ul li span span {\n  padding: 0;\n  font-size: 0.8rem;\n  color: #004a7c;\n}\n\n.container .projectsBar ul li .delete {\n  margin: 0 4px;\n}\n\n.container .projectsBar ul li .edit {\n  margin-left: auto;\n}\n\n.container .projectsBar ul li:nth-child(2n + 1) {\n  background-color: #cadcf0;\n}\n\n.container .projectsBar ul li:hover {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-transition: 500ms;\n  transition: 500ms;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transform: scale(1.05) !important;\n          transform: scale(1.05) !important;\n  font-weight: 700;\n}\n\n.container .projectsBar ul li:hover button {\n  visibility: visible;\n}\n\n.container .projectsBar ul li:hover span > span {\n  color: #e8f1f5;\n}\n\n.container .projectsBar ul li.active {\n  background-color: #005691;\n  color: #e8f1f5;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.container .projectsBar ul li.active span > span {\n  color: #e8f1f5;\n}\n\n.container .projectView {\n  background-color: #fafafa;\n  padding: 16px calc(8px + 1vw);\n}\n\n.container .projectView .projectViewHeader {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #005691;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-bottom: calc(4px + 0.5vh);\n  padding: 4px 16px;\n  font-size: 2rem;\n}\n\n.container .projectView .projectViewHeader .projectPriority {\n  font-size: 1.2rem;\n  text-align: end;\n}\n\n.container .projectView .projectViewDesc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n}\n\n.container .projectView .projectViewDesc .projectDue {\n  width: calc(128px + 15%);\n  margin-left: 5%;\n  text-align: end;\n}\n\n.todoSettings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 8px 0 16px;\n}\n\n.todoSettings button {\n  padding: 6px 12px;\n  margin: 0 4px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.todoSettings button:last-child {\n  background-color: #005691;\n  color: #e8f1f5;\n}\n\n.todoSettings button:nth-child(-n + 1) {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #e8f1f5;\n}\n\n.todoItems {\n  color: #e8f1f5;\n  list-style: none;\n  border: 2px solid #004a7c;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);\n}\n\n.todoItems:empty {\n  visibility: hidden;\n}\n\n.todoItems li {\n  min-height: 20px;\n  padding: 8px;\n  border: 2px solid #004a7c;\n}\n\n.todoItems li:nth-child(2n) {\n  background-color: #e8f1f5;\n  color: #004a7c;\n  display: none;\n}\n\n.todoItems li:nth-child(2n + 1) {\n  background-color: #005691;\n  cursor: pointer;\n}\n\n.todoItems li:nth-child(2n + 1) div {\n  pointer-events: none;\n}\n\n.todoItems li:nth-child(2n + 1) button {\n  pointer-events: auto;\n}\n\n.todoItems li:nth-child(2n + 1) span:last-child {\n  margin-left: 32px;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.85rem;\n}\n\n.todoItems li:nth-child(2n + 1) .todoHeader .todoTitle {\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n\n.todoItems li:nth-child(2n + 1):hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  background-color: #146aa5;\n}\n\n.todoItems li:nth-child(2n + 1):hover button {\n  visibility: visible;\n}\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 3/1/4/3;\n  background-color: #005691;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.footer a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n  color: #fafafa;\n}\n\n.footer img {\n  -webkit-filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n          filter: invert(100%) sepia(0%) saturate(3%) hue-rotate(141deg) brightness(102%) contrast(100%);\n  margin: 0 8px;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  height: 32px;\n}\n\n.footer img:hover {\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transform: rotate(720deg) scale(1.2);\n          transform: rotate(720deg) scale(1.2);\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.modal > div {\n  background-color: #005691;\n  padding: 16px;\n  border: 3px solid #004a7c;\n  width: 30vw;\n  height: 70vh;\n  border-radius: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #e8f1f5;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.modal > div button {\n  color: #004a7c;\n}\n\n.modal > div span {\n  color: #e8f1f5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n  border-bottom: 2px solid #e8f1f5;\n}\n\n.modal > div span button {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n}\n\n.modal > div label {\n  display: block;\n  color: #e8f1f5;\n  font-size: 1.5rem;\n}\n\n.modal > div input, .modal > div select {\n  display: block;\n  color: #004a7c;\n  outline: none;\n  background-color: #e8f1f5;\n  padding: 0.5vh 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 1vh;\n  width: calc(64px + 50%);\n  font-size: 1.5rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.modal > div input .selectOption, .modal > div select .selectOption {\n  background-color: #e8f1f5;\n  color: #004a7c;\n}\n\n.modal > div input:hover, .modal > div input:focus-within, .modal > div select:hover, .modal > div select:focus-within {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  border: 2px solid #e8f1f5;\n  background-color: #fafafa;\n}\n\n.modal > div > button {\n  height: 2.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2rem;\n  border-radius: 8px;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n\n.delete {\n  background-color: #be1e1e;\n}\n\n.edit {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.delete, .edit {\n  visibility: hidden;\n  padding: 2px 8px;\n  color: #e8f1f5;\n  border-radius: 3px;\n  margin: 0 4px;\n  font-weight: 700;\n  letter-spacing: 0.05rem;\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/styles.css"],"names":[],"mappings":"AAcA;EACE,SAAS;EACT,UAAU;EACV,cAAc;EACd,iCAAiC;ACZnC;;ADeA;EACE,aAAa;EACb,cAlBwB;ACM1B;;ADeA;EACE,aAAa;EACb,mBAAmB;ACZrB;;ADeA;EACE,gBAAgB;EAChB,iBAAa;EACb,aAAa;EAsHd,oDAAA;ECjIC,yBAAyB;MDQ3B,4DAIU;ACVV;;AAEA;EDjBE,eAAe;EACf,oBAAmB;EA4BjB,kBAAe;EACf,uBAtCsB;EAuCvB,kBAAA;ECRD,yBAAyB;EDF3B,oBAWE;EACE,oBAxCO;EAyCP,aAAa;EA+Ed,wBAAA;MCrFG,qBAAqB;UDPjB,uBAcN;EACE,yBAAc;MACd,sBAAa;UACb,mBA5CC;EA6CD,eAAa;EACb,cAAa;ACLnB;;AAEA;EDkBK,yBAAA;EChBH,6BAA6B;ADlB/B;;ACqBA;EDKQ,cAAY;EACZ,oBAAW;EACX,oBAAkB;EAClB,aAAW;EACX,gCAAgB;EApDtB,sBAAa;MACb,mBAAuB;UACvB,qBAAmB;EAoDb,8BAAgB;EACjB,yBAAA;MCDD,sBAAsB;UDhClB,8BAmCH;EACD,iBAAgB;EAChB,eAAe;ACDrB;;AAEA;EDtCA,yBAuCM;EACE,cAAS;EACT,YAAS;EACT,WAAA;EAgDD,kBAAA;EC9CL,eAAe;ED5CjB,gBAWE;EAiCQ,oBAAc;EACd,oBAAoB;EACpB,aAAa;EACb,wBAAsB;MAMvB,qBAAA;UCFC,uBAAuB;EDnDjC,yBAuCM;MAUM,sBAAU;UACV,mBAAiB;EACjB,gBA7Ec;ACkF1B;;ADxDA;EAuDU,gBAAa;EACd,gDAAA;UCKC,wCAAwC;ED7DlD,kBAWE;ACoDF;;AAEA;EDjEA,4BAuCQ;EAsBE,oBAAkB;EACnB,oBAAA;ECOP,aAAa;EDrEf,kBAWE;AC4DF;;AAEA;EDNU,cAAa;EACb,oBAAoB;EACpB,oBAAe;EACf,oBAAW;EACX,aAAa;EAOd,4BAAA;ECEP,6BAA6B;MDhF/B,0BAuCQ;UAkCI,sBAAmB;ACU/B;;ADnFA;EA4EY,UAxGD;EAyGA,iBAAA;ECWT,cAAc;ADxFhB;;AC2FA;EDTU,aAAa;ACWvB;;AAEA;EDNS,iBAAA;ACQT;;AAEA;EDXW,yBAAA;ACaX;;AAEA;EDRI,yBAAc;EAyBf,cAAA;ECdD,yBAAyB;ED1G3B,iBA6FE;EAII,kBAAc;EACd,kDAAa;UACb,0CAA8B;EAC9B,eAAe;EACf,yCAAqB;UACrB,iCAAgC;EAChC,gBAAS;ACYf;;AAEA;EDrHA,mBA6FE;AC0BF;;AAEA;EACE,cAAc;AD1HhB;;AC6HA;EDZM,yBAAe;EAMhB,cAAA;ECSH,gDAAgD;UDhIxC,wCAkHJ;EACE,8BAAwB;UACxB,sBAAe;EACf,gBAAe;EAChB,uBAAA;ACgBP;;AAEA;EDXE,cAAA;ACaF;;AAEA;EDjBA,yBAIS;EACL,6BAAiB;ACerB;;AAEA;EDbI,cAAW;EASZ,oBAAA;ECOD,oBAAoB;EDzBtB,aAIE;EAOI,yBAjKgB;MAkKhB,sBAnKuB;UAoKxB,8BAAA;ECiBH,gCAAgC;ED9BlC,sBAIQ;MAWF,mBAAkB;UAtKb,qBAAkB;EAwKxB,gCAAA;ECkBH,iBAAiB;EDdnB,eAAW;ACgBX;;AAEA;EDdE,iBAAe;EACf,eAAe;ACgBjB;;ADrBA;EAOI,oBAAkB;EACnB,oBAAA;ECkBD,aAAa;ED1Bf,yBASK;MACD,sBAAgB;UACT,8BAAK;EACZ,eAAY;ACmBhB;;AD/BA;EAeI,wBA3LO;EA4LP,eA1LsB;EA2LtB,eAAa;ACoBjB;;ADrCA;EA6BI,oBAxMG;EAyMH,oBAAe;EAkBhB,aAAA;ECLD,qBAAqB;MD3CvB,kBAmBe;UAET,yBAAoB;EACrB,mBAAA;ACyBL;;AAEA;EDxBK,iBAAA;EC0BH,aAAa;EDnDf,kBAmBI;EAQE,gBAAa;EACd,iBAAA;AC2BL;;AAEA;EDxBM,yBAAiB;EACjB,cAAW;AC0BjB;;AD5DA;EAoCQ,oCAAiB;EACjB,cAAa;AC4BrB;;AAEA;EDnEA,cAmBI;EAuBE,gBAAY;EAIZ,yBAAmC;EACpC,kBAAA;ECyBH,kDAAkD;UDxE1C,0CA2CG;AC+Bb;;AAEA;EDzBA,kBAAQ;AC2BR;;AAEA;EDtPE,gBAAa;EACb,YAAA;EACA,yBAAmB;ACwPrB;;ADjCA;EAzNE,yBAAa;EACb,cAAA;EACA,aAAa;AC8Pf;;AAEA;EACE,yBAAyB;ED1C3B,eAUM;ACkCN;;AAEA;EDhCI,oBAAY;ACkChB;;ADhDA;EAiBI,oBAAmB;ACmCvB;;AAEA;EDhCA,iBAAO;ACkCP;;AAEA;EDhCE,oBAAe;EACf,oBAAa;EACb,aAAY;EACZ,yBAAkB;MAClB,sBAAU;UAiEX,8BAAA;EC9BC,kBAAkB;AD3CpB;;AC8CA;EDlCI,iBAAiB;EACjB,gBAAW;EACX,uBAAY;ACoChB;;AAEA;EDlCI,yBAvQyB;EAwQzB,iBAAiB;EAqDlB,yBAAA;AChBH;;AAEA;EDpCK,mBAAA;ACsCL;;AAEA;EDrCM,eAAa;EACb,oBAAiB;EACjB,kBAAa;EACb,uBAAe;EACf,kBAAkB;EAClB,yBAnRK;EA2RN,cAAA;ECgCH,oBAAoB;EDtEtB,oBA+BM;EACE,aAAW;EACX,wBAAY;MACZ,qBAAe;UAjRd,uBAAM;EACb,yBAAuB;MACvB,sBAAmB;UAiRb,mBAAkB;AC2C1B;;AD/EA;EAwCM,oBAAc;EACd,oBA9RuB;EA+RvB,aAAW;EACZ,wBAAA;MC2CC,qBAAqB;UD7EvB,uBAmCO;EACL,yBAAc;MACd,sBAjSoB;UAkSb,mBAAM;EACb,qBArSK;EAsSL,cAAS;AC4Cf;;AAEA;ED1CM,sGAAuB;UACvB,8FAAiB;EACjB,aAAY;EAUb,kCAAA;UCmCK,0BAA0B;EDpGpC,YA4CI;AC0DJ;;AAEA;EACE,mCAAmC;UDhGjC,2BAAA;EAoDI,4CAAqC;UAC7B,oCAnTa;ACkW7B;;AAEA;ED/GA,aAkEM;EACA,wBAAc;MAlTlB,qBAAa;UACb,uBAAuB;EACvB,yBAAmB;MAkTf,sBAAe;UACf,mBAAkB;EACnB,eAAA;ECiDH,aAAa;ED7Cf,YAAO;EACL,oCAAe;EACf,UAAQ;AC+CV;;ADjDA;EAII,yBAAsB;EACtB,aAAY;EACZ,yBAAsB;EACvB,WAAA;ECiDD,YAAY;ED9Cd,mBAAQ;EACN,oBAAkB;EACnB,oBAAA;ECgDC,aAAa;ED/Cf,4BAAM;EACJ,6BAAkB;MACnB,0BAAA;UCiDS,sBAAsB;EDhDhC,cAAe;EACb,yBAAkB;MAClB,sBAAgB;UAlVP,8BAAkB;ACqY7B;;AAEA;EDhDE,cAAc;ACkDhB;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,eAAe;EACf,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,wBAAwB;MACpB,qBAAqB;UACjB,uBAAuB;EAC/B,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,gDAAgD;UACxC,wCAAwC;EAChD,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,wBAAwB;MACpB,qBAAqB;UACjB,uBAAuB;EAC/B,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAgD;UACxC,wCAAwC;EAChD,yBAAyB;EACzB,iBAAiB;EACjB,8BAA8B;UACtB,sBAAsB;AAChC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB;AACA,qCAAqC","sourceRoot":""}]);
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
    editTodo.addEventListener("click", () => {
      if (title.value === "" || dueDate.value === "") {
        alert("Please fill all inputs");
      } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(
          editTodoModal.dataset.projectIndex,
          title.value,
          description.value,
          dueDate.value,
          priority.value,
        );
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editTodoModal.style.display = "none";
        refreshProjectList();
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
      loadTodoList(projectIndex);
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
  const todoList = [];
  const getToDoList = () => todoList.slice();
  const addToList = (titleTodo, descTodo, dueDateTodo, priorityTodo) => {
    todoList.push(todoItem(titleTodo, descTodo, dueDateTodo, priorityTodo));
  };
  const removeFromList = (index) => {
    todoList.splice(index, 1);
  };

  return {
    title, desc, dueDate, priority, isActive, getToDoList, addToList, removeFromList,
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

// These are only test projects and todos for development
projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.getListOfProjects()[0].addToList("TITLEHERE", "DESC", "2022-50-50", "High");
projects.getListOfProjects()[0].addToList("TITLEHERE", "DESC", "2022-05-05", "Medium");
projects.getListOfProjects()[0].addToList("TITLEHERE", "DESC", "2022-50-50", "Low");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksWUFBWSxhQUFhLGVBQWUsYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsUUFBUSxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsUUFBUSxNQUFNLFlBQVksYUFBYSxZQUFZLFFBQVEsTUFBTSxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxRQUFRLE1BQU0sYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxVQUFVLFlBQVksUUFBUSxNQUFNLFlBQVksVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsUUFBUSxNQUFNLGFBQWEsWUFBWSxXQUFXLFFBQVEsS0FBSyxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLGNBQWMsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxhQUFhLGNBQWMsV0FBVyxhQUFhLFlBQVksWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLGFBQWEsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLDZCQUE2QjtBQUN6NmY7QUFDQSxpRUFBZSx1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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3ZFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0Q7QUFDOUI7O0FBRXRCLDBEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1yb3dzOiBjYWxjKDYwcHggKyAzdmgpIDFmciBjYWxjKDUwcHggKyAxdmgpO1xcbiAgLW1zLWdyaWQtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlOiBjYWxjKDYwcHggKyAzdmgpIDFmciBjYWxjKDUwcHggKyAxdmgpLzFmciAzZnI7XFxufVxcblxcbi5jb250YWluZXIgLmhlYWRlciB7XFxuICAtbXMtZ3JpZC1yb3c6IDE7XFxuICAtbXMtZ3JpZC1yb3ctc3BhbjogMTtcXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcXG4gIC1tcy1ncmlkLWNvbHVtbi1zcGFuOiAyO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjFmNTtcXG4gIHBhZGRpbmc6IDE2cHggY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciAucHJvamVjdHNIZWFkZXIge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA1NjkxO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDhweCArIDF2aCk7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciAucHJvamVjdHNIZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSB7XFxuICBwYWRkaW5nOiBjYWxjKDhweCArIDF2aCkgOHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIHNwYW4ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaSBzcGFuIHNwYW4ge1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpIC5kZWxldGUge1xcbiAgbWFyZ2luOiAwIDRweDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGkgLmVkaXQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWRjZjA7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXM7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSkgIWltcG9ydGFudDtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdHNCYXIgdWwgbGk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RzQmFyIHVsIGxpOmhvdmVyIHNwYW4gPiBzcGFuIHtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0c0JhciB1bCBsaS5hY3RpdmUgc3BhbiA+IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxufVxcblxcbi5jb250YWluZXIgLnByb2plY3RWaWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBwYWRkaW5nOiAxNnB4IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3SGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA1NjkxO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDRweCArIDAuNXZoKTtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdIZWFkZXIgLnByb2plY3RQcmlvcml0eSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNvbnRhaW5lciAucHJvamVjdFZpZXcgLnByb2plY3RWaWV3RGVzYyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5wcm9qZWN0VmlldyAucHJvamVjdFZpZXdEZXNjIC5wcm9qZWN0RHVlIHtcXG4gIHdpZHRoOiBjYWxjKDEyOHB4ICsgMTUlKTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG9TZXR0aW5ncyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiA4cHggMCAxNnB4O1xcbn1cXG5cXG4udG9kb1NldHRpbmdzIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50b2RvU2V0dGluZ3MgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcXG4gIGNvbG9yOiAjZThmMWY1O1xcbn1cXG5cXG4udG9kb1NldHRpbmdzIGJ1dHRvbjpudGgtY2hpbGQoLW4gKyAxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG59XFxuXFxuLnRvZG9JdGVtcyB7XFxuICBjb2xvcjogI2U4ZjFmNTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9JdGVtczplbXB0eSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvSXRlbXMgbGkge1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDRhN2M7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgZGl2IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpIGJ1dHRvbiB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSkgLnRvZG9IZWFkZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtcyBsaTpudGgtY2hpbGQoMm4gKyAxKSAudG9kb0hlYWRlciAudG9kb1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIGxpOm50aC1jaGlsZCgybiArIDEpOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZhYTU7XFxufVxcblxcbi50b2RvSXRlbXMgbGk6bnRoLWNoaWxkKDJuICsgMSk6aG92ZXIgYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgLW1zLWdyaWQtcm93OiAzO1xcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDAlKTtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNGE3YztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGJ1dHRvbiB7XFxuICBjb2xvcjogIzAwNGE3YztcXG59XFxuXFxuLm1vZGFsID4gZGl2IHNwYW4ge1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOGYxZjU7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBzcGFuIGJ1dHRvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZThmMWY1O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dCwgLm1vZGFsID4gZGl2IHNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMDA0YTdjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjU7XFxuICBwYWRkaW5nOiAwLjV2aCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB3aWR0aDogY2FsYyg2NHB4ICsgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLm1vZGFsID4gZGl2IGlucHV0IC5zZWxlY3RPcHRpb24sIC5tb2RhbCA+IGRpdiBzZWxlY3QgLnNlbGVjdE9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY1O1xcbiAgY29sb3I6ICMwMDRhN2M7XFxufVxcblxcbi5tb2RhbCA+IGRpdiBpbnB1dDpob3ZlciwgLm1vZGFsID4gZGl2IGlucHV0OmZvY3VzLXdpdGhpbiwgLm1vZGFsID4gZGl2IHNlbGVjdDpob3ZlciwgLm1vZGFsID4gZGl2IHNlbGVjdDpmb2N1cy13aXRoaW4ge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZjFmNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbi5tb2RhbCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDEwMG1zO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMWUxZTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGVsZXRlLCAuZWRpdCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgY29sb3I6ICNlOGYxZjU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQ0FBaUM7QUNabkM7O0FEZUE7RUFDRSxhQUFhO0VBQ2IsY0FsQndCO0FDTTFCOztBRGVB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LGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQSxxQ0FBcUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUFkZFByb2plY3RcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QWRkUHJvamVjdFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYWRkUHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFxuICAgICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2xvc2VBZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9KSgpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZWRpdFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RcIik7XG4gICAgY29uc3QgY2xvc2VFZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VFZGl0UHJvamVjdFwiKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RWRpdFByb2plY3RcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVFZGl0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbkVkaXRcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZUVkaXRcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5RWRpdFwiKTtcblxuICAgIGNsb3NlRWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBlZGl0UHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0UHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5lZGl0UHJvamVjdChcbiAgICAgICAgICBlZGl0UHJvamVjdE1vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4LFxuICAgICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdXBkYXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleF07XG4gICAgICB0aXRsZS52YWx1ZSA9IHRlbXBQcm9qZWN0LnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wUHJvamVjdC5kZXNjO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRlbXBQcm9qZWN0LmR1ZURhdGU7XG4gICAgICBwcmlvcml0eS52YWx1ZSA9IHRlbXBQcm9qZWN0LnByaW9yaXR5O1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVkaXRQcm9qZWN0TW9kYWwsIHVwZGF0ZU1vZGFsIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZWRpdFRvZG9zID0gKCgpID0+IHtcbiAgICBjb25zdCBlZGl0VG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VG9kb1wiKTtcbiAgICBjb25zdCBjbG9zZUVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRFZGl0VG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZUVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbkVkaXRUb2RvXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVFZGl0VG9kb1wiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlFZGl0VG9kb1wiKTtcblxuICAgIGNsb3NlRWRpdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICBlZGl0VG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBlZGl0VG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0VG9kb01vZGFsKSB7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBpbnB1dHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5lZGl0UHJvamVjdChcbiAgICAgICAgICBlZGl0VG9kb01vZGFsLmRhdGFzZXQucHJvamVjdEluZGV4LFxuICAgICAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdXBkYXRlTW9kYWwgPSAodG9kb0luZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbZWRpdFRvZG9Nb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleF07XG4gICAgICBjb25zdCB0b2RvID0gdGVtcFByb2plY3QuZ2V0VG9Eb0xpc3QoKVt0b2RvSW5kZXhdO1xuICAgICAgdGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgIHByaW9yaXR5LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICAgIGVkaXRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlZGl0VG9kb01vZGFsLCB1cGRhdGVNb2RhbCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cz51bFwiKTtcbiAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVG9kb1wiKTtcblxuICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIChlKSA9PiB7XG4gICAgY29uc3QgeyBwcm9qZWN0SW5kZXggfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQ7XG4gICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLmFkZFRvTGlzdChcIk5ldyB0b2RvXCIsIFwiRWRpdCB0byBjaGFuZ2UgZmllbGRzXCIsIFwiVG9kYXlcIiwgXCJIaWdoXCIpO1xuICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0SW5kZXgpO1xuICB9KTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvRGVsZXRlQnV0dG9uID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcHJvamVjdHMuZ2V0TGlzdE9mUHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLnJlbW92ZUZyb21MaXN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRvZG9JbmRleCk7XG4gICAgICBsb2FkVG9kb0xpc3QocHJvamVjdEluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdHMuZWRpdFByb2plY3RNb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAgIGVkaXRQcm9qZWN0cy51cGRhdGVNb2RhbCgpO1xuICAgICAgZWRpdFByb2plY3RzLmVkaXRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBlZGl0QnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9FZGl0QnV0dG9uID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IHRvZG9JbmRleCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG4gICAgICBlZGl0VG9kb3MuZWRpdFRvZG9Nb2RhbC5kYXRhc2V0LnByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICAgIGVkaXRUb2Rvcy5lZGl0VG9kb01vZGFsLmRhdGFzZXQudG9kb0luZGV4ID0gdG9kb0luZGV4O1xuICAgICAgZWRpdFRvZG9zLnVwZGF0ZU1vZGFsKHRvZG9JbmRleCk7XG4gICAgICBlZGl0VG9kb3MuZWRpdFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3RJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRCdXR0b247XG4gIH07XG5cbiAgY29uc3QgYXR0YWNoUHJvamVjdExpc3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzPnVsPmxpXCIpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbaW5kZXhdO1xuICAgIGlmIChwcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdEZpZWxkc1swXS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdEZpZWxkc1sxXS50ZXh0Q29udGVudCA9IHByb2plY3QucHJpb3JpdHk7XG4gICAgcHJvamVjdEZpZWxkc1syXS50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICBwcm9qZWN0RmllbGRzWzNdLnRleHRDb250ZW50ID0gcHJvamVjdC5kdWVEYXRlO1xuICAgIGxvYWRUb2RvTGlzdChpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRvZG9MaXN0ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG4gICAgdG9kb0xpc3REb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9MaXN0RG9tLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpW3Byb2plY3RJbmRleF07XG4gICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LmdldFRvRG9MaXN0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHRvZG9MaXN0SGVhZGVyLmRhdGFzZXQudG9kb0luZGV4ID0gaTtcbiAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvTGlzdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvSGVhZGVyXCIpO1xuICAgICAgY29uc3QgaGVhZGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0udGl0bGU7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG9UaXRsZVwiKTtcbiAgICAgIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvZG9EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRvZG9EdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG9MaXN0W2ldLmR1ZURhdGV9YDtcbiAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG9MaXN0W2ldLnByaW9yaXR5fWA7XG4gICAgICB0b2RvRGV0YWlscy5hcHBlbmQodG9kb0R1ZSwgdG9kb1ByaW9yaXR5KTtcbiAgICAgIGhlYWRlckRldGFpbHMuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0RldGFpbHMpO1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJEZXRhaWxzLCBjcmVhdGVUb2RvRWRpdEJ1dHRvbihwcm9qZWN0SW5kZXgpLCBjcmVhdGVUb2RvRGVsZXRlQnV0dG9uKHByb2plY3RJbmRleCkpO1xuICAgICAgdG9kb0xpc3RIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAoZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0b2RvTGlzdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB0b2RvTGlzdEJvZHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdG9kb0xpc3RCb2R5LnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0uZGVzY3JpcHRpb247XG4gICAgICB0b2RvTGlzdERvbS5hcHBlbmQodG9kb0xpc3RIZWFkZXIsIHRvZG9MaXN0Qm9keSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0TGlzdERvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdW5sb2FkUHJvamVjdEZpZWxkcygpO1xuICAgIHByb2plY3RzLmdldExpc3RPZlByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XG4gICAgICAgIHRlbXBMaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkUHJvamVjdChpbmRleCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJvamVjdERldGFpbHMudGV4dENvbnRlbnQgPSBgRHVlOiAke3Byb2plY3QuZHVlRGF0ZX0sIFByaW9yaXR5OiAke3Byb2plY3QucHJpb3JpdHl9YDtcbiAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgICB0ZW1wTGkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgdGVtcExpLmFwcGVuZChwcm9qZWN0VGl0bGUsIGNyZWF0ZVByb2plY3RFZGl0QnV0dG9uKCksIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24oKSk7XG4gICAgICBwcm9qZWN0TGlzdERvbS5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xuICAgIH0pO1xuICAgIGF0dGFjaFByb2plY3RMaXN0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdW5sb2FkUHJvamVjdEZpZWxkcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RmllbGRcIik7XG4gICAgcHJvamVjdEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyAvLyBJbml0aWFsIHBhZ2UgbG9hZFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBpc0FjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCBnZXRUb0RvTGlzdCA9ICgpID0+IHRvZG9MaXN0LnNsaWNlKCk7XG4gIGNvbnN0IGFkZFRvTGlzdCA9ICh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvSXRlbSh0aXRsZVRvZG8sIGRlc2NUb2RvLCBkdWVEYXRlVG9kbywgcHJpb3JpdHlUb2RvKSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUZyb21MaXN0ID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNBY3RpdmUsIGdldFRvRG9MaXN0LCBhZGRUb0xpc3QsIHJlbW92ZUZyb21MaXN0LFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IFtdO1xuICBjb25zdCBnZXRMaXN0T2ZQcm9qZWN0cyA9ICgpID0+IGxpc3RPZlByb2plY3RzLnNsaWNlKCk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaChwcm9qZWN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzW2luZGV4XS5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgbGlzdE9mUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGxpc3RPZlByb2plY3RzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgbGlzdE9mUHJvamVjdHNbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZWRpdFByb2plY3QgPSAoaW5kZXgsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbGlzdE9mUHJvamVjdHNbaW5kZXhdO1xuICAgIHRlbXBQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgdGVtcFByb2plY3QuZGVzYyA9IGRlc2M7XG4gICAgdGVtcFByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGVtcFByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExpc3RPZlByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0LCBlZGl0UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbi8vIFRoZXNlIGFyZSBvbmx5IHRlc3QgcHJvamVjdHMgYW5kIHRvZG9zIGZvciBkZXZlbG9wbWVudFxucHJvamVjdHMuYWRkUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgYSBwcm9qZWN0IGV4YW1wbGUsIHRvIGdldCBzdGFydGVkIG1ha2luZyB5b3VyIG93biBwcm9qZWN0cyBjbGljayB0aGUgcGx1cyBidXR0b24gb24gdGhlIHByb2plY3RzIHBhbmVsXCIsIFwiMjAyMi0wNS0wNVwiLCBcIkhpZ2hcIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIlRJVExFSEVSRVwiLCBcIkRFU0NcIiwgXCIyMDIyLTUwLTUwXCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmdldExpc3RPZlByb2plY3RzKClbMF0uYWRkVG9MaXN0KFwiVElUTEVIRVJFXCIsIFwiREVTQ1wiLCBcIjIwMjItMDUtMDVcIiwgXCJNZWRpdW1cIik7XG5wcm9qZWN0cy5nZXRMaXN0T2ZQcm9qZWN0cygpWzBdLmFkZFRvTGlzdChcIlRJVExFSEVSRVwiLCBcIkRFU0NcIiwgXCIyMDIyLTUwLTUwXCIsIFwiTG93XCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDJcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDJcIiwgXCIyMDIyLTA1LTA1XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDNcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDNcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcbnByb2plY3RzLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIGEgcHJvamVjdCBleGFtcGxlLCB0byBnZXQgc3RhcnRlZCBtYWtpbmcgeW91ciBvd24gcHJvamVjdHMgY2xpY2sgdGhlIHBsdXMgYnV0dG9uIG9uIHRoZSBwcm9qZWN0cyBwYW5lbFwiLCBcIjIwMjItMDUtMDVcIiwgXCJIaWdoXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDJcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDJcIiwgXCIyMDIyLTA1LTA1XCIsIFwiTWVkaXVtXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChcIlRlc3QgUHJvamVjdDNcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGVzdCBwcm9qZWN0IDNcIiwgXCIyMDIyLTA1LTA1XCIsIFwiSGlnaFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kaXNwbGF5Q29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==