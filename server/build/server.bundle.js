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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass App {\n  constructor(router, errorHandler, middlewares, publicFolder) {\n    _defineProperty(this, \"app\", void 0);\n\n    _defineProperty(this, \"router\", void 0);\n\n    _defineProperty(this, \"errorHandler\", void 0);\n\n    _defineProperty(this, \"middlewares\", void 0);\n\n    _defineProperty(this, \"publicFolder\", void 0);\n\n    this.app = (0, _express.default)();\n    this.router = router;\n    this.errorHandler = errorHandler;\n    this.middlewares = middlewares;\n    this.publicFolder = publicFolder;\n    if (middlewares) this.initializeMiddlewares();\n    if (router) this.initializeRouter();\n    if (errorHandler) this.initializeErrorHandler();\n  }\n\n  listen(port) {\n    this.app.listen(port, () => console.log(`Server is listening on port ${port}`));\n  }\n\n  initializeRouter() {\n    this.app.use(this.router);\n  }\n\n  initializeErrorHandler() {\n    this.app.use(this.errorHandler);\n  }\n\n  initializeMiddlewares() {\n    if (this.publicFolder) this.app.use(_express.default.static(this.publicFolder));\n    this.middlewares.forEach(middleware => {\n      this.app.use(middleware);\n    });\n  }\n\n}\n\nexports.default = App;\n\n//# sourceURL=webpack:///./server/src/app/index.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app */ \"./server/src/app/index.ts\"));\n\nvar _routers = _interopRequireDefault(__webpack_require__(/*! ./routers */ \"./server/src/routers/index.ts\"));\n\nvar _middleware = _interopRequireWildcard(__webpack_require__(/*! ./middleware */ \"./server/src/middleware/index.ts\"));\n\nvar _services = _interopRequireDefault(__webpack_require__(/*! ./services */ \"./server/src/services/index.ts\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = (0, _routers.default)(_services.default);\n\nconst publicFolder = _path.default.resolve('client', 'build');\n\nrouter.get('/auth', (req, res) => {\n  res.sendFile(_path.default.resolve('client', 'public', 'auth.html'));\n});\nrouter.get('/', (_, res) => {\n  res.sendFile(_path.default.resolve('client', 'build', 'index.html'));\n});\nconst app = new _app.default(router, _middleware.errorHandler, _middleware.default, publicFolder);\napp.listen(process.env.PORT || 8000);\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "./server/src/middleware/error-handler/index.ts":
/*!******************************************************!*\
  !*** ./server/src/middleware/error-handler/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = errorHandler;\n\nfunction errorHandler(err, req, res, next) {\n  console.error(err.stack);\n  res.status(500).json(err);\n}\n\n//# sourceURL=webpack:///./server/src/middleware/error-handler/index.ts?");

/***/ }),

/***/ "./server/src/middleware/index.ts":
/*!****************************************!*\
  !*** ./server/src/middleware/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"errorHandler\", {\n  enumerable: true,\n  get: function () {\n    return _errorHandler.default;\n  }\n});\nexports.default = void 0;\n\nvar _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\n\nvar _errorHandler = _interopRequireDefault(__webpack_require__(/*! ./error-handler */ \"./server/src/middleware/error-handler/index.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst middlewares = [_bodyParser.default.json()];\nvar _default = middlewares;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/middleware/index.ts?");

/***/ }),

/***/ "./server/src/routers/index.ts":
/*!*************************************!*\
  !*** ./server/src/routers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = MakeRouter;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nfunction MakeRouter(routes) {\n  const router = (0, _express.Router)();\n  routes.forEach(({\n    path,\n    handler\n  }) => {\n    router.use(path, handler);\n  });\n  return router;\n}\n\n//# sourceURL=webpack:///./server/src/routers/index.ts?");

/***/ }),

/***/ "./server/src/services/index.ts":
/*!**************************************!*\
  !*** ./server/src/services/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _spotify = _interopRequireDefault(__webpack_require__(/*! ./spotify */ \"./server/src/services/spotify/index.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst services = [{\n  path: '/spotify',\n  handler: _spotify.default\n}];\nvar _default = services;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/index.ts?");

/***/ }),

/***/ "./server/src/services/spotify/SpotifyClient.ts":
/*!******************************************************!*\
  !*** ./server/src/services/spotify/SpotifyClient.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ \"querystring\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass SpotifyClient {\n  constructor(credentials) {\n    _defineProperty(this, \"clientId\", void 0);\n\n    _defineProperty(this, \"clientSecret\", void 0);\n\n    _defineProperty(this, \"encodedCredentials\", void 0);\n\n    _defineProperty(this, \"redirectUri\", void 0);\n\n    _defineProperty(this, \"state\", void 0);\n\n    _defineProperty(this, \"refreshToken\", void 0);\n\n    _defineProperty(this, \"accessToken\", void 0);\n\n    _defineProperty(this, \"axiosTokenInstance\", void 0);\n\n    _defineProperty(this, \"axiosPlayerInstance\", void 0);\n\n    _defineProperty(this, \"tokenIsValid\", void 0);\n\n    _defineProperty(this, \"grantedScopes\", void 0);\n\n    _defineProperty(this, \"endpointBase\", 'https://api.spotify.com/v1/');\n\n    this.clientId = credentials.clientId;\n    this.clientSecret = credentials.clientSecret;\n    this.redirectUri = credentials.redirectUri;\n    this.encodedCredentials = Buffer.from(this.clientId + ':' + this.clientSecret).toString('base64');\n    this.axiosTokenInstance = _axios.default.create({\n      baseURL: 'https://accounts.spotify.com/api/token',\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        Authorization: `Basic ${this.encodedCredentials}`\n      }\n    });\n    this.axiosPlayerInstance = _axios.default.create({\n      baseURL: this.endpointBase + 'me/player',\n      headers: {\n        Authorization: `Bearer ${this.accessToken}`\n      }\n    });\n  }\n\n  authorize(_req, res) {\n    this.state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n\n    const query = _querystring.default.stringify({\n      client_id: this.clientId,\n      response_type: 'code',\n      redirect_uri: this.redirectUri,\n      state: this.state,\n      scope: 'playlist-read-collaborative%20user-read-currently-playing%20user-read-recently-played'\n    });\n\n    res.redirect('https://accounts.spotify.com/authorize?' + query);\n  }\n\n  authorizeCallback(req, res) {\n    const {\n      query\n    } = req;\n\n    if (query.state !== this.state) {\n      res.status(401).end();\n    }\n\n    if (query.error) {\n      res.json({\n        error: query.error\n      });\n    }\n\n    if (query.code) {\n      this.axiosTokenInstance.post('', _querystring.default.stringify({\n        grant_type: 'authorization_code',\n        code: query.code,\n        redirect_uri: this.redirectUri\n      })).then(({\n        data\n      }) => {\n        setTimeout(() => {\n          this.tokenIsValid = false;\n        }, 1000 * data.expires_in);\n        this.tokenIsValid = true;\n        this.accessToken = data.access_token;\n        this.refreshToken = data.refresh_token;\n        this.grantedScopes = data.scope.split(' ');\n        res.redirect('auth');\n      }).catch(response => {\n        console.error(response);\n        res.json(response);\n      });\n    }\n  }\n\n  refreshAccessToken() {\n    return this.axiosTokenInstance.post('', _querystring.default.stringify({\n      grant_type: 'refresh_token',\n      refresh_token: this.refreshToken\n    })).then(({\n      data\n    }) => {\n      setTimeout(() => {\n        this.tokenIsValid = false;\n      }, 1000 * data.expires_in);\n      this.tokenIsValid = true;\n      this.accessToken = data.access_token;\n      this.grantedScopes = data.scope.split(' ');\n    }).catch(res => {\n      console.error(res);\n      res.end();\n    });\n  }\n\n  getRecentlyPlayed() {\n    return this.axiosPlayerInstance.get('/recently-played').then(({\n      data\n    }) => data);\n  }\n\n  getCurrentlyPlaying() {\n    return this.axiosPlayerInstance.get('/currently-playing').then(({\n      data\n    }) => data.items);\n  }\n\n}\n\nvar _default = SpotifyClient;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/spotify/SpotifyClient.ts?");

/***/ }),

/***/ "./server/src/services/spotify/controller.ts":
/*!***************************************************!*\
  !*** ./server/src/services/spotify/controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _SpotifyClient = _interopRequireDefault(__webpack_require__(/*! ./SpotifyClient */ \"./server/src/services/spotify/SpotifyClient.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express.default.Router();\n\nconst spotifyClient = new _SpotifyClient.default({\n  clientId: \"769eb6ccf74344d7908e65a1e7aa17e9\",\n  clientSecret: \"1d6a9566fb8d434683f8ecd945316b18\",\n  redirectUri: \"http://localhost:8000/spotify/callback\"\n});\nrouter.get('/auth', spotifyClient.authorize.bind(spotifyClient));\nrouter.get('/auth/callback', spotifyClient.authorizeCallback.bind(spotifyClient));\nrouter.get('/recently', async (_req, res) => {\n  const {\n    data\n  } = await spotifyClient.getRecentlyPlayed();\n  res.json(data);\n});\nrouter.get('/currently', async (_req, res) => {\n  const {\n    data\n  } = await spotifyClient.getCurrentlyPlaying();\n  res.json(data);\n});\nvar _default = router;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/spotify/controller.ts?");

/***/ }),

/***/ "./server/src/services/spotify/index.ts":
/*!**********************************************!*\
  !*** ./server/src/services/spotify/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _controller = _interopRequireDefault(__webpack_require__(/*! ./controller */ \"./server/src/services/spotify/controller.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = _controller.default;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/spotify/index.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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