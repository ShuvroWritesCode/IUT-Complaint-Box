"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/firebase.js":
/*!******************************!*\
  !*** ./services/firebase.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   firestore: function() { return /* binding */ firestore; },\n/* harmony export */   storage: function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n// services/firebase.js\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC1FZAWPEtRksv77wVH_C0MZ4jkCHPMeM0\",\n    authDomain: \"iut-complaint-management.firebaseapp.com\",\n    projectId: \"iut-complaint-management\",\n    storageBucket: \"iut-complaint-management.appspot.com\",\n    messagingSenderId: \"650556712059\",\n    appId: \"\\\"1:650556712059:web:0fc8077307b195ad95eede\\\",\"\n};\n// Initialize Firebase only if it hasn't been initialized already\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\n// Initialize Firestore and Storage\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);\n// Export initialized services\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QjtBQUN1QztBQUNaO0FBQ0o7QUFFOUMsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRQyx5Q0FBd0M7SUFDaERHLFlBQVlILDBDQUE0QztJQUN4REssV0FBV0wsMEJBQTJDO0lBQ3RETyxlQUFlUCxzQ0FBK0M7SUFDOURTLG1CQUFtQlQsY0FBb0Q7SUFDdkVXLE9BQU9YLGdEQUF1QztBQUNoRDtBQUVBLGlFQUFpRTtBQUNqRSxNQUFNYSxNQUFNbEIscURBQU9BLEdBQUdtQixNQUFNLEtBQUssSUFBSXJCLDJEQUFhQSxDQUFDSyxrQkFBa0JKLG9EQUFNQTtBQUUzRSxtQ0FBbUM7QUFDbkMsTUFBTXFCLFlBQVluQixnRUFBWUEsQ0FBQ2lCO0FBQy9CLE1BQU1HLFVBQVVuQiw0REFBVUEsQ0FBQ2dCO0FBRTNCLDhCQUE4QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2ZpcmViYXNlLmpzP2JlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VydmljZXMvZmlyZWJhc2UuanNcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcCwgZ2V0QXBwcyB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIG9ubHkgaWYgaXQgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgYWxyZWFkeVxuY29uc3QgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA9PT0gMCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwKCk7XG5cbi8vIEluaXRpYWxpemUgRmlyZXN0b3JlIGFuZCBTdG9yYWdlXG5jb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XG5cbi8vIEV4cG9ydCBpbml0aWFsaXplZCBzZXJ2aWNlc1xuZXhwb3J0IHsgZmlyZXN0b3JlLCBzdG9yYWdlIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsImFwcCIsImxlbmd0aCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/firebase.js\n"));

/***/ })

});