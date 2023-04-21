"use strict";
(() => {
var exports = {};
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchResults)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function fetchResults(req, res) {
    const { idNumber , toDate , fromDate  } = req.query;
    const result = await fetch(`https://repack.sealdsweet.com/webapp/api/ReportalSearch?Params={%22Container%22:%22${idNumber}%22,%22StartDate%22:%222021-01-01%22,%22EndDate%22:%222023-12-20%22}`).then((response)=>{
        return response.json();
    }).catch((error)=>{
        console.error(error);
    });
    res.status(200).send({
        result
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(831));
module.exports = __webpack_exports__;

})();