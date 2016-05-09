/**
 * Copyright(c) rednpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var fs = require('fs');
var program = require('commander');

var root;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE || process.env.APPDATA || process.env.TMP || process.env.TEMP;
} else {
  root = process.env.HOME || process.env.TMPDIR || '/tmp';
}

var config = module.exports = {
  rednpmHost: 'https://npm.mirror.cqupt.edu.cn',
  rednpmRegistry: 'https://registry.mirror.cqupt.edu.cn',
  disturl: 'https://npm.mirror.cqupt.edu.cn/dist/node', // download dist tarball for node-gyp
  iojsDisturl: 'https://npm.mirror.cqupt.edu.cn/dist/iojs',
  cache: path.join(root, '.rednpm'),  //cache folder name
  userconfig: path.join(root, '.rednpmrc'),
  proxy: '',
};
