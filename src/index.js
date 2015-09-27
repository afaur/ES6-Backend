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
function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  console.log('a');
  await sleep(1000);
  console.log('b');
})();


// Importing modules
import {Coolness as Yo} from './modules/testModule.js';

let a = new Yo 

a.modFunc();


// Using generators
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let n of range(1,5)) {
  console.log(n);
}


// Require some node modules
var glob = require('glob');
var diskspace = require('diskspace');


// Creating classes
class Platform {

  constructor() {
    if (/^win/.test(process.platform)) {
      this.platform = "windows";
    } else {
      this.platform = "posix_compliant";
    }
  }

}

class FilesFinder extends Platform {

  constructor(loc="D", ext="pes") {
    super();
    this.ext = ext;
    this.loc = loc;
  }

  find_files() {
    if (this.platform === "windows") {
      glob(
          this.loc + ":\**/*." + this.ext,
          {},
          function (er, files) {
            console.log(files);
          }
      );
    } else {
      glob(
          this.loc + "/**/*." + this.ext,
          {},
          function (er, files) {
            console.log(files);
          }
      );
    }
  }

}

var filesFinder = new FilesFinder("./src", "js");

filesFinder.find_files();
