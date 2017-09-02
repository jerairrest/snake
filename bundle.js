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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
  function Sprite(gameRegion, width, height) {
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "sprite";

    _classCallCheck(this, Sprite);

    this._gameRegion = gameRegion;
    this.className = className;

    this.width = width;
    this.height = height;
    this.coord = {
      x: 0,
      y: 0
    };

    this.el = null;
  }

  _createClass(Sprite, [{
    key: "redraw",
    value: function redraw() {
      this.el.style.top = this.coord.y + "px";
      this.el.style.left = this.coord.x + "px";
    }
  }, {
    key: "update",
    value: function update(coord) {
      var oldCoord = this.coord;

      this.coord = coord;

      return oldCoord;
    }
  }, {
    key: "createInDOM",
    value: function createInDOM(coord) {
      this.el = document.createElement("div");
      this.el.classList.add(this.className);

      this.setCoord(coord);
      this._gameRegion.appendChild(this.el);
      this.redraw();
    }
  }, {
    key: "destroyiInDOM",
    value: function destroyiInDOM() {
      this.el.remove();
    }
  }, {
    key: "willCollide",
    value: function willCollide(coord, dimensions) {
      var obj1 = {
        x: this.coord.x,
        y: this.coord.y,
        width: this.width / 2,
        height: this.height / 2
      };

      var obj2 = {
        x: coord.x,
        y: coord.y,
        width: dimensions.width / 2,
        height: dimensions.height / 2
      };

      return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.height + obj1.y > obj2.y;
    }
  }, {
    key: "setCoord",
    value: function setCoord(coord) {
      this.coord = _extends({}, coord);
    }
  }, {
    key: "getCoord",
    value: function getCoord() {
      return this.coord;
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppleFactory = __webpack_require__(2);

var _AppleFactory2 = _interopRequireDefault(_AppleFactory);

var _Snake = __webpack_require__(4);

var _Snake2 = _interopRequireDefault(_Snake);

var _GameController = __webpack_require__(6);

var _GameController2 = _interopRequireDefault(_GameController);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

{
  var gameController = new _GameController2.default();
  gameController.createGameArea();

  var appleFactory = new _AppleFactory2.default(gameController.getGameRegion());
  appleFactory.spawn(20);

  var snake = new _Snake2.default(gameController.getGameRegion());
  snake.createInitialSnake();

  gameController.addSnakeToController(snake);
  gameController.addAppleFactoryToController(appleFactory);

  gameController.run();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Apple = __webpack_require__(3);

var _Apple2 = _interopRequireDefault(_Apple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppleFactory = function () {
  function AppleFactory(gameRegion) {
    _classCallCheck(this, AppleFactory);

    this._gameRegion = gameRegion;
    this.apples = [];
  }

  _createClass(AppleFactory, [{
    key: "spawn",
    value: function spawn(numToSpawn) {
      for (var i = 0; i < numToSpawn; i++) {
        var apple = new _Apple2.default(this._gameRegion);
        apple.createInDOM(this.getRandomCoords());
        this.apples.push(apple);
      }
    }
  }, {
    key: "checkApplesForCollisions",
    value: function checkApplesForCollisions(coord, dimensions) {
      var hadCollision = false;
      for (var i = 0; i < this.apples.length; i++) {
        if (this.apples[i].willCollide(coord, dimensions)) {
          this.apples[i].destroyiInDOM();
          this.apples.splice(i, 1);
          hadCollision = true;
        }
      }

      return hadCollision;
    }
  }, {
    key: "getRandomCoords",
    value: function getRandomCoords(xOffset, yOffset) {
      return {
        x: this.randomizeCoordValue(this._gameRegion.offsetWidth),
        y: this.randomizeCoordValue(this._gameRegion.offsetHeight)
      };
    }
  }, {
    key: "randomizeCoordValue",
    value: function randomizeCoordValue(val) {
      return Math.floor(val * Math.random());
    }
  }]);

  return AppleFactory;
}();

exports.default = AppleFactory;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sprite2 = __webpack_require__(0);

var _Sprite3 = _interopRequireDefault(_Sprite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Apple = function (_Sprite) {
  _inherits(Apple, _Sprite);

  function Apple(gameRegion) {
    _classCallCheck(this, Apple);

    return _possibleConstructorReturn(this, (Apple.__proto__ || Object.getPrototypeOf(Apple)).call(this, gameRegion, 50, 50, "apple"));
  }

  return Apple;
}(_Sprite3.default);

exports.default = Apple;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sprite = __webpack_require__(0);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _SnakeSegment = __webpack_require__(5);

var _SnakeSegment2 = _interopRequireDefault(_SnakeSegment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
  function Snake(gameRegion) {
    var _this = this;

    _classCallCheck(this, Snake);

    this._gameRegion = gameRegion;
    this.xVector = 1;
    this.yVector = 0;
    this.speed = 0.2;

    document.addEventListener("keyup", function (e) {
      switch (e.code) {
        case "ArrowUp":
          _this.setVectors(0, -1);
          break;
        case "ArrowDown":
          _this.setVectors(0, 1);
          break;
        case "ArrowLeft":
          _this.setVectors(-1, 0);
          break;
        case "ArrowRight":
          _this.setVectors(1, 0);
          break;
      }
    });

    this.snakeSegments = [];
  }

  _createClass(Snake, [{
    key: "update",
    value: function update(delta) {
      var updatedHeadCoord = this.getHeadCoord(delta, this.snakeSegments[0].getCoord());

      var nexSegment = this.snakeSegments[0].update(updatedHeadCoord);
      for (var i = 1; i < this.snakeSegments.length; i++) {
        nexSegment = this.snakeSegments[i].update(nexSegment);
      }

      return updatedHeadCoord;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      for (var i = 0; i < this.snakeSegments.length; i++) {
        this.snakeSegments[i].redraw();
      }
    }
  }, {
    key: "getHeadCoord",
    value: function getHeadCoord(delta, coord) {
      var xDiff = delta * this.xVector * this.speed;
      var yDiff = delta * this.yVector * this.speed;

      return {
        x: coord.x + xDiff,
        y: coord.y + yDiff
      };
    }
  }, {
    key: "getHeadDimensions",
    value: function getHeadDimensions() {
      return this.snakeSegments[0].getDimensions();
    }
  }, {
    key: "setVectors",
    value: function setVectors(x, y) {
      this.xVector = x;
      this.yVector = y;
    }
  }, {
    key: "createInitialSnake",
    value: function createInitialSnake() {
      for (var i = 0; i < 20; i++) {
        this.addSegment({ x: 200 - i * 20, y: 200 });
      }
    }
  }, {
    key: "enlargeAndIncreaseSpeed",
    value: function enlargeAndIncreaseSpeed() {
      var lastCoord = this.snakeSegments[this.snakeSegments.length - 1].getCoord();

      var newX = lastCoord.x;
      var newY = lastCoord.y;

      for (var i = 0; i < 20; i++) {
        this.addSegment({ x: newX, y: newY });
      }

      this.speed = this.speed + this.speed / 10;
    }
  }, {
    key: "addSegment",
    value: function addSegment(coord) {
      var segment = new _SnakeSegment2.default(this._gameRegion);
      segment.createInDOM(coord);
      this.snakeSegments.push(segment);
    }
  }]);

  return Snake;
}();

exports.default = Snake;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sprite2 = __webpack_require__(0);

var _Sprite3 = _interopRequireDefault(_Sprite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnakeSegment = function (_Sprite) {
  _inherits(SnakeSegment, _Sprite);

  function SnakeSegment(gameRegion) {
    _classCallCheck(this, SnakeSegment);

    return _possibleConstructorReturn(this, (SnakeSegment.__proto__ || Object.getPrototypeOf(SnakeSegment)).call(this, gameRegion, 50, 50, "snake"));
  }

  return SnakeSegment;
}(_Sprite3.default);

exports.default = SnakeSegment;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameController = function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.fps = 60;
    this.maxFPS = 60;

    this.lastFrameTimeMs = 0;
    this.lastFpsUpdate = 0;
    this.framesThisSecond = 0;
    this.delta = 0;
    this.timestep = 1000 / 60;

    this.gameRegion = null;
    this.snake = null;
    this.appleFactory = null;
  }

  _createClass(GameController, [{
    key: "addSnakeToController",
    value: function addSnakeToController(snake) {
      this.snake = snake;
    }
  }, {
    key: "addAppleFactoryToController",
    value: function addAppleFactoryToController(appleFactory) {
      this.appleFactory = appleFactory;
    }
  }, {
    key: "createGameArea",
    value: function createGameArea() {
      this.gameRegion = document.createElement("div");
      this.gameRegion.id = "app";
      document.body.insertBefore(this.gameRegion, document.body.firstChild);
    }
  }, {
    key: "getGameRegion",
    value: function getGameRegion() {
      return this.gameRegion;
    }
  }, {
    key: "getMainLoop",
    value: function getMainLoop() {
      return this.mainLoop.bind(this);
    }
  }, {
    key: "run",
    value: function run() {
      requestAnimationFrame(this.getMainLoop());
    }

    /**
     * Main event loop that runs the animation based upon the blog post: 
     * http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
     */

  }, {
    key: "mainLoop",
    value: function mainLoop(timestamp) {
      if (timestamp < this.lastFrameTimeMs + 1000 / this.maxFPS) {
        requestAnimationFrame(this.mainLoop.bind(this));
        return;
      }
      this.delta += timestamp - this.lastFrameTimeMs;
      this.lastFrameTimeMs = timestamp;

      if (timestamp > this.lastFpsUpdate + 1000) {
        this.fps = 0.25 * this.framesThisSecond + 0.75 * this.fps;

        this.lastFpsUpdate = timestamp;
        this.framesThisSecond = 0;
      }
      this.framesThisSecond++;

      while (this.delta >= this.timestep) {
        //Main update loop
        var headCoord = this.snake.update(this.timestep);
        var hadCollision = this.appleFactory.checkApplesForCollisions(headCoord, this.snake.getHeadDimensions());

        if (hadCollision) {
          this.snake.enlargeAndIncreaseSpeed();
        }

        this.delta -= this.timestep;
      }

      //Redraw the entire snake
      this.snake.redraw();

      requestAnimationFrame(this.mainLoop.bind(this));
    }
  }]);

  return GameController;
}();

exports.default = GameController;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);