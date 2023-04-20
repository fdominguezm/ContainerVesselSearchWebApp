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
exports.id = "pages/api/fileURL";
exports.ids = ["pages/api/fileURL"];
exports.modules = {

/***/ "(api)/./pages/api/fileURL.js":
/*!******************************!*\
  !*** ./pages/api/fileURL.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fileURLHandler)\n/* harmony export */ });\nasync function fileURLHandler(req, res) {\n    const { reportId , fileGUID  } = req.query;\n    try {\n        const myURL = `https://repack.sealdsweet.com/webapp/api/ReportalReportLink?Params={%22ReportId%22:%20%22${reportId}%22,%20%22fileGUID%22:%20%22${fileGUID}%22}`;\n        const result = await fetch(myURL).then((response)=>{\n            return response.json();\n        }).catch((error)=>{\n            console.error(error);\n        });\n        res.status(200).send({\n            result\n        });\n    } catch (err) {\n        res.status(500).json({\n            error: \"failed to load data\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlsZVVSTC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ2UsZUFBZUEsZUFBZUMsR0FBRyxFQUFDQyxHQUFHLEVBQUU7SUFDbEQsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxJQUFJSSxLQUFLO0lBQ3hDLElBQUc7UUFDQyxNQUFNQyxRQUFRLENBQUMseUZBQXlGLEVBQUVILFNBQVMsNEJBQTRCLEVBQUVDLFNBQVMsSUFBSSxDQUFDO1FBQy9KLE1BQU1HLFNBQVMsTUFBTUMsTUFBTUYsT0FBT0csSUFBSSxDQUFDQyxDQUFBQSxXQUFZO1lBQy9DLE9BQU9BLFNBQVNDLElBQUk7UUFDdEIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxRQUFTO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFBTTtRQUV4QlgsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDVDtRQUFNO0lBQ2hDLEVBQUMsT0FBT1UsS0FBSTtRQUNSZixJQUFJYSxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO1lBQUNFLE9BQU87UUFBcUI7SUFDdEQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktbmV4dC8uL3BhZ2VzL2FwaS9maWxlVVJMLmpzP2M0NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbGVVUkxIYW5kbGVyKHJlcSxyZXMpIHtcclxuICAgIGNvbnN0IHsgcmVwb3J0SWQsIGZpbGVHVUlEIH0gPSByZXEucXVlcnk7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgbXlVUkwgPSBgaHR0cHM6Ly9yZXBhY2suc2VhbGRzd2VldC5jb20vd2ViYXBwL2FwaS9SZXBvcnRhbFJlcG9ydExpbms/UGFyYW1zPXslMjJSZXBvcnRJZCUyMjolMjAlMjIke3JlcG9ydElkfSUyMiwlMjAlMjJmaWxlR1VJRCUyMjolMjAlMjIke2ZpbGVHVUlEfSUyMn1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKG15VVJMKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7cmVzdWx0fSk7XHJcbiAgICB9Y2F0Y2ggKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOiAnZmFpbGVkIHRvIGxvYWQgZGF0YSd9KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbImZpbGVVUkxIYW5kbGVyIiwicmVxIiwicmVzIiwicmVwb3J0SWQiLCJmaWxlR1VJRCIsInF1ZXJ5IiwibXlVUkwiLCJyZXN1bHQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsInNlbmQiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fileURL.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fileURL.js"));
module.exports = __webpack_exports__;

})();