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

/***/ "./server/src/app/App.ts":
/*!*******************************!*\
  !*** ./server/src/app/App.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass App {\n  constructor(router, errorHandler, middlewares, publicFolder) {\n    _defineProperty(this, \"app\", void 0);\n\n    _defineProperty(this, \"router\", void 0);\n\n    _defineProperty(this, \"errorHandler\", void 0);\n\n    _defineProperty(this, \"middlewares\", void 0);\n\n    _defineProperty(this, \"publicFolder\", void 0);\n\n    this.app = (0, _express.default)();\n    this.router = router;\n    this.errorHandler = errorHandler;\n    this.middlewares = middlewares;\n    this.publicFolder = publicFolder;\n    if (middlewares) this.initializeMiddlewares();\n    if (router) this.initializeRouter();\n    if (errorHandler) this.initializeErrorHandler();\n  }\n\n  listen(port) {\n    this.app.listen(port, () => console.log(`Server is listening on port ${port}`));\n  }\n\n  initializeRouter() {\n    this.app.use(this.router);\n  }\n\n  initializeErrorHandler() {\n    this.app.use(this.errorHandler);\n  }\n\n  initializeMiddlewares() {\n    if (this.publicFolder) this.app.use(_express.default.static(this.publicFolder));\n    this.middlewares.forEach(middleware => {\n      this.app.use(middleware);\n    });\n  }\n\n}\n\nexports.default = App;\n\n//# sourceURL=webpack:///./server/src/app/App.ts?");

/***/ }),

/***/ "./server/src/app/index.ts":
/*!*********************************!*\
  !*** ./server/src/app/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ \"./server/src/app/App.ts\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../router */ \"./server/src/router/index.ts\"));\n\nvar _middleware = _interopRequireWildcard(__webpack_require__(/*! ../middleware */ \"./server/src/middleware/index.ts\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst publicFolder = _path.default.resolve('client', 'build');\n\n_router.default.get('/auth', (_req, res) => {\n  res.sendFile(_path.default.resolve('client', 'public', 'auth.html'));\n});\n\n_router.default.get('/', (_req, res) => {\n  res.sendFile(_path.default.resolve('client', 'build', 'index.html'));\n});\n\nconst app = new _App.default(_router.default, _middleware.errorHandler, _middleware.default, publicFolder);\nvar _default = app;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/app/index.ts?");

/***/ }),

/***/ "./server/src/errors/HttpException.ts":
/*!********************************************!*\
  !*** ./server/src/errors/HttpException.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass HttpException extends Error {\n  constructor(status, message) {\n    super(message);\n\n    _defineProperty(this, \"status\", void 0);\n\n    _defineProperty(this, \"message\", void 0);\n\n    this.status = status;\n    this.message = message;\n  }\n\n}\n\nexports.default = HttpException;\n\n//# sourceURL=webpack:///./server/src/errors/HttpException.ts?");

/***/ }),

/***/ "./server/src/errors/index.ts":
/*!************************************!*\
  !*** ./server/src/errors/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"HttpException\", {\n  enumerable: true,\n  get: function () {\n    return _HttpException.default;\n  }\n});\n\nvar _HttpException = _interopRequireDefault(__webpack_require__(/*! ./HttpException */ \"./server/src/errors/HttpException.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./server/src/errors/index.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app */ \"./server/src/app/index.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_app.default.listen(process.env.PORT || 8000);\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "./server/src/middleware/error-handler/index.ts":
/*!******************************************************!*\
  !*** ./server/src/middleware/error-handler/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = errorHandler;\n\nfunction errorHandler(err, req, res, next) {\n  console.error(err);\n  res.status(err.status || 500).json(err.message || 'Unknown server issue.');\n}\n\n//# sourceURL=webpack:///./server/src/middleware/error-handler/index.ts?");

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

/***/ "./server/src/router/index.ts":
/*!************************************!*\
  !*** ./server/src/router/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _makeRouter = _interopRequireDefault(__webpack_require__(/*! ./makeRouter */ \"./server/src/router/makeRouter.ts\"));\n\nvar _services = _interopRequireDefault(__webpack_require__(/*! ../services */ \"./server/src/services/index.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = (0, _makeRouter.default)(_services.default);\nvar _default = router;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/router/index.ts?");

/***/ }),

/***/ "./server/src/router/makeRouter.ts":
/*!*****************************************!*\
  !*** ./server/src/router/makeRouter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = makeRouter;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nfunction makeRouter(routes) {\n  const router = (0, _express.Router)();\n  routes.forEach(({\n    path,\n    handler\n  }) => {\n    router.use(path, handler);\n  });\n  return router;\n}\n\n//# sourceURL=webpack:///./server/src/router/makeRouter.ts?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ \"querystring\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar _errors = __webpack_require__(/*! ../../errors */ \"./server/src/errors/index.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass SpotifyError extends _errors.HttpException {\n  constructor(status, message) {\n    super(status, message);\n    this.status = status;\n    this.message = message;\n  }\n\n}\n\nclass SpotifyClient {\n  constructor(credentials) {\n    _defineProperty(this, \"clientId\", void 0);\n\n    _defineProperty(this, \"clientSecret\", void 0);\n\n    _defineProperty(this, \"encodedCredentials\", void 0);\n\n    _defineProperty(this, \"redirectUri\", void 0);\n\n    _defineProperty(this, \"state\", void 0);\n\n    _defineProperty(this, \"refreshToken\", void 0);\n\n    _defineProperty(this, \"axiosTokenInstance\", void 0);\n\n    _defineProperty(this, \"accessToken\", void 0);\n\n    _defineProperty(this, \"tokenIsValid\", void 0);\n\n    _defineProperty(this, \"grantedScopes\", void 0);\n\n    this.clientId = credentials.clientId;\n    this.clientSecret = credentials.clientSecret;\n    this.redirectUri = credentials.redirectUri;\n    this.encodedCredentials = Buffer.from(this.clientId + ':' + this.clientSecret).toString('base64');\n    this.axiosTokenInstance = _axios.default.create({\n      baseURL: 'https://accounts.spotify.com/api/token',\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        Authorization: `Basic ${this.encodedCredentials}`\n      }\n    });\n  }\n\n  authorize(_req, res) {\n    this.state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n\n    const query = _querystring.default.stringify({\n      client_id: this.clientId,\n      response_type: 'code',\n      redirect_uri: this.redirectUri,\n      state: this.state,\n      scope: 'playlist-read-collaborative%20user-read-currently-playing%20user-read-recently-played'\n    });\n\n    res.redirect('https://accounts.spotify.com/authorize?' + query);\n  }\n\n  authorizeCallback(req, res, next) {\n    const {\n      query\n    } = req;\n\n    if (query.state !== this.state) {\n      next(new SpotifyError(401, 'Invalid state parameter provided.'));\n    }\n\n    if (query.error) {\n      next(query.error);\n    }\n\n    if (query.code) {\n      return this.axiosTokenInstance.post('', _querystring.default.stringify({\n        grant_type: 'authorization_code',\n        code: query.code,\n        redirect_uri: this.redirectUri\n      })).then(({\n        data\n      }) => {\n        setTimeout(() => {\n          this.tokenIsValid = false;\n        }, 1000 * data.expires_in);\n        this.tokenIsValid = true;\n        this.accessToken = data.access_token;\n        this.refreshToken = data.refresh_token;\n        this.grantedScopes = data.scope.split(' ');\n        next();\n      }).catch(response => {\n        next(new SpotifyError(response.status, 'Authorization failed.'));\n      });\n    }\n  }\n\n  refreshAccessToken() {\n    return this.axiosTokenInstance.post('', _querystring.default.stringify({\n      grant_type: 'refresh_token',\n      refresh_token: this.refreshToken\n    })).then(({\n      data\n    }) => {\n      setTimeout(() => {\n        this.tokenIsValid = false;\n      }, 1000 * data.expires_in);\n      this.tokenIsValid = true;\n      this.accessToken = data.access_token;\n      this.grantedScopes = data.scope.split(' ');\n    }).catch(response => {\n      throw new SpotifyError(response.status, 'Refreshing token failed.');\n    });\n  }\n\n}\n\nvar _default = SpotifyClient;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/spotify/SpotifyClient.ts?");

/***/ }),

/***/ "./server/src/services/spotify/getSpotifyResource.ts":
/*!***********************************************************!*\
  !*** ./server/src/services/spotify/getSpotifyResource.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getPlayerResource;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar _errors = __webpack_require__(/*! ../../errors */ \"./server/src/errors/index.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getPlayerResource(resourceEndpoint, accessToken) {\n  const axiosSpotifyInstance = _axios.default.create({\n    baseURL: 'https://api.spotify.com/v1/me',\n    headers: {\n      Authorization: `Bearer ${accessToken}`\n    }\n  });\n\n  return axiosSpotifyInstance.get(resourceEndpoint).then(({\n    data\n  }) => data).catch(err => {\n    throw new _errors.HttpException(err.status, err.message);\n  });\n}\n\n//# sourceURL=webpack:///./server/src/services/spotify/getSpotifyResource.ts?");

/***/ }),

/***/ "./server/src/services/spotify/index.ts":
/*!**********************************************!*\
  !*** ./server/src/services/spotify/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _spotifyService = _interopRequireDefault(__webpack_require__(/*! ./spotifyService */ \"./server/src/services/spotify/spotifyService.ts\"));\n\nvar _SpotifyClient = _interopRequireDefault(__webpack_require__(/*! ./SpotifyClient */ \"./server/src/services/spotify/SpotifyClient.ts\"));\n\nvar _getSpotifyResource = _interopRequireDefault(__webpack_require__(/*! ./getSpotifyResource */ \"./server/src/services/spotify/getSpotifyResource.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst spotifyClient = new _SpotifyClient.default({\n  clientId: \"769eb6ccf74344d7908e65a1e7aa17e9\",\n  clientSecret: \"1d6a9566fb8d434683f8ecd945316b18\",\n  redirectUri: \"http://localhost:8000/spotify/auth/callback\"\n});\nconst spotifyService = (0, _spotifyService.default)(spotifyClient, _getSpotifyResource.default, [\"storchillarn\"]);\nvar _default = spotifyService;\nexports.default = _default;\n\n//# sourceURL=webpack:///./server/src/services/spotify/index.ts?");

/***/ }),

/***/ "./server/src/services/spotify/spotifyService.ts":
/*!*******************************************************!*\
  !*** ./server/src/services/spotify/spotifyService.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _errors = __webpack_require__(/*! ../../errors */ \"./server/src/errors/index.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction makeSpotifyService(spotifyClient, spotifyResourceRequester, allowedUsers) {\n  const router = (0, _express.Router)();\n  router.get('/auth', spotifyClient.authorize.bind(spotifyClient));\n  router.get('/auth/callback', spotifyClient.authorizeCallback.bind(spotifyClient), async (_req, res, next) => {\n    if (allowedUsers.length) {\n      const userData = await spotifyResourceRequester('', spotifyClient.accessToken);\n\n      if (!allowedUsers.includes(userData.id)) {\n        return next(new _errors.HttpException(401, 'User id blocked.'));\n      }\n    }\n\n    res.redirect(_path.default.resolve(__dirname, 'auth'));\n  });\n  router.all('/api/*', async (_req, _res, next) => {\n    if (!spotifyClient.accessToken) {\n      return next(new _errors.HttpException(401, 'Access token missing.'));\n    }\n\n    if (!spotifyClient.tokenIsValid) {\n      try {\n        await spotifyClient.refreshAccessToken();\n        next();\n      } catch (err) {\n        next(err);\n      }\n    }\n\n    if (spotifyClient.tokenIsValid) {\n      next();\n    }\n  });\n  router.get('/api/user', async (_req, res, next) => {\n    try {\n      const data = await spotifyResourceRequester('', spotifyClient.accessToken);\n      res.json(data);\n    } catch (err) {\n      next(err);\n    }\n  });\n  router.get('/api/recently-played', async (_req, res, next) => {\n    try {\n      const data = await spotifyResourceRequester('/player/recently-played', spotifyClient.accessToken);\n      res.json(data);\n    } catch (err) {\n      next(err);\n    }\n  });\n  router.get('/api/currently-playing', async (_req, res, next) => {\n    try {\n      const data = await spotifyResourceRequester('/player/currently-playing', spotifyClient.accessToken);\n      res.json(data);\n    } catch (err) {\n      next(err);\n    }\n  });\n  router.get('/api/playlists', async (_req, res, next) => {\n    try {\n      const data = await spotifyResourceRequester('/playlists', spotifyClient.accessToken);\n      res.json(data);\n    } catch (err) {\n      next(err);\n    }\n  });\n  return router;\n}\n\nvar _default = makeSpotifyService;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/src/services/spotify/spotifyService.ts?");

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