/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/app/index.ts":
/*!*********************************!*\
  !*** ./server/src/app/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _spotify = _interopRequireDefault(__webpack_require__(/*! ./services/spotify/spotify.router */ \"./server/src/app/services/spotify/spotify.router.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar app = (0, _express[\"default\"])();\napp.use(_express[\"default\"][\"static\"](_path[\"default\"].resolve('client', 'build')));\napp.use(_bodyParser[\"default\"].json());\napp.use('/spotify', _spotify[\"default\"]);\napp.get('/auth', function (req, res) {\n  res.sendFile(_path[\"default\"].resolve('client', 'public', 'auth.html'));\n});\napp.get('/', function (_, res) {\n  res.sendFile(_path[\"default\"].resolve('client', 'build', 'index.html'));\n});\nvar _default = app;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./server/src/app/index.ts?");

/***/ }),

/***/ "./server/src/app/services/spotify/SpotifyClient.ts":
/*!**********************************************************!*\
  !*** ./server/src/app/services/spotify/SpotifyClient.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ \"querystring\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SpotifyClient =\n/*#__PURE__*/\nfunction () {\n  function SpotifyClient(credentials) {\n    _classCallCheck(this, SpotifyClient);\n\n    _defineProperty(this, \"clientId\", void 0);\n\n    _defineProperty(this, \"clientSecret\", void 0);\n\n    _defineProperty(this, \"redirectUri\", void 0);\n\n    _defineProperty(this, \"state\", void 0);\n\n    _defineProperty(this, \"endpointBase\", 'https://accounts.spotify.com/');\n\n    this.clientId = credentials.clientId;\n    this.clientSecret = credentials.clientSecret;\n    this.redirectUri = credentials.redirectUri;\n  }\n\n  _createClass(SpotifyClient, [{\n    key: \"authorize\",\n    value: function authorize(_req, res) {\n      console.log(this);\n      this.state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n\n      var query = _querystring[\"default\"].stringify({\n        client_id: this.clientId,\n        response_type: 'code',\n        redirect_uri: this.redirectUri,\n        state: this.state,\n        scope: 'playlist-read-collaborative%20user-read-currently-playing%20user-read-recently-played'\n      });\n\n      res.redirect(this.endpointBase + 'authorize?' + query);\n    }\n  }, {\n    key: \"authorizeCallback\",\n    value: function authorizeCallback(req, res) {\n      var query = {\n        req: req // if (query === this.state) {\n        //   console.log('success')\n        // }\n\n      };\n    }\n  }]);\n\n  return SpotifyClient;\n}();\n\nvar _default = SpotifyClient;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./server/src/app/services/spotify/SpotifyClient.ts?");

/***/ }),

/***/ "./server/src/app/services/spotify/spotify.router.ts":
/*!***********************************************************!*\
  !*** ./server/src/app/services/spotify/spotify.router.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar express = _interopRequireWildcard(__webpack_require__(/*! express */ \"express\"));\n\nvar _SpotifyClient = _interopRequireDefault(__webpack_require__(/*! ./SpotifyClient */ \"./server/src/app/services/spotify/SpotifyClient.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj[\"default\"] = obj; return newObj; } }\n\nvar router = express.Router();\nvar spotifyClient = new _SpotifyClient[\"default\"]({\n  clientId: \"769eb6ccf74344d7908e65a1e7aa17e9\",\n  clientSecret: \"1d6a9566fb8d434683f8ecd945316b18\",\n  redirectUri: \"http://localhost:8000/spotify/callback\"\n});\nrouter.get('/auth', spotifyClient.authorize);\nrouter.get('/callback', spotifyClient.authorize);\nvar _default = router;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./server/src/app/services/spotify/spotify.router.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _http = _interopRequireDefault(__webpack_require__(/*! http */ \"http\"));\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app */ \"./server/src/app/index.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar PORT = process.env.PORT || 8000;\n\nvar server = _http[\"default\"].createServer(_app[\"default\"]);\n\nserver.listen(PORT, function () {\n  return console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ })

/******/ });