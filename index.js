var repl = require('repl');
var debug = require('debuglog');
var vm = require('vm');
var babel = require('babel-core');

/*
* default eval method from node source
* lib/repl.js
*/

module.exports.defaultEval = function (code, context, file, cb) {
  var err, result;
  // first, create the Script object to check the syntax
  try {
    var script = vm.createScript(code, {
      filename: file,
      displayErrors: false
    });
  } catch (e) {
    err = e;
    debug('parse error %j', code, e);
  }

  if (!err) {
    try {
      if (this.useGlobal) {
        result = script.runInThisContext({ displayErrors: false });
      } else {
        result = script.runInContext(context, { displayErrors: false });
      }
    } catch (e) {
      err = e;
      if (err && process.domain) {
        debug('not recoverable, send to domain');
        process.domain.emit('error', err);
        process.domain.exit();
        return;
      }
    }
  }

  cb(err, result);
}

/*
* start babel repl
*/

module.exports.start = function (options) {
  var defaults = {
    prompt: "> ",
    userGlobal: true,
    eval: function (code, context, file, cb) {
      code = babel.transform(code).code;
      module.exports.defaultEval.call(this, code, context, file, cb);
    }
  };

  options = options || {};

  for (var k in defaults) {
    if (!(k in options)) options[k] = defaults[k];
  }

  return repl.start(options);
};
