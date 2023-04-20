"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/searchHandler";
exports.ids = ["pages/api/searchHandler"];
exports.modules = {

/***/ "(api)/./pages/api/searchHandler.js":
/*!************************************!*\
  !*** ./pages/api/searchHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchResults)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// import type { NextApiRequest, NextApiResponse } from 'next'\nasync function fetchResults(req, res) {\n    const { idNumber , toDate , fromDate  } = req.query;\n    const result = await fetch(`https://repack.sealdsweet.com/webapp/api/ReportalSearch?Params={%22Container%22:%22${idNumber}%22,%22StartDate%22:%222021-01-01%22,%22EndDate%22:%222023-12-20%22}`).then((response)=>{\n        return response.json();\n    }).catch((error)=>{\n        console.error(error);\n    });\n    res.status(200).send({\n        result\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoSGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLDhEQUE4RDtBQUUvQyxlQUFlQSxhQUFhQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxNQUFNLEVBQUNDLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUMsR0FBR0osSUFBSUssS0FBSztJQUU5QyxNQUFNQyxTQUFTLE1BQU1DLE1BQU0sQ0FBQyxtRkFBbUYsRUFBRUwsU0FBUyxvRUFBb0UsQ0FBQyxFQUFFTSxJQUFJLENBQUNDLENBQUFBLFdBQVk7UUFDaE4sT0FBT0EsU0FBU0MsSUFBSTtJQUN0QixHQUNDQyxLQUFLLENBQUNDLENBQUFBLFFBQVM7UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtJQUFNO0lBRXRCWCxJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNUO0lBQU07QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLXVpLW5leHQvLi9wYWdlcy9hcGkvc2VhcmNoSGFuZGxlci5qcz9jOTBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG4vLyBpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc3VsdHMocmVxLCByZXMpIHtcbiAgY29uc3Qge2lkTnVtYmVyLCB0b0RhdGUsIGZyb21EYXRlfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXBhY2suc2VhbGRzd2VldC5jb20vd2ViYXBwL2FwaS9SZXBvcnRhbFNlYXJjaD9QYXJhbXM9eyUyMkNvbnRhaW5lciUyMjolMjIke2lkTnVtYmVyfSUyMiwlMjJTdGFydERhdGUlMjI6JTIyMjAyMS0wMS0wMSUyMiwlMjJFbmREYXRlJTIyOiUyMjIwMjMtMTItMjAlMjJ9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKX0pO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtyZXN1bHR9KTtcbn0iXSwibmFtZXMiOlsiZmV0Y2hSZXN1bHRzIiwicmVxIiwicmVzIiwiaWROdW1iZXIiLCJ0b0RhdGUiLCJmcm9tRGF0ZSIsInF1ZXJ5IiwicmVzdWx0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/searchHandler.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/searchHandler.js"));
module.exports = __webpack_exports__;

})();