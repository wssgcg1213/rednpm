/**
 * Copyright(c) rednpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var spawn = require('cross-spawn');
var should = require('should');
var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var rednpm = path.join(__dirname, '..', 'bin', 'rednpm');
var fixtures = path.join(__dirname, 'fixtures');
var cwd = path.join(fixtures, 'foo');

var RUN_ON_CI = process.env.CI || process.env.CI;

function run(args, callback) {
  return spawn('node', args, {
    cwd: cwd,
  }).on('exit', callback);
}

describe('rednpm.test.js', function () {
  after(function() {
    fse.removeSync(path.join(cwd, 'node_modules'));
  });

  it('should show all rednpm config', function (done) {
    var args = [
      rednpm,
      'config',
      'ls',
      '-l'
    ];
    var stdout = '';
    var child = spawn('node', args).on('exit', function (code) {
      code.should.equal(0);
      done();
    });
    child.stdout.pipe(process.stdout);
  });

  it('should user custom registry in userconf', function (done) {
    var args = [
      rednpm,
      '--userconfig=' + path.join(fixtures, 'userconf'),
    ];
    var stdout = '';
    var child = spawn('node', args).on('exit', function (code) {
      stdout.should.containEql('npm command use --registry=http://127.0.0.1/registry');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });

  it('should --help user custom registry in userconf', function (done) {
    var args = [
      rednpm,
      '--help',
      '--userconfig=' + path.join(fixtures, 'userconf'),
    ];
    var stdout = '';
    var child = run(args, function (code) {
      stdout.should.containEql('npm command use --registry=http://127.0.0.1/registry');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });

  it('should user default registry in userconf dont contain registry', function (done) {
    var args = [
      rednpm,
      '--userconfig=' + path.join(fixtures, 'userconf-no-registry'),
    ];
    var stdout = '';
    var child = run(args, function (code) {
      stdout.should.containEql('npm command use --registry=https://registry.mirror.cqupt.edu.cn');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });

  it('should install pedding', function (done) {
    var args = [
      rednpm,
      'install',
      'pedding',
    ];
    if (RUN_ON_CI) {
      args.push('--registry=https://registry.npmjs.org');
      args.push('--disturl=none');
      args.push('--userconfig=none');
    }
    run(args, function (code) {
      code.should.equal(0);
      done();
    });
  });


  it('should install rednpm', function (done) {
    var args = [
      rednpm,
      'install',
      'rednpm',
    ];
    if (RUN_ON_CI) {
      args.push('--registry=https://registry.npmjs.org');
      args.push('--disturl=none');
      args.push('--userconfig=none');
    }
    run(args, function (code) {
      code.should.equal(0);
      done();
    });
  });

  it('should install npm', function (done) {
    var args = [
      rednpm,
      'install',
      'npm',
    ];
    if (RUN_ON_CI) {
      args.push('--registry=https://registry.npmjs.org');
      args.push('--disturl=none');
      args.push('--userconfig=none');
    }
    run(args, function (code) {
      code.should.equal(0);
      done();
    });
  });

  it('should install and pre-build cpp module', function (done) {
    var args = [
      rednpm,
      'install',
      'node-murmurhash',
    ];
    if (RUN_ON_CI) {
      args.push('--registry=https://registry.npmjs.org');
      args.push('--disturl=none');
      args.push('--userconfig=none');
    }
    var child = run(args, function (code) {
      code.should.equal(0);
      done();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });

  // WTF? TRAVIS download from taobao npm is too slow! skip this!
  if (!RUN_ON_CI) {
    it('should install node-sass from mirror', function (done) {
      var args = [
        rednpm,
        'install',
        'node-sass',
      ];
      if (RUN_ON_CI) {
        args.push('--registry=https://registry.npmjs.org');
        args.push('--disturl=none');
        args.push('--userconfig=none');
      }
      var child = run(args, function (code) {
        code.should.equal(0);
        fs.existsSync(path.join(cwd, 'node_modules/node-sass'));
        done();
      });
      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);
    });
  }
});
