'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Test = (function () {
  function Test(a) {
    _classCallCheck(this, Test);

    this.a = a;
  }

  _createClass(Test, [{
    key: 'modFunc',
    value: function modFunc() {
      console.log('just mucking around');
    }
  }]);

  return Test;
})();

exports.Coolness = Test;