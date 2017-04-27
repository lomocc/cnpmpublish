#!/usr/bin/env node

var process = require('child_process');
//直接调用命令
process.exec('npm config set registry http://registry.npmjs.org && npm publish && npm config set registry https://registry.npm.taobao.org', function(error, stdout, stderr) {
    if (error !== null) {
        console.log('[error]' + error);
    }else {
        console.log('[success]' + stdout);
    }
});