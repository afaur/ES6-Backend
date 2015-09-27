// Add support for generators to compiled ES5 code.
//require('./gen_support/regen');
//require("babel").transform("code", { optional: ["es6.spec.symbols", "regenerator"] });
/*
function sleep(millis) {
  var deferredResult = Q.defer();
  setTimeout(function() {
    deferredResult.resolve();
  }, millis);
  return deferredResult.promise;
};
*/

// ES7, async/await
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _this = this;

var marked0$0 = [range].map(_regeneratorRuntime.mark);

// Importing modules

var _modulesTestModuleJs = require('./modules/testModule.js');

function sleep() {
  var ms = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  return new _Promise(function (r) {
    return setTimeout(r, ms);
  });
}

(function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log('a');
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(sleep(1000));

      case 3:
        console.log('b');

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
})();

var a = new _modulesTestModuleJs.Coolness();

a.modFunc();

// Using generators
function range(start, end) {
  var i;
  return _regeneratorRuntime.wrap(function range$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = start;

      case 1:
        if (!(i <= end)) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 4;
        return i;

      case 4:
        i++;
        context$1$0.next = 1;
        break;

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _getIterator(range(1, 5)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    console.log(n);
  }

  // Require some node modules
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var glob = require('glob');
var diskspace = require('diskspace');

// Creating classes

var Platform = function Platform() {
  _classCallCheck(this, Platform);

  if (/^win/.test(process.platform)) {
    this.platform = "windows";
  } else {
    this.platform = "posix_compliant";
  }
};

var FilesFinder = (function (_Platform) {
  _inherits(FilesFinder, _Platform);

  function FilesFinder() {
    var loc = arguments.length <= 0 || arguments[0] === undefined ? "D" : arguments[0];
    var ext = arguments.length <= 1 || arguments[1] === undefined ? "pes" : arguments[1];

    _classCallCheck(this, FilesFinder);

    _get(Object.getPrototypeOf(FilesFinder.prototype), 'constructor', this).call(this);
    this.ext = ext;
    this.loc = loc;
  }

  _createClass(FilesFinder, [{
    key: 'find_files',
    value: function find_files() {
      if (this.platform === "windows") {
        glob(this.loc + ":\**/*." + this.ext, {}, function (er, files) {
          console.log(files);
        });
      } else {
        glob(this.loc + "/**/*." + this.ext, {}, function (er, files) {
          console.log(files);
        });
      }
    }
  }]);

  return FilesFinder;
})(Platform);

var filesFinder = new FilesFinder("./src", "js");

filesFinder.find_files();