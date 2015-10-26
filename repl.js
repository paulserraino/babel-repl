#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');

if (argv.v || argv.version) {
  console.log(pkg.version);
} else {
  require('./').start();
}
