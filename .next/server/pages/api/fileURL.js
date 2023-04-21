"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fileURLHandler)
/* harmony export */ });
async function fileURLHandler(req, res) {
    const { reportId , fileGUID  } = req.query;
    try {
        const myURL = `https://repack.sealdsweet.com/webapp/api/ReportalReportLink?Params={%22ReportId%22:%20%22${reportId}%22,%20%22fileGUID%22:%20%22${fileGUID}%22}`;
        const result = await fetch(myURL).then((response)=>{
            return response.json();
        }).catch((error)=>{
            console.error(error);
        });
        res.status(200).send({
            result
        });
    } catch (err) {
        res.status(500).json({
            error: "failed to load data"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(196));
module.exports = __webpack_exports__;

})();