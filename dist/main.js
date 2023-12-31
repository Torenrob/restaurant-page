/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_ID: () => (/* binding */ DEFAULT_ID),\n/* harmony export */   Loader: () => (/* binding */ Loader),\n/* harmony export */   LoaderStatus: () => (/* binding */ LoaderStatus)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\n\n// do not edit .js files directly - edit src/index.jst\n\n\n\nvar fastDeepEqual = function equal(a, b) {\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n\n    for (i = length; i-- !== 0;) {\n      var key = keys[i];\n\n      if (!equal(a[key], b[key])) return false;\n    }\n\n    return true;\n  }\n\n  // true if both NaN, false otherwise\n  return a!==a && b!==b;\n};\n\n/**\n * Copyright 2019 Google LLC. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at.\n *\n *      Http://www.apache.org/licenses/LICENSE-2.0.\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nconst DEFAULT_ID = \"__googleMapsScriptId\";\n/**\n * The status of the [[Loader]].\n */\nvar LoaderStatus;\n(function (LoaderStatus) {\n    LoaderStatus[LoaderStatus[\"INITIALIZED\"] = 0] = \"INITIALIZED\";\n    LoaderStatus[LoaderStatus[\"LOADING\"] = 1] = \"LOADING\";\n    LoaderStatus[LoaderStatus[\"SUCCESS\"] = 2] = \"SUCCESS\";\n    LoaderStatus[LoaderStatus[\"FAILURE\"] = 3] = \"FAILURE\";\n})(LoaderStatus || (LoaderStatus = {}));\n/**\n * [[Loader]] makes it easier to add Google Maps JavaScript API to your application\n * dynamically using\n * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).\n * It works by dynamically creating and appending a script node to the the\n * document head and wrapping the callback function so as to return a promise.\n *\n * ```\n * const loader = new Loader({\n *   apiKey: \"\",\n *   version: \"weekly\",\n *   libraries: [\"places\"]\n * });\n *\n * loader.load().then((google) => {\n *   const map = new google.maps.Map(...)\n * })\n * ```\n */\nclass Loader {\n    /**\n     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set\n     * using this library, instead the defaults are set by the Google Maps\n     * JavaScript API server.\n     *\n     * ```\n     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});\n     * ```\n     */\n    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = \"https://maps.googleapis.com/maps/api/js\", version, }) {\n        this.callbacks = [];\n        this.done = false;\n        this.loading = false;\n        this.errors = [];\n        this.apiKey = apiKey;\n        this.authReferrerPolicy = authReferrerPolicy;\n        this.channel = channel;\n        this.client = client;\n        this.id = id || DEFAULT_ID; // Do not allow empty string\n        this.language = language;\n        this.libraries = libraries;\n        this.mapIds = mapIds;\n        this.nonce = nonce;\n        this.region = region;\n        this.retries = retries;\n        this.url = url;\n        this.version = version;\n        if (Loader.instance) {\n            if (!fastDeepEqual(this.options, Loader.instance.options)) {\n                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);\n            }\n            return Loader.instance;\n        }\n        Loader.instance = this;\n    }\n    get options() {\n        return {\n            version: this.version,\n            apiKey: this.apiKey,\n            channel: this.channel,\n            client: this.client,\n            id: this.id,\n            libraries: this.libraries,\n            language: this.language,\n            region: this.region,\n            mapIds: this.mapIds,\n            nonce: this.nonce,\n            url: this.url,\n            authReferrerPolicy: this.authReferrerPolicy,\n        };\n    }\n    get status() {\n        if (this.errors.length) {\n            return LoaderStatus.FAILURE;\n        }\n        if (this.done) {\n            return LoaderStatus.SUCCESS;\n        }\n        if (this.loading) {\n            return LoaderStatus.LOADING;\n        }\n        return LoaderStatus.INITIALIZED;\n    }\n    get failed() {\n        return this.done && !this.loading && this.errors.length >= this.retries + 1;\n    }\n    /**\n     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].\n     *\n     * @ignore\n     * @deprecated\n     */\n    createUrl() {\n        let url = this.url;\n        url += `?callback=__googleMapsCallback`;\n        if (this.apiKey) {\n            url += `&key=${this.apiKey}`;\n        }\n        if (this.channel) {\n            url += `&channel=${this.channel}`;\n        }\n        if (this.client) {\n            url += `&client=${this.client}`;\n        }\n        if (this.libraries.length > 0) {\n            url += `&libraries=${this.libraries.join(\",\")}`;\n        }\n        if (this.language) {\n            url += `&language=${this.language}`;\n        }\n        if (this.region) {\n            url += `&region=${this.region}`;\n        }\n        if (this.version) {\n            url += `&v=${this.version}`;\n        }\n        if (this.mapIds) {\n            url += `&map_ids=${this.mapIds.join(\",\")}`;\n        }\n        if (this.authReferrerPolicy) {\n            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;\n        }\n        return url;\n    }\n    deleteScript() {\n        const script = document.getElementById(this.id);\n        if (script) {\n            script.remove();\n        }\n    }\n    /**\n     * Load the Google Maps JavaScript API script and return a Promise.\n     * @deprecated, use importLibrary() instead.\n     */\n    load() {\n        return this.loadPromise();\n    }\n    /**\n     * Load the Google Maps JavaScript API script and return a Promise.\n     *\n     * @ignore\n     * @deprecated, use importLibrary() instead.\n     */\n    loadPromise() {\n        return new Promise((resolve, reject) => {\n            this.loadCallback((err) => {\n                if (!err) {\n                    resolve(window.google);\n                }\n                else {\n                    reject(err.error);\n                }\n            });\n        });\n    }\n    importLibrary(name) {\n        this.execute();\n        return google.maps.importLibrary(name);\n    }\n    /**\n     * Load the Google Maps JavaScript API script with a callback.\n     * @deprecated, use importLibrary() instead.\n     */\n    loadCallback(fn) {\n        this.callbacks.push(fn);\n        this.execute();\n    }\n    /**\n     * Set the script on document.\n     */\n    setScript() {\n        var _a, _b;\n        if (document.getElementById(this.id)) {\n            // TODO wrap onerror callback for cases where the script was loaded elsewhere\n            this.callback();\n            return;\n        }\n        const params = {\n            key: this.apiKey,\n            channel: this.channel,\n            client: this.client,\n            libraries: this.libraries.length && this.libraries,\n            v: this.version,\n            mapIds: this.mapIds,\n            language: this.language,\n            region: this.region,\n            authReferrerPolicy: this.authReferrerPolicy,\n        };\n        // keep the URL minimal:\n        Object.keys(params).forEach(\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (key) => !params[key] && delete params[key]);\n        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {\n            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import\n            // which also sets the base url, the id, and the nonce\n            /* eslint-disable */\n            ((g) => {\n                // @ts-ignore\n                let h, a, k, p = \"The Google Maps JavaScript API\", c = \"google\", l = \"importLibrary\", q = \"__ib__\", m = document, b = window;\n                // @ts-ignore\n                b = b[c] || (b[c] = {});\n                // @ts-ignore\n                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => \n                // @ts-ignore\n                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {\n                    var _a;\n                    yield (a = m.createElement(\"script\"));\n                    a.id = this.id;\n                    e.set(\"libraries\", [...r] + \"\");\n                    // @ts-ignore\n                    for (k in g)\n                        e.set(k.replace(/[A-Z]/g, (t) => \"_\" + t[0].toLowerCase()), g[k]);\n                    e.set(\"callback\", c + \".maps.\" + q);\n                    a.src = this.url + `?` + e;\n                    d[q] = f;\n                    a.onerror = () => (h = n(Error(p + \" could not load.\")));\n                    // @ts-ignore\n                    a.nonce = this.nonce || ((_a = m.querySelector(\"script[nonce]\")) === null || _a === void 0 ? void 0 : _a.nonce) || \"\";\n                    m.head.append(a);\n                })));\n                // @ts-ignore\n                d[l] ? console.warn(p + \" only loads once. Ignoring:\", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));\n            })(params);\n            /* eslint-enable */\n        }\n        // While most libraries populate the global namespace when loaded via bootstrap params,\n        // this is not the case for \"marker\" when used with the inline bootstrap loader\n        // (and maybe others in the future). So ensure there is an importLibrary for each:\n        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));\n        // ensure at least one library, to kick off loading...\n        if (!libraryPromises.length) {\n            libraryPromises.push(this.importLibrary(\"core\"));\n        }\n        Promise.all(libraryPromises).then(() => this.callback(), (error) => {\n            const event = new ErrorEvent(\"error\", { error }); // for backwards compat\n            this.loadErrorCallback(event);\n        });\n    }\n    /**\n     * Reset the loader state.\n     */\n    reset() {\n        this.deleteScript();\n        this.done = false;\n        this.loading = false;\n        this.errors = [];\n        this.onerrorEvent = null;\n    }\n    resetIfRetryingFailed() {\n        if (this.failed) {\n            this.reset();\n        }\n    }\n    loadErrorCallback(e) {\n        this.errors.push(e);\n        if (this.errors.length <= this.retries) {\n            const delay = this.errors.length * Math.pow(2, this.errors.length);\n            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);\n            setTimeout(() => {\n                this.deleteScript();\n                this.setScript();\n            }, delay);\n        }\n        else {\n            this.onerrorEvent = e;\n            this.callback();\n        }\n    }\n    callback() {\n        this.done = true;\n        this.loading = false;\n        this.callbacks.forEach((cb) => {\n            cb(this.onerrorEvent);\n        });\n        this.callbacks = [];\n    }\n    execute() {\n        this.resetIfRetryingFailed();\n        if (this.done) {\n            this.callback();\n        }\n        else {\n            // short circuit and warn if google.maps is already loaded\n            if (window.google && window.google.maps && window.google.maps.version) {\n                console.warn(\"Google Maps already loaded outside @googlemaps/js-api-loader.\" +\n                    \"This may result in undesirable behavior as options and script parameters may not match.\");\n                this.callback();\n                return;\n            }\n            if (this.loading) ;\n            else {\n                this.loading = true;\n                this.setScript();\n            }\n        }\n    }\n}\n\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://restaurant-page/./node_modules/@googlemaps/js-api-loader/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nh3,\nh1 {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n\tbox-sizing: border-box;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/opensans-variablefont_wdthwght-webfont.woff */ \"./assets/fonts/opensans-variablefont_wdthwght-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/opensans-variablefont_wdthwght-webfont.woff2 */ \"./assets/fonts/opensans-variablefont_wdthwght-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff */ \"./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff2 */ \"./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/Cookie-Regular.ttf */ \"./assets/fonts/Cookie-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n\tfont-family: \"OpenSans\";\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___})\n\t\t\tformat(\"woff\"),\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_1___})\n\t\t\tformat(\"woff2\");\n}\n\n@font-face {\n\tfont-family: \"OpenSansItalic\";\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_2___})\n\t\t\tformat(woff),\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_3___})\n\t\t\tformat(woff2);\n}\n\n@font-face {\n\tfont-family: \"cookie\";\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format(truetype);\n}\n\nbody {\n\tbackground-color: #0d0c0c;\n\tbackground-size: 100vh;\n\theight: 100vh;\n\tcolor: white;\n\tdisplay: grid;\n\tgrid-template-rows: 0.5fr 3.5fr;\n\toverflow: hidden;\n}\n\nmain {\n\twidth: 100%;\n\tz-index: 2;\n}\n\nnav {\n\tfont-size: 30px;\n\twidth: 10vw;\n}\n\nnav > ul {\n\tdisplay: flex;\n\theight: 20vh;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\nnav > ul > li {\n\ttext-align: right;\n\tfont-family: \"OpenSans\";\n\tbox-shadow: 0px 1px white;\n\ttransition: 1500ms;\n\tcursor: pointer;\n}\n\nnav > ul > li:hover {\n\ttransform: scale(110%);\n\ttransition: 1500ms;\n}\n\nnav > ul > li:active {\n\ttransform: scale(110%);\n\ttransition: 1500ms;\n\tcursor: pointer;\n}\n\n#title {\n\tdisplay: flex;\n\tfont-family: \"cookie\";\n\tfont-size: 50px;\n\tmargin: 0;\n\tjustify-content: center;\n\tpadding-top: 10px;\n\tfilter: drop-shadow(-10px 16px 12px black);\n\tz-index: 2;\n}\n\n#menuList {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\theight: 80%;\n\tpadding-left: 470px;\n\talign-content: space-around;\n\tlist-style: none;\n\twidth: 75%;\n}\n\n.menuImages {\n\tposition: relative;\n\tz-index: 1;\n\tborder-radius: 5px;\n\tfilter: brightness(40%) drop-shadow(-10px 16px 12px black);\n\ttransition: 1000ms;\n}\n\n.itemTitles {\n\tposition: relative;\n\tbottom: 50%;\n\tright: -30%;\n\tword-wrap: normal;\n\tz-index: 2;\n\tfont-family: \"OpenSansItalic\";\n\tfont-weight: bolder;\n\tfont-size: 25px;\n}\n.menuImages:hover {\n\tfilter: brightness(100%);\n\ttransform: scale(110%);\n\ttransition: 1000ms;\n}\n\n.opacity {\n\topacity: 0;\n\ttransition: 1000ms;\n}\n\n#navAndContentContainer {\n\tdisplay: flex;\n}\n\n#backgroundImgContainer {\n\tposition: absolute;\n\tjustify-self: center;\n\tbox-shadow: 25px -25px 5px 0 #0d0c0c inset, -25px -200px 5px 0 #0d0c0c inset;\n}\n\n#backgroundImg {\n\tposition: relative;\n\tjustify-self: center;\n\theight: 100vh;\n\tz-index: -1;\n}\n\n.homeEls {\n\twidth: 43.5%;\n\tmargin-left: 23%;\n}\n\n#homeHeader {\n\tfont-size: 45px;\n\tmargin-bottom: 25px;\n\tmargin-top: 20px;\n\ttext-align: center;\n\tfilter: drop-shadow(-10px 16px 12px black);\n}\n\n#homePara {\n\tfont-size: 25px;\n\tbackground-color: #0d0c0c88;\n\tborder-radius: 7px;\n\tpadding: 15px;\n}\n\n#map {\n\theight: 400px;\n\twidth: 400px;\n\tposition: relative;\n\tleft: 600px;\n\ttop: 70px;\n\tborder-radius: 5px;\n}\n\n#phoneAndLoc {\n\tfont-size: 25px;\n\tposition: relative;\n\tleft: 650px;\n\ttop: 50px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/reset.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ \"./node_modules/@googlemaps/js-api-loader/dist/index.esm.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/scripts/menu.js\");\n\n\n\nfunction contactPage() {\n\tconst content = document.getElementById(\"content\");\n\tlet map = document.createElement(\"div\");\n\tmap.setAttribute(\"id\", \"map\");\n\tconst loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({\n\t\tapiKey: \"AIzaSyCj3Uvw24dSbtQjMCVmbtSrFeK337CiFmI\",\n\t\tversion: \"weekly\",\n\t});\n\tloader.load().then(async () => {\n\t\tconst { Map } = await google.maps.importLibrary(\"maps\");\n\n\t\tmap = new Map(document.getElementById(\"map\"), {\n\t\t\tcenter: { lat: 33.68825373074092, lng: -84.43233453106664 },\n\t\t\tzoom: 8,\n\t\t});\n\t});\n\n\tconst phoneAndLoc = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.pageElement)(\n\t\t\"span\",\n\t\tnull,\n\t\t\"phoneAndLoc\",\n\t\t\"Phone: 404-924-5881<br><br>Address: 2473 N. Bayard St<br>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;East Point, GA 30344\"\n\t);\n\n\tcontent.append(phoneAndLoc, map);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/homePage.js":
/*!*********************************!*\
  !*** ./src/scripts/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n\tconst content = document.getElementById(\"content\");\n\tconst head1 = document.createElement(\"h1\");\n\thead1.setAttribute(\"id\", \"homeHeader\");\n\thead1.setAttribute(\"class\", \"homeEls\");\n\tconst p = document.createElement(\"p\");\n\tp.setAttribute(\"id\", \"homePara\");\n\tp.setAttribute(\"class\", \"homeEls\");\n\n\thead1.innerText = \"Experience the Wonderful World of Food at Dadé Café\";\n\tp.innerHTML =\n\t\t\"At Dadé Café, we believe that food should be a celebration. That's why we use only the freshest ingredients and prepare our dishes with care and attention to detail. <br><br> Whether you're in the mood for a classic dish or something new and exciting, we have something for everyone. Our menu features a wide variety of options, from hearty entrees to light and refreshing appetizers. <br><br> But more than just great food, we also offer a warm and inviting atmosphere where you can relax and enjoy a meal with friends and family. Our friendly staff is always happy to help you choose the perfect dish and make your dining experience unforgettable.\";\n\n\tlet elements = [head1, p];\n\n\telements.forEach((x) => content.appendChild(x));\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/homePage.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ \"./src/scripts/homePage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/scripts/contact.js\");\n/* harmony import */ var _assets_images_falafel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/falafel.png */ \"./assets/images/falafel.png\");\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst backImg = new Image();\nconst backgroundContainer = document.createElement(\"div\");\nconst homeTab = document.getElementById(\"homeTab\");\nconst menuTab = document.getElementById(\"menuTab\");\nconst contactTab = document.getElementById(\"contactTab\");\n\nbackgroundContainer.append(backImg);\nbackgroundContainer.id = \"backgroundImgContainer\";\nbackImg.id = \"backgroundImg\";\nbackImg.src = _assets_images_falafel_png__WEBPACK_IMPORTED_MODULE_5__;\ndocument.body.prepend(backgroundContainer);\n\nwindow.addEventListener(\"load\", (x) => (0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\nhomeTab.addEventListener(\"click\", (x) => {\n\tcontent.replaceChildren();\n\t(0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nmenuTab.addEventListener(\"click\", (x) => {\n\tcontent.replaceChildren();\n\t(0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\ncontactTab.addEventListener(\"click\", (x) => {\n\tcontent.replaceChildren();\n\t(0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   pageElement: () => (/* binding */ pageElement)\n/* harmony export */ });\n/* harmony import */ var _assets_images_images1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/images1.jpeg */ \"./assets/images/images1.jpeg\");\n/* harmony import */ var _assets_images_images2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/images2.jpeg */ \"./assets/images/images2.jpeg\");\n/* harmony import */ var _assets_images_images3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/images3.jpeg */ \"./assets/images/images3.jpeg\");\n/* harmony import */ var _assets_images_images4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/images4.jpeg */ \"./assets/images/images4.jpeg\");\n/* harmony import */ var _assets_images_images5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/images5.jpeg */ \"./assets/images/images5.jpeg\");\n/* harmony import */ var _assets_images_images6_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/images6.jpeg */ \"./assets/images/images6.jpeg\");\n\n\n\n\n\n\n\n//Create factory for page elements to include id's and content\nconst pageElement = (\n\ttag,\n\tcls = null,\n\tid = null,\n\tcontent = null,\n\tsrc = null\n) => {\n\tlet elem = document.createElement(tag);\n\telem.setAttribute(\"id\", id);\n\telem.setAttribute(\"class\", cls);\n\n\tif (typeof content == \"string\") {\n\t\telem.innerHTML = content;\n\t} else {\n\t\telem.append(content);\n\t}\n\n\telem.setAttribute(\"src\", src);\n\n\treturn elem;\n};\n\nconst menu = () => {\n\tconst menuItemImgs = [];\n\tconst menuItems = [];\n\t//Get content area of page\n\tconst content = document.getElementById(\"content\");\n\n\t//Create image elements for menu list\n\tconst images = [_assets_images_images1_jpeg__WEBPACK_IMPORTED_MODULE_0__, _assets_images_images2_jpeg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_images3_jpeg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_images4_jpeg__WEBPACK_IMPORTED_MODULE_3__, _assets_images_images5_jpeg__WEBPACK_IMPORTED_MODULE_4__, _assets_images_images6_jpeg__WEBPACK_IMPORTED_MODULE_5__];\n\tfor (let i = 0; i < images.length; i++) {\n\t\tmenuItemImgs[i] = pageElement(\n\t\t\t\"img\",\n\t\t\t\"menuImages\",\n\t\t\t`menuImg${i}`,\n\t\t\tnull,\n\t\t\timages[i]\n\t\t);\n\t}\n\n\t//Create list items for menue\n\tconst dishes = [\n\t\t\"Meze Platter\",\n\t\t\"Hummus with Pita Bread\",\n\t\t\"Falafel Sandwich\",\n\t\t\"Grilled Fish with Lemon and Herbs\",\n\t\t\"Pasta with Tomato Sauce and Basil\",\n\t\t\"Baklava\",\n\t];\n\tfor (let i = 0; i < dishes.length; i++) {\n\t\tmenuItems[i] = pageElement(\"li\", \"menuItem\", null, menuItemImgs[i]);\n\t\tdishes[i] = pageElement(\"span\", \"itemTitles\", `itemTitle${i}`, dishes[i]);\n\t\tmenuItems[i].append(dishes[i]);\n\t}\n\n\tmenuItemImgs.forEach((image) => {\n\t\timage.addEventListener(\"mouseover\", (x) => {\n\t\t\tdishes[x.target.id[x.target.id.length - 1]].classList.add(\"opacity\");\n\t\t});\n\t\timage.addEventListener(\"mouseleave\", (x) => {\n\t\t\tdishes[x.target.id[x.target.id.length - 1]].classList.remove(\"opacity\");\n\t\t});\n\t});\n\n\t//Create UL for menu\n\tconst menuUl = pageElement(\"ul\", null, \"menuList\", \"\");\n\n\t//Add list items to menuUl\n\tmenuItems.forEach((item) => {\n\t\tmenuUl.append(item);\n\t\titem.style.width = \"40%\";\n\t});\n\n\tmenuUl.style.height = \"826px\";\n\tcontent.appendChild(menuUl);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/menu.js?");

/***/ }),

/***/ "./assets/fonts/Cookie-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Cookie-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"063fc3ec8398f168926a.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./assets/fonts/Cookie-Regular.ttf?");

/***/ }),

/***/ "./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff":
/*!*************************************************************************!*\
  !*** ./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a025d805a56ba0f18bf.woff\";\n\n//# sourceURL=webpack://restaurant-page/./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff2":
/*!**************************************************************************!*\
  !*** ./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff2 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d92f686547b6415f114e.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./assets/fonts/opensans-italic-variablefont_wdthwght-webfont.woff2?");

/***/ }),

/***/ "./assets/fonts/opensans-variablefont_wdthwght-webfont.woff":
/*!******************************************************************!*\
  !*** ./assets/fonts/opensans-variablefont_wdthwght-webfont.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0f6d527c8794f8f7478.woff\";\n\n//# sourceURL=webpack://restaurant-page/./assets/fonts/opensans-variablefont_wdthwght-webfont.woff?");

/***/ }),

/***/ "./assets/fonts/opensans-variablefont_wdthwght-webfont.woff2":
/*!*******************************************************************!*\
  !*** ./assets/fonts/opensans-variablefont_wdthwght-webfont.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"040f55d80aea8eb78213.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./assets/fonts/opensans-variablefont_wdthwght-webfont.woff2?");

/***/ }),

/***/ "./assets/images/falafel.png":
/*!***********************************!*\
  !*** ./assets/images/falafel.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"734d348d44e5891da0f3.png\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/falafel.png?");

/***/ }),

/***/ "./assets/images/images1.jpeg":
/*!************************************!*\
  !*** ./assets/images/images1.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8b11ec9e29b03ff4861.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images1.jpeg?");

/***/ }),

/***/ "./assets/images/images2.jpeg":
/*!************************************!*\
  !*** ./assets/images/images2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e30670f0bb430103f6a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images2.jpeg?");

/***/ }),

/***/ "./assets/images/images3.jpeg":
/*!************************************!*\
  !*** ./assets/images/images3.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"372aa35a9898efa87c10.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images3.jpeg?");

/***/ }),

/***/ "./assets/images/images4.jpeg":
/*!************************************!*\
  !*** ./assets/images/images4.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aafc2eb0e9bb6ed8f753.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images4.jpeg?");

/***/ }),

/***/ "./assets/images/images5.jpeg":
/*!************************************!*\
  !*** ./assets/images/images5.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a51322c5491be3b47a32.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images5.jpeg?");

/***/ }),

/***/ "./assets/images/images6.jpeg":
/*!************************************!*\
  !*** ./assets/images/images6.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14aafbc5662c4f570c8a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/images6.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;