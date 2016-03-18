/**
 * Copyright(c) rednpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */
var config = require('./config');

module.exports = function outputHelp(argv) {
  var helpInfo = 'Usage: rednpm [option] <command>\n' +
  '详细: http://npm.mirror.cqupt.edu.cn/\n\n' +
  '  扩展指令 \n' +
  '    web                            打开 rednpm 网站 (ex.: rednpm web)\n' +
  '    check [ingoreupdate]           检查依赖项, add ignoreupdate will not check modules\' latest version(ex.: rednpm check, rednpm check -i)\n' +
  '    doc [moduleName]               打开文档页 (ex.: rednpm doc urllib)\n' +
  '    sync [moduleName]              从源同步 module (ex.: rednpm sync urllib)\n' +
  '    user [username]                打开用户信息页 (ex.: rednpm user wssgcg1213)\n' +
  '\n' +
  '  npm command use --registry=' + (argv.registry || config.rednpmRegistry) + '\n' +
  '    where <command> is one of:\n' +
  '    add-user, adduser, apihelp, author, bin, bugs, c, cache,\n' +
  '    completion, config, ddp, dedupe, deprecate, docs, edit,\n' +
  '    explore, faq, find, find-dupes, get, help, help-search,\n' +
  '    home, i, info, init, install, isntall, la, link, list, ll,\n' +
  '    ln, login, ls, outdated, owner, pack, prefix, prune,\n' +
  '    publish, r, rb, rebuild, remove, restart, rm, root,\n' +
  '    run-script, s, se, search, set, show, shrinkwrap, star,\n' +
  '    start, stop, submodule, tag, test, tst, un, uninstall,\n' +
  '    unlink, unpublish, unstar, up, update, v, version, view,\n' +
  '    whoami\n' +

  '      npm <cmd> -h     quick help on <cmd>\n' +
  '      npm -l           display full usage info\n' +
  '      npm faq          commonly asked questions\n' +
  '      npm help <term>  search for help on <term>\n' +
  '      npm help npm     involved overview\n\n' +

  '      Specify configs in the ini-formatted file:\n' +
  '          ' + (argv.userconfig || config.userconfig) + '\n' +
  '      or on the command line via: npm <command> --key value\n' +
  '      Config info can be viewed via: npm help config\n\n' + 
  'rednpm is modified from cnpm v4.2.0';
  console.log(helpInfo);
  process.exit(0);
};
