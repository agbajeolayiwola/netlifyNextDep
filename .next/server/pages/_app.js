(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\STARK\\Desktop\\UIUX Stuff\\NextJs\\next-bp\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  if ('servixeWorker' in navigator) {
    navigator.serviceWorker.register('/public/sw.js').then(() => console.log('service worker registered')).catch(() => console.log('service worker not registered'));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJwLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9uZXh0LWJwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFFdkMsTUFBRyxtQkFBbUJDLFNBQXRCLEVBQWdDO0FBQzlCQSxhQUFTLENBQUNDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLGVBQWpDLEVBQWtEQyxJQUFsRCxDQUF1RCxNQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixDQUE1RCxFQUNDQyxLQURELENBQ08sTUFBS0YsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVosQ0FEWjtBQUVEOztBQUNELHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVOLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBpZignc2Vydml4ZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3B1YmxpYy9zdy5qcycpLnRoZW4oKCk9PiBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCcpKVxuICAgIC5jYXRjaCgoKT0+IGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciBub3QgcmVnaXN0ZXJlZCcpKVxuICB9XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=